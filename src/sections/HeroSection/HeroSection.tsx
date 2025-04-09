import { useTheme } from "next-themes";
import {Container,Row,Col,Badge,Form,Button,InputGroup,} from "react-bootstrap";
import Review from "../Review/Review";

export default function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className={`py-5`}>
      <Container className="text-center">
        <div className="d-inline-block mb-3">
          <Badge bg="success" className="px-3 py-2 rounded-pill fs-6">
            New
          </Badge>
          <span className="ms-2 text-success">Introducing AI Automation →</span>
        </div>

        <h1 className="display-4 fw-bold mb-3">
          The Finance Solutions <br /> For Your Business
        </h1>

        <p className="display-10  mb-3">
          Empower your finance team. The onestop platform for all financial
          management of small and medium-sized business.
        </p>

        <Row className="justify-content-center mb-4">
          <Col md={8} lg={6}>
       <InputGroup className="mb-3">
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                className={`rounded-start-pill p-3`}
              />
              <Button
                variant={isDark ? 'light' : 'dark'}
                className="rounded-end-pill px-4 fw-semibold"
              >
                Book a Demo
              </Button>
            </InputGroup>
          </Col>
        </Row>
        <div className="d-flex justify-content-center align-items-center gap-2">    
        <div className="d-flex" style={{ marginRight: '10px' }}>
           <Review/>
          </div> 
        </div>
      </Container>
    </div>
  );
}
