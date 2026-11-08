const { useState, useRef, useEffect } = React;

// Auto-calculate experience from career start date
const calculateExperience = (startDate) => {
  const start = new Date(startDate);
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  return `${years} years ${months} months`;
};

const CAREER_START = "2013-06-01";
const totalExperience = calculateExperience(CAREER_START);

const commandList = [
  { cmd: "whoami", desc: "To read something about me" },
  { cmd: "experience", desc: "To read about my work experience" },
  { cmd: "projects", desc: "To read about project i have done" },
  { cmd: "all", desc: "To show all sections" },
  { cmd: "help", desc: "To get command helps" },
  { cmd: "contact", desc: "To get contact details" }
];

// Extra commands: shown in `help`, used for Tab autocomplete, not on the landing buttons
const extraCommands = [
  { cmd: "neofetch", desc: "System info, operator edition" },
  { cmd: "hunt", desc: "Run a live threat hunt simulation" },
  { cmd: "resume", desc: "Download my resume (PDF)" },
  { cmd: "theme", desc: "Switch theme: cyan | matrix | amber | redteam" },
  { cmd: "history", desc: "Show commands you have run" },
  { cmd: "ls", desc: "List files" },
  { cmd: "date", desc: "Print the current date" },
  { cmd: "clear", desc: "Clear the terminal" }
];

const hiddenCommands = ["sudo", "cat", "echo", "exit", "rm", "hack", "matrix"];

const allCommandNames = [
  ...commandList.map((c) => c.cmd),
  ...extraCommands.map((c) => c.cmd),
  ...hiddenCommands
];

const roleTaglines = [
  "Detection Engineer",
  "SOAR Architect",
  "AI Security Builder",
  "Threat Hunter",
  "Product Manager // SecOps"
];

const THEMES = { cyan: 0, matrix: -63, amber: -150, redteam: 160 };

const readStore = (store, key) => {
  try {
    return window[store].getItem(key);
  } catch (error) {
    return null;
  }
};

const writeStore = (store, key, value) => {
  try {
    window[store].setItem(key, value);
  } catch (error) {
    /* storage unavailable */
  }
};

const applyTheme = (name) => {
  const deg = THEMES[name] ?? 0;
  document.documentElement.style.filter = deg ? `hue-rotate(${deg}deg)` : "";
  document.documentElement.dataset.theme = name;
};

const prefersReducedMotion = () =>
  window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Levenshtein distance for "did you mean" suggestions
const editDistance = (a, b) => {
  const dp = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 1; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
    }
  }
  return dp[a.length][b.length];
};

const suggestCommand = (input) => {
  const visible = [...commandList, ...extraCommands].map((c) => c.cmd);
  let best = null;
  let bestScore = Infinity;
  visible.forEach((cmd) => {
    const score = editDistance(input, cmd);
    if (score < bestScore) {
      bestScore = score;
      best = cmd;
    }
  });
  return bestScore <= 3 ? best : null;
};

