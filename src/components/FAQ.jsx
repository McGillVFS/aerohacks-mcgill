import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is McGill AeroHacks?",
    answer: "McGill AeroHacks is a 3-day hackathon focused on drone programming and autonomous flight systems. Participants will create programs that control drones to solve various challenges related to navigation, computer vision, and flight control."
  },
  {
    question: "When and where is McGill AeroHacks taking place?",
    answer: "McGill AeroHacks will be held from March 13th to March 15th, 2026, at McGill University in Montreal, Quebec. Specific venue details will be sent to registered participants."
  },
  {
    question: "Who can participate?",
    answer: "McGill AeroHacks is open to all university, CEGEP, and college students, regardless of major or experience level. Whether you're a beginner or an experienced programmer, we welcome all skill levels. Teams of up to 4 people are encouraged!"
  },
  {
    question: "Do I need to have a team?",
    answer: "No! You can register solo and we'll help you find teammates at the event or on our Discord server. However, if you already have a team in mind, feel free to register together. Teams can have up to 4 members."
  },
  {
    question: "Do I need prior drone or programming experience?",
    answer: "Not at all! We welcome participants of all skill levels. We'll provide workshops, tutorials, and mentorship throughout the event to help you learn. If you're interested in drones and eager to learn, you're perfect for McGill AeroHacks!"
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, chargers, and any personal items you need. We'll provide the drones, workspace, meals, and all the equipment you need for the hackathon. Don't forget to bring your enthusiasm and creativity!"
  },
  {
    question: "Is there a registration fee?",
    answer: "No! McGill AeroHacks is completely free to attend. We'll provide meals, snacks, and all necessary equipment throughout the event."
  },
  {
    question: "Will there be prizes?",
    answer: "Yes! We'll have prizes for the top teams in various categories. More details about prizes and judging criteria will be announced closer to the event date."
  },
  {
    question: "How do I submit my project?",
    answer: "All projects must be submitted through our Devpost page (mcgillaerohacks.devpost.com) by the deadline on March 15th. You'll be able to upload your code, documentation, and a video demonstration of your drone program."
  },
  {
    question: "What programming languages can I use?",
    answer: "You're free to use any programming language that works with drone control systems. Python is commonly used for drone programming, but you can use whatever you're most comfortable with as long as it interfaces with the drone hardware."
  },
  {
    question: "Will there be workshops and mentorship?",
    answer: "Absolutely! We'll have workshops on drone programming basics, computer vision, flight control algorithms, and more. Industry mentors and experienced members from McGill Aerial Design will be available throughout the event to help you."
  },
  {
    question: "I have more questions!",
    answer: "We have answers! Feel free to reach out to us at aerialdesign@mcgilleus.ca, join our Discord server (discord.gg/MktHQJvTQD), or DM us on Instagram @mcgillaerohacks. We're here to help and excited to answer any questions you might have!"
  }
];

export default function FAQ() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-500">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about McGill AeroHacks
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6 bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-cyan-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}