import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import Hero from "../components/Hero";
import About from "../components/About";
import FAQ from "../components/FAQ";
import Schedule from "../components/Schedule";
import Venue from "../components/Venue";
import Accommodations from "../components/Accommodations";
import Prizes from "../components/Prizes";
import RegistrationForm from "../components/RegistrationForm";
import Contact from "../components/Contact";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Trophy, Users, Code, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";
import SEO from "../components/SEO";
import StructuredData from "../components/StructuredData";
import AnimatedBackground from "../components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { Mail, FileText, ExternalLink } from "lucide-react";

const highlights = [
  {
    icon: Calendar,
    title: "3 Days of Innovation",
    description: "March 13 - March 15, 2026"
  },
  {
    icon: Code,
    title: "Drone Programming",
    description: "Build autonomous flight systems"
  },
  {
    icon: Trophy,
    title: "Amazing Prizes",
    description: "Compete in multiple categories"
  },
  {
    icon: Users,
    title: "150+ Participants",
    description: "Network with fellow innovators"
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "McGill AeroHacks 2026",
  "description": "A 3-day hackathon focused on drone programming and autonomous flight systems at McGill University",
  "startDate": "2026-03-13T00:00:00-04:00",
  "endDate": "2026-03-15T23:59:59-04:00",
  "eventStatus": "https://schema.org/EventScheduled",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "location": {
    "@type": "Place",
    "name": "McGill University",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "McGill University",
      "addressLocality": "Montreal",
      "addressRegion": "QC",
      "addressCountry": "CA"
    }
  },
  "image": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6902cf6648cb3b2094dab1d3/d5650c898_unblurimageai_Copie_de_aero_3.jpg",
  "organizer": {
    "@type": "Organization",
    "name": "McGill Aerial Design",
    "url": "https://www.mcgillaerialdesign.com"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "CAD",
    "availability": "https://schema.org/InStock",
    "url": "https://mcgillaerohacks.com/Register"
  }
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const hasLoadedBefore = sessionStorage.getItem('hasLoadedHome');
    
    if (!hasLoadedBefore) {
      setIsLoading(true);
      sessionStorage.setItem('hasLoadedHome', 'true');
    }
  }, []);

  return (
    <>
      <SEO />
      <StructuredData data={structuredData} />

      {isLoading && <LoadingScreen onLoadComplete={() => setIsLoading(false)} />}

      <div className="min-h-screen bg-black relative">
        <AnimatedBackground />
        <Hero onRegisterClick={() => window.location.href = createPageUrl("Register")} />
        
        {/* Quick Highlights */}
        <section className="py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(to right, rgba(0, 0, 255, 0.3) 1px, transparent 1px),
                               linear-gradient(to bottom, rgba(0, 0, 255, 0.3) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }} />
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 border-2 border-blue-500/50 bg-black/60 backdrop-blur-xl group">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-600 to-blue-600 rounded flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-red-500/50">
                        <highlight.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-white uppercase tracking-wide">{highlight.title}</h3>
                      <p className="text-gray-400 font-mono text-sm">{highlight.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <div id="about">
          <About />
        </div>

        {/* FAQ Section */}
        <div id="faq">
          <FAQ />
        </div>

        {/* Schedule Section */}
        <div id="schedule">
          <Schedule />
        </div>

        {/* Venue Section */}
        <div id="venue">
          <Venue />
        </div>

        {/* Accommodations Section */}
        <div id="accommodations">
          <Accommodations />
        </div>

        {/* Prizes Section */}
        <div id="prizes">
          <Prizes />
        </div>

        {/* Sponsors Section */}
        <section id="sponsors" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-500">Sponsors</span>
              </h2>
              <p className="text-xl text-gray-600 mb-2">
                Thank you to our amazing sponsors supporting McGill Aerial Design!
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              {[
                { name: "Bell", logo: "/sponsors/bell.png", website: "https://www.bellflight.com" },
                { name: "Airbus", logo: "/sponsors/airbus.png", website: "https://www.airbus.com" },
                { name: "OnShape", logo: "/sponsors/onshape.png", website: "https://www.onshape.com" },
                { name: "Polymaker", logo: "/sponsors/polymaker.png", website: "https://www.polymaker.com" },
                { name: "Dragonplate", logo: "/sponsors/dragonplate.png", website: "https://www.dragonplate.com" },
                { name: "4imprint", logo: "/sponsors/4imprint.png", website: "https://www.4imprint.com" }
              ].map((sponsor, index) => (
                <motion.div
                  key={sponsor.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <a href={sponsor.website} target="_blank" rel="noopener noreferrer" className="block group">
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 h-40 flex flex-col items-center justify-center relative overflow-hidden border-2 border-transparent group-hover:border-cyan-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <img src={sponsor.logo} alt={`${sponsor.name} logo`} className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300 relative z-10" />
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                          <ExternalLink className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-8 md:p-12 text-white text-center"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Interested in Sponsoring?</h3>
              <p className="text-base sm:text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Partner with McGill AeroHacks to connect with 150+ talented students and support the future of aerospace innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-cyan-600 hover:bg-blue-50 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full font-semibold"
                  onClick={() => window.location.href = 'mailto:aerialdesign@mcgilleus.ca?subject=McGill AeroHacks Sponsorship Inquiry'}
                >
                  <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span className="whitespace-nowrap">Contact Us</span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-full font-semibold transition-all"
                  onClick={() => window.open('https://www.canva.com/design/DAG5E3i3yEA/-8njt7vA8YyYafbHr54EJA/view?utm_content=DAG5E3i3yEA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3424c73f70', '_blank')}
                >
                  <FileText className="w-5 h-5 mr-2 flex-shrink-0" />
                  <span className="whitespace-nowrap">View Package</span>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Partners Section */}
        <section id="partners" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">Partners</span>
              </h2>
              <p className="text-xl text-gray-600 mb-2">
                Thank you to our amazing partners supporting McGill Aerial Design!
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              {[
                { name: "McGill Institute for Aerospace Engineering (MIAE)", logo: "/partners/miae.png", website: "https://www.mcgill.ca/miae/" },
                { name: "Vertical Flight Society Montréal-Ottawa Chapter", logo: "/partners/vfsmoc.png", website: "https://mtlott.vtol.org/" },
                { name: "PCBWay", logo: "/partners/pcbway.png", website: "https://www.pcbway.com/project/sponsor/McGill_Aerial_Design_bd4f79a4.html" },
                { name: "Composia McGill BioDesign", logo: "/partners/composia.png", website: "https://www.mcgillbiodesign.com/projects/composia" },
                { name: "AESS Concordia", logo: "/partners/aess.png", website: "https://www.instagram.com/aess_concordia/" },
                { name: "EUS", logo: "/partners/eus.png", website: "https://mcgilleus.ca/" }
              ].map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <a href={partner.website} target="_blank" rel="noopener noreferrer" className="block group">
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 h-40 flex flex-col items-center justify-center relative overflow-hidden border-2 border-transparent group-hover:border-cyan-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <img src={partner.logo} alt={`${partner.name} logo`} className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300 relative z-10" />
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                          <ExternalLink className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Section */}
        <section id="register" className="py-20 px-6 bg-white">
          <div className="max-w-2xl mx-auto">
            <RegistrationForm />
          </div>
        </section>

        {/* Contact Section */}
        <div id="contact">
          <Contact />
        </div>

        <Footer />
      </div>
    </>
  );
}