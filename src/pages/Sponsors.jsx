import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, TrendingUp, Award, Mail, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "../components/SEO";

const benefits = [
  {
    icon: Users,
    title: "Access to Top Talent",
    description: "Connect directly with 100+ talented students from McGill, universities, and CEGEPs across Quebec and beyond"
  },
  {
    icon: Target,
    title: "Brand Visibility",
    description: "Prominent logo placement on our website, promotional materials, and throughout the event venue"
  },
  {
    icon: TrendingUp,
    title: "Recruiting Opportunities",
    description: "Host workshops, give tech talks, and conduct on-site interviews to find your next hire"
  },
  {
    icon: Award,
    title: "Prize Categories",
    description: "Sponsor specific prize categories aligned with your company's technologies and values"
  }
];

const tiers = [
  {
    name: "Gold Sponsor",
    price: "$5,000",
    color: "from-yellow-400 to-yellow-600",
    features: [
      "Logo on website & signage",
      "Social media recognition",
      "Swag in participant kits",
      "Booth/table at event",
      "Logo on event T-shirt",
      "Access to resume book",
      "Host a workshop",
      "Sponsored challenge",
      "Keynote speaking slot",
      "Founding Partner Recognition"
    ]
  },
  {
    name: "Silver Sponsor",
    price: "$2,500",
    color: "from-gray-300 to-gray-500",
    features: [
      "Logo on website & signage",
      "Social media recognition",
      "Swag in participant kits",
      "Booth/table at event",
      "Logo on event T-shirt",
      "Access to resume book",
      "Host a workshop"
    ]
  },
  {
    name: "Bronze Sponsor",
    price: "$1,000",
    color: "from-orange-400 to-orange-600",
    features: [
      "Logo on website & signage",
      "Social media recognition",
      "Swag in participant kits",
      "Booth/table at event"
    ]
  }
];

const currentSponsors = [
  {
    name: "Bell",
    logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6902cf6648cb3b2094dab1d3/ccfcabb81_IMG_6962.png",
    website: "https://www.bellflight.com"
  },
  {
    name: "Airbus",
    logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6902cf6648cb3b2094dab1d3/39f0cab59_image.png",
    website: "https://www.airbus.com"
  },
  {
    name: "OnShape",
    logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6902cf6648cb3b2094dab1d3/5d1cf9e78_IMG_6963.png",
    website: "https://www.onshape.com"
  },
  {
    name: "Polymaker",
    logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6902cf6648cb3b2094dab1d3/b93939f97_IMG_6960.png",
    website: "https://www.polymaker.com"
  },
  {
    name: "Bell Textron",
    logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6902cf6648cb3b2094dab1d3/ccfcabb81_IMG_6962.png",
    website: "https://www.bellflight.com"
  },
  {
    name: "Dragonplate",
    logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6902cf6648cb3b2094dab1d3/0d74bad7f_IMG_6966.png",
    website: "https://www.dragonplate.com"
  },
  {
    name: "4imprint",
    logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6902cf6648cb3b2094dab1d3/46cbae7e0_IMG_6968.png",
    website: "https://www.4imprint.com"
  }
];

export default function SponsorsPage() {
  return (
    <>
      <SEO
        title="Sponsor McGill AeroHacks 2026 | Aerospace Innovation Partnership"
        description="Partner with McGill AeroHacks to connect with 150+ talented students. Sponsorship tiers from $1,000-$5,000 include brand visibility, recruiting, workshops, and prize categories."
        keywords="sponsor McGill AeroHacks, aerospace sponsorship, tech recruitment, university partnerships, student hackathon sponsorship, Montreal, McGill University"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 px-6 bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20" aria-hidden="true">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(to right, rgba(0, 255, 255, 0.3) 1px, transparent 1px),
                               linear-gradient(to bottom, rgba(0, 255, 255, 0.3) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }} />
          </div>

          <div className="relative max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Sponsor <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-500">McGill AeroHacks</span>
              </h1>
              <p className="text-xl md:text-2xl text-cyan-200 mb-4 max-w-3xl mx-auto">
                Partner with us to shape the future of aerospace technology
              </p>
              <p className="text-lg text-cyan-300/80 mb-10 max-w-2xl mx-auto">
                McGill AeroHacks brings together 150+ passionate students for 3 days of innovation, learning, and creating cutting-edge drone solutions. Join us in empowering the next generation of aerospace engineers and programmers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-lg"
                  onClick={() => window.location.href = 'mailto:aerialdesign@mcgilleus.ca?subject=McGill AeroHacks Sponsorship Inquiry'}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get in Touch
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-6 text-lg rounded-full shadow-lg transition-all"
                  onClick={() => window.open('https://www.canva.com/design/DAG5E3i3yEA/-8njt7vA8YyYafbHr54EJA/view?utm_content=DAG5E3i3yEA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3424c73f70', '_blank')}
                >
                  <FileText className="w-5 h-5 mr-2" />
                  View Package
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Sponsor Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-500">Sponsor Us?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                McGill AeroHacks is more than just a hackathon—it's where innovation meets opportunity. Your support directly impacts the next generation of tech leaders.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-gray-200">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <benefit.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                          <p className="text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-cyan-500 to-cyan-600">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-5xl font-bold mb-2">150+</div>
                <div className="text-cyan-100">Participants</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="text-5xl font-bold mb-2">3</div>
                <div className="text-cyan-100">Days of Innovation</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="text-5xl font-bold mb-2">25+</div>
                <div className="text-cyan-100">Projects Created</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sponsorship Tiers */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Sponsorship <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-500">Tiers</span>
              </h2>
              <p className="text-xl text-gray-600">
                Choose the sponsorship level that best fits your goals
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {tiers.map((tier, index) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-2xl transition-shadow duration-300 border-2 border-gray-200">
                    <CardContent className="p-8">
                      <div className={`w-full h-2 rounded-full bg-gradient-to-r ${tier.color} mb-6`} />
                      <h3 className="text-2xl font-bold mb-2 text-gray-900">{tier.name}</h3>
                      <div className="text-3xl font-bold text-cyan-600 mb-6">{tier.price}</div>
                      <ul className="space-y-3">
                        {tier.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600">
                            <div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="w-2 h-2 rounded-full bg-cyan-600" />
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Sponsors Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-500">Team Sponsors</span>
              </h2>
              <p className="text-xl text-gray-600 mb-2">
                Thank you to our amazing partners supporting McGill Aerial Design
              </p>
              <p className="text-sm text-gray-500">
                Click on any logo to visit their website
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              {currentSponsors.map((sponsor, index) => (
                <motion.div
                  key={sponsor.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 h-40 flex flex-col items-center justify-center relative overflow-hidden border-2 border-transparent group-hover:border-cyan-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-cyan-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {sponsor.textOnly ? (
                        <span className="text-2xl font-bold text-gray-700 group-hover:text-cyan-600 transition-colors duration-300 relative z-10">
                          {sponsor.name}
                        </span>
                      ) : (
                        <img
                          src={sponsor.logo}
                          alt={`${sponsor.name} logo`}
                          className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300 relative z-10"
                        />
                      )}
                      
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

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl p-8 md:p-12 text-white text-center"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Ready to Make an Impact?</h3>
              <p className="text-base sm:text-lg text-cyan-100 mb-8 max-w-2xl mx-auto">
                Join these amazing companies in supporting the next generation of aerospace innovators. 
                Something specific in mind? We can build a custom sponsorship package tailored to your goals.
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
      </div>
    </>
  );
}