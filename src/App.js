import { jsx as _jsx } from "react/jsx-runtime";
import { Container } from "react-bootstrap";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import ThemeProvider from "./theme/ThemeProvider";
import "./styles/main.scss";
function App() {
    return (_jsx(ThemeProvider, { children: _jsx(Layout, { children: _jsx(Container, { fluid: "md", className: "my-4 p-0", children: _jsx(Home, {}) }) }) }));
}
export default App;
