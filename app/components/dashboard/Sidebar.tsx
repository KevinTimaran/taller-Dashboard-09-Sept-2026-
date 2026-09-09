import Link from "next/link";
import Icon from "./Icon";
import { navigation } from "./data";
export default function Sidebar({
  search,
  onNotice,
}: {
  search: string;
  onNotice: (message: string) => void;
}) {
  return (
    <aside className="sidebar">
      <Link href="/" className="brand" aria-label="Flex home">
        <span className="brand-mark">R</span>
        <span>flex</span>
      </Link>
      <div className="sidebar-content">
        <p className="nav-caption">Menu</p>
        <nav aria-label="Main menu">
          {navigation
            .filter((item) =>
              item.label.toLowerCase().includes(search.toLowerCase()),
            )
            .map((item) => (
              <button
                key={item.label}
                className={`nav-item ${item.label === "Dashboard" ? "active" : ""}`}
                onClick={() =>
                  item.label !== "Dashboard" &&
                  onNotice(
                    `${item.label} — No additional data available in this demo.`,
                  )
                }
              >
                <Icon name={item.icon} />
                <span>{item.label}</span>
                {item.expand && <Icon name="chevron" className="nav-chevron" />}
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
          onNotice("You are viewing a demo. No account is signed in.")
        }
      >
        <Icon name="logout" />
        <span>Logout</span>
      </button>
    </aside>
  );
}
