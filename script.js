const translations = {
  pt: {
    n1: "Início",
    n2: "Sobre",
    n3: "Projetos",
    n4: "Certificações",
    n5: "Formação",
    n6: "Carreira",
    n7: "Contato",
    lead: "Desenvolvedora Full Stack e estudante de Sistemas de Informação. Construo soluções web eficientes, de interfaces em Vue a modelos de IA em Python.",
    b1: "Ver projetos",
    b2: "Falar comigo",
    skp: "Tecnologias que uso no dia a dia",
    a1: "Mais do que apenas escrever código, gosto do processo de dar forma a ideias e resolver desafios reais na prática.",
    a2: "Sempre fui curiosa e encontrei na programação um jeito de transformar ideias em coisas que funcionam.",
    a3: "Meu objetivo é construir soluções eficientes que gerem impacto real na sociedade e no negócio, e melhorar a cada projeto.",
    certp: "Cursos e formações, com destaque para as tecnologias centrais do meu perfil.",
    view: "Ver projeto ↗",
    code: "Ver código ↗",
    cv: "Ver curso ↗",
    f1t: "Bacharelado em Sistemas de Informação · IFES",
    f1d: "Desenvolvimento web, programação orientada a objetos, estruturas de dados, banco de dados, arquitetura de computadores e redes.",
    f2t: "Técnico em Portos · IFES",
    f2d: "Operações logísticas e portuárias, controle de cargas e tecnologias para gestão da informação.",
    c1s: "Mar 2025 – Presente",
    c1t: "Desenvolvedora · Morpheus Júnior (IFES)",
    c1d: "Soluções web e landing pages para clientes externos: levantamento de requisitos, prototipagem, front-end e metodologias ágeis.",
    c2s: "Ago 2024 – Ago 2025",
    c2t: "Pesquisadora · IFES",
    c2d: "Deep Learning para classificação de imagens OCT com Python e TensorFlow, Grad-CAM para interpretação, análises comparativas e documentação técnica.",
    ch: "Vamos construir algo juntos",
    ct: "Aberta a novas oportunidades e projetos como Desenvolvedora Full Stack.",
    cp: "Copiar",
    cd: "Copiado!",
    ph: "Telefone",
  },
  en: {
    n1: "Home",
    n2: "About",
    n3: "Projects",
    n4: "Certifications",
    n5: "Education",
    n6: "Career",
    n7: "Contact",
    lead: "Full Stack developer and Information Systems student. I build efficient web solutions, from Vue interfaces to Python AI models.",
    b1: "View projects",
    b2: "Get in touch",
    skp: "Technologies I use every day",
    a1: "More than just writing code, I enjoy the process of giving shape to ideas and solving real-world challenges in practice.",
    a2: "I've always been curious, and programming became my way of turning ideas into things that work.",
    a3: "My goal is to build efficient solutions that make a real impact on society and business, and to get better with every project.",
    certp: "Courses and training, highlighting the core technologies of my profile.",
    view: "View project ↗",
    code: "View code ↗",
    cv: "View course ↗",
    f1t: "B.Sc. in Information Systems · IFES",
    f1d: "Web development, object-oriented programming, data structures, databases, computer architecture and networks.",
    f2t: "Technical Degree in Ports · IFES",
    f2d: "Logistics and port operations, cargo control and information-management technologies.",
    c1s: "Mar 2025 – Present",
    c1t: "Developer · Morpheus Júnior (IFES)",
    c1d: "Web solutions and landing pages for external clients: requirements gathering, prototyping, front-end and agile methods.",
    c2s: "Aug 2024 – Aug 2025",
    c2t: "Researcher · IFES",
    c2d: "Deep Learning for OCT image classification with Python and TensorFlow, Grad-CAM for interpretation, comparative analyses and technical documentation.",
    ch: "Let's build something together",
    ct: "Open to new opportunities and projects as a Full Stack Developer.",
    cp: "Copy",
    cd: "Copied!",
    ph: "Phone",
  },
};

