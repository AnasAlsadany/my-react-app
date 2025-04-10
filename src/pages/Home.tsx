import { useTheme } from "next-themes";
import DashboardSection from "../sections/DashboardSection";
import FinanceBanner from "../sections/FinanceBanner/FinanceBanner";
import PricingSection from "../sections/PricingSection/PricingSection";
import TestimonialsSection from "../sections/TestimonialsSection/TestimonialsSection";
import Menu from "../sections/Menu/Menu";
import FeatureShowcase from "../sections/FeatureShowcase/FeatureShowcase";

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <>
      <DashboardSection />
      <Menu />
      <FeatureShowcase />

      <div className="my-4 d-flex justify-content-center align-items-center">
        <TestimonialsSection />
      </div>
      <div
        className={`${isDark ? "bg-dark text-white" : "bg-light text-dark"}`}
      >
        <PricingSection />
        <FinanceBanner />
      </div>
    </>
  );
}
