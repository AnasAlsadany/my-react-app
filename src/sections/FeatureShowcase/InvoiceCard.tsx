import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTheme } from 'next-themes';

interface Invoice {
  name: string;
  color: string;
}

const invoices: Invoice[] = [
  { name: 'John Client', color: '#fbb6ce' },
  { name: 'Michele Leos', color: '#90cdf4' },
  { name: 'John Smith', color: '#d3f8ae' },
];

const InvoiceCard: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const bgMain = isDark ? '#1f1f1f' : 'white';
  const textColor = isDark ? '#e4e4e4' : '#555';
  const cardBg = isDark ? '#2a2a2a' : '#f6f6f6';
  const lineColor = isDark ? '#444' : '#ccc';
  const borderColor = isDark ? '#444' : '#ccc';
  const dividerColor = isDark ? '#555' : '#eee';

  return (
    <Container
      className="p-4"
      style={{
        border: `1px solid ${borderColor}`,
        borderRadius: '20px',
        maxWidth: '900px',
        backgroundColor: bgMain,
        color: textColor,
      }}
    >
      <Row>
        <Col md={12}>
        <h6>Real-time accounting at your fingertips.</h6>
          <p style={{ fontSize: '1.2rem', color: textColor }}>
            Take the pain out of book keeping! Wave goodbye to mountains of
            paperwork and endless email reminders. There`s now a new way of
            accounting.
          </p>
        </Col>
      </Row>

      <Row className="mt-4 align-items-start">
        <Col md={4}>
          <Card
            style={{
              borderRadius: '20px',
              backgroundColor: cardBg,
              padding: '20px',
              top:'74px'
            }}
          >
            <h3 style={{ fontWeight: 'bold', color: textColor }}>$3453.00</h3>
            <hr />
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                style={{
                  height: '10px',
                  backgroundColor: lineColor,
                  borderRadius: '5px',
                  marginBottom: i < 2 ? '10px' : 0,
                }}
              ></div>
            ))}
          </Card>
        </Col>

        <Col md={8}>
          <Card
            style={{
              borderRadius: '20px',
              backgroundColor: cardBg,
              padding: '15px',
              color: textColor,
            }}
          >
            <h5 style={{ fontWeight: 'bold' }}>Monthly Invoice</h5>
            <ListGroup variant="flush">
              {invoices.map((invoice, index) => (
                <ListGroup.Item
                  key={index}
                  className="d-flex align-items-center justify-content-between"
                  style={{
                    borderBottom: `1px solid ${cardBg}`,
                    backgroundColor: cardBg,
                    color: textColor,
                  }}
                >
                  <div className="d-flex align-items-center">
                    <div
                      style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        backgroundColor: invoice.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        marginRight: '10px',
                      }}
                    >
                      1
                    </div>
                    <div>
                      <div style={{ fontWeight: 500 }}>{invoice.name}_download.Pdf</div>
                      <div
                        style={{
                          height: '6px',
                          backgroundColor: lineColor,
                          borderRadius: '3px',
                          width: '180px',
                          marginTop: '5px',
                        }}
                      ></div>
                    </div>
                  </div>
                  {/* <div style={{ cursor: 'pointer' }}>⋮</div> */}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default InvoiceCard;

