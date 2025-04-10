// src/components/SharedCard.tsx
import React from "react";
import { Card } from "react-bootstrap";
import { useTheme } from "next-themes";

type SharedCardProps = {
  title?: string;
  description: string;
  imageSrc?: string;
  children?: React.ReactNode;
};

const SharedCard: React.FC<SharedCardProps> = ({
  title,
  description,
  imageSrc,
  children,
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Card
      className={`p-3 shadow-sm rounded-4 ${
        isDark ? "bg-dark text-white" : "bg-white text-dark"
      }`}
      style={{ minHeight: "300px" }}
    >
      <Card.Body className="d-flex flex-column justify-content-between h-100">
        {title && (
          <h6 className={`mb-2 ${isDark ? "" : "text-secondary"}`}>
            {title}
          </h6>
        )}
        <p>{description}</p>
        {imageSrc && (
          <div className="mt-auto">
            <img
              src={imageSrc}
              alt="chart"
              className="img-fluid"
              style={{ maxHeight: "100px" }}
            />
          </div>
        )}
        {children}
      </Card.Body>
    </Card>
  );
};

export default SharedCard;
