import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
    >
      {/* Technical drawing background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 800 600" fill="none">
          <defs>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="#000"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          {/* Technical drawing elements */}
          <circle
            cx="200"
            cy="150"
            r="80"
            fill="none"
            stroke="#000"
            strokeWidth="1"
          />
          <circle
            cx="200"
            cy="150"
            r="60"
            fill="none"
            stroke="#000"
            strokeWidth="0.5"
          />
          <circle
            cx="200"
            cy="150"
            r="40"
            fill="none"
            stroke="#000"
            strokeWidth="0.5"
          />
          <line
            x1="120"
            y1="150"
            x2="280"
            y2="150"
            stroke="#000"
            strokeWidth="0.5"
          />
          <line
            x1="200"
            y1="70"
            x2="200"
            y2="230"
            stroke="#000"
            strokeWidth="0.5"
          />
          <polygon
            points="600,100 650,150 600,200 550,150"
            fill="none"
            stroke="#000"
            strokeWidth="1"
          />
          <line
            x1="500"
            y1="300"
            x2="700"
            y2="300"
            stroke="#000"
            strokeWidth="1"
          />
          <line
            x1="500"
            y1="320"
            x2="700"
            y2="320"
            stroke="#000"
            strokeWidth="0.5"
          />
          <line
            x1="500"
            y1="340"
            x2="700"
            y2="340"
            stroke="#000"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Patent-style header */}
          <div className="mb-8 border-b border-gray-300 pb-8">
            <div className="text-sm text-gray-600 font-light tracking-widest mb-4">
              EST. 2025 • DIGITAL CRAFTSMANSHIP
            </div>
            <h1 className="text-6xl md:text-8xl font-extralight text-gray-900 mb-6 tracking-tight">
              KANOPA
            </h1>
            <div className="w-24 h-px bg-amber-600 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed tracking-wide">
              Exclusive digital solutions for luxury brands, beauty houses, and
              financial institutions.
              <br />
              <span className="text-amber-700">
                Above all others, by design.
              </span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white border-0 px-12 py-4 font-light tracking-wider"
            >
              VIEW PORTFOLIO
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-400 text-gray-800 hover:bg-gray-100 px-12 py-4 font-light tracking-wider"
            >
              <Download className="w-4 h-4 mr-2" />
              DOSSIER
            </Button>
          </div>

          {/* Luxury metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center border border-gray-200 p-8 bg-white/50 backdrop-blur-sm">
            <div className="text-gray-600">
              <div className="text-3xl font-light text-gray-900 mb-2">50M+</div>
              <div className="text-sm tracking-widest">LUXURY TOUCHPOINTS</div>
            </div>
            <div className="text-gray-600">
              <div className="text-3xl font-light text-gray-900 mb-2">15+</div>
              <div className="text-sm tracking-widest">PRESTIGE BRANDS</div>
            </div>
            <div className="text-gray-600">
              <div className="text-3xl font-light text-gray-900 mb-2">7</div>
              <div className="text-sm tracking-widest">YEARS CRAFTING</div>
            </div>
            <div className="text-gray-600">
              <div className="text-3xl font-light text-gray-900 mb-2">∞</div>
              <div className="text-sm tracking-widest">ATTENTION TO DETAIL</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </section>
  );
};
