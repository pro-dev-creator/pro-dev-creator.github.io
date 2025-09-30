import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: "29",
    description: "Perfect for small projects and personal websites",
    features: [
      "5 GB Storage",
      "100 GB Bandwidth",
      "1 Domain",
      "SSL Certificate",
      "Email Support",
      "Daily Backups",
    ],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "99",
    description: "Ideal for growing businesses and applications",
    features: [
      "50 GB Storage",
      "1 TB Bandwidth",
      "10 Domains",
      "SSL Certificate",
      "Priority Support",
      "Hourly Backups",
      "CDN Integration",
      "Auto-scaling",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "299",
    description: "For large-scale applications with custom needs",
    features: [
      "Unlimited Storage",
      "Unlimited Bandwidth",
      "Unlimited Domains",
      "SSL Certificate",
      "24/7 Dedicated Support",
      "Real-time Backups",
      "Premium CDN",
      "Auto-scaling",
      "Custom Configurations",
      "SLA Guarantee",
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">
            Simple, <span className="text-gradient">Transparent Pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Choose the perfect plan for your needs. All plans include our core features.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`p-8 gradient-glow transition-all duration-300 ${
                  plan.highlighted
                    ? "border-primary scale-105 glow-primary"
                    : "border-border hover:border-primary/50"
                }`}
              >
                {plan.highlighted && (
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    Most Popular
                  </div>
                )}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                  
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>

                  <Link to="/auth">
                    <Button
                      variant={plan.highlighted ? "hero" : "outline"}
                      className="w-full"
                      size="lg"
                    >
                      Get Started
                    </Button>
                  </Link>

                  <div className="space-y-3 pt-4">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <Card className="p-6 gradient-glow border-border">
              <h3 className="font-semibold mb-2">Can I upgrade or downgrade my plan?</h3>
              <p className="text-muted-foreground">
                Yes, you can change your plan at any time. Changes take effect immediately, and we'll prorate the cost.
              </p>
            </Card>
            <Card className="p-6 gradient-glow border-border">
              <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">
                We accept all major credit cards, PayPal, and bank transfers for enterprise plans.
              </p>
            </Card>
            <Card className="p-6 gradient-glow border-border">
              <h3 className="font-semibold mb-2">Is there a money-back guarantee?</h3>
              <p className="text-muted-foreground">
                Yes, we offer a 30-day money-back guarantee on all plans. No questions asked.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
