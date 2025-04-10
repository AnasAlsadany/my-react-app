import React from "react";
import { Button } from "react-bootstrap";
import { useTheme } from "next-themes";
import SharedCard from "../../@shared/SharedCard";

const ExpenseManagementCard: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <SharedCard
      title="Optimise expense Management as a team"
      description="Bring harmony to team expenses with budget limits and real-time monitoring. Freedom for your staff. Peace of mind for you."
    >
      <div className="mt-3">
        <Button
          variant={isDark ? "light" : "dark"}
          className="px-4 py-2 rounded-pill fw-semibold"
        >
          Explore more
        </Button>
      </div>
    </SharedCard>
  );
};

export default ExpenseManagementCard;
