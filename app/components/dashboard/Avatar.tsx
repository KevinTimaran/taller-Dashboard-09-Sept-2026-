export default function Avatar() {
  return (
    <span className="avatar">
      <svg viewBox="0 0 44 44" aria-hidden="true">
        <circle cx="22" cy="22" r="22" fill="#ff915a" />
        <path d="M10 44V31c0-8 24-8 24 0v13" fill="#974124" />
        <ellipse cx="22" cy="21" rx="12" ry="16" fill="#442c24" />
        <ellipse cx="22" cy="21" rx="8" ry="11" fill="#c58451" />
        <path d="M14 17c0-13 16-10 16 2l-6-6-10 4" fill="#39281e" />
        <path
          d="M18 27q4 4 8 0"
          stroke="#fff0d1"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M17 20h2m6 0h2m-5 1-1 4h2"
          stroke="#553322"
          strokeWidth="1.5"
        />
      </svg>
    </span>
  );
}
