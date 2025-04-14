import Row from "react-bootstrap/esm/Row";
import SpendOverviewChart from "./SpendOverviewChart/SpendOverviewChart";
import { Col, Container } from "react-bootstrap";
import FinancialSummary from "./FinancialSummary/FinancialSummary";
import FinancialStatistics from "./FinancialStatistics/FinancialStatistics";
import { useTheme } from "next-themes";
import HeroSection from "./HeroSection/HeroSection";
import EmploymentTypesProgress from "./Employ/EmploymentTypesProgress";

export default function DashboardSection() {
  const { theme } = useTheme();

  return (
    <>
      <section className="mb-4">
        <HeroSection />
      </section>
      <section className="mt-2 card ">
  <div className="d-flex justify-content-center align-items-center">
    <Container fluid>
      <Row
        className={`p-3 shadow rounded-3  ${theme === "dark" ? "bg-black text-white" : "bg-light text-dark"}`}
      >
        {/* Top Financial Cards */}
        <Col xs={12}>
          <FinancialStatistics />
        </Col>

        {/* 3 columns: Summary, Chart, Employment */}
        <Col md={3}>
          <FinancialSummary />
        </Col>
        <Col md={6}>
          <SpendOverviewChart />
        </Col>
        <Col md={3}>
          <EmploymentTypesProgress />
        </Col>
      </Row>
    </Container>
  </div>
</section>

      {/* <section className="mt-2 card">
        <div className="my-4 d-flex justify-content-center align-items-center">
          <Row
            className={`p-3 ${
              theme === "dark" ? "bg-black text-white" : "bg-light text-dark"
            }`}
          >
            <FinancialStatistics />
            <Col md={3}>
              <FinancialSummary />
            </Col>
            <Col md={6}>
              <SpendOverviewChart />
            </Col>
            <Col md={3}>
              <EmploymentTypesProgress />
            </Col>
          </Row>
        </div>
      </section> */}
    </>
  );
}
