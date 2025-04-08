import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { useTheme } from 'next-themes';
import { FaCheck } from 'react-icons/fa';
import { getPricingData } from './pricingData';

const PricingSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  const pricingData = getPricingData(isDark);

  return (
    <div className={`${isDark ? 'bg-dark text-white' : 'bg-light text-dark'} py-5`}>
      <Container className="py-5">
        <div className="text-center mb-3">
          <Badge bg="success" className="rounded-pill px-3 py-1 mb-2">
            Pricing
          </Badge>
          <h2 className="display-5 fw-bold mb-4">Find the right plan</h2>
          <p className="mx-auto text-center mb-5" style={{ maxWidth: '700px' }}>
            Invest in your company's future with our comprehensive financial solution. Contact us for pricing details and see how we can help you streamline your finances and reach your business goals.
          </p>
        </div>

        <Row className="g-4 justify-content-center">
          {pricingData.map((plan, index) => (
            <Col key={index} md={4} className="d-flex">
              <Card 
                className="w-100"
                style={{ 
                  width: '100%',
                  height: '791px',
                  borderRadius: '24px',
                  backgroundColor: isDark ? '#111111' : '#f8f9fa',
                  position: 'relative',
                  overflow: 'hidden',
                  border: isDark ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid #dee2e6'
                }}
              >
                {plan.popular && (
                  <div 
                    style={{ 
                      position: 'absolute', 
                      top: '16px', 
                      right: '16px',
                    }}
                  >
                    <Badge 
                      className="rounded-pill px-3 py-1"
                      style={{ backgroundColor: '#39A7FF' }}
                    >
                      Popular
                    </Badge>
                  </div>
                )}
                <Card.Body 
                  className="d-flex flex-column"
                  style={{ padding: '72px 40px 40px 40px' }}
                >
                  <div className="text-center mb-4">
                    <h3 
                      className="mb-3"
                      style={{ 
                        color: plan.name === "Pro" || plan.name === "Enterprise" ? '#BBFF00' : '',
                        fontSize: '28px'
                      }}
                    >
                      {plan.name}
                    </h3>
                    <p className="text-muted mb-4" style={{ fontSize: '14px' }}>
                      {plan.description}
                    </p>
                    <h2 
                      className="mb-5"
                      style={{ fontSize: '48px', fontWeight: 'bold' }}
                    >
                      {plan.price}
                      <span 
                        style={{ fontSize: '14px', fontWeight: 'normal', opacity: 0.7 }}
                      >
                        /month
                      </span>
                    </h2>
                  </div>

                  <div className="mb-5" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '24px' }}>
                    {plan.features.map((feature, i) => (
                      <div key={i} className="d-flex align-items-start mb-3">
                        <FaCheck 
                          size={16} 
                          className="me-2 mt-1" 
                          style={{ color: '#BBFF00' }} 
                        />
                        <span style={{ fontSize: '14px' }}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Button 
                      variant={plan.buttonVariant}
                      className="w-100 py-3 rounded-pill"
                      style={{ 
                        backgroundColor: plan.name === "Enterprise" ? '#BBFF00' : plan.name === "Pro" ? 'white' : '',
                        color: plan.name === "Enterprise" ? 'black' : plan.name === "Pro" ? 'black' : 'white',
                        border: plan.name === "Basic" ? '1px solid rgba(255, 255, 255, 0.3)' : 'none'
                      }}
                    >
                      {plan.buttonText}
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default PricingSection;
