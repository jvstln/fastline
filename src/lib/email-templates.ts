import type { RequestService } from "@/lib/schema";

export const requestServiceEmailHtml = (data: RequestService) => {
	const {
		name,
		company,
		email,
		phone,
		sector,
		service,
		location,
		projectDetails,
		preferredContactMethod,
	} = data;

	return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>New Service Request</title>
  </head>
  <body style="margin:0; padding:0; background-color:#f3f4f6;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f4f6; padding:32px 0;">
      <tr>
        <td align="center">
          <table width="680" cellpadding="0" cellspacing="0" style="max-width:680px; background-color:#ffffff; border-radius:6px; overflow:hidden;">
            <tr>
              <td style="padding:24px; border-bottom:1px solid #e5e7eb; background-color:#0ea5e9; color:#ffffff;">
                <h1 style="margin:0; font-size:20px; font-family:Arial, sans-serif;">New Service Request</h1>
                <p style="margin:6px 0 0; font-size:13px; font-family:Arial, sans-serif; opacity:0.95;">
                  A new request has been submitted via your website
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:24px;">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td valign="top" style="padding-right:12px; width:50%;">
                      <p style="margin:0 0 8px; font-size:12px; font-family:Arial, sans-serif; color:#374151;">
                        <strong>Requester</strong>
                      </p>
                      <p style="margin:0; font-size:15px; font-family:Arial, sans-serif;">${name}</p>
                      <p style="margin:6px 0 0; font-size:13px; font-family:Arial, sans-serif; color:#6b7280;">
                        ${company}
                      </p>
                    </td>
                    <td valign="top" style="padding-left:12px; width:50%;">
                      <p style="margin:0 0 8px; font-size:12px; font-family:Arial, sans-serif; color:#374151;">
                        <strong>Contact</strong>
                      </p>
                      <p style="margin:0; font-size:15px; font-family:Arial, sans-serif;">${email}</p>
                      <p style="margin:6px 0 0; font-size:13px; font-family:Arial, sans-serif; color:#6b7280;">
                        ${phone}
                      </p>
                    </td>
                  </tr>
                  <tr><td colspan="2" style="height:16px;"></td></tr>
                  <tr>
                    <td style="padding-top:6px;">
                      <p style="margin:0 0 6px; font-size:12px; font-family:Arial, sans-serif; color:#374151;">
                        <strong>Service</strong>
                      </p>
                      <p style="margin:0; font-size:15px; font-family:Arial, sans-serif;">${service}</p>
                    </td>
                    <td style="padding-top:6px;">
                      <p style="margin:0 0 6px; font-size:12px; font-family:Arial, sans-serif; color:#374151;">
                        <strong>Sector</strong>
                      </p>
                      <p style="margin:0; font-size:15px; font-family:Arial, sans-serif;">${sector}</p>
                    </td>
                  </tr>
                  <tr><td colspan="2" style="height:12px;"></td></tr>
                  <tr>
                    <td colspan="2">
                      <p style="margin:0 0 6px; font-size:12px; font-family:Arial, sans-serif; color:#374151;">
                        <strong>Location</strong>
                      </p>
                      <p style="margin:0; font-size:15px; font-family:Arial, sans-serif;">${location}</p>
                    </td>
                  </tr>
                  <tr><td colspan="2" style="height:12px;"></td></tr>
                  <tr>
                    <td colspan="2">
                      <p style="margin:0 0 6px; font-size:12px; font-family:Arial, sans-serif; color:#374151;">
                        <strong>Preferred Contact Method</strong>
                      </p>
                      <p style="margin:0; font-size:15px; font-family:Arial, sans-serif;">${preferredContactMethod}</p>
                    </td>
                  </tr>
                  <tr><td colspan="2" style="height:16px;"></td></tr>
                  <tr>
                    <td colspan="2">
                      <p style="margin:0 0 6px; font-size:12px; font-family:Arial, sans-serif; color:#374151;">
                        <strong>Project Details</strong>
                      </p>
                      <div style="background-color:#f9fafb; border:1px solid #eef2f7; padding:12px; border-radius:6px;">
                        <p style="margin:0; white-space:pre-wrap; font-size:13px; font-family:Arial, sans-serif; color:#374151;">
                          ${projectDetails}
                        </p>
                      </div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:18px; border-top:1px solid #e5e7eb; font-size:12px; font-family:Arial, sans-serif; color:#6b7280; text-align:center;">
                This message was generated automatically from your website request form.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `;
};
