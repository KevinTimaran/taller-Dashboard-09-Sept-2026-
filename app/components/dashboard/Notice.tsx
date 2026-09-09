export default function Notice({
  message,
  onDismiss,
}: {
  message: string;
  onDismiss: () => void;
}) {
  return (
    <div className="notice" role="status">
      <span>{message}</span>
      <button aria-label="Dismiss notification" onClick={onDismiss}>
        ×
      </button>
    </div>
  );
}
