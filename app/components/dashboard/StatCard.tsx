import Icon from "./Icon";
import Growth from "./Growth";
import type { Statistic } from "./data";
export default function StatCard({ stat }: { stat: Statistic }) {
  return (
    <article className="stat-card">
      <span className="icon-bubble">
        <Icon name={stat.icon} />
      </span>
      <div>
        <h2>{stat.title}</h2>
        <div className="stat-value">
          <strong>{stat.value}</strong>
          <Growth down={stat.down}>{stat.change}</Growth>
        </div>
      </div>
    </article>
  );
}
