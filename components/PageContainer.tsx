export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1185px",
        margin: "0 auto",
        padding: "0 1rem 1rem",
        boxSizing: "border-box",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {children}
    </div>
  );
}