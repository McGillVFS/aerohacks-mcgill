const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const supabaseTableUrl = supabaseUrl ? `${supabaseUrl}/rest/v1/pre_registrations` : null;

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

  if (!supabaseUrl || !supabaseServiceRoleKey) {
    respond(res, 500, { error: "Supabase backend is not configured" });
    return;
  }

  const body = parseBody(req);
  const {
    first_name,
    last_name,
    email,
    mlh_code_of_conduct,
    mlh_privacy_policy,
    mlh_emails
  } = body ?? {};

  if (
    !first_name?.trim() ||
    !last_name?.trim() ||
    !email?.trim() ||
    !mlh_code_of_conduct ||
    !mlh_privacy_policy
  ) {
    respond(res, 400, { error: "Missing required registration fields" });
    return;
  }

  const sanitizedPayload = {
    first_name: String(first_name).trim(),
    last_name: String(last_name).trim(),
    email: String(email).trim().toLowerCase(),
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
      const errorText = await response.text();
      respond(res, 500, { error: "Failed to save registration", details: errorText });
      return;
    }

    respond(res, 200, { success: true });
  } catch (error) {
    respond(res, 500, { error: "Unexpected server error" });
    console.error("Supabase registration error", error);
  }
}
