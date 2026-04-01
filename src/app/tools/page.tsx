import type { Metadata } from "next";
import ToolsPageClient from "./ToolsPageClient";

export const metadata: Metadata = {
  title: "Insulation Tools & ROI Calculator",
  description:
    "Calculate your insulation ROI and thermal savings. Estimate heat retention, annual energy savings, and the right spray foam depth for your Telluride mountain home.",
  keywords: [
    "insulation ROI calculator Telluride",
    "spray foam R-value calculator",
    "attic insulation savings calculator",
    "thermal efficiency calculator Colorado",
  ],
  openGraph: {
    title: "Insulation Tools & Calculator | Telluride Thermal",
    description:
      "Calculate your insulation ROI, heat retention, and energy savings for your Telluride mountain home.",
  },
};

export default function ToolsPage() {
  return <ToolsPageClient />;
}
