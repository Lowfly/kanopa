import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    project: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      "Your inquiry has been received. We'll respond within 24 hours."
    );
    setFormData({ name: "", company: "", email: "", project: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="text-sm text-gray-600 font-light tracking-widest mb-4">
            CONSULTATION
          </div>
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-8 tracking-tight">
            Begin the Conversation
          </h2>
          <div className="w-24 h-px bg-amber-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto font-light leading-relaxed">
            Every exceptional project begins with a conversation. Let us discuss
            how Kanopa can elevate your brand's digital presence to new heights
            of excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border border-gray-200 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 border border-gray-300 bg-gray-50 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-light tracking-wide mb-2">
                      Correspondence
                    </h3>
                    <p className="text-gray-700 font-light">
                      contact@kanopa.studio
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 border border-gray-300 bg-gray-50 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-light tracking-wide mb-2">
                      Direct Line
                    </h3>
                    <p className="text-gray-700 font-light">
                      +33 1 42 00 00 00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 border border-gray-300 bg-gray-50 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-light tracking-wide mb-2">
                      Location
                    </h3>
                    <p className="text-gray-700 font-light">
                      Paris • London • Remote
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 border border-gray-300 bg-gray-50 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-light tracking-wide mb-2">
                      Response Time
                    </h3>
                    <p className="text-gray-700 font-light">Within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border border-gray-200 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <CardTitle className="text-gray-900 text-2xl font-light tracking-wide">
                  Project Inquiry
                </CardTitle>
                <p className="text-gray-600 font-light">
                  Tell us about your vision and we'll craft a bespoke solution.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-gray-700 font-light tracking-wide mb-2">
                        Your Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-gray-300 focus:border-gray-500 font-light"
                        placeholder="Jean Dupont"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 font-light tracking-wide mb-2">
                        Company *
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="border-gray-300 focus:border-gray-500 font-light"
                        placeholder="Maison Éclat"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-gray-700 font-light tracking-wide mb-2">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-gray-300 focus:border-gray-500 font-light"
                        placeholder="jean@maisoneclat.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 font-light tracking-wide mb-2">
                        Project Type
                      </label>
                      <Input
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                        className="border-gray-300 focus:border-gray-500 font-light"
                        placeholder="E-commerce Platform, Mobile App, etc."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 font-light tracking-wide mb-2">
                      Project Description *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="border-gray-300 focus:border-gray-500 resize-none font-light"
                      placeholder="Describe your vision, objectives, and any specific requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white border-0 font-light tracking-wider py-4"
                  >
                    SUBMIT INQUIRY
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
