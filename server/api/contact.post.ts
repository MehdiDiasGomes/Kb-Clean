import { Resend } from 'resend'

type ContactFormData = {
  lastName: string
  email: string
  companyName?: string
  requestType: string
  message: string
}

export default defineEventHandler(async event => {
  const config = useRuntimeConfig()
  const body = await readBody<ContactFormData>(event)

  // Validation
  if (!body.lastName || !body.email || !body.requestType || !body.message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields',
    })
  }

  // Email validation
  const emailRegex = /^[\w%+.-]+@[\d.A-Za-z-]+\.[A-Za-z]{2,}$/
  if (!emailRegex.test(body.email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid email address',
    })
  }

  try {
    const resend = new Resend(config.resendApiKey)

    const requestTypeLabels: Record<string, { fr: string; en: string }> = {
      demo: { fr: 'Démonstration', en: 'Demo' },
      callback: { fr: 'Rappel téléphonique', en: 'Callback' },
      quote: { fr: 'Devis', en: 'Quote' },
    }

    const requestTypeLabel = requestTypeLabels[body.requestType]?.fr || body.requestType

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 30px;
              border-radius: 10px 10px 0 0;
              text-align: center;
            }
            .content {
              background: #f9fafb;
              padding: 30px;
              border-radius: 0 0 10px 10px;
            }
            .field {
              margin-bottom: 20px;
              background: white;
              padding: 15px;
              border-radius: 8px;
              border-left: 4px solid #667eea;
            }
            .field-label {
              font-weight: 600;
              color: #667eea;
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 5px;
            }
            .field-value {
              color: #1f2937;
              font-size: 16px;
            }
            .message-box {
              background: white;
              padding: 20px;
              border-radius: 8px;
              border: 1px solid #e5e7eb;
              white-space: pre-wrap;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 style="margin: 0; font-size: 24px;">📧 Nouveau message de contact</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">KB Clean</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="field-label">Nom</div>
              <div class="field-value">${body.lastName}</div>
            </div>

            <div class="field">
              <div class="field-label">Email</div>
              <div class="field-value"><a href="mailto:${body.email}" style="color: #667eea; text-decoration: none;">${body.email}</a></div>
            </div>

            ${
              body.companyName
                ? `
            <div class="field">
              <div class="field-label">Entreprise</div>
              <div class="field-value">${body.companyName}</div>
            </div>
            `
                : ''
            }

            <div class="field">
              <div class="field-label">Type de demande</div>
              <div class="field-value">${requestTypeLabel}</div>
            </div>

            <div class="field">
              <div class="field-label">Message</div>
              <div class="message-box">${body.message}</div>
            </div>
          </div>
        </body>
      </html>
    `

    const { data, error } = await resend.emails.send({
      from: 'KB Clean Contact <onboarding@resend.dev>',
      to: [config.contactEmailTo],
      subject: `Nouveau contact: ${requestTypeLabel} - ${body.lastName}`,
      html: emailHtml,
      replyTo: body.email,
    })

    if (error) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Failed to send email',
        data: error,
      })
    }

    return {
      success: true,
      messageId: data?.id,
    }
  } catch (err) {
    console.error('Error sending email:', err)
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal server error',
    })
  }
})
