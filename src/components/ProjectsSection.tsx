import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Lock } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Maison Éclat",
      category: "Luxury Beauty",
      description:
        "Immersive e-commerce platform for a prestigious French beauty house, featuring AR try-on technology and personalized skincare recommendations.",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
      technologies: ["Next.js", "WebGL", "AR SDK", "Stripe", "Contentful"],
      confidential: false,
      year: "2024",
    },
    {
      title: "Heritage Bank Digital",
      category: "Private Banking",
      description:
        "Secure wealth management platform with real-time portfolio analytics, encrypted messaging, and white-glove concierge services.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      technologies: ["React", "Node.js", "Blockchain", "AWS", "Encryption"],
      confidential: true,
      year: "2024",
    },
    {
      title: "Atelier Lumière",
      category: "Haute Couture",
      description:
        "Exclusive appointment booking system and virtual showroom for a renowned Parisian fashion house.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
      technologies: ["Vue.js", "3D.js", "Scheduling API", "CRM"],
      confidential: false,
      year: "2023",
    },
    {
      title: "Diamond Exchange Platform",
      category: "Luxury Trading",
      description:
        "B2B marketplace for certified diamonds with blockchain provenance tracking and real-time market analytics.",
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338",
      technologies: ["React", "Blockchain", "Smart Contracts", "Analytics"],
      confidential: true,
      year: "2023",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="text-sm text-gray-600 font-light tracking-widest mb-4">
            PORTFOLIO
          </div>
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-8 tracking-tight">
            Selected Works
          </h2>
          <div className="w-24 h-px bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto font-light leading-relaxed">
            A curated selection of digital experiences crafted for discerning
            brands that demand nothing less than perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border border-gray-200 bg-white overflow-hidden group hover:shadow-xl transition-all duration-700"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <Badge className="bg-white/90 text-gray-800 font-light tracking-wide">
                    {project.year}
                  </Badge>
                  {project.confidential && (
                    <Badge className="bg-amber-100 text-amber-800 font-light tracking-wide">
                      <Lock className="w-3 h-3 mr-1" />
                      NDA
                    </Badge>
                  )}
                </div>
              </div>
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <Badge
                    variant="outline"
                    className="text-xs font-light tracking-widest text-gray-600 border-gray-300"
                  >
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-gray-900 text-2xl font-light tracking-wide mb-3">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed font-light">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-gray-100 text-gray-700 font-light tracking-wide border border-gray-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  {!project.confidential ? (
                    <Button
                      size="sm"
                      className="bg-gray-900 hover:bg-gray-800 text-white font-light tracking-wider"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      VIEW CASE STUDY
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-300 text-gray-600 font-light tracking-wider cursor-not-allowed"
                      disabled
                    >
                      <Lock className="w-4 h-4 mr-2" />
                      CONFIDENTIAL
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
