import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Target, Zap } from "lucide-react";

export const AboutSection = () => {
  const principles = [
    {
      icon: Award,
      title: "Uncompromising Quality",
      text: "Every line of code reflects the precision of Swiss watchmaking",
    },
    {
      icon: Target,
      title: "Exclusive Focus",
      text: "Dedicated solely to luxury, beauty, and finance verticals",
    },
    {
      icon: Users,
      title: "White-Glove Service",
      text: "Personalized attention worthy of the world's finest brands",
    },
    {
      icon: Zap,
      title: "Innovation Heritage",
      text: "Blending time-honored craftsmanship with cutting-edge technology",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="text-sm text-gray-600 font-light tracking-widest mb-4">
              ATELIER
            </div>
            <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-8 tracking-tight">
              The Philosophy
            </h2>
            <div className="w-24 h-px bg-amber-600 mb-8"></div>

            <div className="space-y-8 text-gray-700 text-lg leading-relaxed font-light">
              <p>
                Like the master craftsmen of the great ateliers, I believe that
                true luxury lies not in ostentation, but in the invisible
                perfection of every detail. Each digital experience is born from
                the same dedication to excellence that has defined the world's
                finest luxury houses for centuries.
              </p>
              <p>
                From the cobblestone streets of old European workshops to the
                digital boulevards of tomorrow, Kanopa bridges heritage
                craftsmanship with technological innovation. We understand that
                luxury brands, beauty houses, and financial institutions require
                more than just functional solutions—they demand digital
                experiences that embody their values and elevate their prestige.
              </p>
              <p>
                <em className="text-amber-700">
                  "Above all others, by design"
                </em>{" "}
                is not merely our motto—it is our unwavering commitment to
                creating digital solutions that stand apart from the ordinary,
                reaching toward the extraordinary.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
              {principles.map((principle, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-10 h-10 border border-gray-300 bg-gray-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <principle.icon className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-light tracking-wide mb-1">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-gray-600 font-light leading-relaxed">
                      {principle.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <Card className="border border-gray-200 bg-white/80 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-12">
                {/* Patent-style technical drawing */}
                <div className="border border-gray-300 p-8 mb-8">
                  <svg
                    className="w-full h-48"
                    viewBox="0 0 300 200"
                    fill="none"
                  >
                    <defs>
                      <pattern
                        id="smallGrid"
                        width="10"
                        height="10"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 10 0 L 0 0 0 10"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="0.5"
                        />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#smallGrid)" />

                    {/* Tree/Canopy structure */}
                    <circle
                      cx="150"
                      cy="60"
                      r="40"
                      fill="none"
                      stroke="#374151"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="150"
                      cy="60"
                      r="30"
                      fill="none"
                      stroke="#374151"
                      strokeWidth="1"
                    />
                    <circle
                      cx="150"
                      cy="60"
                      r="20"
                      fill="none"
                      stroke="#374151"
                      strokeWidth="0.5"
                    />

                    {/* Trunk/Foundation */}
                    <rect
                      x="140"
                      y="100"
                      width="20"
                      height="60"
                      fill="none"
                      stroke="#374151"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="130"
                      y1="160"
                      x2="170"
                      y2="160"
                      stroke="#374151"
                      strokeWidth="2"
                    />

                    {/* Measurement lines */}
                    <line
                      x1="90"
                      y1="20"
                      x2="90"
                      y2="100"
                      stroke="#374151"
                      strokeWidth="0.5"
                    />
                    <line
                      x1="85"
                      y1="20"
                      x2="95"
                      y2="20"
                      stroke="#374151"
                      strokeWidth="0.5"
                    />
                    <line
                      x1="85"
                      y1="100"
                      x2="95"
                      y2="100"
                      stroke="#374151"
                      strokeWidth="0.5"
                    />

                    {/* Labels */}
                    <text
                      x="60"
                      y="65"
                      fontSize="8"
                      fill="#6b7280"
                      fontFamily="monospace"
                    >
                      CANOPY
                    </text>
                    <text
                      x="180"
                      y="130"
                      fontSize="8"
                      fill="#6b7280"
                      fontFamily="monospace"
                    >
                      FOUNDATION
                    </text>
                    <text
                      x="60"
                      y="185"
                      fontSize="6"
                      fill="#9ca3af"
                      fontFamily="monospace"
                    >
                      FIG. 1 - KANOPA STRUCTURE
                    </text>
                  </svg>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-gray-900 font-light tracking-wide mb-3">
                      Current Engagement
                    </h3>
                    <p className="text-gray-700 font-light leading-relaxed">
                      Developing next-generation digital experiences that
                      redefine luxury e-commerce and financial technology for
                      discerning global brands.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-gray-900 font-light tracking-wide mb-3">
                      Methodologie
                    </h3>
                    <p className="text-gray-700 font-light leading-relaxed">
                      Every project begins with deep brand immersion, continues
                      through meticulous technical architecture, and culminates
                      in flawless execution that honors both heritage and
                      innovation.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-gray-900 font-light tracking-wide mb-3">
                      Vision
                    </h3>
                    <p className="text-gray-700 font-light leading-relaxed">
                      To establish the gold standard for luxury digital
                      experiences, where technology serves beauty, function
                      serves form, and every interaction reflects the highest
                      standards of craftsmanship.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 border border-gray-200 bg-gradient-to-br from-amber-50 to-gray-50 opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-gray-200 bg-gradient-to-br from-gray-50 to-amber-50 opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
