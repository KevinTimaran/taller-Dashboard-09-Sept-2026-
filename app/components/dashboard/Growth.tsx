export default function Growth({
  down = false,
  children,
}: {
  down?: boolean;
  children: React.ReactNode;
}) {
  return (
    <span className={`growth ${down ? "negative" : ""}`}>
      <span>{down ? "↓" : "↑"}</span> {children}
    </span>
  );
}
