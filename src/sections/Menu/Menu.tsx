import { useTheme } from "next-themes";
import "./Menu.scss";

export default function Menu() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className={`navbar-wrapper ${isDark ? "dark" : "light"}`}>
      <div className="navbar-container">
        <a href="#">Product</a>
        <a href="#">Integration</a>
        <a href="#">Demo</a>
        <a href="#">Pricing</a>
        <a href="#" className="login-btn">Login</a>
      </div>
    </div>
  );
}
