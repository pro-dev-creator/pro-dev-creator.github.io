import { Zap, Shield, Boxes, Code, Rocket, Database } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Instant Deploy",
    description: "Push code and go live in seconds with automatic CI/CD pipelines and zero-config deployments.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption, DDoS protection, and compliance with SOC2, GDPR, and HIPAA standards.",
  },
  {
    icon: Boxes,
    title: "Microservices Ready",
    description: "Build modular applications with containerized services that scale independently.",
  },
  {
    icon: Code,
    title: "Developer Experience",
    description: "Intuitive CLI, comprehensive APIs, and extensive documentation to boost productivity.",
  },
  {
    icon: Rocket,
    title: "Auto Scaling",
    description: "Handle millions of requests effortlessly with intelligent load balancing and auto-scaling.",
  },
  {
    icon: Database,
    title: "Global CDN",
    description: "Lightning-fast content delivery with edge locations in 200+ cities worldwide.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Everything You Need
            <span className="text-gradient"> to Scale</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed for modern development teams building the future.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 gradient-glow border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
