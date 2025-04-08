import React from "react";
import { useTheme } from "next-themes";
import { BsBarChartFill } from "react-icons/bs"; 

interface SmCardProps {
  title: string;
  pons: string;
  price: string;
  iconColor: "green" | "red" | "blue"; 
}

const SmCard: React.FC<SmCardProps> = ({ title, pons, price, iconColor }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const iconColors = {
    green: "text-success",
    red: "text-danger",
    blue: "text-primary",
  };

  return (
    <div
      className={`rounded p-3 shadow-sm mb-3 ${
        isDark ? "bg-dark text-white" : "bg-white text-dark"
      }`}
    >
      <div className="d-flex justify-content-between align-items-center">
        <h6 className="mb-0">{title}</h6>
        <span className={`small fw-semibold ${iconColors[iconColor]}`}>
          {pons}
        </span>
      </div>
      <div className="d-flex justify-content-between align-items-center mt-2">
        <span className="fs-4 fw-bold">{price}</span>
        <BsBarChartFill size={28} className={iconColors[iconColor]} />
      </div>
    </div>
  );
};

export default SmCard;
