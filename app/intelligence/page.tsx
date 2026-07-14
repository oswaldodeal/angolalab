import Link from "next/link";

export default function IntelligencePage() {
  return (
    <main className="min-h-screen bg-white px-6 py-14 text-black">
      <section className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-red-700">
          AngolaLab AEIS
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-6xl">
          Intelligence
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-700">
          Evidence-based publications connecting global developments with
          Angola’s economy, environment, infrastructure and society.
        </p>

        <div className="mt-12 border-t border-gray-200">
          <article className="border-b border-gray-200 py-8">
            <p className="text-sm text-gray-500">
              11 July 2026 · Intelligence Brief
            </p>

            <h2 className="mt-3 text-2xl font-semibold">
              FIFA World Cup 2026 — Beyond the Match
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-gray-700">
              Climate, infrastructure and strategic lessons for Angola.
            </p>

            <Link
              href="/intelligence/world-cup-2026"
              className="mt-5 inline-block font-semibold text-red-700 hover:underline"
            >
              Read Intelligence Brief →
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}