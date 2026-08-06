import Link from "next/link";

type PageProps = {
  params: {
    reference: string;
  };
};

export default function ResearchPublication({ params }: PageProps) {
  return (
    <main style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <Link href="/trading">← Back to Trading Intelligence</Link>

      <h1>Research Publication</h1>

      <p>
        <strong>Reference:</strong> {params.reference}
      </p>

      <hr />

      <h2>Executive Summary</h2>

      <p>
        This publication page will contain the complete research
        associated with this reference.
      </p>
    </main>
  );
}