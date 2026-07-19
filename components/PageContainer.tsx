export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        maxWidth: "1185px",
        margin: "0 auto",
        padding: "1rem",
        boxSizing: "border-box",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {children}
    </div>
  );
}