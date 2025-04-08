import DashboardSection from "../sections/DashboardSection";
import FinanceBanner from "../sections/FinanceBanner/FinanceBanner";

export default function Home() {
  return (
    <>
      <DashboardSection />
      {/* <PricingSection/> */}
      <FinanceBanner/>
    </>
  )
}
