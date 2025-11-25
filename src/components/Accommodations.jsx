import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Hotel, MapPin, ExternalLink, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Accommodations() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Accommodations & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-500">Where to Stay</span>
          </h2>
          <p className="text-xl text-gray-600">
            Traveling to Montréal? Find the perfect place to stay during McGill AeroHacks
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-gray-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <Hotel className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Downtown Hotels</h3>
                <p className="text-gray-600 mb-4">
                  McGill University has partnered with downtown Montréal hotels to offer convenient accommodations near campus. 
                  Perfect for out-of-town participants attending the in-person sessions.
                </p>
                <Button
                  className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white"
                  onClick={() => window.open('https://www.mcgill.ca/accommodations/mohp/downtown', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Hotel Options
                </Button>
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
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Location Benefits</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span>Walking distance to McGill campus</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span>Easy access via Montréal metro and public transit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span>Explore downtown Montréal between sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-1">•</span>
                    <span>Close to restaurants, cafes, and attractions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Book Early!</h3>
                  <p className="text-gray-700">
                    Downtown Montréal hotels fill up quickly, especially during the winter season. 
                    We recommend booking your accommodation as soon as possible to secure the best rates and availability. 
                    The earlier you book, the more options you'll have!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-500">
            Need help with travel planning? Reach out to us at{" "}
            <a href="mailto:info@mcgillaerohacks.com" className="text-cyan-600 hover:text-cyan-700 font-semibold">
              info@mcgillaerohacks.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}