const landingLinks = [
  { label: "GitHub", url: "https://github.com/GNishanSingh" },
  { label: "Twitter", url: "https://twitter.com/g_nishan_singh" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/gurmukhnishan-singh/" }
];

const radarData = [
  { label: "Detection", value: 5 },
  { label: "SOAR", value: 5 },
  { label: "SIEM", value: 5 },
  { label: "AI Security", value: 4 },
  { label: "Automation", value: 4 },
  { label: "Data Eng", value: 4 },
  { label: "Leadership", value: 4 }
];

// Key skills marked for highlighting
const keySkills = [
  "Detection Engineering",
  "SOAR / XSOAR",
  "SIEM",
  "Python",
  "Product Strategy",
  "MITRE ATT&CK",
  "AI / AI Security"
];

const resume = {
  name: "Gurmukh Nishan Singh",
  role: "Product Manager | SOC and IT Automation",
  location: "Bangalore",
  availability: `Total experience: ${totalExperience}`,
  careerStart: CAREER_START,
  summary:
    "Result-oriented cybersecurity professional across infrastructure technologies, cybersecurity, and development. Skilled in PowerShell, Python, JavaScript, detection and data engineering, SOC automation, red teaming, and exploit development; hands-on with SOAR, UEBA, SIEM, sandboxing, MITRE ATT&CK, malware analysis, log monitoring, and correlation. Experienced in translating security requirements into techno-functional specs, compliance and risk assessment, and leading teams to shared goals.",
  highlights: [
    {
      title: "Key Expertise",
      bullets: [
        "Detection Engineering & MITRE ATT&CK mapping",
        "SOAR/XSOAR automation & playbook development",
        "SIEM platforms (Splunk, Securonix, ELK, Sentinel)",
        "Product strategy & roadmap ownership"
      ]
    },
    {
      title: "Core Strengths",
      bullets: [
        "SOC automation and incident response workflows",
        "Threat intelligence integration & enrichment",
        "Team leadership and cross-functional delivery",
        "Data engineering & pipeline architecture"
      ]
    }
  ],
  skills: [
    { name: "Detection Engineering", isKey: true },
    { name: "SOAR / XSOAR", isKey: true },
    { name: "SIEM (Splunk, Securonix, ELK)", isKey: true },
    { name: "Product Strategy", isKey: true },
    { name: "MITRE ATT&CK", isKey: true },
    { name: "Python", isKey: true },
    { name: "AI / AI Security", isKey: true },
    { name: "PowerShell", isKey: false },
    { name: "JavaScript", isKey: false },
    { name: "Kafka", isKey: false },
    { name: "Kubernetes", isKey: false },
    { name: "Redis", isKey: false },
    { name: "PostgreSQL / Neo4j", isKey: false },
    { name: "AWS / Azure", isKey: false }
  ],
  experience: [
    {
      role: "Product Manager",
      company: "Quilr Security LLP",
      period: "Jan 2025 - Present",
      bullets: [
        "AI Security Platform & Agent Framework: Designed Quilr Agent Service to orchestrate autonomous agents for AI-security findings, coaching, and guided remediation; defined lifecycle, permissions, tool invocation, and auditability for governed execution.",
        "Security Data Fabric & Ingestion Platform: Aggregated IdP, security tooling, endpoint/SaaS/AI telemetry with scalable pipelines, normalization layers, and entity correlation for real-time and historical analysis.",
        "AI & SaaS Risk Prevention Rule Engine: Built policy/rule authoring to detect and prevent data leakage, weak or missing MFA, credential exposure, and misconfigurations with severity scoring and enforcement hooks across AI apps, browsers, and SaaS.",
        "AI Red Teaming Framework: Created automated attack simulations for home-grown, open-source, and third-party models aligned with OWASP LLM Top 10 and MITRE ATLAS to generate findings and risk heatmaps.",
        "Malicious Prompt Classification Models: Trained ML/LLM classifiers for prompt injection, jailbreak, exfiltration, and policy bypass patterns; integrated inference into real-time detection pipelines for AI-app protection.",
        "Obfuscation Detection Framework: Detected encoding-based evasion, token splitting, Unicode abuse, semantic masking, and multi-stage prompt obfuscation through heuristic, statistical, and model-based techniques to reduce false negatives."
      ]
    },
    {
      role: "Cybersecurity Consultant",
      company: "Societe Generale Global Solution Centre",
      period: "Apr 2024 - Jan 2025",
      bullets: [
        "Develop detection rules in Splunk and Azure Sentinel and map to MITRE ATT&CK and NIST CSF.",
        "Automate incident response and SOC tasks with XSOAR playbooks and workflows.",
        "Integrate threat intelligence feeds and optimize log parsing and alert quality.",
        "Execute red teaming engagements and CI/CD pipelines for detection content."
      ]
    },
    {
      role: "Senior Engineer",
      company: "Ares Operations India LLP",
      period: "Mar 2023 - Mar 2024",
      bullets: [
        "Deployed and managed XSOAR with BYOI integrations for threat intelligence.",
        "Managed Splunk and CrowdStrike alerts, dashboards, and reporting for SOC teams.",
        "Integrated data sources through Cribl and automated scripts for operational efficiency.",
        "Mentored junior team members and improved incident response workflows."
      ]
    },
    {
      role: "Technical Lead",
      company: "Securonix India Pvt. Ltd.",
      period: "Dec 2021 - Mar 2023",
      bullets: [
        "Led red teaming exercises and tuned detection content against lab attacks.",
        "Built content validation framework and a content portal for policies and threat models.",
        "Revamped autonomous threat sweep and delivered detection engineering projects.",
        "Managed team delivery, metrics, and Scrum processes."
      ]
    },
    {
      role: "Technical Lead",
      company: "Netsurion Technologies Pvt. Ltd.",
      period: "Jun 2015 - Dec 2021",
      bullets: [
        "Built integrations to ingest logs from on-prem, cloud, and database sources.",
        "Authored SIEM use cases and MITRE ATT&CK detections; reduced false positives.",
        "Developed IR playbooks and enrichment workflows for SOC automation.",
        "Led cross-team delivery with SOC, support, and sales stakeholders."
      ]
    },
    {
      role: "System Engineer",
      company: "Axon Network Solutions Pvt. Ltd.",
      period: "Nov 2013 - Jun 2015",
      bullets: ["System engineering for infrastructure and security operations."]
    },
    {
      role: "Desktop Support Engineer",
      company: "IT Support Desk",
      period: "Jun 2013 - Nov 2013",
      bullets: ["Desktop support and endpoint troubleshooting."]
    }
  ],
  projects: [
    {
      name: "Igris",
      description: "AI-powered workflow automation and orchestration platform.",
      tags: ["AI", "Automation", "Workflow"],
      link: "https://info.g-nishansingh.com/igris-flow"
    },
    {
      name: "Secu-AI",
      description: "Open-source AI tools for SOC investigation and analyst productivity.",
      tags: ["AI", "SOC", "Open Source"],
      note: "Demo available on request."
    },
    {
      name: "SIEM Connectors and Integrations",
      description:
        "Connector suite for Microsoft 365, AWS, Azure, and 50+ product integrations.",
      tags: ["Integrations", "SIEM", "Cloud"]
    },
    {
      name: "Jupyter Threat Hunting",
      description:
        "Jupyter Notebook integration with Netsurion SIEM for automated alert investigation.",
      tags: ["Jupyter", "Threat Hunting", "Automation"]
    },
    {
      name: "MITRE ATT&CK Integration",
      description: "Mapped detection content to MITRE ATT&CK within Netsurion SIEM.",
      tags: ["MITRE ATT&CK", "Detection Engineering"]
    },
    {
      name: "Securonix Content Platform",
      description:
        "Content portal, validation framework (Salus), and ATS revamp for Securonix SIEM.",
      tags: ["Securonix", "Content Ops", "Quality"]
    },
    {
      name: "Detection as Code",
      description: "SVN and Jenkins pipeline for detection content versioning and validation.",
      tags: ["CI/CD", "Detection as Code"]
    },
    {
      name: "XSOAR Playbooks and BYOI",
      description: "Phishing response, external indicator blocking, and IOC integrations.",
      tags: ["XSOAR", "SOAR", "Playbooks"]
    },
    {
      name: "Advanced Correlation Scripts",
      description:
        "Simultaneous login, kerberoasting, and password spraying correlations for SIEM.",
      tags: ["Correlation", "SIEM"]
    },
    {
      name: "Exploit Development",
      description: "Windows Native API exploit for controlled malicious content downloads.",
      tags: ["Exploit Dev", "Windows"]
    }
  ],
  education: [
    {
      degree: "B.E",
      school: "Jammu University",
      period: "2012"
    },
    {
      degree: "H.S.C",
      school: "JKBOSE",
      period: "2008"
    },
    {
      degree: "S.C",
      school: "JKBOSE",
      period: "2006"
    }
  ],
  certifications: [
    "ATT&CK Defender Cyber Threat Intelligence Certification",
    "ATT&CK Defender SOC Assessment Certification",
    "Certified SNYPR Content Developer, Data Integrator, and Security Analyst"
  ],
  contact: [
    { label: "Email", value: "gurmukhnishansingh@gmail.com" },
    { label: "Phone", value: "+91 6005122291" },
    { label: "LinkedIn", value: "https://www.linkedin.com/in/gurmukhnishan-singh/" },
    { label: "GitHub", value: "https://github.com/GNishanSingh" },
    { label: "Twitter", value: "https://twitter.com/g_nishan_singh" },
    { label: "Website", value: "https://info.g-nishansingh.com" }
  ]
};

const promptLabel = "g_nishan_singh >";

function Typewriter({ words, typeSpeed = 70, deleteSpeed = 35, pause = 1600 }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex % words.length];
    let delay = deleting ? deleteSpeed : typeSpeed;
    if (!deleting && text === word) delay = pause;
    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setWordIndex((i) => i + 1);
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex]);

  return (
    <span className="typewriter" aria-label={words.join(", ")}>
      <span aria-hidden="true">{text}</span>
      <span className="typewriter-caret" aria-hidden="true"></span>
    </span>
  );
}

