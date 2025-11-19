const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

  const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Hola Mundo - DevOps</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        
        .container {
          background: rgba(255, 255, 255, 0.95);
          padding: 60px 40px;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          text-align: center;
          max-width: 600px;
          animation: fadeIn 0.8s ease-in;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        h1 {
          color: #667eea;
          font-size: 3em;
          margin-bottom: 20px;
          animation: slideIn 1s ease-out;
        }
        
        @keyframes slideIn {
          from {
            transform: translateX(-50px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .greeting {
          font-size: 1.5em;
          color: #333;
          margin-bottom: 30px;
          line-height: 1.6;
        }
        
        .name {
          color: #764ba2;
          font-weight: bold;
          font-size: 1.8em;
          display: inline-block;
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        .badges {
          display: flex;
          gap: 15px;
          justify-content: center;
          margin-top: 30px;
          flex-wrap: wrap;
        }
        
        .badge {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 10px 20px;
          border-radius: 25px;
          font-size: 0.9em;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
          transition: transform 0.3s ease;
        }
        
        .badge:hover {
          transform: translateY(-5px);
        }
        
        .emoji {
          font-size: 1.5em;
          margin: 0 5px;
        }
        
        .footer {
          margin-top: 40px;
          color: #666;
          font-size: 0.9em;
        }
        
        .tech-stack {
          display: flex;
          gap: 10px;
          justify-content: center;
          margin-top: 20px;
        }
        
        .tech-icon {
          background: #f0f0f0;
          padding: 8px 15px;
          border-radius: 10px;
          font-size: 0.85em;
          color: #555;
          font-weight: 600;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🚀 ¡Hola Mundo!</h1>
        
        <div class="greeting">
          ¡Bienvenido,<br>
          <span class="name">George Santana 2024-0001</span>!
        </div>
        
        <p style="color: #666; margin-bottom: 20px;">
          Esta es tu aplicación desplegada exitosamente con un pipeline completo de CI/CD
        </p>
        
        <div class="badges">
          <span class="badge">
            <span class="emoji">✅</span> Docker
          </span>
          <span class="badge">
            <span class="emoji">🔄</span> GitHub Actions
          </span>
          <span class="badge">
            <span class="emoji">☁️</span> Render
          </span>
        </div>
        
        <div class="tech-stack">
          <div class="tech-icon">Node.js</div>
          <div class="tech-icon">Docker Hub</div>
          <div class="tech-icon">DevOps</div>
        </div>
        
        <div class="footer">
          <p>🎉 Práctica de DevOps completada</p>
          <p style="margin-top: 10px; font-size: 0.8em;">
            Powered by Node.js + Docker + CI/CD
          </p>
        </div>
      </div>
    </body>
    </html>
  `;

  res.end(html);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
