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
    <h2>🚀 Career Objective</h2>
    <p>
      To contribute meaningfully in a forward-thinking organization by applying my expertise in cloud solutions, AI integration, and software development.
      I aim to drive innovation and operational efficiency while continuously enhancing my skills to align with evolving business goals and emerging technologies.
    </p>

    <h2>🛠️ Technical Skills</h2>
    <ul>
      <li><strong>Programming Languages:</strong> C#, JavaScript, Python, SQL, C</li>
      <li><strong>Mobile Technologies:</strong> React-Native</li>
      <li><strong>Web Technologies:</strong> React TS, Next TS</li>
      <li><strong>Backend:</strong> .NET Core, Microservices, ASP.NET Core, FastAPI</li>
      <li><strong>DevOps:</strong> CI/CD, Docker / Containers</li>
      <li><strong>Cloud:</strong> Microsoft Azure</li>
      <li><strong>Database:</strong> SQL Server, MongoDB, Cosmos DB</li>
      <li><strong>IoT:</strong> ESP32 dev, Arduino, ADXL335/MPU6050, Zigbee, Wi-Fi, Bluetooth</li>
      <li><strong>AI:</strong> OpenAI, LangChain, Semantic Kernel, Agentic Applications</li>
      <li><strong>Tools:</strong> Azure DevOps, Bitbucket, GitHub</li>
      <li><strong>IDEs:</strong> Visual Studio Code, Visual Studio 2022</li>
    </ul>

    <h2>🎓 Education & Certifications</h2>
    <ul>
      <li><strong>Master of Computer Science (2019-2021)</strong> - University of Management & Technology</li>
      <li><strong>Bachelor of Science (2017-2018)</strong> - Punjab University</li>
      <li><strong>Intermediate in Computer Science (2014-2016)</strong> - Govt. College Township</li>
      <li>AI-102: Azure AI Engineer Associate (2024-2026)</li>
      <li>DP-420: Azure Cosmos DB Developer Specialty (2025-2026)</li>
      <li>DP-600: Fabric Analytics Engineer Associate (2024-2026)</li>
      <li>DP-203: Azure Data Engineer Associate (2024-2025)</li>
      <li>AZ-204: Azure Associate Developer (2021-2022)</li>
    </ul>

    <h2>💼 Professional Experience</h2>
    <ul>
      <li>
        <strong>OZ Digital Consulting</strong> - Software Engineer (March 2021 - Present)
        <ul>
          <li>Full SDLC participation, SCRUM lead, mentoring juniors, R&D for POCs</li>
          <li>Integration with mobile teams, resolving bugs, Azure Cloud solutions</li>
          <li>Worked on .NET Core, Next TS, Azure AI Search, and more</li>
        </ul>
      </li>
      <li>
        <strong>SQODE (Remote)</strong> - Software Engineer (Aug 2019 - Feb 2021)
        <ul>
          <li>Developed reusable code in C#, ASP.NET MVC 5, WebAPI services</li>
          <li>Designed efficient databases and implemented best coding standards</li>
        </ul>
      </li>
    </ul>

    <h2>📂 Projects</h2>
    <ul>
      <li><strong>Owwll Link:</strong> React Native, Azure DevOps, C#.NET Microservices</li>
      <li><strong>FDB Link:</strong> ReactJs, Azure DevOps, C#.NET Microservices</li>
      <li><strong>Ozway:</strong> Azure DevOps, Reusable Framework Initiative</li>
      <li><strong>Powerhouse Upskill:</strong> MVC, jQuery, AJAX, Bootstrap</li>
    </ul>
  `,
  contact: `
    <h2>📫 Contact Information</h2>
    <ul>
      <li><strong>Phone:</strong> +92307-4242895</li>
      <li><strong>Email:</strong> <a href="mailto:akilli.raza@gmail.com">akilli.raza@gmail.com</a></li>
      <li><strong>Location:</strong> Lahore, Punjab, Pakistan</li>
      <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/ali-raza-881494205/" target="_blank">Profile</a></li>
    </ul>
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

// Navigation Event Listeners
window.addEventListener('hashchange', navigate);
window.addEventListener('load', navigate);
