import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";

export const BlogSection = () => {
  const blogPosts = [
    {
      title: "The Art of Luxury E-Commerce Architecture",
      excerpt:
        "Exploring the intricate patterns of user experience design that elevate digital boutiques to the realm of haute couture.",
      date: "2025-01-15",
      category: "Luxury Tech",
      readTime: "8 min",
      pattern:
        "M10,20 Q50,5 90,20 Q90,50 70,80 Q50,85 30,80 Q10,50 10,20 M30,30 Q50,25 70,30 Q70,50 50,70 Q30,50 30,30",
    },
    {
      title: "Fintech Security: Beyond Traditional Paradigms",
      excerpt:
        "Engineering trust through innovative security frameworks that protect wealth while maintaining the elegance of seamless transactions.",
      date: "2025-01-08",
      category: "Finance",
      readTime: "12 min",
      pattern:
        "M20,10 L80,10 L90,30 L80,90 L20,90 L10,30 Z M30,25 L70,25 L75,35 L70,75 L30,75 L25,35 Z",
    },
    {
      title: "Beauty Tech: The Science of Digital Aesthetics",
      excerpt:
        "How advanced algorithms and AR technologies are revolutionizing the way luxury beauty brands connect with their discerning clientele.",
      date: "2025-01-02",
      category: "Beauty Tech",
      readTime: "6 min",
      pattern:
        "M50,10 L80,25 L95,50 L80,75 L50,90 L20,75 L5,50 L20,25 Z M50,25 L70,35 L80,50 L70,65 L50,75 L30,65 L20,50 L30,35 Z",
    },
  ];

  return (
    <section
      id="blog"
      className="py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="text-sm text-gray-600 font-light tracking-widest mb-4">
            INSIGHTS
          </div>
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-8 tracking-tight">
            Journal of Innovation
          </h2>
          <div className="w-24 h-px bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto font-light leading-relaxed">
            Thoughts and discoveries from the intersection of luxury
            craftsmanship and cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="border border-gray-200 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-500 group cursor-pointer"
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
                      d={post.pattern}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <Badge
                    variant="secondary"
                    className="bg-amber-50 text-amber-800 border border-amber-200 font-light tracking-wide"
                  >
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-sm text-gray-500 font-light">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                    })}
                  </div>
                </div>

                <CardTitle className="text-gray-900 text-xl font-light tracking-wide leading-tight mb-3 group-hover:text-gray-700 transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 font-light leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 font-light">
                    {post.readTime} de lecture
                  </span>
                  <div className="flex items-center text-gray-700 group-hover:text-amber-600 transition-colors font-light">
                    <span className="text-sm mr-2">Lire plus</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="border border-gray-300 text-gray-700 px-8 py-3 hover:bg-gray-50 transition-colors font-light tracking-wide">
            TOUS LES ARTICLES
          </button>
        </div>
      </div>
    </section>
  );
};
