import { Navbar, Container, Nav } from "react-bootstrap";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "next-themes";

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
        <Navbar.Brand href="#"> FinBiz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#">Product</Nav.Link>
            <Nav.Link href="#">Pages</Nav.Link>
            <Nav.Link href="#">Integrations</Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
          </Nav>
          <div className="d-flex gap-2">
            <ThemeToggle />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
