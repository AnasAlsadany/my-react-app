import React from "react";
import { ListGroup, Badge } from "react-bootstrap";
import { useTheme } from "next-themes";
import SharedCard from "../../@shared/SharedCard";

type InvoiceFile = {
  name: string;
  color: string;
};

const invoiceFiles: InvoiceFile[] = [
  { name: "John Client_download.Pdf", color: "pink" },
  { name: "Michele Leos_download.Pdf", color: "blue" },
  { name: "John Smith_download.Pdf", color: "lightgreen" },
];

const InvoiceCard: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <SharedCard title="$3453.00" description="MonthlyInvoice">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex align-items-center gap-3 mx-3">
          <div className="card"> 

          </div>
        </div>

        <ListGroup variant="flush" style={{ width: "100%" }}>
          {invoiceFiles.map((file, index) => (
            <ListGroup.Item
              key={index}
              className={`d-flex justify-content-between align-items-center px-0 ${
                isDark ? "bg-dark text-white" : "bg-white text-dark"
              }`}
            >
              <div className="d-flex align-items-center gap-2">
                <Badge
                  style={{
                    backgroundColor: file.color,
                    width: "25px",
                    height: "25px",
                    borderRadius: "50%",
                  }}
                />
                <span className="small">{file.name}</span>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </SharedCard>
  );
};

export default InvoiceCard;
