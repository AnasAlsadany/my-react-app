import { Card, Button, Badge, Container, Row, Col } from 'react-bootstrap';
import { useTheme } from 'next-themes';

export default  function FinancialSummary() {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <Card className="h-100">
      <Card.Body className={`${isDarkMode ? '' : 'bg-white text-dark'} rounded`}>
        <Container fluid className="p-0">
          <Row>
            <Col>
              <small>Total Balance</small>
              <h2 className="fw-bold mb-3">$350.0</h2>
              <Button 
                variant={isDarkMode ? "light" : "dark"} 
                className="w-100 mb-4"
              >
                Transfer
              </Button>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col>
              <div className="d-flex justify-content-between align-items-center">
                <small>Total Income</small>
                <Badge bg={isDarkMode ? "secondary" : "dark"} pill>92%</Badge>
              </div>
              <h3 className="fw-bold mb-4">$320.0</h3>
            </Col>
          </Row>

          {/* Total Expense Section */}
          <Row>
            <Col>
              <div className="d-flex justify-content-between align-items-center">
                <small >Total Expense</small>
                <Badge bg={isDarkMode ? "secondary" : "dark"} pill>92%</Badge>
              </div>
              <h3 className="fw-bold">$220.0</h3>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}

