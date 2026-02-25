type ContactEmailData = {
  lastName: string
  email: string
  companyName?: string
  requestTypeLabel: string
  message: string
}

export const generateContactEmailHtml = (data: ContactEmailData): string => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          background-color: #f5f5f5;
        }
        .container {
          max-width: 600px;
          margin: 40px auto;
          background-color: #ffffff;
        }
        .header {
          padding: 40px 40px 30px;
          text-align: center;
          border-bottom: 1px solid #e5e5e5;
        }
        .logo {
          max-width: 180px;
          height: auto;
        }
        .content {
          padding: 40px;
        }
        .field {
          margin-bottom: 24px;
        }
        .label {
          font-size: 12px;
          font-weight: 600;
          color: #666666;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 6px;
        }
        .value {
          font-size: 15px;
          color: #000000;
          line-height: 1.5;
        }
        .value a {
          color: #000000;
          text-decoration: none;
        }
        .message {
          white-space: pre-wrap;
          padding: 16px;
          background-color: #f9f9f9;
          border-radius: 4px;
          line-height: 1.6;
        }
        .footer {
          padding: 20px 40px;
          text-align: center;
          font-size: 12px;
          color: #999999;
          border-top: 1px solid #e5e5e5;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="https://votre-domaine.com/images/brand/logo.webp" alt="KleanBac" class="logo">
        </div>

        <div class="content">
          <div class="field">
            <div class="label">Nom</div>
            <div class="value">${data.lastName}</div>
          </div>

          <div class="field">
            <div class="label">Email</div>
            <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
          </div>

          ${
            data.companyName
              ? `
          <div class="field">
            <div class="label">Entreprise</div>
            <div class="value">${data.companyName}</div>
          </div>
          `
              : ''
          }

          <div class="field">
            <div class="label">Type de demande</div>
            <div class="value">${data.requestTypeLabel}</div>
          </div>

          <div class="field">
            <div class="label">Message</div>
            <div class="message">${data.message}</div>
          </div>
        </div>

        <div class="footer">
          Nouveau message de contact KleanBac
        </div>
      </div>
    </body>
  </html>
`