const projects = [
  {
    name: "Chokmah",
    badge: "χ",
    color: "linear-gradient(135deg,#4fc08d,#35495e)",
    url: "https://chokmah-coral.vercel.app/",
    linkLabel: "view",
    tags: ["Vue", "Web"],
    description: {
      pt: 'Minha "biblioteca de Alexandria": um espaço para organizar o conhecimento que adquiri até aqui.',
      en: 'My "library of Alexandria": a space to organize the knowledge I have gained so far.',
    },
    highlights: {
      pt: ["Construído com Vue", "Organiza estudos e aprendizados", "Publicado na Vercel"],
      en: ["Built with Vue", "Organizes studies and learnings", "Deployed on Vercel"],
    },
    image: "images/chokmah.png",
  },
  {
    name: "Projeto Aprendiz",
    badge: "AP",
    color: "linear-gradient(135deg,#6a5acd,#2b2b6b)",
    url: "https://projetoaprendiz.vercel.app/",
    linkLabel: "view",
    tags: ["Vue", "Web"],
    description: {
      pt: "Página para gerenciar os conteúdos das aulas do Projeto Aprendiz.",
      en: "A page to manage the class content of Projeto Aprendiz.",
    },
    highlights: {
      pt: ["Desenvolvido em Vue", "Gestão dos conteúdos das aulas", "Publicado na Vercel"],
      en: ["Built with Vue", "Class content management", "Deployed on Vercel"],
    },
    image: "images/ProjetoAprendiz.png",
  },
  {
    name: "PagModelo",
    badge: "</>",
    color: "linear-gradient(135deg,#e34c26,#7a2a14)",
    url: "https://github.com/RaquelNeres/PagModelo",
    linkLabel: "code",
    tags: ["HTML", "IA"],
    description: {
      pt: "Página do modelo de IA para análise de imagens médicas desenvolvido na pesquisa.",
      en: "Page for the AI model for medical image analysis developed in my research.",
    },
    highlights: {
      pt: ["Interface do modelo da pesquisa", "Foco em imagens médicas"],
      en: ["Research model interface", "Focus on medical images"],
    },
    image: "images/PagModelo.png",
  },
  {
    name: "Classificação OCT",
    badge: "OCT",
    color: "linear-gradient(135deg,#f59e0b,#b45309)",
    url: "https://github.com/RaquelNeres/CLASSIFICACAO-DE-IMAGENS-DE-OCT-COM-IA-INTERPRETAVEL",
    linkLabel: "view",
    tags: ["Python", "TensorFlow", "IA"],
    description: {
      pt: "Aplicação web do modelo de IA da minha pesquisa: envie uma imagem OCT e receba a classificação.",
      en: "Web app for the AI model from my research: upload an OCT image and get its classification.",
    },
    highlights: {
      pt: ["Deep Learning com TensorFlow", "Upload de imagem OCT", "Hospedado no Hugging Face"],
      en: ["Deep Learning with TensorFlow", "OCT image upload", "Hosted on Hugging Face"],
    },
    image: "",
  },
  {
    name: "Automatizações Python",
    badge: "py",
    color: "linear-gradient(135deg,#3776ab,#1d3b57)",
    url: "https://github.com/RaquelNeres/Automatizacao_Python",
    linkLabel: "code",
    tags: ["Python"],
    description: {
      pt: "Coleção de scripts que automatizam tarefas do dia a dia.",
      en: "A collection of scripts that automate everyday tasks.",
    },
    highlights: {
      pt: ["Scripts em Python", "Menos trabalho repetitivo"],
      en: ["Python scripts", "Less repetitive work"],
    },
    image: "images/python.jpg",
  },
];

const certifications = [
  ["CS50", "Harvard CS50", "Harvard / CS50", "https://certificates.cs50.io/2529af81-6d66-43a1-bc69-1bd2d81fe503.pdf?size=letter"],
  ["EXCEL", "Excel do básico ao avançado", "Estudo aprofundado", ""],
  ["PYTHON", "AI Programming with Python", "https://www.udacity.com/certificate/e/1ad8add4-8b40-11ef-8bb7-f730c6b56189"],
];

// Exemplo: image: "images/vue.svg". Deixe vazio para manter o emblema colorido.
const skills = [
  { name: "Vue", badge: "Vue", color: "#42b883", image: "images/vuejs.png" },
  { name: "React", badge: "Re", color: "#149eca", image: "images/react.png" },
  { name: "TypeScript", badge: "TS", color: "#3178c6", image: "images/typescript.png" },
  { name: "JavaScript", badge: "JS", color: "#d4b106", image: "images/js.png" },
  { name: "Tailwind", badge: "Tw", color: "#0ea5b7", image: "images/tailwindcss.png" },
  { name: "HTML", badge: "H5", color: "#e34c26", image: "images/html.png" },
  { name: "CSS", badge: "C3", color: "#2965f1", image: "images/css.png" },
  { name: "Node.js", badge: "Nd", color: "#5fa04e", image: "images/nodejs.png" },
  { name: "Java", badge: "Jv", color: "#e76f00", image: "images/java.png" },
  { name: "Python", badge: "Py", color: "#3776ab", image: "images/python.png" },
  { name: "SQL", badge: "SQL", color: "#336791", image: "images/sql.png" },
  { name: "Docker", badge: "Dk", color: "#2496ed", image: "images/docker.png" },
  { name: "Android", badge: "An", color: "#3ddc84", image: "images/android.png" },
  { name: "Git", badge: "Git", color: "#f05032", image: "images/git.png" },
  { name: "C", badge: "C", color: "#555fa8", image: "images/c.png" },
];

const sunIcon =
  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
const moonIcon =
  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"/></svg>';

const root = document.documentElement;
let language = "pt";
let theme = "light";

