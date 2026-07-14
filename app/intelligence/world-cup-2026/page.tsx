import Link from "next/link";

export const metadata = {
  title: "FIFA World Cup 2026 Intelligence Brief | AngolaLab AEIS",
  description:
    "AEIS analysis of climate, infrastructure, education and strategic lessons for Angola from the FIFA World Cup 2026.",
};

const strategicAreas = [
  {
    title: "Sports Development",
    text: "International success is built through long-term investment rather than short-term preparation.",
    points: [
      "Structured youth development",
      "Coach education",
      "Player welfare",
      "Competitive domestic pathways",
      "Sustained institutional support",
    ],
  },
  {
    title: "Climate Adaptation",
    text: "Miami’s environmental conditions demonstrate challenges already familiar across parts of Angola.",
    points: [
      "Climate-resilient schools",
      "Sports facilities",
      "Hospitals",
      "Transport infrastructure",
      "Public spaces",
    ],
  },
  {
    title: "Education",
    text: "Resilient learning environments can reduce disruption during periods of extreme weather.",
    points: [
      "Improved ventilation",
      "Cooling where appropriate",
      "Climate-resilient construction",
      "Protection of student wellbeing",
    ],
  },
];

export default function WorldCupIntelligenceBrief() {
  return (
    <main className="min-h-screen bg-white text-black">
      <article className="mx-auto max-w-4xl px-6 py-14 md:py-20">
        <Link
          href="/intelligence"
          className="text-sm font-medium text-gray-600 hover:text-black"
        >
          ← Back to Intelligence
        </Link>

        <header className="mt-10 border-b border-gray-200 pb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-red-700">
            AngolaLab AEIS Intelligence Brief
          </p>

          <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
            FIFA World Cup 2026
          </h1>

          <p className="mt-4 max-w-3xl text-xl leading-relaxed text-gray-700">
            Beyond the Match: Climate, Infrastructure &amp; Strategic Lessons
            for Angola
          </p>

          <dl className="mt-8 grid gap-4 border-t border-gray-200 pt-6 text-sm md:grid-cols-2">
            <div>
              <dt className="text-gray-500">Reference</dt>
              <dd className="mt-1 font-semibold">IB/A/11/07/26</dd>
            </div>

            <div>
              <dt className="text-gray-500">Date</dt>
              <dd className="mt-1 font-semibold">11 July 2026</dd>
            </div>

            <div className="md:col-span-2">
              <dt className="text-gray-500">Prepared by</dt>
              <dd className="mt-1 font-semibold">
                AngolaLab Economic Intelligence System (AEIS)
              </dd>
            </div>
          </dl>
        </header>

        <section className="py-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-red-700">
            Executive Summary
          </p>

          <p className="mt-5 text-lg leading-8 text-gray-800">
            Major international sporting events provide more than
            entertainment. They also reveal how countries prepare for
            infrastructure, climate, public health, transport and long-term
            planning challenges.
          </p>

          <p className="mt-5 text-lg leading-8 text-gray-800">
            As attention turns to the FIFA World Cup quarter-final between
            England and Norway in Miami, AEIS examines the broader lessons that
            can inform Angola’s future development.
          </p>
        </section>

        <ReportSection number="1" title="Match Context">
          <p>
            England and Norway meet in a FIFA World Cup quarter-final featuring
            internationally recognised players, including Harry Kane and
            Erling Haaland.
          </p>

          <p>
            While the football attracts worldwide attention, AEIS focuses on
            another important factor influencing the event: environmental
            conditions.
          </p>
        </ReportSection>

        <ReportSection
          number="2"
          title="Climate & Infrastructure Observation"
        >
          <p>
            The match is being played in Miami during one of the hottest
            periods of the year.
          </p>

          <p>
            The stadium incorporates partial roof coverage that protects many
            spectators while leaving the playing surface exposed. Natural
            airflow helps reduce heat within the stadium but does not eliminate
            the effects of high temperature and humidity.
          </p>

          <p>From an AEIS perspective, climate influences:</p>

          <BulletList
            items={[
              "Infrastructure design",
              "Athlete performance",
              "Public health planning",
              "Spectator experience",
              "Event management",
            ]}
          />

          <p>
            Climate therefore becomes an operational consideration rather than
            simply a weather observation.
          </p>
        </ReportSection>

        <ReportSection number="3" title="Global Football Developments">
          <p>FIFA has confirmed the following future World Cup hosts:</p>

          <BulletList
            items={[
              "2030 FIFA World Cup: Morocco, Portugal and Spain, with three opening matches taking place in South America to commemorate the tournament’s centenary.",
              "2034 FIFA World Cup: Saudi Arabia.",
            ]}
          />

          <p>
            These decisions illustrate the continued expansion of football
            infrastructure across multiple regions and the growing importance
            of long-term planning for major international events.
          </p>
        </ReportSection>

        <section className="border-t border-gray-200 py-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-red-700">
            4. AEIS Strategic Assessment
          </p>

          <div className="mt-7 space-y-8">
            {strategicAreas.map((area) => (
              <div key={area.title} className="rounded-2xl border p-6">
                <h2 className="text-2xl font-semibold">{area.title}</h2>
                <p className="mt-4 leading-7 text-gray-700">{area.text}</p>
                <BulletList items={area.points} />
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-gray-200 py-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-red-700">
            AEIS System Perspective
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            A football match is not viewed in isolation.
          </h2>

          <div className="mt-8 flex flex-col items-center gap-2 rounded-2xl bg-gray-50 p-8 text-center font-semibold">
            {[
              "Climate",
              "Infrastructure",
              "Public Health",
              "Education",
              "Sport",
              "Economic Development",
              "National Resilience",
            ].map((item, index, array) => (
              <div key={item}>
                <div>{item}</div>
                {index < array.length - 1 && (
                  <div className="my-2 text-red-700">↓</div>
                )}
              </div>
            ))}
          </div>

          <p className="mt-7 leading-8 text-gray-700">
            International events provide opportunities to study how other
            countries prepare for complex challenges and how those lessons may
            be adapted to Angola’s context.
          </p>
        </section>

        <ReportSection title="Indicators to Monitor">
          <BulletList
            items={[
              "Climate resilience in public infrastructure",
              "Sports infrastructure development",
              "Investment in youth development programmes",
              "Educational facility adaptation",
              "Environmental conditions affecting major international events",
            ]}
          />
        </ReportSection>

        <ReportSection title="AEIS Strategic Observation">
          <p>
            Global events are valuable not only because they capture public
            attention, but because they reveal how nations prepare for the
            future.
          </p>

          <blockquote className="my-7 border-l-4 border-red-700 pl-6 text-2xl font-semibold leading-relaxed">
            The football match may last ninety minutes. The lessons relating
            to infrastructure, climate adaptation, education and national
            planning may remain relevant for decades.
          </blockquote>
        </ReportSection>

        <ReportSection title="AEIS Position">
          <p>
            The role of AEIS is to observe international developments,
            identify evidence-based lessons and translate them into practical
            intelligence that supports better decision-making across Angola.
          </p>

          <p>
            Every major event has the potential to become a case study. The
            value lies not in watching the event alone, but in understanding
            the systems that shape it.
          </p>
        </ReportSection>
      </article>
    </main>
  );
}

function ReportSection({
  number,
  title,
  children,
}: {
  number?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-gray-200 py-10">
      <p className="text-sm font-semibold uppercase tracking-wide text-red-700">
        {number ? `${number}. ` : ""}
        {title}
      </p>

      <div className="mt-5 space-y-5 text-lg leading-8 text-gray-800">
        {children}
      </div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3 pl-5 text-gray-700">
      {items.map((item) => (
        <li key={item} className="list-disc leading-7">
          {item}
        </li>
      ))}
    </ul>
  );
}