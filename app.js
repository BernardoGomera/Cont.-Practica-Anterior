const http = require('http');

const template = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Cont. Practica Anterior · Bernardo Gomera</title>
  <style>
    :root {
      color-scheme: dark;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
      min-height: 100vh;
      background: radial-gradient(circle at 15% 15%, #1d1f30, #03050a 65%);
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
      border-radius: 32px;
      padding: 48px;
      position: relative;
      border: 1px solid rgba(226, 232, 240, 0.12);
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 36px;
      overflow: hidden;
    }

    .hero::before,
    .hero::after {
      content: '';
      position: absolute;
      border-radius: 50%;
      filter: blur(35px);
      opacity: 0.5;
      pointer-events: none;
    }

    .hero::before {
      width: 220px;
      height: 220px;
      background: #0ea5e9;
      top: -60px;
      right: 40px;
    }

    .hero::after {
      width: 160px;
      height: 160px;
      background: #8b5cf6;
      bottom: -50px;
      left: -20px;
    }

    .hero h1 {
      font-size: clamp(2.5rem, 3vw, 3.8rem);
      margin-bottom: 10px;
    }

    .hero .subtitle {
      color: #94a3b8;
      font-size: 1rem;
      margin-bottom: 18px;
    }

    .hero .description {
      color: #cbd5f5;
      line-height: 1.7;
      max-width: 520px;
    }

    .hero-actions {
      margin-top: 28px;
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }

    .hero-actions button,
    .hero-actions a {
      border-radius: 999px;
      padding: 0.85rem 1.8rem;
      font-weight: 600;
      border: none;
      text-decoration: none;
      transition: transform 0.25s ease, box-shadow 0.25s ease;
      cursor: pointer;
    }

    .hero-actions button {
      background: linear-gradient(120deg, #38bdf8, #a855f7);
      color: #030712;
      box-shadow: 0 18px 45px rgba(124, 58, 237, 0.35);
    }

    .hero-actions button:hover {
      transform: translateY(-3px) scale(1.01);
    }

    .hero-actions a {
      color: #cbd5f5;
      border: 1px solid rgba(226, 232, 240, 0.5);
    }

    .panels {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 24px;
    }

    .panel {
      background: rgba(15, 23, 42, 0.8);
      border-radius: 22px;
      padding: 26px;
      border: 1px solid rgba(226, 232, 240, 0.12);
      min-height: 170px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .panel h2 {
      font-size: 1.25rem;
    }

    .panel p {
      color: #cbd5f5;
      line-height: 1.6;
      font-size: 0.95rem;
    }

    .panel code {
      background: rgba(124, 58, 237, 0.2);
      padding: 2px 8px;
      border-radius: 6px;
    }

    .timeline {
      background: rgba(2, 6, 23, 0.85);
      border-radius: 28px;
      padding: 34px;
      border: 1px solid rgba(226, 232, 240, 0.15);
    }

    .timeline h2 {
      margin-bottom: 14px;
    }

    .timeline ol {
      list-style: none;
      display: grid;
      gap: 12px;
      padding-left: 0;
    }

    .timeline li {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      background: rgba(15, 23, 42, 0.65);
      border-radius: 16px;
    }

    .timeline span {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      font-weight: 700;
      background: linear-gradient(135deg, #7dd3fc, #a855f7);
      color: #020617;
    }

    .signature {
      text-align: center;
      color: #94a3b8;
      font-size: 0.95rem;
    }

    .signature .micro {
      margin-top: 6px;
      font-size: 0.8rem;
      color: #6b7280;
    }

    .toast {
      position: fixed;
      right: 30px;
      bottom: 30px;
      background: rgba(67, 56, 202, 0.95);
      color: #e0f2fe;
      border-radius: 999px;
      padding: 14px 22px;
      transform: translateY(20px);
      opacity: 0;
      pointer-events: none;
      box-shadow: 0 20px 45px rgba(2, 6, 23, 0.45);
      transition: opacity 0.3s ease, transform 0.3s ease;
      letter-spacing: 0.2px;
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
          Esta vista celebra la canalización CI/CD que reconstruye la imagen Docker, la etiqueta y la despliega automáticamente cada vez que se hace push a "main".
        </p>
        <div class="hero-actions">
          <button id="status-btn">Estado del deploy</button>
          <a href="https://cont-practica-anterior.onrender.com" target="_blank" rel="noreferrer">Ver en Render</a>
        </div>
      </div>
    </header>

    <section class="panels">
      <article class="panel">
        <h2>Docker Hub</h2>
        <p>Imagen <code>bernardogomera/hola-mundo:latest</code> publicada en Buildx con plataformas linux/amd64 y linux/arm64.</p>
        <p>Credenciales seguras se cargan desde los secrets en GitHub Actions.</p>
      </article>
      <article class="panel">
        <h2>GitHub Actions</h2>
        <p>Job <code>build_and_push</code> construye y sube la imagen.</p>
        <p>Job <code>deploy_render</code> invoca el webhook de Render para finalizar el despliegue.</p>
      </article>
      <article class="panel">
        <h2>Render</h2>
        <p>Servicio <code>srv-d4f6mp3uibrs73bcks40</code> actualiza la URL <a href="https://cont-practica-anterior.onrender.com" target="_blank" rel="noreferrer">cont-practica-anterior.onrender.com</a>.</p>
        <p>Deploy automático luego de cada push exitoso a <code>main</code>.</p>
      </article>
    </section>

    <section class="timeline">
      <h2>Pasos del pipeline</h2>
      <ol>
        <li><span>1</span> Push en <code>main</code></li>
        <li><span>2</span> Buildx construye y etiqueta la imagen.</li>
        <li><span>3</span> Docker Hub recibe el push.</li>
        <li><span>4</span> Render recibe el trigger y despliega la app.</li>
      </ol>
    </section>

    <footer class="signature">
      <p>🛰️ Proyecto personalizado por Bernardo Gomera · CI/CD con Node.js, Docker y Render.</p>
      <p class="micro">Recompila y despliega cada push a <code>main</code>.</p>
    </footer>
  </div>

  <div id="status-toast" class="toast" role="status" aria-live="polite"></div>
  <script>
    const toast = document.getElementById('status-toast');
    const steps = [
      'GitHub Actions detecta el push',
      'Buildx construye la imagen y la etiqueta',
      'Docker Hub recibe el push',
      'Render dispara el deploy final'
    ];

    document.getElementById('status-btn').addEventListener('click', () => {
      const index = Math.floor(Math.random() * steps.length);
      toast.textContent = steps[index];
      toast.classList.add('visible');
      setTimeout(() => toast.classList.remove('visible'), 2800);
    });
  </script>
</body>
</html>`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(template);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
