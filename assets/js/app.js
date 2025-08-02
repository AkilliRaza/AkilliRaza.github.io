const app = document.getElementById('app');

const routes = {
  home: `
    <h1 align="center">Hi 👋, I'm Ali Raza</h1>
    <h3 align="center">💻 A Passionate Full Stack Developer from Pakistan</h3>
    <div align="center">
      <img src="/assets/images/ali-raza-profile.png" alt="Ali Raza" class="profile-pic">
    </div>
  `,
  about: `
    <h2>🚀 About Me</h2>
    <ul>
      <li>🔭 Working on <strong>Multi-Agent Banking Assistant</strong></li>
      <li>🌱 Exploring <strong>AI, Cloud, and Full Stack Technologies</strong></li>
      <li>💬 Ask me about <strong>Azure, Python, Node.js, React</strong></li>
    </ul>
    <h2>🛠️ Skills</h2>
    <ul>
      <li><strong>Languages:</strong> Python, JavaScript, C#, TypeScript</li>
      <li><strong>Frameworks:</strong> React, Node.js, .NET</li>
      <li><strong>Cloud:</strong> Microsoft Azure</li>
      <li><strong>Tools:</strong> Docker, Kubernetes, Git</li>
    </ul>
  `,
  contact: `
    <h2>📫 Contact Me</h2>
    <p>Email: <a href="mailto:akilli.raza@gmail.com">akilli.raza@gmail.com</a></p>
    <p>LinkedIn: <a href="https://www.linkedin.com/in/ali-raza-881494205/" target="_blank">Profile</a></p>
    <p>Medium: <a href="https://medium.com/@aliraza" target="_blank">Articles</a></p>
  `,
  blog: `
    <h2>📝 Blog</h2>
    <ul>
      <li><a href="#">Coming Soon: AI Assisted Banking System Overview</a></li>
      <li><a href="#">Coming Soon: Azure AI Search Best Practices</a></li>
    </ul>
  `
};

function navigate() {
  const hash = location.hash.replace('#', '') || 'home';
  app.innerHTML = routes[hash] || '<h2>404 - Page Not Found</h2>';
}

window.addEventListener('hashchange', navigate);
window.addEventListener('load', navigate);
