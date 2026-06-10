import Link from "next/link";

export default function TradingPage() {
  return (
    <>
      {/* Back Navigation */}
      <Link
        href="/"
        style={{
          textDecoration: "none",
          color: "#64748b",
          fontSize: "0.9rem",
          display: "inline-block",
          margin: "1.5rem 0 0 1.5rem",
        }}
      >
        ← Back to AngolaLab
      </Link>

      {/* Main Content */}
      <main className="min-h-screen bg-white text-slate-900 px-6 py-10">
        <section className="max-w-7xl mx-auto">
          {/* Page Header */}
          <p className="text-sm font-semibold text-slate-500">
            AngolaLab Intelligence Platform
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Trading Intelligence Dashboard
          </h1>

          <p className="mt-4 max-w-3xl text-slate-600">
            A systems-thinking dashboard for monitoring market structure,
            macro alignment, liquidity behaviour, and risk conditions.
          </p>

          {/* Dashboard Cards Grid */}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* DXY Structure Card */}
            <div className="rounded-2xl bg-slate-900 p-6 text-white shadow-lg">
              <h2 className="text-xl font-semibold">DXY Structure</h2>
              <p className="mt-2 text-slate-300">
                Dollar index behaviour, key zones, breakouts, and stalling areas.
              </p>
              <div className="mt-6 rounded-xl bg-slate-800 p-4">
                <p className="text-sm text-slate-400">Current Bias</p>
                <p className="mt-1 text-2xl font-bold text-emerald-400">
                  Bullish Above Support
                </p>
              </div>
            </div>

            {/* Bond Strength Card */}
            <div className="rounded-2xl bg-slate-900 p-6 text-white shadow-lg">
              <h2 className="text-xl font-semibold">Bond Strength</h2>
              <p className="mt-2 text-slate-300">
                US yields, real rates, and pressure on gold, equities, and FX.
              </p>
              <div className="mt-6 rounded-xl bg-slate-800 p-4">
                <p className="text-sm text-slate-400">Signal</p>
                <p className="mt-1 text-2xl font-bold text-yellow-400">
                  Watching Alignment
                </p>
              </div>
            </div>

            {/* Gold / XAUUSD Card */}
            <div className="rounded-2xl bg-slate-900 p-6 text-white shadow-lg">
              <h2 className="text-xl font-semibold">Gold / XAUUSD</h2>
              <p className="mt-2 text-slate-300">
                Price action, liquidity zones, London session behaviour, and
                macro pressure.
              </p>
              <div className="mt-6 rounded-xl bg-slate-800 p-4">
                <p className="text-sm text-slate-400">Market State</p>
                <p className="mt-1 text-2xl font-bold text-blue-400">
                  Waiting for Confirmation
                </p>
              </div>
            </div>

            {/* Market Alignment Card */}
            <div className="rounded-2xl bg-slate-900 p-6 text-white shadow-lg">
              <h2 className="text-xl font-semibold">Market Alignment</h2>
              <p className="mt-2 text-slate-300">
                DXY, bonds, gold, US30, Bitcoin, and emerging-market FX alignment.
              </p>
              <div className="mt-6 rounded-xl bg-slate-800 p-4">
                <p className="text-sm text-slate-400">Framework</p>
                <p className="mt-1 text-2xl font-bold text-emerald-400">
                  Wait Is My Hedge
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}