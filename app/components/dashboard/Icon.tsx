export type IconName =
  | "home"
  | "bag"
  | "products"
  | "chart"
  | "megaphone"
  | "message"
  | "logout"
  | "search"
  | "bell"
  | "calendar"
  | "download"
  | "users"
  | "cart"
  | "chevron";
export default function Icon({
  name,
  className = "",
}: {
  name: IconName;
  className?: string;
}) {
  const paths: Record<IconName, React.ReactNode> = {
    home: (
      <>
        <path d="m3 10 9-8 9 8M5 9v12h5v-7h4v7h5V9" />
        <path d="m8 9 4-3 4 3" />
      </>
    ),
    bag: (
      <>
        <path d="M5 7h14l2 14H3L5 7Z" />
        <path d="M9 8V5a3 3 0 0 1 6 0v3m-7 5 3 3 5-5" />
      </>
    ),
    products: (
      <>
        <rect x="9" y="2" width="7" height="11" rx="2" />
        <path d="m3 18 5-4 4 2 7-4 2 3-10 7-8-2Z" />
      </>
    ),
    chart: (
      <>
        <path
          d="M4 12h3v9H4zm7-9h3v18h-3zm7 5h3v13h-3z"
          fill="currentColor"
          stroke="none"
        />
      </>
    ),
    megaphone: (
      <>
        <path d="m4 9 12-5v16L4 15V9Zm12 0 4-2v10l-4-2M7 16l1 6h3l-1-5M2 10v4" />
      </>
    ),
    message: (
      <>
        <path
          d="M21 11c0 5-4 8-9 8H7l-5 3 1-7a8 8 0 0 1-1-4c0-5 4-8 10-8s9 3 9 8Z"
          fill="currentColor"
          stroke="none"
        />
        <path d="M7 11h.1m4.9 0h.1m4.9 0h.1" stroke="white" strokeWidth="2.5" />
      </>
    ),
    logout: (
      <>
        <path d="M11 3H4v18h7V3Z" fill="currentColor" />
        <path d="M12 12h9m-4-4 4 4-4 4" />
      </>
    ),
    search: (
      <>
        <circle cx="10" cy="10" r="6.5" />
        <path d="m15 15 5 5" />
      </>
    ),
    bell: (
      <>
        <path d="M5 17h14l-2-4V9a5 5 0 0 0-10 0v4l-2 4Z" fill="currentColor" />
        <path d="M10 21h4" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M7 2v6m10-6v6M3 10h18m-14 4h1m3 0h1m3 0h1m-9 3h1m3 0h1m3 0h1" />
      </>
    ),
    download: (
      <>
        <path
          d="M7 17H5a4 4 0 0 1-1-8 6 6 0 0 1 11-3 5 5 0 0 1 4 10h-2"
          fill="currentColor"
        />
        <path d="M12 12v10m-3-3 3 3 3-3" />
      </>
    ),
    users: (
      <>
        <circle cx="12" cy="6" r="3" fill="currentColor" stroke="none" />
        <circle cx="5" cy="8" r="2.5" fill="currentColor" stroke="none" />
        <circle cx="19" cy="8" r="2.5" fill="currentColor" stroke="none" />
        <path
          d="M8 21v-7a4 4 0 0 1 8 0v7H8ZM2 19v-5a3 3 0 0 1 4-3v8H2Zm16 0v-8a3 3 0 0 1 4 3v5h-4Z"
          fill="currentColor"
          stroke="none"
        />
      </>
    ),
    cart: (
      <>
        <path d="M2 3h3l3 13h11l3-10H6" fill="currentColor" />
        <circle cx="9" cy="21" r="1.5" fill="currentColor" />
        <circle cx="18" cy="21" r="1.5" fill="currentColor" />
      </>
    ),
    chevron: <path d="m8 10 4 4 4-4" />,
  };
  return (
    <svg
      className={`icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
