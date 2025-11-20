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
          font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          min-height: 100vh;
          background: radial-gradient(circle at top right, #020617, #05070b 60%);
          color: #e2e8f0;
          padding: 40px 20px;
        }

        .grid {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          gap: 32px;
        }

        .hero {
          background: rgba(15, 23, 42, 0.95);
          border: 1px solid rgba(226, 232, 240, 0.16);
          border-radius: 30px;
          padding: 48px;
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
        }

        .hero h1 {
          font-size: clamp(2.5rem, 3vw, 3.5rem);
          margin-bottom: 8px;
        }

        .hero .subtitle {
          color: #94a3b8;
          font-size: 0.95rem;
          margin-bottom: 16px;
        }

        .description {
          color: #cbd5f5;
          line-height: 1.7;
          max-width: 480px;
        }

        .hero-actions {
          margin-top: 28px;
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .hero-actions button,
        .hero-actions a {
          border-radius: 999px;
          padding: 0.75rem 1.75rem;
          border: none;
          font-weight: 600;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hero-actions button {
          background: linear-gradient(90deg, #67e8f9, #7c3aed);
          color: #030712;
          cursor: pointer;
          box-shadow: 0 15px 40px rgba(124, 58, 237, 0.35);
        }

        .hero-actions button:hover {
          transform: translateY(-4px) scale(1.01);
        }

        .hero-actions a {
          color: #dbeafe;
          border: 1px solid rgba(226, 232, 240, 0.5);
          text-decoration: none;
        }

        figure {
          position: relative;
          height: 220px;
        }

        .orb {
          position: absolute;
          filter: blur(12px);
          border-radius: 50%;
          opacity: 0.8;
        }

        .orb-one {
          width: 200px;
          height: 200px;
          background: #06b6d4;
          top: -40px;
          right: 40px;
        }

        .orb-two {
          width: 120px;
          height: 120px;
          background: #a855f7;
          bottom: -20px;
          left: 20px;
        }

        .panels {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
        }

        .panels article {
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid rgba(226, 232, 240, 0.1);
          padding: 24px;
          border-radius: 18px;
          box-shadow: 0 20px 60px rgba(15, 23, 42, 0.5);
          min-height: 160px;
        }

        .panels h2 {
          margin-bottom: 12px;
          font-size: 1.2rem;
        }

        .panels p {
          color: #cbd5f5;
          line-height: 1.5;
        }

        .panels a {
          color: #7dd3fc;
          text-decoration: none;
        }

        .timeline {
          background: rgba(2, 6, 23, 0.8);
          border-radius: 20px;
          padding: 30px;
          border: 1px solid rgba(226, 232, 240, 0.12);
        }

        .timeline h2 {
          margin-bottom: 16px;
        }

        .timeline ul {
          list-style: none;
          padding: 0;
          display: grid;
          gap: 12px;
        }

        .timeline li {
          display: flex;
          align-items: center;
          gap: 16px;
          background: rgba(15, 23, 42, 0.5);
          border-radius: 14px;
          padding: 12px 16px;
        }

        .timeline span {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, #67e8f9, #a855f7);
          font-weight: 700;
          color: #0f172a;
        }

        .signature {
          text-align: center;
          font-size: 0.9rem;
          color: #94a3b8;
        }

        .signature .micro {
          font-size: 0.75rem;
          margin-top: 8px;
          color: #475569;
        }

        .toast {
          position: fixed;
          bottom: 24px;
          right: 24px;
          background: rgba(30, 64, 175, 0.95);
          color: #e0f2fe;
          padding: 14px 20px;
          border-radius: 999px;
          box-shadow: 0 20px 40px rgba(2, 6, 23, 0.4);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s ease, transform 0.4s ease;
          transform: translateY(20px);
        }

        .toast.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 600px) {
          body {
            padding: 20px 16px;
          }

          .hero {
            padding: 32px;
          }
        }
      </style>
    </head>
    <body>
      <div class="grid">
        <header class="hero">
          <div>
            <p class="eyebrow">Cont. Practica Anterior · entrega continua</p>
            <h1>Bernardo Gomera</h1>
            <p class="subtitle">Matrícula 2020-9643 · viernes 29 de agosto de 2025, 09:19</p>
            <p class="description">
              Esta interfaz muestra el estado activo de tu pipeline CI/CD: cada push a `main` reconstruye la imagen Docker, la sube a Docker Hub y dispara el deploy automático en Render.
            </p>
            <div class="hero-actions">
              <button id="status-btn">Ver estado del deploy</button>
              <a href="https://cont-practica-anterior.onrender.com" target="_blank" rel="noreferrer">Abrir la app desplegada</a>
            </div>
          </div>
          <figure aria-hidden="true">
            <div class="orb orb-one"></div>
            <div class="orb orb-two"></div>
          </figure>
        </header>

        <section class="panels">
          <article>
            <h2>Docker Hub</h2>
            <p>Imagen oficial: <strong>bernardogomera/hola-mundo:latest</strong></p>
            <p>Construida a partir de tu Dockerfile y liviana para producción.</p>
          </article>
          <article>
            <h2>GitHub Actions</h2>
            <p>Job <code>build_and_push</code> ejecuta Buildx, multicarga y push en cada commit.</p>
            <p>Job <code>deploy_render</code> dispara la API de Render con tus secrets.</p>
          </article>
          <article>
            <h2>Render</h2>
            <p>Despliegue automático vía trigger POST a <code>/v1/services/srv-d4f6mp3uibrs73bcks40/deploys</code>.</p>
            <p>URL pública: <a href="https://cont-practica-anterior.onrender.com" target="_blank" rel="noreferrer">https://cont-practica-anterior.onrender.com</a></p>
          </article>
        </section>

        <section class="timeline">
          <h2>Pipeline interactivo</h2>
          <ul>
            <li><span>1</span> Código actualizado en `main`</li>
            <li><span>2</span> GitHub Actions construye y etiqueta</li>
            <li><span>3</span> Docker Hub recibe la imagen</li>
            <li><span>4</span> Render despliega automáticamente</li>
          </ul>
        </section>

        <footer class="signature">
          <p>🛰️ Proyecto mantenido por Bernardo Gomera · CI/CD con Node.js, Docker y Render</p>
          <p class="micro">Generado automáticamente cada vez que empujas a <code>main</code></p>
        </footer>
        <div id="status-toast" class="toast" role="status" aria-live="polite"></div>
      </div>
      <script>
        const toast = document.getElementById('status-toast');
        const steps = [
          '1. GitHub Actions detecta el push a main',
          '2. Buildx construye y etiqueta la imagen',
          '3. Docker Hub recibe la imagen',
          '4. Render dispara el deploy automático'
        ];

        document.getElementById('status-btn').addEventListener('click', () => {
          const index = Math.floor(Math.random() * steps.length);
          toast.textContent = steps[index];
          toast.classList.add('visible');
          setTimeout(() => toast.classList.remove('visible'), 2800);
        });
      </script>
    </body>
    </html>
  `;
        body {
          font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          min-height: 100vh;
          background: radial-gradient(circle at top right, #1f2933, #05070b 60%);
          color: #e2e8f0;
          padding: 40px 20px;
        }

        .grid {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          gap: 32px;
        }

        .hero {
          background: rgba(15, 23, 42, 0.95);
          border: 1px solid rgba(226, 232, 240, 0.16);
          border-radius: 30px;
          padding: 48px;
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
        }

        .hero h1 {
          font-size: clamp(2.5rem, 3vw, 3.5rem);
          margin-bottom: 8px;
        }

        .hero .subtitle {
          color: #94a3b8;
          font-size: 0.95rem;
          margin-bottom: 16px;
        }

        .description {
          color: #cbd5f5;
          line-height: 1.7;
          max-width: 480px;
        }

        .hero-actions {
          margin-top: 28px;
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .hero-actions button,
        .hero-actions a {
          border-radius: 999px;
          padding: 0.75rem 1.75rem;
          border: none;
          font-weight: 600;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hero-actions button {
          background: linear-gradient(90deg, #67e8f9, #7c3aed);
          color: #030712;
          cursor: pointer;
          box-shadow: 0 15px 40px rgba(124, 58, 237, 0.35);
        }

        .hero-actions button:hover {
          transform: translateY(-4px) scale(1.01);
        }

        .hero-actions a {
          color: #dbeafe;
          border: 1px solid rgba(226, 232, 240, 0.5);
          text-decoration: none;
        }

        figure {
          position: relative;
          height: 220px;
        }

        .orb {
          position: absolute;
          filter: blur(12px);
          border-radius: 50%;
          opacity: 0.8;
        }

        .orb-one {
          width: 200px;
          height: 200px;
          background: #06b6d4;
          top: -40px;
          right: 40px;
        }

        .orb-two {
          width: 120px;
          height: 120px;
          background: #a855f7;
          bottom: -20px;
          left: 20px;
        }

        .panels {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
        }

        .panels article {
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid rgba(226, 232, 240, 0.1);
          padding: 24px;
          border-radius: 18px;
          box-shadow: 0 20px 60px rgba(15, 23, 42, 0.5);
          min-height: 160px;
        }

        .panels h2 {
          margin-bottom: 12px;
          font-size: 1.2rem;
        }

        .panels p {
          color: #cbd5f5;
          line-height: 1.5;
        }

        .panels a {
          color: #7dd3fc;
          text-decoration: none;
        }

        .timeline {
          background: rgba(2, 6, 23, 0.8);
          border-radius: 20px;
          padding: 30px;
          border: 1px solid rgba(226, 232, 240, 0.12);
        }

        .timeline h2 {
          margin-bottom: 16px;
        }

        .timeline ul {
          list-style: none;
          padding: 0;
          display: grid;
          gap: 12px;
        }

        .timeline li {
          display: flex;
          align-items: center;
          gap: 16px;
          background: rgba(15, 23, 42, 0.5);
          border-radius: 14px;
          padding: 12px 16px;
        }

        .timeline span {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, #67e8f9, #a855f7);
          font-weight: 700;
          color: #0f172a;
        }

        .signature {
          text-align: center;
          font-size: 0.9rem;
          color: #94a3b8;
        }

        .signature .micro {
          font-size: 0.75rem;
          margin-top: 8px;
          color: #475569;
        }
        
        .toast {
          position: fixed;
          bottom: 24px;
          right: 24px;
          background: rgba(30, 64, 175, 0.95);
          color: #e0f2fe;
          padding: 14px 20px;
          border-radius: 999px;
          box-shadow: 0 20px 40px rgba(2, 6, 23, 0.4);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s ease, transform 0.4s ease;
          transform: translateY(20px);
        }
        
        .toast.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 600px) {
          body {
            padding: 20px 16px;
          }

          .hero {
            padding: 32px;
          }
        }
