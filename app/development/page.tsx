export default function DevelopmentPage() {
  const progress = [
    {
      date: "01 June 2026",
      title: "Git Foundation Configured",
      status: "Completed",
      description:
        "Configured Git identity and established the foundation for version control and future GitHub integration.",
    },
    {
      date: "02 June 2026",
      title: "Portable Development System Mapped",
      status: "Completed",
      description:
        "Designed the AngolaLab portable toolkit approach to work around restricted university-managed computers.",
    },
    {
      date: "04 July 2026",
      title: "AEIS Environment System Defined",
      status: "In Progress",
      description:
        "Outlined the environmental intelligence layer for tourism safety, weather risk, and visitor protection reports.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black px-6 py-12">
      <section className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-wide text-gray-500">
          AngolaLab Build Log
        </p>

        <h1 className="text-4xl font-bold mt-3">
          Development Dashboard
        </h1>

        <p className="mt-4 text-lg text-gray-700 max-w-3xl">
          This page records the ongoing development of AngolaLab, including
          platform progress, AEIS research systems, trading intelligence,
          environmental intelligence, and public education tools.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="border rounded-2xl p-6">
            <p className="text-sm text-gray-500">Current Phase</p>
            <h2 className="text-2xl font-semibold mt-2">
              Foundation Build
            </h2>
          </div>

          <div className="border rounded-2xl p-6">
            <p className="text-sm text-gray-500">Platform Status</p>
            <h2 className="text-2xl font-semibold mt-2">
              Active Development
            </h2>
          </div>

          <div className="border rounded-2xl p-6">
            <p className="text-sm text-gray-500">Core Method</p>
            <h2 className="text-2xl font-semibold mt-2">
              Systems Thinking
            </h2>
          </div>
        </div>

        <section className="mt-14">
          <h2 className="text-2xl font-bold">Latest Progress</h2>

          <div className="mt-6 space-y-5">
            {progress.map((item) => (
              <article
                key={item.title}
                className="border rounded-2xl p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>

                <p className="mt-2 text-sm font-medium">
                  Status: {item.status}
                </p>

                <p className="mt-3 text-gray-700">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-bold">Next Build Priorities</h2>

          <ol className="mt-5 list-decimal list-inside space-y-2 text-gray-700">
            <li>Development dashboard</li>
            <li>Weekly intelligence briefing page</li>
            <li>Trading dashboard v1</li>
            <li>AEIS report archive</li>
            <li>Tourism safety intelligence page</li>
          </ol>
        </section>
      </section>
    </main>
  );
}