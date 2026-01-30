const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabaseTableUrl = supabaseUrl ? `${supabaseUrl}/rest/v1/registrations` : null;

const allowHeaders = [
  "Content-Type",
  "Accept",
  "Accept-Version",
  "Authorization",
  "Prefer"
];

function respond(res, status, payload) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(payload));
}

function parseBody(req) {
  if (!req.body) return {};
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }
  return req.body;
}

/**
 * @param {import("http").IncomingMessage & { body?: unknown }} req
 * @param {import("http").ServerResponse} res
 */
export default async function handler(req = {}, res = {}) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", allowHeaders.join(","));
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    respond(res, 405, { error: "Method Not Allowed" });
    return;
  }

  if (!supabaseUrl || !supabaseServiceRoleKey || !supabaseTableUrl) {
    respond(res, 500, { error: "Supabase backend is not configured" });
    return;
  }

  const body = parseBody(req);
  const {
    first_name,
    last_name,
    email,
    phone_number,
    age_group,
    school,
    school_other,
    mcgill_email,
    mcgill_student_id,
    discord_username,
    mlh_code_of_conduct,
    mlh_privacy_policy,
    mlh_emails
  } = body ?? {};

  const mcgillEmailRegex = /@(mcgill\.ca|mail\.mcgill\.ca)$/i;
  const discordRegex = /^[a-z0-9._]{2,32}$/;
  const trimmed = (value) => (typeof value === "string" ? value.trim() : "");

  const normalizedSchool = trimmed(school);
  const normalizedDiscord = trimmed(discord_username);
  const normalizedMcgillEmail = trimmed(mcgill_email);
  const normalizedSchoolOther = trimmed(school_other);

  if (
    !trimmed(first_name) ||
    !trimmed(last_name) ||
    !trimmed(email) ||
    !trimmed(phone_number) ||
    !trimmed(age_group) ||
    !normalizedSchool ||
    !mlh_code_of_conduct ||
    !mlh_privacy_policy
  ) {
    respond(res, 400, { error: "Missing required registration fields" });
    return;
  }

  if (normalizedSchool === "Other" && !normalizedSchoolOther) {
    respond(res, 400, { error: "Please provide your school name." });
    return;
  }

  if (normalizedSchool === "McGill University") {
    if (!normalizedMcgillEmail) {
      respond(res, 400, { error: "McGill email is required for McGill students." });
      return;
    }

    if (!mcgillEmailRegex.test(normalizedMcgillEmail)) {
      respond(res, 400, { error: "McGill email must end with @mcgill.ca or @mail.mcgill.ca." });
      return;
    }
  }

  if (normalizedDiscord && !discordRegex.test(normalizedDiscord)) {
    respond(res, 400, { error: "Discord username must be 2-32 characters and contain only lowercase letters, numbers, dots, or underscores." });
    return;
  }

  const sanitizedPayload = {
    first_name: trimmed(first_name),
    last_name: trimmed(last_name),
    email: trimmed(email).toLowerCase(),
    phone_number: trimmed(phone_number),
    age_group: trimmed(age_group),
    school: normalizedSchool,
    school_other: normalizedSchool === "Other" ? normalizedSchoolOther : null,
    mcgill_email: normalizedSchool === "McGill University" ? normalizedMcgillEmail.toLowerCase() : null,
    mcgill_student_id: normalizedSchool === "McGill University" ? trimmed(mcgill_student_id) || null : null,
    discord_username: normalizedDiscord || null,
    mlh_code_of_conduct: Boolean(mlh_code_of_conduct),
    mlh_privacy_policy: Boolean(mlh_privacy_policy),
    mlh_emails: Boolean(mlh_emails ?? false)
  };

  try {
    const response = await fetch(supabaseTableUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: supabaseServiceRoleKey,
        Authorization: `Bearer ${supabaseServiceRoleKey}`,
        Prefer: "return=representation"
      },
      body: JSON.stringify(sanitizedPayload)
    });

    if (!response.ok) {
      const isConflict = response.status === 409;
      const errorText = await response.text();
      const errorMessage = isConflict
        ? "This email is already registered."
        : "Failed to save registration";

      respond(res, isConflict ? 409 : 500, { error: errorMessage, details: errorText });
      return;
    }

    respond(res, 200, { success: true });
  } catch (error) {
    respond(res, 500, { error: "Unexpected server error" });
    console.error("Supabase registration error", error);
  }
}
