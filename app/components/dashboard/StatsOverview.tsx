import StatCard from "./StatCard";
import { statistics } from "./data";
export default function StatsOverview() {
  return (
    <div className="stats-grid">
      {statistics.map((stat) => (
        <StatCard key={stat.title} stat={stat} />
      ))}
    </div>
  );
}
