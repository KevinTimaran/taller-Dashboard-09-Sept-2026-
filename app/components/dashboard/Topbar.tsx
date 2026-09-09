import Icon from "./Icon";
import Avatar from "./Avatar";
export default function Topbar({
  collapsed,
  search,
  onToggleSidebar,
  onSearchChange,
  onNotice,
}: {
  collapsed: boolean;
  search: string;
  onToggleSidebar: () => void;
  onSearchChange: (value: string) => void;
  onNotice: (message: string) => void;
}) {
  return (
    <header className="topbar">
      <button
        className="circle-button collapse-button"
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        onClick={() => onToggleSidebar()}
      >
        <span>{collapsed ? "›" : "‹"}</span>
      </button>
      <label className="search-box">
        <Icon name="search" />
        <input
          placeholder="Search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          aria-label="Search menu"
        />
      </label>
      <div className="account">
        <button
          className="circle-button notification-button"
          aria-label="Notifications"
          onClick={() =>
            onNotice("You’re all caught up. No new notifications.")
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
          onClick={() => onNotice("Hi, Lay! Welcome to your dashboard.")}
        >
          <Avatar />
          <span>
            <b>Hi,</b> Lay
          </span>
        </button>
      </div>
    </header>
  );
}
