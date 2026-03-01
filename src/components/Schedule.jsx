import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

const scheduleData = [
  {
    day: "Day 1 - Friday, March 13",
    format: "In Person",
    events: [
      { time: "5:30 PM - 7 PM", title: "Event Hours", description: "Check in, meet other participants, and kick off the weekend", highlight: true },
      { time: "During Event Hours", title: "Opening Ceremony", description: "Welcome session and event overview at McGill University" },
      { time: "During Event Hours", title: "Team Formation & Orientation", description: "Find teammates and get ready to build" }
    ]
  },
  {
    day: "Day 2 - Saturday, March 14",
    format: "In Person",
    events: [
      { time: "10 AM - 4 PM", title: "Event Hours", description: "Main hacking day with workshops and mentor support", highlight: true },
      { time: "During Event Hours", title: "Hands-On Drone Programming", description: "Work with ESP32-powered drones on your project" },
      { time: "During Event Hours", title: "Workshops & Mentorship", description: "Expert-led sessions and one-on-one guidance" }
    ]
  },
  {
    day: "Day 3 - Sunday, March 15",
    format: "In Person",
    events: [
      { time: "10 AM - 4 PM", title: "Event Hours", description: "Final build day, judging, and closing activities", highlight: true },
      { time: "During Event Hours", title: "Final Hacking & Testing", description: "Polish your project and prepare for demos" },
      { time: "During Event Hours", title: "Project Judging & Awards", description: "Present your work and celebrate top teams" }
    ]
  }
];

export default function Schedule() {
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
            Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-500">Schedule</span>
          </h2>
          <p className="text-xl text-gray-600">
            Friday kickoff and full weekend programming sessions at McGill University
          </p>
        </motion.div>

        <div className="space-y-8">
          {scheduleData.map((daySchedule, dayIndex) => (
            <motion.div
              key={daySchedule.day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: dayIndex * 0.1 }}
            >
              <Card className="hover:shadow-xl transition-shadow duration-300 border-gray-200">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{daySchedule.day}</h3>
                        <p className="text-sm text-cyan-600 font-semibold">{daySchedule.format}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {daySchedule.events.map((event, idx) => (
                      <div 
                        key={idx} 
                        className={`flex gap-4 p-4 rounded-lg transition-colors ${
                          event.highlight 
                            ? 'bg-gradient-to-r from-cyan-50 to-cyan-100 border-2 border-cyan-300' 
                            : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex-shrink-0">
                          <Clock className={`w-5 h-5 ${event.highlight ? 'text-cyan-600' : 'text-gray-500'}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                            <span className={`text-sm font-bold ${event.highlight ? 'text-cyan-700' : 'text-gray-700'}`}>
                              {event.time}
                            </span>
                            <span className="hidden sm:inline text-gray-400">•</span>
                            <span className={`font-semibold ${event.highlight ? 'text-gray-900' : 'text-gray-800'}`}>
                              {event.title}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">{event.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
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
              <h3 className="text-2xl font-bold mb-2 text-gray-900">More Details Coming Soon</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Specific workshop times and networking activities will be announced closer to the event. 
                Make sure to join our Discord for real-time updates!
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
