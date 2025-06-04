import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const SkillsSection = () => {
  const expertiseAreas = [
    {
      title: "Luxury E-Commerce",
      description:
        "Bespoke digital boutiques with uncompromising attention to detail",
      skills: [
        "Next.js",
        "Headless Commerce",
        "Stripe Connect",
        "Luxury UX",
        "3D Product Views",
      ],
      pattern: "M10,10 L90,10 L90,90 L10,90 Z M30,30 L70,30 L70,70 L30,70 Z",
    },
    {
      title: "Beauty Tech Platform",
      description:
        "Immersive experiences that capture the essence of beauty brands",
      skills: ["React", "WebGL", "AR/VR", "Color Matching", "Social Commerce"],
      pattern: "M50,10 L90,50 L50,90 L10,50 Z M50,30 L70,50 L50,70 L30,50 Z",
    },
    {
      title: "Financial Infrastructure",
      description:
        "Secure, scalable solutions for wealth management and fintech",
      skills: [
        "Node.js",
        "Blockchain",
        "Microservices",
        "Security",
        "Compliance",
      ],
      pattern:
        "M10,50 Q50,10 90,50 Q50,90 10,50 M30,50 Q50,30 70,50 Q50,70 30,50",
    },
    {
      title: "Cloud Architecture",
      description: "Enterprise-grade infrastructure with unmatched reliability",
      skills: ["AWS", "Kubernetes", "Terraform", "Monitoring", "DevSecOps"],
      pattern:
        "M50,10 L90,30 L70,70 L30,70 L10,30 Z M50,30 L70,40 L60,60 L40,60 L30,40 Z",
    },
  ];

  return (
    <section id="expertise" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="text-sm text-gray-600 font-light tracking-widest mb-4">
            EXPERTISE
          </div>
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-8 tracking-tight">
            Crafted Solutions
          </h2>
          <div className="w-24 h-px bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto font-light leading-relaxed">
            Each solution is meticulously engineered to reflect the prestige and
            sophistication of luxury brands, beauty houses, and financial
            institutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {expertiseAreas.map((area, index) => (
            <Card
              key={index}
              className="border border-gray-200 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-500 group"
            >
              <CardHeader className="pb-4">
                <div className="w-16 h-16 mb-6 border border-gray-300 bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 100 100"
                    className="text-gray-700"
                  >
                    <path
                      d={area.pattern}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <CardTitle className="text-gray-900 text-2xl font-light tracking-wide">
                  {area.title}
                </CardTitle>
                <p className="text-gray-600 font-light leading-relaxed">
                  {area.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors font-light tracking-wide border border-gray-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
