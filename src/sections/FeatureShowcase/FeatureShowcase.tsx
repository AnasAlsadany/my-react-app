import InvoiceCard from "./InvoiceCard";
import { Container, Row, Col } from "react-bootstrap";
import ExpenseManagementCard from "./ExpenseManagementCard";

import SharedCard from "../../@shared/SharedCard";

export default function FeatureShowcase(){

  return (
    <Container className="py-5">
      <Row className="g-4 mb-4">
        <Col md={4}>
          <SharedCard
            title="Simple analytics"
            description="Make informed decisions backed by data through our analytics tools."
            imageSrc="/images/analytics.png"
          />
        </Col>

        <Col md={4}>
          <SharedCard
            description="Bring harmony to team expenses with budget limits and real-time monitoring. Freedom for your staff. Peace of mind for you."
            imageSrc="/images/analytics.png"
          />
        </Col>

        <Col md={4}>
          <SharedCard
            title="Easy collaboration"
            description="Seamlessly collaborate with your team members like never before."
            imageSrc="/images/analytics.png"
          />
        </Col>
      </Row>
      <Row  className="g-4">
        <Col md={6}>
          <InvoiceCard />
        </Col>
        <Col md={6}>
          <ExpenseManagementCard />
        </Col>
      </Row>
    </Container>
  );
};


