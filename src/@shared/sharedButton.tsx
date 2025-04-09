import React from "react";
import classNames from "classnames";
import "../styles/sections/sharedButton.scss";
import { useTheme } from "next-themes"; 

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "outline-secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const SharedButton: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      className={classNames(
        "btn",
        `btn--${variant}`,
        `btn--${size}`,
        {
          "btn--dark": isDark, 
          "btn--light": !isDark,
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