function StatusStrip() {
  const [now, setNow] = useState(new Date());
  const loadedAt = useRef(Date.now()).current;

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const session = Math.floor((now.getTime() - loadedAt) / 1000);
  const mm = String(Math.floor(session / 60)).padStart(2, "0");
  const ss = String(session % 60).padStart(2, "0");
  const ist = now.toLocaleTimeString("en-GB", { timeZone: "Asia/Kolkata", hour12: false });

  return (
    <div className="status-strip" aria-label="Live status">
      <span className="status-item">
        <span className="status-dot status-dot-ok"></span>SOC: ONLINE
      </span>
      <span className="status-item">THREAT LEVEL: <b className="status-low">LOW</b></span>
      <span className="status-item">BLR {ist} IST</span>
      <span className="status-item">SESSION {mm}:{ss}</span>
      <span className="status-item">XP {totalExperience.replace(" years ", "y ").replace(" months", "m")}</span>
    </div>
  );
}

function Landing({ showDetails = true, onCommand }) {
  return (
    <div className="landing">
      <h1 className="landing-title" data-text="Gurmukhnishan Singh">Gurmukhnishan Singh</h1>
      <div className="landing-tagline">
        <span className="tagline-prefix">&gt;_</span>
        <Typewriter words={roleTaglines} />
      </div>
      <div className="landing-links">
        {landingLinks.map((link, index) => (
          <React.Fragment key={link.label}>
            <a href={link.url} target="_blank" rel="noreferrer">
              {link.label}
            </a>
            {index < landingLinks.length - 1 ? <span className="landing-sep">|</span> : null}
          </React.Fragment>
        ))}
      </div>
      <div className="command-links">
        {commandList.map((item) => (
          <button
            key={item.cmd}
            type="button"
            className="command-link"
            onClick={() => onCommand && onCommand(item.cmd)}
            aria-label={`Run ${item.cmd}`}
          >
            {item.cmd}
          </button>
        ))}
      </div>
      {showDetails ? (
        <>
          <div className="landing-intro">Click a command above or type in the prompt to explore.</div>
          <div className="landing-tips">
            <span><kbd>Tab</kbd> autocomplete</span>
            <span><kbd>↑</kbd><kbd>↓</kbd> history</span>
            <span>
              try{" "}
              <button type="button" className="inline-cmd" onClick={() => onCommand && onCommand("neofetch")}>neofetch</button>
              {" "}or{" "}
              <button type="button" className="inline-cmd" onClick={() => onCommand && onCommand("hunt")}>hunt</button>
            </span>
          </div>
        </>
      ) : null}
    </div>
  );
}

function TextBlock({ lines }) {
  return <pre className="terminal-output">{lines.join("\n")}</pre>;
}

function RadarChart({ data, size = 230, levels = 4, max = 5 }) {
  const padding = 48;
  const viewSize = size + padding * 2;
  const center = viewSize / 2;
  const radius = size / 2 - 12;
  const labelOffset = 22;
  const angleStep = (Math.PI * 2) / data.length;
  const startAngle = -Math.PI / 2;

  const pointAt = (r, angle) => ({
    x: center + r * Math.cos(angle),
    y: center + r * Math.sin(angle)
  });

  const gridPolygons = Array.from({ length: levels }, (_, index) => {
    const r = radius * ((index + 1) / levels);
    const points = data
      .map((_, i) => {
        const angle = startAngle + i * angleStep;
        const pt = pointAt(r, angle);
        return `${pt.x},${pt.y}`;
      })
      .join(" ");
    return points;
  });

  const areaPoints = data
    .map((item, i) => {
      const angle = startAngle + i * angleStep;
      const pt = pointAt(radius * (item.value / max), angle);
      return `${pt.x},${pt.y}`;
    })
    .join(" ");

  return (
    <svg className="radar-chart" viewBox={`0 0 ${viewSize} ${viewSize}`} role="img" aria-label="Skill radar chart showing expertise levels in Detection, SOAR, SIEM, AI Security, Automation, Data Engineering, and Leadership">
      <g className="radar-grid">
        {gridPolygons.map((points, index) => (
          <polygon key={`grid-${index}`} points={points} />
        ))}
      </g>
      <g className="radar-axis">
        {data.map((item, i) => {
          const angle = startAngle + i * angleStep;
          const pt = pointAt(radius, angle);
          return <line key={item.label} x1={center} y1={center} x2={pt.x} y2={pt.y} />;
        })}
      </g>
      <polygon className="radar-area" points={areaPoints} />
      <g className="radar-dots">
        {data.map((item, i) => {
          const angle = startAngle + i * angleStep;
          const pt = pointAt(radius * (item.value / max), angle);
          return <circle key={`dot-${item.label}`} cx={pt.x} cy={pt.y} r="2.5" />;
        })}
      </g>
      <g className="radar-labels">
        {data.map((item, i) => {
          const angle = startAngle + i * angleStep;
          const pt = pointAt(radius + labelOffset, angle);
          const anchor =
            Math.abs(Math.cos(angle)) < 0.2 ? "middle" : Math.cos(angle) > 0 ? "start" : "end";
          return (
            <text key={`label-${item.label}`} x={pt.x} y={pt.y} textAnchor={anchor}>
              {item.label}
            </text>
          );
        })}
      </g>
    </svg>
  );
}

