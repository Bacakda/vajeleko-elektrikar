export const emailTemplate = `
<!doctype html>
<html lang="cs">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Nová zpráva z webu - Vajeleko s.r.o</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        background: #0b0f14;
        font-family: system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
      }
      * {
        box-sizing: border-box;
      }
      table {
        border-collapse: collapse;
        width: 100%;
      }
      img {
        border: 0;
        outline: none;
        text-decoration: none;
        display: block;
        max-width: 100%;
        height: auto;
      }
      a {
        color: inherit;
      }

      .wrapper {
        width: 100%;
        background: #0b0f14;
        padding: 24px 12px;
      }

      .container {
        max-width: 640px;
        margin: 0 auto;
        background: #0f1520;
        border: 1px solid #1f2937;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      }

      .header {
        background: linear-gradient(135deg, #0f1520 0%, #111827 100%);
        text-align: center;
        padding: 32px 20px 24px;
        border-bottom: 1px solid #1f2937;
      }

      .logo {
        width: 180px;
        height: auto;
        margin: 0 auto 16px;
        display: block;
      }

      .badge {
        display: inline-block;
        padding: 8px 16px;
        border-radius: 999px;
        font: 600 12px/1.4 system-ui, -apple-system, "Segoe UI", Roboto, Arial;
        background: linear-gradient(135deg, #1e3a8a 0%, #1f2937 100%);
        color: #93c5fd;
        border: 1px solid #334155;
      }

      .content {
        padding: 32px 28px;
        color: #e5e7eb;
        line-height: 1.6;
      }

      .title {
        font: 800 26px/1.2 system-ui, -apple-system, "Segoe UI", Roboto, Arial;
        margin: 0 0 12px;
        color: #f8fafc;
        text-align: center;
      }

      .subtitle {
        margin: 0 0 28px;
        color: #cbd5e1;
        text-align: center;
        font-size: 15px;
        line-height: 1.6;
      }

      .info-table {
        width: 100%;
        border: 1px solid #243044;
        border-radius: 12px;
        overflow: hidden;
        margin-bottom: 24px;
        background: #0e1526;
      }

      .info-row {
        display: flex;
        border-bottom: 1px solid #1f2a3d;
      }

      .info-row:last-child {
        border-bottom: none;
      }

      .info-key {
        width: 140px;
        padding: 14px 16px;
        background: #0b1220;
        color: #9fb2cc;
        font-weight: 600;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        border-right: 1px solid #1f2a3d;
        flex-shrink: 0;
      }

      .info-val {
        flex: 1;
        padding: 14px 16px;
        background: #0e1526;
        color: #e5e7eb;
        font-size: 14px;
        word-wrap: break-word;
        overflow-wrap: break-word;
      }

      .message-box {
        background: #0e1526;
        border: 1px solid #243044;
        border-radius: 10px;
        padding: 16px;
        margin-bottom: 24px;
        color: #e5e7eb;
        white-space: pre-wrap;
        word-wrap: break-word;
        overflow-wrap: break-word;
        line-height: 1.7;
      }

      .service-badge {
        display: inline-block;
        padding: 6px 12px;
        border-radius: 6px;
        background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
        color: #93c5fd;
        font-size: 13px;
        font-weight: 600;
        border: 1px solid #334155;
      }

      .cta-button {
        display: inline-block;
        padding: 12px 28px;
        border-radius: 8px;
        color: #fff;
        text-decoration: none;
        background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
        font-weight: 600;
        font-size: 14px;
        border: 1px solid #334155;
        margin-top: 8px;
        transition: all 0.3s ease;
      }

      .cta-button:hover {
        background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
      }

      .action-box {
        text-align: center;
        margin-top: 28px;
        padding-top: 24px;
        border-top: 1px solid #1f2937;
      }

      .footer {
        padding: 24px 28px;
        color: #9fb2cc;
        font: 13px/1.6 system-ui, -apple-system, "Segoe UI", Roboto, Arial;
        border-top: 1px solid #1f2937;
        background: linear-gradient(135deg, #0f1520 0%, #0e1526 100%);
        text-align: center;
      }

      .footer-title {
        font-weight: 700;
        color: #f8fafc;
        margin-bottom: 8px;
      }

      .footer-desc {
        font-size: 12px;
        color: #7f8ea3;
        margin-top: 12px;
      }

      .highlight {
        color: #fbbf24;
        font-weight: 700;
      }

      .timestamp {
        font-size: 12px;
        color: #7f8ea3;
        margin-top: 16px;
        text-align: center;
      }

      @media (max-width: 600px) {
        .wrapper {
          padding: 12px 8px;
        }

        .container {
          border-radius: 10px;
        }

        .header {
          padding: 24px 16px 16px;
        }

        .logo {
          width: 140px;
          margin: 0 auto 12px;
        }

        .content {
          padding: 20px 16px;
        }

        .title {
          font-size: 22px;
        }

        .subtitle {
          font-size: 13px;
          margin-bottom: 20px;
        }

        .info-row {
          flex-direction: column;
        }

        .info-key {
          width: 100%;
          border-right: none;
          border-bottom: 1px solid #1f2a3d;
          padding: 10px 12px;
          font-size: 12px;
        }

        .info-val {
          padding: 10px 12px;
          font-size: 13px;
        }

        .message-box {
          padding: 12px;
          font-size: 13px;
        }

        .footer {
          padding: 16px;
          font-size: 12px;
        }

        .cta-button {
          padding: 10px 20px;
          font-size: 13px;
        }
      }
    </style>
  </head>
  <body>
    <div class="wrapper">
      <table class="container">
        <!-- HEADER S LOGEM -->
        <tr>
          <td class="header">
            <img
              src="https://i.imgur.com/nZPIjaE.png"
              alt="Vajeleko s.r.o Logo"
              class="logo"
            />
            <div class="badge">Vajeleko s.r.o • Nová poptávka z webu</div>
          </td>
        </tr>

        <!-- MAIN CONTENT -->
        <tr>
          <td class="content">
            <h1 class="title">
              Nová poptávka od <span class="highlight">{{from_name}}</span>
            </h1>
            <p class="subtitle">
              Poptávka byla úspěšně přijata. Prosíme odpovězte zákazníkovi co nejdříve.
            </p>

            <!-- INFO TABLE -->
            <div class="info-table">
              <div class="info-row">
                <div class="info-key">Jméno</div>
                <div class="info-val">{{from_name}}</div>
              </div>
              <div class="info-row">
                <div class="info-key">Email</div>
                <div class="info-val">{{from_email}}</div>
              </div>
              <div class="info-row">
                <div class="info-key">Telefon</div>
                <div class="info-val" style="font-family: 'Monaco', 'Menlo', monospace; letter-spacing: 1px; font-weight: 500; color: #60a5fa;">{{phone}}</div>
              </div>
              <div class="info-row">
                <div class="info-key">Služba</div>
                <div class="info-val"><span class="service-badge">{{service}}</span></div>
              </div>
            </div>

            <!-- ZPRÁVA -->
            <p style="margin: 0 0 8px; color: #9fb2cc; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
              Zpráva od zákazníka:
            </p>
            <div class="message-box">{{message}}</div>

            <!-- CTA -->
            <div class="action-box">
              <a
                class="cta-button"
                href="mailto:{{from_email}}?subject=Odpověď%20na%20vaši%20poptávku%20-%20Vajeleko%20s.r.o"
              >
                Odpovědět zákazníkovi
              </a>
            </div>
          </td>
        </tr>

        <!-- FOOTER -->
        <tr>
          <td class="footer">
            <div class="footer-title">Vajeleko s.r.o</div>
            <div>Kompletní řešení elektroinstalací</div>
            <div class="footer-desc">
              Chudenická 1059/30 • Hostivař, 102 00 Praha<br />
              Tel: +420 722 914 120 • Email: info@vajeleko.cz
            </div>
            <div class="footer-desc" style="margin-top: 16px; border-top: 1px solid #1f2937; padding-top: 12px;">
              Tento e-mail byl automaticky vygenerován z kontaktního formuláře na webu.<br />
              Pokud máte otázky, kontaktujte nás prosím přímo.
            </div>
            <div class="timestamp">
              Přijato: {{timestamp}}
            </div>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>
`;

export default emailTemplate;
