import { Navbar, Container, Nav } from "react-bootstrap";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "next-themes";
import { Link } from "react-router-dom";

export default function AppNavbar() {
  const { theme } = useTheme();

  return (
    <Navbar
      expand="lg"
      className={`shadow-sm ${
        theme === "dark" ? "bg-dark navbar-dark" : "bg-light navbar-light"
      }`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">FinBiz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/product">Product</Nav.Link>
            <Nav.Link as={Link} to="/pages">Pages</Nav.Link>
            <Nav.Link as={Link} to="/integrations">Integrations</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/pricing">Pricing</Nav.Link>
          </Nav>
          <div className="d-flex gap-2">
            <ThemeToggle />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
