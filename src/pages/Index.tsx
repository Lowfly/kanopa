import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { BlogSection } from "@/components/BlogSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Kanopa Logo with Patent-inspired design */}
            <div className="w-10 h-10 border-2 border-gray-800 relative">
              <div className="absolute inset-1 border border-gray-600"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gray-800"></div>
            </div>
            <div className="text-2xl font-light tracking-wider text-gray-900">
              KANOPA
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-gray-900 transition-colors font-light tracking-wide"
              >
                SERVICES
              </a>
              <a
                href="#expertise"
                className="text-gray-700 hover:text-gray-900 transition-colors font-light tracking-wide"
              >
                EXPERTISE
              </a>
              <a
                href="#projects"
                className="text-gray-700 hover:text-gray-900 transition-colors font-light tracking-wide"
              >
                PORTFOLIO
              </a>
              <a
                href="#blog"
                className="text-gray-700 hover:text-gray-900 transition-colors font-light tracking-wide"
              >
                JOURNAL
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-gray-900 transition-colors font-light tracking-wide"
              >
                ATELIER
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-gray-900 transition-colors font-light tracking-wide"
              >
                CONTACT
              </a>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 text-gray-700 hover:text-gray-900 transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 text-gray-700 hover:text-gray-900 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Blog Section */}
      <BlogSection />

      {/* About Section */}
      <AboutSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 border border-gray-600 relative">
                <div className="absolute inset-1 border border-gray-500"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-gray-400"></div>
              </div>
              <span className="text-gray-400 font-light tracking-wider">
                KANOPA
              </span>
            </div>
            <p className="text-gray-500 font-light">
              © 2025 Kanopa. Crafted with precision.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
