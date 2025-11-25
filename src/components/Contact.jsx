import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, ExternalLink, Calendar, Instagram, MessageSquare, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { createPageUrl } from "../utils";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-600">
            Have questions? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-gray-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Email</h3>
                <a
                  href="mailto:sponsorship@mcgillaerohacks.com"
                  className="text-cyan-600 hover:text-cyan-700 font-semibold text-sm break-all"
                >
                  sponsorship@mcgillaerohacks.com
                </a>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-gray-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-3">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Discord</h3>
                <a
                  href="https://discord.gg/254hejcdms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm"
                >
                  Join our server
                </a>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-gray-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-3">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Instagram</h3>
                <a
                  href="https://www.instagram.com/mcgillaerohacks/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-700 font-semibold text-sm"
                >
                  @mcgillaerohacks
                </a>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-gray-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-3">
                  <Handshake className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">Sponsors</h3>
                <Link
                  to={createPageUrl("Sponsors")}
                  className="text-green-600 hover:text-green-700 font-semibold text-sm"
                >
                  Become a Sponsor
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-3xl p-8 md:p-12 text-white text-center mb-12"
        >
          <Calendar className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">Mark Your Calendar</h3>
          <p className="text-xl text-cyan-100 mb-6 max-w-2xl mx-auto">
            McGill AeroHacks 2026: March 13 - March 15
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-cyan-600 hover:bg-cyan-50 px-8 py-6 text-lg rounded-full font-semibold"
              onClick={() => window.open('http://mcgillaerohacks.devpost.com/', '_blank')}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              View on Devpost
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <h4 className="text-2xl font-bold mb-4 text-gray-900">Organized by McGill Aerial Design</h4>
          <p className="text-gray-600 max-w-2xl mx-auto mb-4">
            McGill Aerial Design is a multidisciplinary student design team dedicated to designing, building, 
            and flying unmanned aerial vehicles. We compete in international competitions and foster innovation 
            in aerospace engineering at McGill University.
          </p>
          <a
            href="https://www.mcgillaerialdesign.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-semibold text-lg"
          >
            Visit McGill Aerial Design
            <ExternalLink className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}