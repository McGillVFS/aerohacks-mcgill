import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)

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

/*function sendEmail(firstname, lastname, email) {
  await fetch(`${process.env.SUPABASE_URL}/functions/v1/send-email`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${supabaseServiceRoleKey}`
  },
  body: JSON.stringify({
    to: email,
    subject: "Welcome to Aerohacks!!",
    html: emailHTML(...)
  })
});
 
}*/

async function sendEmailReg(first, email) {
  const { data, error } = await supabase.functions.invoke('send-email', {
    body: { 
      name: 'Functions',
      to: email,
      subject: `Welcome to Aerohacks ${first}!`,
      html: generateRegEmailHTML(first)
    },
  })
}

const generateRegEmailHTML = (first) => {
  ```
  <!DOCTYPE html>

  <html>
    <head>
      <meta charset="UTF-8">
    </head>

    <body style="margin:0; padding:0; background-color:#000000; font-family:Arial, Helvetica, sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#000000; padding:32px 0;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color:#000000; padding:32px; color:#ffffff;">

          <!-- Logo -->
          <tr>
            <td align="center" style="padding-bottom:28px;">
              <img 
                src="https://fqbmztbicnxbmhbgncie.supabase.co/storage/v1/object/public/mcgillaerohacks/aerohackslogo.png"
                alt="McGill AeroHacks 2026"
                width="220"
                style="display:block; border:0; outline:none;"
              />
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="font-size:16px; line-height:1.65; color:#eaeaea;">
              <p>Hi ${first},</p>

              <p>
                Thank you for registering for <strong>McGill AeroHacks 2026</strong>,
                happening <strong>Friday, March 13 to Sunday, March 15</strong>.
                We’re excited to have you join us for our inaugural hackathon and
                have a jam-packed weekend in store for you.
              </p>

              <p>
                Our <strong>Discord server</strong> is the primary hub for all event communication,
                including announcements, team formation, schedules, and day-of logistics.
              </p>
            </td>
          </tr>

          <!-- Discord Button -->
          <tr>
            <td align="center" style="padding:28px 0;">
              <a 
                href="https://discord.gg/254hejcdms"
                style="
                  background-color:#0b1cff;
                  color:#ffffff;
                  text-decoration:none;
                  padding:14px 26px;
                  border-radius:4px;
                  font-weight:bold;
                  font-size:15px;
                  display:inline-block;
                "
              >
                Join the Discord
              </a>
            </td>
          </tr>

          <!-- Info -->
          <tr>
            <td style="font-size:15px; line-height:1.6; color:#d6d6d6;">
              <p>
                More details - including the full schedule, workshops, and what to bring -
                will be shared closer to the event via <strong>Discord and email</strong>.
              </p>

              <p>
                If you have any questions in the meantime or need to update your registration
                details, feel free to contact us at
                <a href="mailto:aerialdesign@mcgilleus.ca" style="color:#ff2b2b; text-decoration:none;">
                  aerialdesign@mcgilleus.ca
                </a>.
              </p>

              <p>We’re looking forward to seeing you in March.</p>

              <p style="margin-top:28px;">
                Best,<br>
                <strong>The McGill AeroHacks Team</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="border-top:1px solid #111; padding-top:20px; font-size:12px; color:#777;">
              <p style="margin:0;">
                McGill AeroHacks 2026 · Organized by McGill Aerial Design<br>
                <a href="https://www.mcgillaerohacks.com" style="color:#0b1cff; text-decoration:none;">
                  www.mcgillaerohacks.com
                </a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

    </body>
  </html>
    ```



}



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
    age,
    school,
    school_other,
    level_of_study,
    country_of_residence,
    mcgill_email,
    mcgill_student_id,
    discord_username,
    team_mode,
    team_name,
    captain_email,
    fields_of_study,
    interests,
    other_interest,
    dietary_restrictions,
    other_dietary,
    accessibility_needs,
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
  const normalizedTeamMode = trimmed(team_mode);
  const normalizedTeamName = trimmed(team_name);
  const normalizedCaptainEmail = trimmed(captain_email);
  const normalizedLevelOfStudy = trimmed(level_of_study);
  const normalizedCountryOfResidence = trimmed(country_of_residence);
  const normalizedOtherInterest = trimmed(other_interest);
  const normalizedOtherDietary = trimmed(other_dietary);
  const normalizedAccessibilityNeeds = trimmed(accessibility_needs);
  const normalizedFieldsOfStudy = Array.isArray(fields_of_study)
    ? fields_of_study.map((field) => trimmed(field)).filter(Boolean)
    : [];
  const normalizedInterests = Array.isArray(interests)
    ? interests.map((interest) => trimmed(interest)).filter(Boolean)
    : [];
  const normalizedDietaryRestrictions = Array.isArray(dietary_restrictions)
    ? dietary_restrictions.map((restriction) => trimmed(restriction)).filter(Boolean)
    : [];

  if (
    !trimmed(first_name) ||
    !trimmed(last_name) ||
    !trimmed(email) ||
    !trimmed(phone_number) ||
    age === undefined ||
    age === null ||
    !normalizedSchool ||
    !normalizedLevelOfStudy ||
    !normalizedCountryOfResidence ||
    !mlh_code_of_conduct ||
    !mlh_privacy_policy
  ) {
    respond(res, 400, { error: "Missing required registration fields" });
    return;
  }

  const parsedAge = Number.parseInt(age, 10);
  if (Number.isNaN(parsedAge) || parsedAge < 13) {
    respond(res, 400, { error: "Age must be a number of 13 or older." });
    return;
  }

  if (!normalizedTeamMode) {
    respond(res, 400, { error: "Please select how you are participating." });
    return;
  }

  if (normalizedTeamMode !== "team" && normalizedTeamMode !== "free_agent") {
    respond(res, 400, { error: "Participation mode must be team or free agent." });
    return;
  }

  if (normalizedTeamMode === "team" && !normalizedTeamName) {
    respond(res, 400, { error: "Team name is required when registering with a team." });
    return;
  }

  if (!Array.isArray(fields_of_study) || normalizedFieldsOfStudy.length === 0) {
    respond(res, 400, { error: "Please select at least one field of study." });
    return;
  }

  if (!Array.isArray(interests) || normalizedInterests.length === 0) {
    respond(res, 400, { error: "Please select at least one topic of interest." });
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
    age: parsedAge,
    school: normalizedSchool,
    school_other: normalizedSchool === "Other" ? normalizedSchoolOther : null,
    level_of_study: normalizedLevelOfStudy,
    country_of_residence: normalizedCountryOfResidence,
    mcgill_email: normalizedSchool === "McGill University" ? normalizedMcgillEmail.toLowerCase() : null,
    mcgill_student_id: normalizedSchool === "McGill University" ? trimmed(mcgill_student_id) || null : null,
    discord_username: normalizedDiscord || null,
    team_mode: normalizedTeamMode,
    team_name: normalizedTeamMode === "team" ? normalizedTeamName : null,
    captain_email: normalizedTeamMode === "team" && normalizedCaptainEmail
      ? normalizedCaptainEmail.toLowerCase()
      : null,
    fields_of_study: normalizedFieldsOfStudy,
    interests: normalizedInterests,
    other_interest: normalizedOtherInterest || null,
    dietary_restrictions: normalizedDietaryRestrictions,
    other_dietary: normalizedOtherDietary || null,
    accessibility_needs: normalizedAccessibilityNeeds || null,
    mlh_code_of_conduct: Boolean(mlh_code_of_conduct),
    mlh_privacy_policy: Boolean(mlh_privacy_policy),
    mlh_emails: Boolean(mlh_emails ?? false)
  };

  try {
    if (normalizedTeamMode === "team" && normalizedCaptainEmail) {
      const teamSizeUrl = `${supabaseTableUrl}?select=id&team_name=eq.${encodeURIComponent(normalizedTeamName)}&captain_email=eq.${encodeURIComponent(normalizedCaptainEmail.toLowerCase())}`;
      const teamSizeResponse = await fetch(teamSizeUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          apikey: supabaseServiceRoleKey,
          Authorization: `Bearer ${supabaseServiceRoleKey}`,
          Prefer: "count=exact"
        }
      });

      if (!teamSizeResponse.ok) {
        const errorText = await teamSizeResponse.text();
        respond(res, 500, { error: "Failed to validate team size", details: errorText });
        return;
      }

      const contentRange = teamSizeResponse.headers.get("content-range");
      const totalCount = contentRange?.split("/")[1];
      const teamCount = Number(totalCount ?? 0);

      if (teamCount >= 5) {
        respond(res, 400, {
          error: "This team already has 5 members. Please register as a free agent or contact the organizers."
        });
        return;
      }
    }

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
