import { Container, Row, Col, Button } from "react-bootstrap";
import { useTheme } from "next-themes";
import SharedButton from "../../@shared/sharedButton";

export default function FinanceBanner() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="py-5">
      <Container>
        <div className={`${isDark ? "" : "bg-white text-dark"} rounded p-3`}>
          <Row className="justify-content-between align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <h1 className="display-4 fw-bold mb-3">
                Let's Upgrade your finances experience by using FinBiz
              </h1>

              <div className="d-flex gap-2 mt-4">
                <SharedButton
                  variant="success"
                  className="rounded-pill px-4 py-2"
                >
                  Request Demo
                </SharedButton>
                <SharedButton variant="auto" className="rounded-pill px-4 py-2">
                  Watch Video
                </SharedButton>
              </div>
            </Col>

            <Col md={6}>
              <img
                src="/images/Rectangle.png"
                alt="Person looking at planning board"
                className="img-fluid rounded-3"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
