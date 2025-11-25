import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Target, Zap, Users } from "lucide-react";

const prizeCategories = [
  {
    icon: Trophy,
    title: "Grand Prize",
    prize: "TBD",
    description: "Best overall drone project that demonstrates innovation, technical execution, and practical application",
    color: "from-yellow-400 to-yellow-600"
  },
  {
    icon: Target,
    title: "Best Navigation System",
    prize: "TBD",
    description: "Most impressive autonomous navigation and path planning implementation",
    color: "from-blue-400 to-blue-600"
  },
  {
    icon: Zap,
    title: "Best Computer Vision",
    prize: "TBD",
    description: "Most creative and effective use of computer vision for drone control",
    color: "from-purple-400 to-purple-600"
  },
  {
    icon: Users,
    title: "People's Choice",
    prize: "TBD",
    description: "Community favorite project as voted by participants",
    color: "from-pink-400 to-pink-600"
  }
];

export default function Prizes() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Prizes & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-500">Recognition</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compete for amazing prizes and recognition in multiple categories
          </p>
          <p className="text-sm text-gray-500 mt-2">
            More prize details and sponsor categories will be announced soon!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {prizeCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-gray-200">
                <CardHeader>
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-center">{category.title}</CardTitle>
                  <div className="text-center">
                    <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                      {category.prize}
                      </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{category.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Card className="bg-gradient-to-r from-cyan-50 to-cyan-100 border-cyan-300">
            <CardContent className="p-8">
              <Trophy className="w-12 h-12 mx-auto mb-4 text-cyan-600" />
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Additional Sponsor Prizes</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                More prize categories from our sponsors will be announced as we confirm partnerships. 
                Stay tuned for special challenges and awards from industry leaders in aerospace and technology!
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}