import { Card, CardContent } from "@/components/ui/card";
import { Code, Trophy, Users, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const features = [
{
  icon: Code,
  title: "Drone Programming",
  description: "Develop autonomous flight algorithms and control systems for cutting-edge drone technology"
},
{
  icon: Trophy,
  title: "Compete & Win",
  description: "Showcase your skills and compete for prizes while solving real-world challenges"
},
{
  icon: Users,
  title: "Network",
  description: "Connect with fellow students, mentors, and industry professionals in aerospace"
},
{
  icon: Rocket,
  title: "Learn & Grow",
  description: "Access workshops, mentorship, and resources to level up your programming skills"
}];


export default function About() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-500">McGill AeroHacks?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The <span className="font-semibold text-cyan-600">first-ever McGill AeroHacks</span> transforms McGill University into a hub of innovation and creativity. 
            Over 3 days, we bring together 150+ students from across Montreal and abroad for challenges in drone programming, computer vision, embedded systems, and autonomous navigation. 
            Using pocket-sized ESP32-powered drones, participants rapidly design and test real-world engineering solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) =>
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}>

              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-gray-200 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-3xl p-8 md:p-12 text-white text-center">

          <h3 className="text-3xl font-bold mb-4">Hosted by McGill Aerial Design</h3>
          <p className="text-lg text-cyan-100 max-w-3xl mx-auto mb-6">
            McGill Aerial Design is a student-run design team specializing in unmanned aerial vehicles. 
            We're passionate about pushing the boundaries of drone technology and fostering the next generation of aerospace engineers and programmers.
          </p>
          <a
            href="https://www.mcgillaerialdesign.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white font-semibold underline hover:text-cyan-100 transition-colors">

            Learn more about McGill Aerial Design →
          </a>
        </motion.div>
      </div>
    </section>);

}