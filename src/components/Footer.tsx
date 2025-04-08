import { useTheme } from "next-themes";
import {Container,Row,Col,Form,Button,} from "react-bootstrap";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export default  function Footer (){
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const bgColor = isDark ? "#111" : "#f9f9f9";
  const textColor = isDark ? "#fff" : "#111";
  return (
    <div
      style={{ backgroundColor: bgColor, color: textColor, padding: "3rem 0" }}
    >
      <Container>
        <Row className="gy-4">
          <Col md={3}>
            <div className="fw-bold fs-5 mb-2">
              <span style={{ color: "#A4FF00" }}>+ </span>FinBiz
            </div>
            <p>
              Data analysis software is a type of software tool used for data
              analysis and reporting.
            </p>
            <div className="d-flex gap-3">
              <FaTwitter />
              <FaFacebook />
              <FaInstagram />
              <FaGithub />
            </div>
          </Col>

          <Col md={2}>
            <h6 className="display fw-semibold mb-3">Company</h6>
            <ul className="list-unstyled  display-10">
              <li>Service</li>
              <li>Resources</li>
              <li>About us</li>
            </ul>
          </Col>

          <Col md={2}>
            <h6 className="fw-semibold mb-3">Help</h6>
            <ul className="list-unstyled">
              <li>Customer Support</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </Col>

          <Col md={5}>
            <h6 className="fw-semibold mb-3">Subscribe to Newsletter</h6>
            <div className="d-flex">
              <Form.Control
                type="email"
                placeholder="Enter email address"
                className="rounded-start"
                style={{
                  // backgroundColor: inputBg,
                  border: "none",
                  borderRight: "none",
                  padding: "0.75rem 1rem",
                  flex: 1,
                  borderRadius: "0",
                }}
              />
              <Button
                style={{
                  backgroundColor: "#A4FF00",
                  color: "#000",
                  border: "none",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0 0.375rem 0.375rem 0",
                }}
                className="fw-semibold"
              >
                Join
              </Button>
            </div>
          </Col>
        </Row>

        <hr
          className="mt-4"
          style={{ borderColor: isDark ? "#222" : "#ccc" }}
        />
      </Container>
    </div>
  );
};


