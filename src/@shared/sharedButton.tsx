import React from "react";
import classNames from "classnames";
import { useTheme } from "next-themes";

export interface SharedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "success" | "danger" | "outline" | "outline-secondary" | "light" | "dark" | "auto";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const SharedButton: React.FC<SharedButtonProps> = ({
  variant = "auto", 
  size = "md",
  children,
  className,
  ...props
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const resolvedVariant = variant === "auto" ? (isDark ? "light" : "dark") : variant;

  return (
    <button
      className={classNames(
        "btn",
        `btn-${resolvedVariant}`,
        {
          "btn-sm": size === "sm",
          "btn-lg": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default SharedButton;
