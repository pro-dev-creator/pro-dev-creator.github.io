import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Cloud, Server, Database, Shield, Zap, Globe, Settings, Users } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Cloud,
    title: "Cloud Hosting",
    description: "Scalable cloud infrastructure with 99.99% uptime guarantee. Deploy your applications globally with auto-scaling capabilities.",
    features: ["Auto-scaling", "Load balancing", "CDN integration", "24/7 monitoring"],
  },
  {
    icon: Server,
    title: "Dedicated Servers",
    description: "High-performance dedicated servers with full root access. Perfect for resource-intensive applications.",
    features: ["Full root access", "Custom configurations", "Premium hardware", "DDoS protection"],
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Managed database solutions with automated backups and replication for maximum reliability.",
    features: ["Automated backups", "Point-in-time recovery", "Read replicas", "Performance optimization"],
  },
  {
    icon: Shield,
    title: "Security Services",
    description: "Enterprise-grade security with SSL certificates, firewall protection, and regular security audits.",
    features: ["SSL certificates", "DDoS protection", "Security audits", "Compliance management"],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Advanced caching, CDN integration, and optimization tools to ensure lightning-fast performance.",
    features: ["Edge caching", "Image optimization", "Code minification", "Performance analytics"],
  },
  {
    icon: Globe,
    title: "Global Infrastructure",
    description: "Deploy across multiple regions worldwide for low-latency access and improved user experience.",
    features: ["50+ data centers", "Multi-region deployment", "Geo-routing", "Edge locations"],
  },
  {
    icon: Settings,
    title: "Maintenance & Support",
    description: "Proactive maintenance, regular updates, and 24/7 technical support from our expert team.",
    features: ["24/7 support", "Proactive monitoring", "Regular updates", "Migration assistance"],
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Built-in tools for team management, access control, and collaborative development workflows.",
    features: ["Role-based access", "Team dashboards", "Activity logs", "Shared resources"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive cloud hosting and infrastructure solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="p-8 gradient-glow border-border hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-4 flex-1">
                      <h3 className="text-2xl font-semibold">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the perfect plan for your needs or contact us for a custom solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/pricing">
              <Button size="lg" variant="hero">
                View Pricing
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
