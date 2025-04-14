import { Badge, Container, Row, Col } from "react-bootstrap";
import { useTheme } from "next-themes";
import SharedButton from "../../@shared/sharedButton";
import SharedCard from "../../@shared/SharedCard"; // Importing SharedCard

export default function FinancialSummary() {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <SharedCard
      title="Total Balance" 

    >
      <Container fluid className="p-0">
        <Row>
          <Col>
            <h2 className="fw-bold mb-3">$350.0</h2>
            <SharedButton variant="auto" className="w-100 mb-4">
              Transfer
            </SharedButton>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <div className="d-flex justify-content-between align-items-center">
              <small>Total Income</small>
              <Badge bg={isDarkMode ? "secondary" : "dark"} pill>
                92%
              </Badge>
            </div>
            <h3 className="fw-bold mb-4">$320.0</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="d-flex justify-content-between align-items-center">
              <small>Total Expense</small>
              <Badge bg={isDarkMode ? "secondary" : "dark"} pill>
                92%
              </Badge>
            </div>
            <h3 className="fw-bold">$220.0</h3>
          </Col>
        </Row>
      </Container>
    </SharedCard>
  );
}
