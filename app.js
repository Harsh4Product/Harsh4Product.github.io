const profile = {
  name: "Harsh Sharma",
  title: "Full Stack AI Product Manager",
  location: "Gurugram (India)",
  email: "harsh25leo@gmail.com",
  linkedin: "https://www.linkedin.com/in/harsh-sharma-790878111/",
  Website: "https://harsh25leo.github.io/harsh.sharma.github.io/",
  tagline:
    "I turn product ideas into credible, demoable systems by combining product strategy, AI workflows, and hands-on engineering.",
  metrics: [
    { value: "0-to-1", label: "product thinking" },
    { value: "AI-first", label: "delivery style" },
    { value: "SaaS", label: "platform focus" },
    { value: "Builder", label: "operating mode" }
  ],
  ticker: [
    "Product Strategy",
    "AI Prototypes",
    "Payment Systems",
    "Rapid MVPs",
    "Technical Storytelling",
    "Stakeholder Alignment",
    "Automation",
    "APIs"
  ]
};

const navItems = [
  { id: "hero", label: "Home" },
  { id: "philosophy", label: "Approach" },
  { id: "experience", label: "Experience" },
  { id: "products", label: "Products" },
  { id: "prototypes", label: "Prototypes" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

const principles = [
  {
    label: "Approach",
    title: "Ship prototypes, not slide decks",
    text:
      "Shape ideas into working MVPs that leaders, customers, and engineering teams can react to quickly."
  },
  {
    label: "Edge",
    title: "Bridge product and engineering",
    text:
      "Translate strategy into architecture, user flows, APIs, and stories that make trade-offs visible."
  },
  {
    label: "Philosophy",
    title: "Fail fast. Learn faster. Ship smarter.",
    text:
      "Use small experiments to validate demand before heavy engineering investment begins."
  },
  {
    label: "Leadership",
    title: "Customer-first, always",
    text:
      "Align cross-functional teams around a clear customer outcome, not a feature checklist."
  },
  {
    label: "AI-First",
    title: "AI as leverage, not novelty",
    text:
      "Use AI tools to accelerate discovery, development, testing, support, and operational workflows."
  }
];

const experience = [
  {
    period: "Current Focus",
    company: "Independent Product Builder",
    role: "AI, SaaS, and payment platform initiatives",
    tags: ["Product", "AI", "Full Stack"],
    bullets: [
      "Designs credible product narratives backed by working prototypes and clear system flows.",
      "Builds lightweight proof-of-concepts for automation, payment journeys, dashboards, and AI assistants.",
      "Connects business goals with practical implementation plans that engineering teams can execute."
    ]
  },
  {
    period: "Recent Work",
    company: "Digital Product Platforms",
    role: "Product strategy and execution",
    tags: ["Roadmaps", "APIs", "Stakeholders"],
    bullets: [
      "Defines roadmap slices that can be tested with customers before scaling into full programs.",
      "Creates product documentation, workflow maps, and demo experiences for stakeholder buy-in.",
      "Balances usability, technical feasibility, operational risk, and launch readiness."
    ]
  },
  {
    period: "Foundation",
    company: "Technology Delivery",
    role: "Builder-first product practice",
    tags: ["Delivery", "UX", "Systems"],
    bullets: [
      "Works across discovery, design, development, QA thinking, and release preparation.",
      "Uses structured problem solving to turn ambiguous requirements into crisp execution plans.",
      "Keeps communication simple, visual, and outcome-oriented for mixed technical and business audiences."
    ]
  }
];

const products = [
  {
    icon: "SP",
    name: "SaaS Product",
    text:
      "Building SaaS solutions that simplify freight management, automate logistics workflows, and enhance supply chain visibility.",
    tags: ["Payments", "SaaS", "Dashboards"]
  },
  {
    icon: "AI",
    name: "AI Operations Assistant",
    text:
      "Applied AI-driven testing techniques to automate test case generation, improve test coverage, accelerate release cycles, and enhance software quality.",
    tags: ["AI", "Automation Scripts"]
  },
  {
    icon: "CX",
    name: "Customer Journey Console",
    text:
      "A unified view for product, support, and operations teams to inspect user journeys, friction points, and improvement opportunities.",
    tags: ["Customer Experience", "Analytics", "B2B"]
  }
];

const prototypes = [
  {
    time: "Concept to demo sprint",
    title: "Smart Routing Simulator",
    subtitle: "Payment success and fallback modelling",
    outcome:
      "Shows how transaction rules, gateway health, and cost preferences can influence payment routing.",
    stack: ["JavaScript", "APIs", "Dashboards"]
  },
  {
    time: "Rapid AI workflow",
    title: "Support Knowledge Copilot",
    subtitle: "Internal answer assistant",
    outcome:
      "Turns policy and product documentation into draft responses with source-aware reasoning.",
    stack: ["RAG", "OpenAI APIs", "Vector Search"]
  },
  {
    time: "Interactive MVP",
    title: "Merchant Onboarding Flow",
    subtitle: "KYC, gateway setup, and approval states",
    outcome:
      "Makes operational handoffs visible through status tracking, document states, and review queues.",
    stack: ["React-style UI", "Forms", "Workflow Design"]
  },
  {
    time: "Live demo ready",
    title: "Executive Metrics Board",
    subtitle: "Leadership reporting surface",
    outcome:
      "Compresses product health, revenue signals, risks, and decisions into one scan-friendly view.",
    stack: ["Analytics", "Charts", "Storytelling"]
  }
];

const skills = [
  {
    group: "Core Product Management",
    items: [
      "Product Strategy",
      "Roadmap Planning",
      "Stakeholder Management",
      "Backlog Prioritisation",
      "User-Centric Design",
      "Technical Storytelling"
    ]
  },
  {
    group: "AI Engineering",
    items: [
      "Prompt Engineering",
      "RAG Systems",
      "Azure AI Foundry",
      "Azure AI Search",
      "Agents",
      "OpenAI APIs"
    ]
  },
  {
    group: "Rapid Development",
    items: [
      "JavaScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "REST APIs",
      "Postman"
    ]
  },
  {
    group: "AI Tools",
    items: ["Claude Code", "GitHub Copilot", "Cursor AI", "Bolt.new", "NotebookLM"]
  },
  {
    group: "PM Tools",
    items: ["Jira", "Azure DevOps", "Aha", "Confluence", "Miro", "Notion"]
  }
];

const certifications = [
  { issuer: "Product Practice", name: "Product Strategy & Discovery", credential: "Professional credential" },
  { issuer: "AI Practice", name: "Applied AI Product Workflows", credential: "Professional credential" },
  { issuer: "Cloud Practice", name: "Modern SaaS Foundations", credential: "Professional credential" }
];

const projects = [
  {
    name: "FlowPay Product Concept",
    badge: "Self-built",
    category: "Payment technology",
    text:
      "A professional dashboard prototype for a payment gateway aggregator, covering transactions, smart routing, settlements, fraud signals, and developer workflows.",
    features: [
      "Merchant dashboard and KPI surface",
      "Transaction search and filter experience",
      "Smart routing rule concepts",
      "Refund and settlement operations",
      "Developer API experience"
    ],
    stack: ["HTML", "CSS", "JavaScript"]
  },
  {
    name: "AI Product Portfolio System",
    badge: "AI-powered",
    category: "Professional brand",
    text:
      "A reusable content structure for presenting experience, prototypes, product thinking, and consulting credibility in a sharp one-page format.",
    features: [
      "Single-page navigation",
      "Builder-first narrative",
      "Reusable cards and data arrays",
      "Responsive sections",
      "Contact-ready closing section"
    ],
    stack: ["Static Web", "Content Design", "SEO"]
  }
];

function icon(name) {
  const icons = {
    arrow: "->",
    mail: "@",
    copy: "[]",
    external: "^",
    check: "OK"
  };
  return icons[name] || "";
}

function renderApp() {
  document.getElementById("app").innerHTML = `
    <header class="site-header" id="top">
      <a class="brand" href="#hero" aria-label="${profile.name} home">
        <span>FH</span>
        <strong>${profile.name}</strong>
      </a>
      <nav class="nav" aria-label="Primary navigation">
        ${navItems.map(item => `<a href="#${item.id}">${item.label}</a>`).join("")}
      </nav>
      <a class="header-cta" href="mailto:${profile.email}">${icon("mail")} Email</a>
    </header>

    <main>
      ${heroSection()}
      ${philosophySection()}
      ${experienceSection()}
      ${productsSection()}
      ${prototypeSection()}
      ${skillsSection()}
      ${projectsSection()}
      ${contactSection()}
    </main>
  `;

  bindInteractions();
}

function heroSection() {
  return `
    <section class="hero section" id="hero">
      <div class="hero-copy">
        <p class="eyebrow">Professional profile</p>
        <h1>${profile.name}<span> builds AI-ready product systems.</span></h1>
        <p class="title-line">${profile.title} · ${profile.location}</p>
        <p class="hero-text">${profile.tagline}</p>
        <div class="hero-actions">
          <a class="button primary" href="#experience">View Experience ${icon("arrow")}</a>
          <a class="button secondary" href="mailto:${profile.email}">${icon("mail")} Start a Conversation</a>
        </div>
      </div>
      <div class="profile-visual" aria-label="Profile visual">
        <div class="portrait">
          <div class="portrait-grid"></div>
          <img src="Harsh - Passport Photo.jpeg" alt="Profile Photo">
        </div>
        <div class="signal-card top">
          <b>Builder-first</b>
          <small>Strategy backed by working demos</small>
        </div>
        <div class="signal-card bottom">
          <b>AI + Product</b>
          <small>Useful systems over empty novelty</small>
        </div>
      </div>
      <div class="ticker" aria-hidden="true">
        <div>${[...profile.ticker, ...profile.ticker].map(item => `<span>${item}</span>`).join("")}</div>
      </div>
      <div class="metric-strip">
        ${profile.metrics.map(metric => `<article><strong>${metric.value}</strong><span>${metric.label}</span></article>`).join("")}
      </div>
    </section>
  `;
}

function philosophySection() {
  return `
    <section class="section" id="philosophy">
      ${sectionIntro("Philosophy", "How I Think And Work", "A product leader's job is to reduce ambiguity, create momentum, and make the next decision easier.")}
      <div class="principle-grid">
        ${principles.map((item, index) => `
          <article class="principle-card">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <p>${item.label}</p>
            <h3>${item.title}</h3>
            <small>${item.text}</small>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function experienceSection() {
  return `
    <section class="section" id="experience">
      ${sectionIntro("Experience", "Career Narrative", "A concise view of the work style and professional surface this site is designed to communicate.")}
      <div class="timeline">
        ${experience.map(item => `
          <article class="timeline-card">
            <div class="time">${item.period}</div>
            <div class="timeline-content">
              <p class="eyebrow">${item.company}</p>
              <h3>${item.role}</h3>
              <div class="tag-row">${item.tags.map(tag).join("")}</div>
              <ul>${item.bullets.map(bullet => `<li>${bullet}</li>`).join("")}</ul>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function productsSection() {
  return `
    <section class="section" id="products">
      ${sectionIntro("Products", "Product Surfaces", "Examples of the kind of product problems and systems the profile is shaped around.")}
      <div class="card-grid three">
        ${products.map(item => `
          <article class="product-card">
            <div class="product-icon">${item.icon}</div>
            <h3>${item.name}</h3>
            <p>${item.text}</p>
            <div class="tag-row">${item.tags.map(tag).join("")}</div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function prototypeSection() {
  return `
    <section class="section" id="prototypes">
      ${sectionIntro("Rapid Prototypes", "Proof That Ideas Can Move", "Numbered prototype cards show speed, practical thinking, and technical fluency.")}
      <div class="prototype-grid">
        ${prototypes.map((item, index) => `
          <article class="prototype-card">
            <span class="ghost-number">${String(index + 1).padStart(2, "0")}</span>
            <p class="build-time">${item.time}</p>
            <h3>${item.title}</h3>
            <strong>${item.subtitle}</strong>
            <p>${item.outcome}</p>
            <div class="tag-row">${item.stack.map(tag).join("")}</div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function skillsSection() {
  return `
    <section class="section" id="skills">
      ${sectionIntro("Skills", "Capabilities And Credentials", "Grouped for quick scanning by recruiters, founders, clients, and collaborators.")}
      <div class="skills-layout">
        <div class="skill-groups">
          ${skills.map(group => `
            <article class="skill-card">
              <h3>${group.group}</h3>
              <div class="tag-row">${group.items.map(tag).join("")}</div>
            </article>
          `).join("")}
        </div>
        <aside class="cert-panel">
          <p class="eyebrow">Certifications</p>
          <h3>Professional Learning</h3>
          ${certifications.map(item => `
            <div class="cert-card">
              <span>${icon("check")}</span>
              <div>
                <strong>${item.name}</strong>
                <small>${item.issuer} · ${item.credential}</small>
              </div>
            </div>
          `).join("")}
        </aside>
      </div>
    </section>
  `;
}

function projectsSection() {
  return `
    <section class="section" id="projects">
      ${sectionIntro("Side Projects", "Built Outside The Resume", "Project cards give the profile a builder signal and make the work easier to discuss.")}
      <div class="card-grid two">
        ${projects.map(item => `
          <article class="project-card">
            <div class="project-head">
              <div>
                <span class="badge">${item.badge}</span>
                <h3>${item.name}</h3>
              </div>
              <small>${item.category}</small>
            </div>
            <p>${item.text}</p>
            <ul>${item.features.map(feature => `<li>${feature}</li>`).join("")}</ul>
            <div class="tag-row">${item.stack.map(tag).join("")}</div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function contactSection() {
  return `
    <section class="section contact-section" id="contact">
      <div>
        <p class="eyebrow">Contact</p>
        <h2>Let us build the next useful thing.</h2>
        <p>
          Reach out for AI product work, rapid prototypes, payment platform ideas, or collaborations that need both product judgement and builder energy.
        </p>
      </div>
      <div class="contact-actions">
        <a class="button primary" href="mailto:${profile.email}">${icon("mail")} ${profile.email}</a>
        <button class="button secondary" id="copy-email">${icon("copy")} Copy Email</button>
        <a class="button ghost" href="${profile.linkedin}" target="_blank" rel="noreferrer">${icon("external")} LinkedIn</a>
      </div>
    </section>
  `;
}

function sectionIntro(kicker, title, text) {
  return `
    <div class="section-intro">
      <p class="eyebrow">${kicker}</p>
      <h2>${title}</h2>
      <p>${text}</p>
    </div>
  `;
}

function tag(label) {
  return `<span class="tag">${label}</span>`;
}

function bindInteractions() {
  const header = document.querySelector(".site-header");
  const navLinks = [...document.querySelectorAll(".nav a")];
  const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);

  const setHeaderState = () => {
    header.classList.toggle("scrolled", window.scrollY > 24);
  };

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-40% 0px -52% 0px" }
  );

  sections.forEach(section => observer.observe(section));
  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });

  const copyButton = document.getElementById("copy-email");
  if (copyButton) {
    copyButton.addEventListener("click", async () => {
      await navigator.clipboard.writeText(profile.email);
      copyButton.textContent = "Copied";
      setTimeout(() => {
        copyButton.textContent = `${icon("copy")} Copy Email`;
      }, 1600);
    });
  }
}

renderApp();
