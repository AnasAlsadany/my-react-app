import { Container } from "react-bootstrap";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import ThemeProvider from "./theme/ThemeProvider";
import "./styles/main.scss";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Container fluid="md" className="my-4">
          <Home />
        </Container>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
