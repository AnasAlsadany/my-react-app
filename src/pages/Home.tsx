import { useTheme } from "next-themes";
import DashboardSection from "../sections/DashboardSection";
import FinanceBanner from "../sections/FinanceBanner/FinanceBanner";
import PricingSection from "../sections/PricingSection/PricingSection";
import TestimonialsSection from "../sections/TestimonialsSection/TestimonialsSection";

export default function Home() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <>
      <DashboardSection />
      <div className="d-flex">

      <TestimonialsSection />
      </div>
      <div className={`${isDark ? 'bg-dark text-white' : 'bg-light text-dark'} py-5`}>
      <PricingSection/>
      <FinanceBanner/>
      </div>
    </>
  )
}