function buildWhoamiLines() {
  const lines = [
    resume.name,
    `${resume.role} // ${resume.location}`,
    resume.availability,
    "",
    resume.summary,
    ""
  ];

  resume.highlights.forEach((group) => {
    lines.push(`${group.title}:`);
    group.bullets.forEach((bullet) => lines.push(`- ${bullet}`));
    lines.push("");
  });

  const keySkillNames = resume.skills.filter(s => s.isKey).map(s => s.name);
  const otherSkillNames = resume.skills.filter(s => !s.isKey).map(s => s.name);

  lines.push("Key Skills:");
  lines.push(keySkillNames.join(" | "));
  lines.push("");
  lines.push("Other Skills:");
  lines.push(otherSkillNames.join(", "));

  return lines;
}

function SkillsDisplay() {
  const keySkills = resume.skills.filter(s => s.isKey);
  const otherSkills = resume.skills.filter(s => !s.isKey);

  return (
    <div className="skills-display">
      <div className="skills-section">
        <h2 className="skills-label">Key Skills</h2>
        <div className="skills-tags">
          {keySkills.map((skill, index) => (
            <span
              key={skill.name}
              className="skill-tag skill-key"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
      <div className="skills-section">
        <h2 className="skills-label">Other Skills</h2>
        <div className="skills-tags">
          {otherSkills.map((skill, index) => (
            <span
              key={skill.name}
              className="skill-tag"
              style={{ animationDelay: `${(keySkills.length + index) * 0.08}s` }}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function WhoamiOutput() {
  const bioLines = [
    resume.name,
    `${resume.role} // ${resume.location}`,
    resume.availability,
    "",
    resume.summary,
    ""
  ];

  resume.highlights.forEach((group) => {
    bioLines.push(`${group.title}:`);
    group.bullets.forEach((bullet) => bioLines.push(`- ${bullet}`));
    bioLines.push("");
  });

  return (
    <div className="whoami-layout">
      <div className="whoami-bio">
        <TextBlock lines={bioLines} />
        <SkillsDisplay />
      </div>
      <div className="whoami-chart">
        <h2 className="chart-title">Skill Radar</h2>
        <RadarChart data={radarData} key={Date.now()} />
      </div>
    </div>
  );
}

function buildExperienceLines() {
  const lines = [];
  resume.experience.forEach((role) => {
    lines.push(`${role.role} | ${role.company}`);
    lines.push(`  ${role.period}`);
    role.bullets.forEach((bullet) => lines.push(`  - ${bullet}`));
    lines.push("");
  });
  if (lines.length > 0) {
    lines.pop();
  }
  return lines;
}

function ExperienceOutput() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeRole = resume.experience[activeIndex];
  const animKey = useRef(Date.now()).current;
  const totalYears = totalExperience;

  const formatIndex = (index) => {
    return `EXP-${String(index + 1).padStart(3, '0')}`;
  };

  return (
    <div className="experience-container" key={animKey}>
      <div className="experience-header">
        <h2 className="experience-title">Career Intel</h2>
        <div className="experience-status">
          <span className="experience-status-dot"></span>
          {totalYears}
        </div>
      </div>

      <div className="experience-grid">
        <div className="experience-timeline">
          <div className="timeline-indicator">
            <span className="timeline-label">Timeline</span>
            <span className="timeline-count">{resume.experience.length} Missions</span>
          </div>
          <div className="experience-cards">
            {resume.experience.map((role, index) => (
              <button
                key={`${role.role}-${role.company}`}
                type="button"
                className={`exp-card${index === activeIndex ? " is-active" : ""}`}
                onClick={() => setActiveIndex(index)}
                style={{ animationDelay: `${index * 0.12}s` }}
              >
                <div className="exp-card-header">
                  <div className="exp-card-header-left">
                    <span className="exp-index">{formatIndex(index)}</span>
                    <span className="exp-status-indicator"></span>
                  </div>
                  <span className="exp-period">{role.period}</span>
                </div>
                <div className="exp-card-body">
                  <div className="exp-role">{role.role}</div>
                  <div className="exp-company">{role.company}</div>
                </div>
                <div className="exp-card-footer">
                  <span className="exp-progress-bar">
                    <span className="exp-progress-fill" style={{ width: `${((resume.experience.length - index) / resume.experience.length) * 100}%` }}></span>
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="experience-details" key={`details-${activeIndex}`}>
          <div className="details-card">
            <div className="details-card-header">
              <span className="details-index">{formatIndex(activeIndex)}</span>
              <span className="details-status">
                <span className="details-status-dot"></span>
                Active Record
              </span>
            </div>
            <div className="details-card-body">
              <div className="details-meta">
                <div className="details-period">{activeRole.period}</div>
              </div>
              <h3 className="details-title">{activeRole.role}</h3>
              <div className="details-company">
                <span className="company-icon">◆</span>
                {activeRole.company}
              </div>
              <div className="details-section">
                <div className="details-section-header">
                  <span className="section-icon">▸</span>
                  Key Operations
                </div>
                <ul className="details-list">
                  {activeRole.bullets.map((bullet, idx) => (
                    <li key={bullet} style={{ animationDelay: `${idx * 0.08}s` }}>
                      <span className="bullet-marker">›</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="details-card-footer">
              <span>Record {activeIndex + 1} of {resume.experience.length}</span>
              <span className="footer-timestamp">Verified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function buildProjectsLines() {
  const lines = [];
  resume.projects.forEach((project) => {
    lines.push(project.name);
    lines.push(`  ${project.description}`);
    if (project.tags && project.tags.length) {
      lines.push(`  Tags: ${project.tags.join(", ")}`);
    }
    if (project.note) {
      lines.push(`  Note: ${project.note}`);
    }
    if (project.link) {
      lines.push(`  Link: ${project.link}`);
    }
    lines.push("");
  });
  if (lines.length > 0) {
    lines.pop();
  }
  return lines;
}

function ProjectsOutput() {
  const animKey = useRef(Date.now()).current;

  const formatIndex = (index) => {
    return `PRJ-${String(index + 1).padStart(3, '0')}`;
  };

  return (
    <div className="projects-container" key={animKey}>
      <div className="projects-header">
        <h2 className="projects-title">Mission Archive</h2>
        <div className="projects-status">Systems Online</div>
      </div>
      <div className="projects-scroll">
        <div className="projects-row">
          {resume.projects.map((project, index) => (
            <div
              key={project.name}
              className="project-card"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <div className="project-card-header">
                <span className="project-index">{formatIndex(index)}</span>
                <span className="project-status-indicator"></span>
              </div>
              <div className="project-card-body">
                <h3 className="project-title">{project.name}</h3>
                <div className="project-desc">{project.description}</div>
                {project.tags && project.tags.length ? (
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
                {project.note ? <div className="project-note">{project.note}</div> : null}
                {project.link ? (
                  <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                    Access Project
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function buildContactLines() {
  return resume.contact.map((item) => `${item.label}: ${item.value}`);
}

function ContactOutput() {
  const getIcon = (label) => {
    const l = label.toLowerCase();
    if (l.includes("email")) return "✉";
    if (l.includes("phone")) return "☎";
    if (l.includes("linkedin")) return "in";
    if (l.includes("github")) return "⌘";
    if (l.includes("twitter")) return "𝕏";
    if (l.includes("website")) return "◈";
    return "►";
  };

  const renderValue = (item) => {
    const label = item.label.toLowerCase();
    const value = item.value;
    const isEmail = label.includes("email");
    const isPhone = label.includes("phone");
    const isUrl = value.startsWith("http://") || value.startsWith("https://");
    const isBareUrl = value.startsWith("www.");

    if (isEmail) {
      return (
        <a className="contact-link" href={`mailto:${value}`}>
          {value}
        </a>
      );
    }

    if (isPhone) {
      const telValue = value.replace(/[^+\d]/g, "");
      return (
        <a className="contact-link" href={`tel:${telValue || value}`}>
          {value}
        </a>
      );
    }

    if (isUrl || isBareUrl) {
      const href = isUrl ? value : `https://${value}`;
      return (
        <a className="contact-link" href={href} target="_blank" rel="noreferrer">
          {value}
        </a>
      );
    }

    return <span className="contact-value">{value}</span>;
  };

  const animKey = useRef(Date.now()).current;
  const now = new Date();
  const timestamp = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')}`;

  return (
    <div className="contact-container" key={animKey}>
      <div className="contact-header">
        <h2 className="contact-title">Secure Channel</h2>
        <div className="contact-secure">Encrypted</div>
      </div>
      <div className="contact-body">
        <div className="contact-list">
          {resume.contact.map((item, index) => (
            <div key={item.label} className="contact-row" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="contact-label">
                <span className="contact-icon">{getIcon(item.label)}</span>
                {item.label}
              </div>
              {renderValue(item)}
            </div>
          ))}
        </div>
      </div>
      <div className="contact-footer">
        <span>Channel Status: Active</span>
        <span className="contact-timestamp">{timestamp}</span>
      </div>
    </div>
  );
}

function AllOutput() {
  return (
    <div className="all-output">
      <section className="all-section">
        <h2 className="all-title">Whoami</h2>
        <WhoamiOutput />
      </section>
      <section className="all-section">
        <h2 className="all-title">Experience</h2>
        <ExperienceOutput />
      </section>
      <section className="all-section">
        <h2 className="all-title">Projects</h2>
        <ProjectsOutput />
      </section>
      <section className="all-section">
        <h2 className="all-title">Contact</h2>
        <ContactOutput />
      </section>
    </div>
  );
}

function HelpOutput({ onCommand }) {
  const row = (item) => (
    <div key={item.cmd} className="help-row">
      <button
        type="button"
        className="command-link"
        onClick={() => onCommand && onCommand(item.cmd)}
        aria-label={`Run ${item.cmd}`}
      >
        {item.cmd}
      </button>
      <span className="help-desc">{item.desc}</span>
    </div>
  );
  return (
    <div className="help-commands">
      <div className="help-message">Available commands</div>
      <div className="help-grid">{commandList.map(row)}</div>
      <div className="help-message help-sub">Extras</div>
      <div className="help-grid">{extraCommands.map(row)}</div>
      <div className="help-note">Click a command or type it. Tab autocompletes, ↑/↓ recalls history. Some commands are hidden.</div>
    </div>
  );
}

const neofetchArt = [
  "   ▄██████▄   ",
  "  ██▀    ▀██  ",
  " ██  ▄██▄  ██ ",
  " ██  ████  ██ ",
  " ██  ▀██▀  ██ ",
  "  ██▄    ▄██  ",
  "   ▀██▄▄██▀   ",
  "     ▀██▀     "
];

function NeofetchOutput() {
  const info = [
    ["OS", "SecOps Linux x86_64"],
    ["Host", resume.name],
    ["Role", resume.role],
    ["Location", resume.location],
    ["Uptime", totalExperience],
    ["Shell", "detection-sh 5.0"],
    ["SIEM", "Splunk, Sentinel, Securonix, ELK"],
    ["SOAR", "XSOAR, custom playbooks"],
    ["Frameworks", "MITRE ATT&CK, ATLAS, OWASP LLM Top 10"],
    ["Languages", "Python, PowerShell, JavaScript"],
    ["Packages", `${resume.projects.length} projects, ${resume.experience.length} roles`]
  ];
  return (
    <div className="neofetch">
      <pre className="neofetch-art" aria-hidden="true">{neofetchArt.join("\n")}</pre>
      <div className="neofetch-info">
        <div className="neofetch-head">
          <span className="nf-accent">g_nishan_singh</span>@<span className="nf-accent">soc</span>
        </div>
        <div className="neofetch-rule">{"-".repeat(22)}</div>
        {info.map(([k, v]) => (
          <div key={k} className="neofetch-row">
            <span className="nf-key">{k}</span>: {v}
          </div>
        ))}
        <div className="neofetch-swatches" aria-hidden="true">
          {["#ff6b6b", "#f6c453", "#7df9ff", "#5af78e", "#c792ea", "#e4f0ff", "#8fa4bd", "#3b4b5e"].map((c) => (
            <span key={c} style={{ background: c }}></span>
          ))}
        </div>
      </div>
    </div>
  );
}

const huntScript = [
  { t: "info", text: "Initializing hunt engine ............................. ok" },
  { t: "info", text: "Loading detection content (Sigma + custom KQL/SPL) ..... 1,284 rules" },
  { t: "info", text: "Streaming telemetry: EDR, IdP, DNS, proxy .............. 2.31M events" },
  { t: "info", text: "Correlating against MITRE ATT&CK ........................" },
  { t: "hit", text: "T1110.003  Password Spraying      14 accounts / 1 source IP" },
  { t: "hit", text: "T1558.003  Kerberoasting          RC4 TGS burst from WS-0231" },
  { t: "hit", text: "T1003.001  LSASS Memory Access    procdump.exe -> lsass.exe" },
  { t: "warn", text: "Risk score 92/100 - escalating to SOAR" },
  { t: "ok", text: "Playbook 'contain-host' executed: WS-0231 isolated, creds rotated" },
  { t: "ok", text: "Ticket INC-4471 enriched with threat intel and closed as true positive" },
  { t: "done", text: "Mean time to contain: 00:00:47. Want this for your SOC? Run `contact`." }
];

function HuntOutput() {
  const [step, setStep] = useState(prefersReducedMotion() ? huntScript.length : 0);
  useEffect(() => {
    if (step >= huntScript.length) return undefined;
    const timer = setTimeout(() => setStep((s) => s + 1), step === 3 ? 900 : 420);
    return () => clearTimeout(timer);
  }, [step]);
  const pct = Math.round((step / huntScript.length) * 100);
  const tag = { info: "[*]", hit: "[!]", warn: "[~]", ok: "[+]", done: "[✓]" };
  return (
    <div className="hunt">
      <div className="hunt-bar" aria-label={`Hunt progress ${pct}%`}>
        <span className="hunt-bar-fill" style={{ width: `${pct}%` }}></span>
        <span className="hunt-bar-label">HUNT {pct}%</span>
      </div>
      <div className="hunt-log">
        {huntScript.slice(0, step).map((line, i) => (
          <div key={i} className={`hunt-line hunt-${line.t}`}>
            <span className="hunt-tag">{tag[line.t]}</span> {line.text}
          </div>
        ))}
        {step < huntScript.length ? <span className="hunt-cursor">▋</span> : null}
      </div>
    </div>
  );
}

function NotFoundOutput({ command, onCommand }) {
  const name = command.split(/\s+/)[0];
  const suggestion = suggestCommand(name.toLowerCase());
  return (
    <div className="notfound">
      <div><span className="nf-err">command not found:</span> {name}</div>
      {suggestion ? (
        <div>
          did you mean{" "}
          <button type="button" className="inline-cmd" onClick={() => onCommand(suggestion)}>{suggestion}</button>?
        </div>
      ) : null}
      <div className="help-note">
        Type <button type="button" className="inline-cmd" onClick={() => onCommand("help")}>help</button> to see what I can do.
      </div>
    </div>
  );
}

function ResumeOutput() {
  useEffect(() => {
    const a = document.createElement("a");
    a.href = "Gurmukhnishansingh_resume.pdf";
    a.download = "Gurmukhnishansingh_resume.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }, []);
  return (
    <TextBlockWithLink
      lines={["[+] Fetching resume.pdf ... done", "[+] Download started."]}
      link={{ href: "Gurmukhnishansingh_resume.pdf", label: "Didn't start? Open the PDF" }}
    />
  );
}

function TextBlockWithLink({ lines, link }) {
  return (
    <div>
      <TextBlock lines={lines} />
      <a className="contact-link" href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
    </div>
  );
}

const fakeFiles = {
  "whoami.txt": "whoami",
  "experience.log": "experience",
  "projects.md": "projects",
  "contact.vcf": "contact",
  "resume.pdf": "resume"
};

function BootSequence({ onDone }) {
  const lines = [
    "GNS-BIOS v13.5  (c) 2013-" + new Date().getFullYear() + " Gurmukh Nishan Singh",
    "Memory check ..................... 13 yrs of experience OK",
    "Mounting /detections ............. OK",
    "Loading SIEM connectors (50+) .... OK",
    "Starting SOAR playbook engine .... OK",
    "Arming AI-security guardrails .... OK",
    "Establishing secure channel ...... OK",
    "",
    "ACCESS GRANTED"
  ];
  const [count, setCount] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const doneRef = useRef(false);

  const finish = () => {
    if (doneRef.current) return;
    doneRef.current = true;
    setLeaving(true);
    setTimeout(onDone, 350);
  };

  useEffect(() => {
    if (count >= lines.length) {
      const timer = setTimeout(finish, 650);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(() => setCount((c) => c + 1), count === 0 ? 250 : 170);
    return () => clearTimeout(timer);
  }, [count]);

  useEffect(() => {
    const skip = (event) => {
      if (event.type === "keydown") event.preventDefault();
      finish();
    };
    window.addEventListener("keydown", skip);
    window.addEventListener("pointerdown", skip);
    return () => {
      window.removeEventListener("keydown", skip);
      window.removeEventListener("pointerdown", skip);
    };
  }, []);

  return (
    <div className={`boot${leaving ? " boot-leave" : ""}`} role="status" aria-live="polite">
      <pre className="boot-log">
        {lines.slice(0, count).map((line, i) => (
          <div key={i} className={line === "ACCESS GRANTED" ? "boot-granted" : line.endsWith("OK") ? "boot-ok" : ""}>
            {line || " "}
          </div>
        ))}
        <span className="hunt-cursor">▋</span>
      </pre>
      <div className="boot-skip">press any key to skip</div>
    </div>
  );
}

function TerminalBar() {
  return (
    <div className="terminal-bar">
      <span className="terminal-dot dot-red"></span>
      <span className="terminal-dot dot-yellow"></span>
      <span className="terminal-dot dot-green"></span>
      <span className="terminal-title">resume.terminal</span>
    </div>
  );
}

function App() {
  const [inputValue, setInputValue] = useState("");
  const [history, setHistory] = useState([]);
  const [showLanding, setShowLanding] = useState(true);
  const [cmdHistory, setCmdHistory] = useState([]);
  const [histIndex, setHistIndex] = useState(-1);
  const [runId, setRunId] = useState(0);
  const [booting, setBooting] = useState(
    () => !prefersReducedMotion() && readStore("sessionStorage", "gns-booted") !== "1"
  );
  const inputRef = useRef(null);
  const audioContextRef = useRef(null);
  const lastSoundRef = useRef(0);
  const lastOutputSoundRef = useRef(0);
  const selectionRef = useRef({ start: null, end: null });

  const captureSelection = () => {
    const input = inputRef.current;
    if (!input) {
      return;
    }
    selectionRef.current = {
      start: input.selectionStart,
      end: input.selectionEnd
    };
  };

  useEffect(() => {
    const saved = readStore("localStorage", "gns-theme");
    if (saved && saved in THEMES) applyTheme(saved);
  }, []);

  const finishBoot = () => {
    writeStore("sessionStorage", "gns-booted", "1");
    setBooting(false);
    setTimeout(focusInput, 0);
  };

  const isMobileDevice = () => window.innerWidth < 768 || ('ontouchstart' in window);

  const focusInput = () => {
    if (isMobileDevice()) return;
    const input = inputRef.current;
    if (!input) {
      return;
    }
    try {
      input.focus({ preventScroll: true });
    } catch (error) {
      input.focus();
    }
    const { start, end } = selectionRef.current;
    if (start !== null && end !== null) {
      input.setSelectionRange(start, end);
    }
  };

  const playKeySound = () => {
    const now = performance.now();
    if (now - lastSoundRef.current < 25) {
      return;
    }
    lastSoundRef.current = now;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) {
      return;
    }
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext();
    }
    const ctx = audioContextRef.current;
    if (ctx.state === "suspended") {
      ctx.resume();
    }
    const startTime = ctx.currentTime;
    const noiseDuration = 0.04;
    const noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * noiseDuration, ctx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < data.length; i += 1) {
      data[i] = Math.random() * 2 - 1;
    }
    const noiseSource = ctx.createBufferSource();
    const noiseGain = ctx.createGain();
    noiseSource.buffer = noiseBuffer;
    noiseGain.gain.setValueAtTime(0.05, startTime);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, startTime + noiseDuration);
    noiseSource.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    noiseSource.start(startTime);

    const thumpOsc = ctx.createOscillator();
    const thumpGain = ctx.createGain();
    thumpOsc.type = "square";
    thumpOsc.frequency.setValueAtTime(180, startTime);
    thumpGain.gain.setValueAtTime(0.03, startTime);
    thumpGain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.05);
    thumpOsc.connect(thumpGain);
    thumpGain.connect(ctx.destination);
    thumpOsc.start(startTime);
    thumpOsc.stop(startTime + 0.05);
  };

  const playOutputSound = () => {
    const now = performance.now();
    if (now - lastOutputSoundRef.current < 120) {
      return;
    }
    lastOutputSoundRef.current = now;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) {
      return;
    }
    if (!audioContextRef.current) {
      audioContextRef.current = new AudioContext();
    }
    const ctx = audioContextRef.current;
    if (ctx.state === "suspended") {
      ctx.resume();
    }
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const startTime = ctx.currentTime;
    osc.type = "triangle";
    osc.frequency.setValueAtTime(520, startTime);
    osc.frequency.exponentialRampToValueAtTime(760, startTime + 0.08);
    gain.gain.setValueAtTime(0.05, startTime);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.1);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(startTime);
    osc.stop(startTime + 0.12);
  };

  const runCommand = (cmd) => {
    const trimmed = cmd.trim();
    if (!trimmed) {
      return;
    }
    const normalized = trimmed.toLowerCase();
    setCmdHistory((prev) => (prev[prev.length - 1] === trimmed ? prev : [...prev, trimmed]));
    setHistIndex(-1);
    if (normalized === "clear") {
      setHistory([]);
      setInputValue("");
      setShowLanding(true);
      focusInput();
      return;
    }
    setHistory([trimmed]);
    setRunId((id) => id + 1);
    setInputValue("");
    setShowLanding(false);
    playOutputSound();
    focusInput();
  };

  const handleKeyDown = (event) => {
    const ignoredKeys = [
      "Shift",
      "Alt",
      "Control",
      "Meta",
      "CapsLock",
      "Tab",
      "Escape",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown"
    ];
    if (!ignoredKeys.includes(event.key)) {
      playKeySound();
    }

    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      if (!cmdHistory.length) return;
      event.preventDefault();
      let next;
      if (event.key === "ArrowUp") {
        next = histIndex === -1 ? cmdHistory.length - 1 : Math.max(0, histIndex - 1);
      } else {
        next = histIndex === -1 ? -1 : histIndex + 1;
        if (next >= cmdHistory.length) next = -1;
      }
      setHistIndex(next);
      setInputValue(next === -1 ? "" : cmdHistory[next]);
      return;
    }

    if (event.key === "Tab" || (event.key === "ArrowRight" && ghost)) {
      if (ghost) {
        event.preventDefault();
        setInputValue(inputValue + ghost);
      } else if (event.key === "Tab") {
        event.preventDefault();
      }
      return;
    }

    if (event.key !== "Enter") {
      return;
    }
    const trimmed = inputValue.trim();
    if (!trimmed) {
      return;
    }
    runCommand(trimmed);
  };

  const typed = inputValue.toLowerCase();
  const completion =
    typed && !typed.includes(" ")
      ? [...commandList, ...extraCommands].map((c) => c.cmd).find((c) => c.startsWith(typed) && c !== typed)
      : null;
  const ghost = completion ? completion.slice(typed.length) : "";

  const renderOutput = (command) => {
    const [rawName, ...args] = command.trim().split(/\s+/);
    const normalized = rawName.toLowerCase();
    const arg = args.join(" ");
    switch (normalized) {
      case "help":
      case "?":
        return <HelpOutput onCommand={runCommand} />;
      case "whoami":
        return <WhoamiOutput />;
      case "experience":
        return <ExperienceOutput />;
      case "projects":
        return <ProjectsOutput />;
      case "contact":
        return <ContactOutput />;
      case "all":
        return <AllOutput />;
      case "neofetch":
        return <NeofetchOutput />;
      case "hunt":
      case "hack":
        return <HuntOutput />;
      case "resume":
        return <ResumeOutput />;
      case "history":
        return (
          <TextBlock
            lines={cmdHistory.length ? cmdHistory.map((c, i) => `${String(i + 1).padStart(4, " ")}  ${c}`) : ["(empty)"]}
          />
        );
      case "date":
        return <TextBlock lines={[new Date().toString()]} />;
      case "ls":
        return <TextBlock lines={[Object.keys(fakeFiles).join("    ")]} />;
      case "cat": {
        const target = fakeFiles[arg];
        if (target) return renderOutput(target);
        return <TextBlock lines={[arg ? `cat: ${arg}: No such file or directory` : "usage: cat <file>   (try `ls`)"]} />;
      }
      case "echo":
        return <TextBlock lines={[arg]} />;
      case "theme": {
        const name = arg.toLowerCase();
        if (name in THEMES) {
          applyTheme(name);
          writeStore("localStorage", "gns-theme", name);
          return <TextBlock lines={[`[+] Theme switched to '${name}'.`]} />;
        }
        const current = document.documentElement.dataset.theme || "cyan";
        return (
          <div className="help-commands">
            <div className="help-message">Themes (current: {current})</div>
            <div className="command-links" style={{ justifyContent: "flex-start" }}>
              {Object.keys(THEMES).map((t) => (
                <button key={t} type="button" className="command-link" onClick={() => runCommand(`theme ${t}`)}>
                  {t}
                </button>
              ))}
            </div>
          </div>
        );
      }
      case "matrix": {
        const canvas = document.getElementById("matrix-canvas");
        const boosted = canvas && canvas.classList.toggle("matrix-boost");
        return <TextBlock lines={[boosted ? "Wake up, Neo... (run `matrix` again to calm down)" : "Back to normal."]} />;
      }
      case "sudo": {
        const ticket = 1000 + Math.floor(Math.random() * 9000);
        return (
          <TextBlock
            lines={[
              `[sudo] password for visitor: ********`,
              `visitor is not in the sudoers file. This incident will be reported.`,
              `[SOAR] INC-${ticket} auto-created, enriched and triaged as: curious recruiter (benign).`
            ]}
          />
        );
      }
      case "rm":
        return <TextBlock lines={["rm: permission denied. Nice try, detection rule DR-0042 just fired."]} />;
      case "exit":
        return <TextBlock lines={["There is no exit. Only `contact`."]} />;
      default:
        return <NotFoundOutput command={command} onCommand={runCommand} />;
    }
  };

  return (
    <div className="app">
      {booting ? <BootSequence onDone={finishBoot} /> : null}
      <div className="terminal-shell" onClick={focusInput}>
        <TerminalBar />
        <StatusStrip />
        <Landing showDetails={showLanding && history.length === 0} onCommand={runCommand} />
        <div className="terminal-io">
          {history.map((entry, index) => (
            <div key={`${entry}-${index}-${runId}`} className="terminal-entry">
              <div className="prompt-line">
                <span className="prompt-sign">{promptLabel}</span>
                <span className="prompt-text">{entry}</span>
              </div>
              <div className="terminal-output-block">{renderOutput(entry)}</div>
            </div>
          ))}
          <div className="prompt-line">
            <span className="prompt-sign">{promptLabel}</span>
            <div className="prompt-input-wrap">
            {ghost ? (
              <span className="prompt-ghost" aria-hidden="true">
                <span className="prompt-ghost-typed">{inputValue}</span>
                {ghost}
              </span>
            ) : null}
            <input
              className="prompt-input"
              aria-label="Terminal command"
              autoComplete="off"
              autoCapitalize="off"
              value={inputValue}
              onChange={(event) => {
                setInputValue(event.target.value);
                setHistIndex(-1);
                if (showLanding && event.target.value.length > 0) {
                  setShowLanding(false);
                }
                captureSelection();
              }}
              onKeyDown={handleKeyDown}
              onKeyUp={captureSelection}
              onClick={captureSelection}
              autoFocus={!(window.innerWidth < 768 || ('ontouchstart' in window))}
              ref={inputRef}
              spellCheck="false"
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
