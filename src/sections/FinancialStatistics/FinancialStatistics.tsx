import { useTheme } from "next-themes";
import { Row, Col } from "react-bootstrap";
import SmCard from "../../components/SmollCard";

export default function FinancialStatistics() {
  const { theme } = useTheme();

  const cardDetails = [
    { title: "Total Profit", price: "$350.240", pons: "+18.23", iconColor: "green" },
    { title: "Total revenue", price: "$400.690", pons: "+28.35", iconColor: "red" },
    { title: "Product sold", price: "$200.000", pons: "+28.35", iconColor: "blue" },
  ];

  return (
    <div className={`p-3 ${theme === "dark" ? "bg-black text-white" : "bg-light text-dark"}`}>
      <Row >
        {cardDetails.length ? (
          cardDetails.map((item, index) => (
            <Col key={index} md={4}>
              <SmCard
                title={item.title}
                price={item.price}
                pons={item.pons}
                iconColor={item.iconColor as "green" | "red" | "blue"}
              />
            </Col>
          ))
        ) : (
          <h1>No data found</h1>
        )}
      </Row>
    </div>
  );
};

