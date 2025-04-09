
interface PricingPlan {
    name: string;
    price: string;
    description: string;
    features: string[];
    buttonText: string;
    buttonVariant: string;
    popular: boolean;
  }
  
  export const getPricingData = (isDark: boolean): PricingPlan[] => {
    return [
      {
        name: "Basic",
        price: "$499",
        description: "Get a professional website designed according to your needs.",
        features: [
          "Get a fully designed Website.",
          "Webflow Development",
          "Limited Support"
        ],
        buttonText: "Get started",
        buttonVariant: isDark ? "outline-light" : "outline-dark",
        popular: false
      },
      {
        name: "Pro",
        price: "$499",
        description: "Get a professional website designed according to your needs.",
        features: [
          "Get a fully designed Website.",
          "Webflow Development",
          "Limited Support",
          "Standart integrations",
          "Email support",
          "Email support"
        ],
        buttonText: "Get started",
        buttonVariant: isDark ? "light" : "dark",
        popular: true
      },
      {
        name: "Enterprise",
        price: "$999",
        description: "Get a professional website designed according to your needs.",
        features: [
          "Get a fully designed Website.",
          "Webflow Development",
          "Limited Support",
          "Standart integrations",
          "Email support",
          "Email support",
          "Email support",
          "Email support"
        ],
        buttonText: "Contact Us",
        buttonVariant: "success",
        popular: false
      }
    ];
  };
  
  export type { PricingPlan };