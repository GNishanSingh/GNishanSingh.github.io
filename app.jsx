const { useState, useRef } = React;

const commandList = [
  { cmd: "whoami", desc: "To read something about me" },
  { cmd: "experience", desc: "To read about my work experience" },
  { cmd: "projects", desc: "To read about project i have done" },
  { cmd: "all", desc: "To show all sections" },
  { cmd: "help", desc: "To get command helps" },
  { cmd: "contact", desc: "To get contact details" }
];

const landingLinks = [
  { label: "GitHub", url: "https://github.com/GNishanSingh" },
  { label: "Twitter", url: "https://twitter.com/g_nishan_singh" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/gurmukhnishan-singh/" }
];

const radarData = [
  { label: "Detection", value: 5 },
  { label: "SOAR", value: 5 },
  { label: "SIEM", value: 5 },
  { label: "Automation", value: 4 },
  { label: "Data Eng", value: 4 },
  { label: "Leadership", value: 4 }
];

const resume = {
  name: "Gurmukh Nishan Singh",
  role: "Product Manager | SOC and IT Automation",
  location: "Bangalore",
  availability: "Total experience: 11 years 4 months",
  summary:
    "Result-oriented cybersecurity professional across infrastructure technologies, cybersecurity, and development. Skilled in PowerShell, Python, JavaScript, detection and data engineering, SOC automation, red teaming, and exploit development; hands-on with SOAR, UEBA, SIEM, sandboxing, MITRE ATT&CK, malware analysis, log monitoring, and correlation. Experienced in translating security requirements into techno-functional specs, compliance and risk assessment, and leading teams to shared goals.",
  highlights: [
    {
      title: "Core strengths",
      bullets: [
        "Infrastructure technologies, cybersecurity, and development experience",
        "SOAR, UEBA, SIEM, sandboxing, malware analysis, and log correlation",
        "Compliance, risk assessment, and techno-functional solution design",
        "Team leadership and cross-functional delivery"
      ]
    },
    {
      title: "Career growth path",
      bullets: [
        "Detection Engineering",
        "Exploit Development",
        "Automation / SOAR",
        "Team Management",
        "Red Teaming",
        "Data Engineering",
        "Scripting (Python/PowerShell)"
      ]
    }
  ],
  skills: [
    "Product Strategy",
    "Detection Engineering",
    "SOAR / XSOAR",
    "SIEM (Splunk, Securonix, ELK)",
    "MITRE ATT&CK",
    "Python",
    "PowerShell",
    "JavaScript",
    "Kafka",
    "Kubernetes",
    "Redis",
    "PostgreSQL / Neo4j",
    "AWS / Azure"
  ],
  experience: [
    {
      role: "Product Manager",
      company: "Quilr Security LLP",
      period: "Jan 2025 - Present",
      bullets: [
        "Define vision, roadmap, and KPIs for SOC and IT automation products.",
        "Architect Quilr Agent Service with MCP tool attachments and LLM-driven workflows.",
        "Deliver Kafka ingestion pipelines, Redis caching, and microservices on Kubernetes.",
        "Build connectors with SIEMs, threat intel APIs, EDR, IAM, and SaaS platforms."
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

function Landing() {
  return (
    <div className="landing">
      <div className="landing-title">Gurmukhnishan Singh</div>
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
      <div className="landing-divider">---------------------------</div>
      <div className="landing-intro">Use following command for getting details about me:</div>
      <pre className="landing-table">{buildHelpLines().join("\n")}</pre>
      <div className="landing-note">
        This site is built with a React terminal UI. I keep it updated regularly, so
        check back for new updates.
      </div>
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
    <svg className="radar-chart" viewBox={`0 0 ${viewSize} ${viewSize}`} role="img">
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

  lines.push("Skills:");
  lines.push(resume.skills.join(", "));

  return lines;
}

function WhoamiOutput() {
  return (
    <div className="whoami-layout">
      <TextBlock lines={buildWhoamiLines()} />
      <div className="whoami-chart">
        <div className="chart-title">Skill Radar</div>
        <RadarChart data={radarData} />
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

  return (
    <div className="experience-shell">
      <div className="timeline-scroll">
        <div className="timeline-items">
          {resume.experience.map((role, index) => (
            <button
              key={`${role.role}-${role.company}`}
              type="button"
              className={`timeline-node${index === activeIndex ? " is-active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              <span className="timeline-dot" aria-hidden="true"></span>
              <span className="timeline-label">{role.period}</span>
              <span className="timeline-role">
                {role.role} | {role.company}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="experience-details">
        <div className="details-title">
          {activeRole.role} | {activeRole.company}
        </div>
        <div className="details-period">{activeRole.period}</div>
        <ul className="details-list">
          {activeRole.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
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
  return (
    <div className="projects-scroll">
      <div className="projects-row">
        {resume.projects.map((project) => (
          <div key={project.name} className="project-card">
            <div className="project-title">{project.name}</div>
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
                {project.link}
              </a>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function buildContactLines() {
  return resume.contact.map((item) => `${item.label}: ${item.value}`);
}

function ContactOutput() {
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

  return (
    <div className="contact-card">
      <div className="contact-title">Contact</div>
      <div className="contact-list">
        {resume.contact.map((item) => (
          <div key={item.label} className="contact-row">
            <span className="contact-label">{item.label}</span>
            {renderValue(item)}
          </div>
        ))}
      </div>
    </div>
  );
}

function AllOutput() {
  return (
    <div className="all-output">
      <section className="all-section">
        <div className="all-title">Whoami</div>
        <WhoamiOutput />
      </section>
      <section className="all-section">
        <div className="all-title">Experience</div>
        <ExperienceOutput />
      </section>
      <section className="all-section">
        <div className="all-title">Projects</div>
        <ProjectsOutput />
      </section>
      <section className="all-section">
        <div className="all-title">Contact</div>
        <ContactOutput />
      </section>
    </div>
  );
}

function buildHelpLines() {
  const col1 = Math.max(...commandList.map((item) => item.cmd.length), "Command".length);
  const col2 = Math.max(...commandList.map((item) => item.desc.length), "Description".length);
  const divider = "-".repeat(col1 + col2 + 7);
  const row = (left, right) => `| ${left.padEnd(col1)} | ${right.padEnd(col2)} |`;

  return [
    divider,
    row("Command", "Description"),
    divider,
    ...commandList.map((item) => row(item.cmd, item.desc)),
    divider
  ];
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

  const focusInput = () => {
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

    if (event.key !== "Enter") {
      return;
    }
    const trimmed = inputValue.trim();
    if (!trimmed) {
      return;
    }
    const normalized = trimmed.toLowerCase();
    if (normalized === "clear") {
      setHistory([]);
      setInputValue("");
      return;
    }
    setHistory([trimmed]);
    setInputValue("");
    playOutputSound();
  };

  const renderOutput = (command) => {
    const normalized = command.toLowerCase().trim();
    if (normalized === "help") {
      return <TextBlock lines={buildHelpLines()} />;
    }
    if (normalized === "whoami") {
      return <WhoamiOutput />;
    }
    if (normalized === "experience") {
      return <ExperienceOutput />;
    }
    if (normalized === "projects") {
      return <ProjectsOutput />;
    }
    if (normalized === "contact") {
      return <ContactOutput />;
    }
    if (normalized === "all") {
      return <AllOutput />;
    }
    return (
      <TextBlock
        lines={[
          `Command not found: ${command}`,
          "",
          ...buildHelpLines()
        ]}
      />
    );
  };

  return (
    <div className="app">
      <div className="terminal-shell" onClick={focusInput}>
        <TerminalBar />
        <Landing />
        <div className="terminal-io">
          {history.map((entry, index) => (
            <div key={`${entry}-${index}`} className="terminal-entry">
              <div className="prompt-line">
                <span className="prompt-sign">{promptLabel}</span>
                <span className="prompt-text">{entry}</span>
              </div>
              <div className="terminal-output-block">{renderOutput(entry)}</div>
            </div>
          ))}
          <div className="prompt-line">
            <span className="prompt-sign">{promptLabel}</span>
            <input
              className="prompt-input"
              value={inputValue}
              onChange={(event) => {
                setInputValue(event.target.value);
                captureSelection();
              }}
              onKeyDown={handleKeyDown}
              onKeyUp={captureSelection}
              onClick={captureSelection}
              autoFocus
              ref={inputRef}
              spellCheck="false"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
