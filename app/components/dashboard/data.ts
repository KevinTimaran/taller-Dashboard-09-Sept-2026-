import type { IconName } from "./Icon";

export const navigation: { label: string; icon: IconName; expand?: boolean }[] =
  [
    { label: "Dashboard", icon: "home" },
    { label: "Orders", icon: "bag", expand: true },
    { label: "Products", icon: "products", expand: true },
    { label: "Analytics", icon: "chart" },
    { label: "Marketing", icon: "megaphone", expand: true },
    { label: "Messages", icon: "message" },
  ];

export type Statistic = {
  title: string;
  value: string;
  change: string;
  icon: IconName;
  down?: boolean;
};
export const statistics: Statistic[] = [
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
];