try {
  const savedLanguage = localStorage.getItem("lg");
  language =
    savedLanguage === "en" || savedLanguage === "pt"
      ? savedLanguage
      : (navigator.language || "pt").slice(0, 2) === "en"
        ? "en"
        : "pt";

  const savedTheme = localStorage.getItem("th");
  theme =
    savedTheme === "dark" || savedTheme === "light"
      ? savedTheme
      : matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
} catch (error) {
  // Keep the default language and theme when browser storage is unavailable.
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

function renderSkills() {
  const allSkills = skills.concat(skills);
  document.getElementById("track").innerHTML = allSkills
    .map((skill) => {
      const icon = skill.image
        ? `<img src="${escapeHtml(skill.image)}" alt="" aria-hidden="true">`
        : `<i style="background:${escapeHtml(skill.color)}" aria-hidden="true">${escapeHtml(skill.badge)}</i>`;

      return `<div class="sk">${icon}<span>${escapeHtml(skill.name)}</span></div>`;
    })
    .join("");
}

function renderProjects() {
  const labels = translations[language];

  document.getElementById("row").innerHTML = projects
    .map((project) => {
      const thumbnail = project.image
        ? `<img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.name)}" loading="lazy">`
        : `<span>${escapeHtml(project.badge)}</span>`;
      const highlights = project.highlights[language]
        .map((highlight) => `<li>${escapeHtml(highlight)}</li>`)
        .join("");
      const tags = project.tags
        .map((tag) => `<span>${escapeHtml(tag)}</span>`)
        .join("");

      return `
        <article class="card">
          <div class="thumb" style="background:${escapeHtml(project.color)}">
            ${thumbnail}
          </div>
          <div class="cb">
            <h3>${escapeHtml(project.name)}</h3>
            <p>${escapeHtml(project.description[language])}</p>
            <ul>${highlights}</ul>
            <div class="tags">${tags}</div>
            <a href="${escapeHtml(project.url)}" target="_blank" rel="noopener">
              ${labels[project.linkLabel]}
            </a>
          </div>
        </article>`;
    })
    .join("");
}

function renderCertifications() {
  const labels = translations[language];
  document.getElementById("crow").innerHTML = certifications
    .map(
      ([badge, name, description, url]) => `
        <article class="card">
          <div class="cb cert">
            <span class="badge">${escapeHtml(badge)}</span>
            <h3>${escapeHtml(name)}</h3>
            <p>${escapeHtml(description)}</p>
            <a href="${escapeHtml(url)}" target="_blank" rel="noopener">${labels.cv}</a>
          </div>
        </article>`,
    )
    .join("");
}

function updateCounter(id) {
  const carousel = document.getElementById(id);
  const count = carousel.children.length;
  if (!count) return;

  const itemWidth = carousel.children[0].offsetWidth + 18;
  const current = Math.min(count, Math.round(carousel.scrollLeft / itemWidth) + 1);
  const format = (value) => String(value).padStart(2, "0");
  document.getElementById(`c-${id}`).textContent = `${format(current)} / ${format(count)}`;
}

function render() {
  const labels = translations[language];
  root.lang = language === "pt" ? "pt-BR" : "en";
  root.setAttribute("data-theme", theme);

  document.querySelectorAll("[data-k]").forEach((element) => {
    element.textContent = labels[element.dataset.k];
  });

  document.getElementById("th").innerHTML = theme === "dark" ? sunIcon : moonIcon;
  renderProjects();
  renderCertifications();
  ["row", "crow"].forEach(updateCounter);
}

renderSkills();
render();

document.querySelectorAll("[data-r]").forEach((button) => {
  button.onclick = () => {
    const carousel = document.getElementById(button.dataset.r);
    const itemWidth = carousel.children[0].offsetWidth + 18;
    carousel.scrollBy({
      left: itemWidth * Number(button.dataset.d),
      behavior: "smooth",
    });
  };
});

["row", "crow"].forEach((id) => {
  document.getElementById(id).addEventListener("scroll", () => updateCounter(id));
});

window.addEventListener("resize", () => {
  ["row", "crow"].forEach(updateCounter);
});

document.getElementById("th").onclick = () => {
  theme = theme === "dark" ? "light" : "dark";
  try {
    localStorage.setItem("th", theme);
  } catch (error) {
    // The selected theme still applies for the current page view.
  }
  render();
};

document.getElementById("lg").onclick = () => {
  language = language === "pt" ? "en" : "pt";
  try {
    localStorage.setItem("lg", language);
  } catch (error) {
    // The selected language still applies for the current page view.
  }
  render();
};

document.getElementById("cpb").onclick = function () {
  const button = this;
  const email = document.getElementById("em").textContent;

  function showCopiedMessage() {
    button.textContent = translations[language].cd;
    setTimeout(() => {
      button.textContent = translations[language].cp;
    }, 1500);
  }

  function fallbackCopy() {
    const input = document.createElement("textarea");
    input.value = email;
    document.body.appendChild(input);
    input.select();
    try {
      document.execCommand("copy");
    } catch (error) {
      // The clipboard API may be unavailable in older browsers.
    }
    input.remove();
    showCopiedMessage();
  }

  try {
    navigator.clipboard.writeText(email).then(showCopiedMessage, fallbackCopy);
  } catch (error) {
    fallbackCopy();
  }
};

const menuLinks = document.querySelectorAll("#menu a");
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        menuLinks.forEach((link) => {
          link.classList.toggle("on", link.getAttribute("href") === `#${entry.target.id}`);
        });
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px" },
);

document.querySelectorAll("section").forEach((section) => {
  sectionObserver.observe(section);
});
