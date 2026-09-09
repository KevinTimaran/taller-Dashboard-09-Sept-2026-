"use client";

import { useState } from "react";
import Link from "next/link";

type IconName =
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
function Icon({
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

function Growth({
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

function PromoArt() {
  return (
    <svg
      className="promo-art"
      viewBox="0 0 190 170"
      fill="none"
      aria-hidden="true"
    >
      <g fill="#9484ff" opacity=".2">
        <path d="m60 42 12-9 12 9v9H60zM113 19l20-13 21 13v15h-41zM119 48l18-13 18 13v12h-36zM155 69l16-12 17 12v13h-33zM76 112l8-7 8 7v19H76z" />
        <path d="m90 0 8 10h-5v22h-7V10h-5zM180 20l9 10h-5v20h-8V30h-5z" />
      </g>
      <path
        d="M156 175c21-43 4-54-6-77-10-21 0-40 1-60"
        stroke="#343047"
        strokeWidth="12"
      />
      <path d="M92 173c-13-24 7-28 6-49" stroke="#38304c" strokeWidth="7" />
      <path d="m151 12-26 27h17v20h18V39h18l-27-27Z" fill="white" />
      <path d="m98 96-14 14h9v12h10v-12h9L98 96Z" fill="white" />
      <path d="m22 147 9-6 10 7-3 5 5 3H22l-3-4 3-5Z" fill="white" />
      <circle cx="137" cy="25" r="4" fill="#f7bb9c" />
      <path d="m135 30-10 12 8 5 9-16" fill="#f87876" />
      <path d="m129 45-1 14 5 1 5-14" fill="#242642" />
      <path d="m134 34 10 6 3-2" stroke="#ffccb3" strokeWidth="3" />
      <path d="m132 24 3-6 5 4-2 3" fill="#252344" />
      <circle cx="160" cy="144" r="4" fill="#e3deff" />
      <path d="m196 92-15 17h13" fill="white" />
    </svg>
  );
}

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);
  const [day, setDay] = useState(21);
  const [notice, setNotice] = useState("");
  const [search, setSearch] = useState("");
  const [month, setMonth] = useState("February");
  const nav: { label: string; icon: IconName; expand?: boolean }[] = [
    { label: "Dashboard", icon: "home" },
    { label: "Orders", icon: "bag", expand: true },
    { label: "Products", icon: "products", expand: true },
    { label: "Analytics", icon: "chart" },
    { label: "Marketing", icon: "megaphone", expand: true },
    { label: "Messages", icon: "message" },
  ];
  function downloadReport() {
    const url = URL.createObjectURL(
      new Blob(
        [
          "Metric,Value,Change\nTotal Sales,263000,15.6%\nTotal Visitors,35000,-6.2%\nTotal Orders,165000,3.5%\nConversion,58.19%,3.5%\nIncome,542317,\nExpenses,497456,\n",
        ],
        { type: "text/csv" },
      ),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "flex-report.csv";
    link.click();
    URL.revokeObjectURL(url);
  }
  return (
    <div className={`dashboard-shell ${collapsed ? "sidebar-collapsed" : ""}`}>
      <aside className="sidebar">
        <Link href="/" className="brand" aria-label="Flex home">
          <span className="brand-mark">R</span>
          <span>flex</span>
        </Link>
        <div className="sidebar-content">
          <p className="nav-caption">Menu</p>
          <nav aria-label="Main menu">
            {nav
              .filter((item) =>
                item.label.toLowerCase().includes(search.toLowerCase()),
              )
              .map((item) => (
                <button
                  key={item.label}
                  className={`nav-item ${item.label === "Dashboard" ? "active" : ""}`}
                  onClick={() =>
                    item.label !== "Dashboard" &&
                    setNotice(
                      `${item.label} — No additional data available in this demo.`,
                    )
                  }
                >
                  <Icon name={item.icon} />
                  <span>{item.label}</span>
                  {item.expand && (
                    <Icon name="chevron" className="nav-chevron" />
                  )}
                  {item.label === "Messages" && (
                    <span className="message-count">25</span>
                  )}
                </button>
              ))}
          </nav>
          <p className="nav-caption integrations-caption">Integrations</p>
          <nav aria-label="Integrations">
            <a
              className="nav-item"
              href="https://www.atlassian.com/software/jira"
              target="_blank"
              rel="noreferrer"
            >
              <span className="jira-logo">
                <i />
              </span>
              <span>Jira</span>
            </a>
            <a
              className="nav-item"
              href="https://slack.com"
              target="_blank"
              rel="noreferrer"
            >
              <span className="slack-logo">
                <i />
                <i />
                <i />
                <i />
              </span>
              <span>Slack</span>
            </a>
            <a
              className="nav-item"
              href="https://www.intercom.com"
              target="_blank"
              rel="noreferrer"
            >
              <span className="intercom-logo">▥</span>
              <span>Intercom</span>
            </a>
          </nav>
        </div>
        <button
          className="nav-item logout"
          onClick={() =>
            setNotice("You are viewing a demo. No account is signed in.")
          }
        >
          <Icon name="logout" />
          <span>Logout</span>
        </button>
      </aside>
      <header className="topbar">
        <button
          className="circle-button collapse-button"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          onClick={() => setCollapsed(!collapsed)}
        >
          <span>{collapsed ? "›" : "‹"}</span>
        </button>
        <label className="search-box">
          <Icon name="search" />
          <input
            placeholder="Search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Search menu"
          />
        </label>
        <div className="account">
          <button
            className="circle-button notification-button"
            aria-label="Notifications"
            onClick={() =>
              setNotice("You’re all caught up. No new notifications.")
            }
          >
            <Icon name="bell" />
            <span className="notification-dot" />
          </button>
          <div className="balance">
            <span>Your Balance</span>
            <strong>$5.456</strong>
          </div>
          <button
            className="profile"
            onClick={() => setNotice("Hi, Lay! Welcome to your dashboard.")}
          >
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
            <span>
              <b>Hi,</b> Lay
            </span>
          </button>
        </div>
      </header>
      <main className="main-content">
        <div className="page-heading">
          <div className="page-title">
            <span className="title-icon">
              <Icon name="home" />
            </span>
            <h1>Dashboard</h1>
          </div>
          <div className="heading-actions">
            <label className="select-control period-select">
              <Icon name="calendar" />
              <select aria-label="Report period">
                <option>This Month</option>
                <option>Last Month</option>
                <option>This Year</option>
              </select>
              <Icon name="chevron" />
            </label>
            <button
              className="green-button download-button"
              onClick={downloadReport}
            >
              <Icon name="download" />
              Download Report
            </button>
          </div>
        </div>
        <section className="dashboard-panel" aria-label="Dashboard overview">
          <div className="stats-grid">
            {[
              {
                title: "Total Sales",
                value: "263k",
                change: "15.6%",
                icon: "cart",
              },
              {
                title: "Total Visitors",
                value: "35k",
                change: "6.2%",
                icon: "users",
                down: true,
              },
              {
                title: "Total Orders",
                value: "165k",
                change: "3.5%",
                icon: "bag",
              },
            ].map((stat) => (
              <article className="stat-card" key={stat.title}>
                <span className="icon-bubble">
                  <Icon name={stat.icon as IconName} />
                </span>
                <div>
                  <h2>{stat.title}</h2>
                  <div className="stat-value">
                    <strong>{stat.value}</strong>
                    <Growth down={stat.down}>{stat.change}</Growth>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="detail-grid">
            <section className="sessions-card">
              <div className="card-heading">
                <h2>Online Store Sessions</h2>
                <button className="outline-button" onClick={downloadReport}>
                  View Report
                </button>
              </div>
              <div className="session-summary">
                <span className="icon-bubble">
                  <Icon name="users" />
                </span>
                <div className="visitor-count">
                  <span>Visitors</span>
                  <strong>68</strong>
                </div>
                <div className="session-growth">
                  <Growth>15.6%</Growth>
                  <div>
                    <span className="previous-value">26</span>
                    <Growth down>1.6%</Growth>
                  </div>
                </div>
              </div>
              <div className="chart-heading">
                <h3>Sessions Over Time</h3>
                <label className="select-control month-select">
                  <Icon name="calendar" />
                  <select
                    value={month}
                    onChange={(event) => setMonth(event.target.value)}
                    aria-label="Chart month"
                  >
                    {[
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                      "August",
                      "September",
                      "October",
                      "November",
                      "December",
                    ].map((m) => (
                      <option key={m}>{m}</option>
                    ))}
                  </select>
                  <Icon name="chevron" />
                </label>
              </div>
              <div className="line-chart">
                <svg
                  viewBox="0 0 400 205"
                  role="img"
                  aria-label={`Sessions over time in ${month}: rising from zero to fifteen`}
                >
                  <defs>
                    <linearGradient id="lineGradient">
                      <stop stopColor="#dcd4ff" />
                      <stop offset="1" stopColor="#5841e9" />
                    </linearGradient>
                    <linearGradient
                      id="areaGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop stopColor="#7964ee" stopOpacity=".14" />
                      <stop offset="1" stopColor="#7964ee" stopOpacity="0" />
                    </linearGradient>
                    <filter
                      id="lineShadow"
                      x="-20%"
                      y="-30%"
                      width="140%"
                      height="170%"
                    >
                      <feDropShadow
                        dx="0"
                        dy="6"
                        stdDeviation="5"
                        floodColor="#6b50de"
                        floodOpacity=".2"
                      />
                    </filter>
                  </defs>
                  <g className="chart-grid">
                    <path d="M38 22H396M38 74H396M38 125H396M38 177H396" />
                  </g>
                  <g className="axis-label">
                    <text x="1" y="28">
                      15
                    </text>
                    <text x="1" y="80">
                      10
                    </text>
                    <text x="1" y="131">
                      5
                    </text>
                    <text x="1" y="183" fill="#17152d">
                      0
                    </text>
                  </g>
                  <path
                    d="M38 177C70 176 71 104 101 115S145 169 180 162S218 78 259 102S303 187 338 130S361 20 396 25V177H38Z"
                    fill="url(#areaGradient)"
                  />
                  <path
                    d="M38 177C70 176 71 104 101 115S145 169 180 162S218 78 259 102S303 187 338 130S361 20 396 25"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="2.7"
                    filter="url(#lineShadow)"
                  />
                </svg>
              </div>
              <div className="chart-pagination">
                <button
                  className="circle-button"
                  aria-label="Previous day"
                  onClick={() => setDay(Math.max(1, day - 1))}
                >
                  ‹
                </button>
                {[21, 22, 23, 24, 25].map((d) => (
                  <button
                    key={d}
                    className={`day-button ${day === d ? "selected" : ""}`}
                    onClick={() => setDay(d)}
                    aria-pressed={day === d}
                  >
                    {d}
                  </button>
                ))}
                <button
                  className="circle-button"
                  aria-label="Next day"
                  onClick={() => setDay(Math.min(31, day + 1))}
                >
                  ›
                </button>
              </div>
            </section>
            <div className="right-column">
              <section className="promo-card">
                <div className="promo-copy">
                  <h2>Need More Stats?</h2>
                  <p>Upgrade to pro for added benefits.</p>
                  <button
                    className="green-button pro-button"
                    onClick={() =>
                      setNotice("Pro upgrades are not available in this demo.")
                    }
                  >
                    <span className="upgrade-icon">↑</span>Go Pro Now
                  </button>
                </div>
                <PromoArt />
              </section>
              <section className="conversion-card">
                <h2>Conversion</h2>
                <div className="gauge">
                  <svg
                    viewBox="0 0 360 195"
                    role="img"
                    aria-label="Conversion 58.19 percent, up 3.5 percent"
                  >
                    <defs>
                      <linearGradient
                        id="gaugeGradient"
                        x1="0"
                        y1="1"
                        x2="1"
                        y2="0"
                      >
                        <stop stopColor="#a597ff" />
                        <stop offset=".55" stopColor="#705cff" />
                        <stop offset="1" stopColor="#5340ff" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M38 176a142 142 0 0 1 284 0"
                      stroke="#efecfd"
                      strokeWidth="68"
                      fill="none"
                    />
                    <path
                      d="M38 176a142 142 0 0 1 258-82"
                      stroke="url(#gaugeGradient)"
                      strokeWidth="68"
                      fill="none"
                    />
                    <path d="m251 124 79-61-68 76Z" fill="#8874da" />
                    <text
                      x="180"
                      y="149"
                      textAnchor="middle"
                      className="gauge-value"
                    >
                      58.19%
                    </text>
                    <text
                      x="180"
                      y="175"
                      textAnchor="middle"
                      className="gauge-growth"
                    >
                      ↑ 3.5%
                    </text>
                  </svg>
                </div>
                <div className="conversion-legend">
                  <div>
                    <span className="income-arrow">↙</span>
                    <span>Income</span>
                    <strong>$542,317</strong>
                  </div>
                  <div>
                    <span className="expense-arrow">↗</span>
                    <span>Expences</span>
                    <strong>$497,456</strong>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
      {notice && (
        <div className="notice" role="status">
          <span>{notice}</span>
          <button
            aria-label="Dismiss notification"
            onClick={() => setNotice("")}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}
