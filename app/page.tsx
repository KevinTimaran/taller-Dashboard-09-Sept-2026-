import Dashboard from "./components/dashboard/Dashboard";
import StatsOverview from "./components/dashboard/StatsOverview";
import ConversionCard from "./components/dashboard/ConversionCard";

export default function Home() {
  return (
    <Dashboard statistics={<StatsOverview />} conversion={<ConversionCard />} />
  );
}
