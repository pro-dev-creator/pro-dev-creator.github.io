import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Users, Award, Globe, Zap } from "lucide-react";

const stats = [
  { icon: Users, value: "10,000+", label: "Active Customers" },
  { icon: Globe, value: "50+", label: "Data Centers" },
  { icon: Award, value: "99.99%", label: "Uptime SLA" },
  { icon: Zap, value: "24/7", label: "Expert Support" },
];

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    description: "15+ years in cloud infrastructure and enterprise solutions.",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    description: "Former lead architect at major tech companies, scaling systems to millions of users.",
  },
  {
    name: "Emma Davis",
    role: "Head of Customer Success",
    description: "Dedicated to ensuring every customer achieves their goals with our platform.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-4xl text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">
            About <span className="text-gradient">DevFlow</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Empowering developers and businesses with cutting-edge cloud infrastructure since 2015
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-12 gradient-glow border-border text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that powerful cloud infrastructure should be accessible to everyone. 
              Our mission is to provide developers and businesses with the tools they need to 
              build, deploy, and scale their applications without the complexity and cost barriers 
              of traditional solutions. We're committed to innovation, reliability, and exceptional 
              customer support.
            </p>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center space-y-3">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our <span className="text-gradient">Leadership</span>
            </h2>
            <p className="text-muted-foreground">
              Experienced professionals dedicated to your success
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-6 gradient-glow border-border text-center">
                <div className="w-20 h-20 rounded-full gradient-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-primary mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="text-gradient">Values</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 gradient-glow border-border">
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                Constantly pushing boundaries to deliver cutting-edge solutions that keep you ahead.
              </p>
            </Card>
            <Card className="p-8 gradient-glow border-border">
              <h3 className="text-xl font-semibold mb-3">Reliability</h3>
              <p className="text-muted-foreground">
                Your applications deserve infrastructure you can trust. We guarantee 99.99% uptime.
              </p>
            </Card>
            <Card className="p-8 gradient-glow border-border">
              <h3 className="text-xl font-semibold mb-3">Support</h3>
              <p className="text-muted-foreground">
                24/7 expert support because your success is our priority, day and night.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
