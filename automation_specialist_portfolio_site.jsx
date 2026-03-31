export default function AutomationSpecialistPortfolio() {
  const services = [
    {
      title: "CRM & Client Onboarding Automation",
      description:
        "Build automated pipelines for lead capture, onboarding, follow-ups, task creation, and reporting using tools like HubSpot, Zapier, HoneyBook, and Acuity.",
    },
    {
      title: "Executive Assistant Systems",
      description:
        "Set up efficient scheduling, calendar workflows, reminders, inbox support, travel coordination, and admin systems that save time every week.",
    },
    {
      title: "Content & Social Media Operations",
      description:
        "Streamline content planning, scheduling, asset organization, QA, and reporting across social platforms for smoother day-to-day operations.",
    },
  ];

  const tools = [
    "Zapier",
    "HubSpot",
    "HoneyBook",
    "Acuity",
    "GoHighLevel",
    "n8n",
    "ClickUp",
    "Trello",
    "Asana",
    "Slack",
    "Google Workspace",
    "Microsoft Office",
    "QuickBooks",
    "Xero",
    "Canva",
    "Figma",
    "Wix",
    "Squarespace",
  ];

  const highlights = [
    "Designed end-to-end CRM automation for client onboarding and sales pipelines",
    "Built automated deal-stage progression, follow-up tasks, and task assignments",
    "Created automated contacts, companies, and deals from booking systems",
    "Built revenue tracking workflows and real-time dashboards",
    "Supported executives with calendar, email, travel, bookkeeping, and research",
    "Managed content scheduling, QA, analytics, and platform operations",
  ];

  const experience = [
    {
      role: "Executive Virtual Assistant / Automation Specialist",
      company: "HFSCO",
      period: "May 2024 – Present",
      points: [
        "Designed and implemented end-to-end CRM automation using Acuity, HoneyBook, and Zapier.",
        "Handled email and calendar management, customer service, appointment setting, research, and bookkeeping.",
      ],
    },
    {
      role: "CRM Automation Specialist (HubSpot & Zapier)",
      company: "Fusion Advisors",
      period: "February 2026 · Project-based",
      points: [
        "Built automated workflows for onboarding, pipeline management, lead grading, and revenue tracking dashboards.",
        "Configured automated task assignments and continuous no-touch operations.",
      ],
    },
    {
      role: "Executive Virtual Assistant",
      company: "Harness.io",
      period: "April 2023 – January 2024",
      points: [
        "Managed scheduling, meetings, travel, bookkeeping, research, and presentation support.",
      ],
    },
  ];

  const testimonials = [
    {
      quote:
        "I help busy founders and teams save time, reduce manual work, and create smoother systems that support growth.",
      author: "Your value proposition",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.18),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200">
                Automation Specialist • Executive Virtual Assistant • Systems Builder
              </div>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                I build automations that save time, reduce admin work, and keep your business moving.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                I help founders, agencies, and service businesses streamline client onboarding, CRM workflows, scheduling, reporting, and day-to-day operations using practical no-code tools.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-slate-950 shadow-lg shadow-white/10 transition hover:-translate-y-0.5"
                >
                  Book a Discovery Call
                </a>
                <a
                  href="#work"
                  className="rounded-2xl border border-white/15 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/5"
                >
                  View My Work
                </a>
              </div>
              <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 text-sm text-slate-300">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-2xl font-semibold text-white">CRM</div>
                  <div className="mt-1">Automation systems</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-2xl font-semibold text-white">Admin</div>
                  <div className="mt-1">Operations support</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-2xl font-semibold text-white">Content</div>
                  <div className="mt-1">Social workflows</div>
                </div>
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur">
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-900 p-6">
                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">What I do best</p>
                  <ul className="mt-6 space-y-4">
                    {highlights.map((item) => (
                      <li key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200">Services</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Automation and operations support built around your workflow</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-4 text-slate-300 leading-7">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200">Selected Experience</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Real work across automation, executive support, and content operations</h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {experience.map((job) => (
              <div key={job.role + job.company} className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6">
                <p className="text-sm text-cyan-200">{job.period}</p>
                <h3 className="mt-2 text-xl font-semibold">{job.role}</h3>
                <p className="mt-1 text-slate-300">{job.company}</p>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-white/60" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200">Tools</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Tools I use to build reliable systems</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 p-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200">Why clients hire me</p>
              <div className="mt-6 space-y-5 text-slate-200">
                <p>✔ Strong background in executive assistance and operations</p>
                <p>✔ Hands-on CRM, onboarding, and no-code automation experience</p>
                <p>✔ Social media, design, and content workflow support</p>
                <p>✔ Organized, reliable, adaptable, and detail-oriented execution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200">Positioning Statement</p>
          {testimonials.map((item) => (
            <div key={item.quote}>
              <p className="mx-auto mt-5 max-w-3xl text-2xl font-medium leading-10 text-white">
                “{item.quote}”
              </p>
              <p className="mt-4 text-slate-400">{item.author}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Need help automating your workflow?</h2>
              <p className="mt-4 max-w-2xl text-slate-300 leading-7">
                Let’s talk about your current process, bottlenecks, and the systems you want to improve.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-sm text-slate-200">
              <p>Email: kathgalemariano@gmail.com</p>
              <p className="mt-2">WhatsApp: +63 976 147 2624</p>
              <p className="mt-2">LinkedIn: linkedin.com/in/kathryn-gale-mariano-b388ba18b</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
