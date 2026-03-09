import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarX2, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";

export default function RegistrationClosed({ showHomeLink = false }) {
  return (
    <section id="register" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="border-2 border-cyan-200 shadow-xl">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-cyan-500 text-white shadow-lg">
                <CalendarX2 className="h-8 w-8" />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-900">
                Registration Closed
              </CardTitle>
              <CardDescription className="text-base text-gray-600">
                Online registration for McGill AeroHacks 2026 has now closed.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6 text-center">
              <p className="text-gray-600">
                The event runs March 13th to March 15th at McGill University. Questions can still be directed to the team on Discord.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-cyan-600 hover:bg-cyan-700 text-white"
                >
                  <a
                    href="https://discord.gg/254hejcdms"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Join Discord
                  </a>
                </Button>

                {showHomeLink && (
                  <Button asChild size="lg" variant="outline" className="border-cyan-500 text-cyan-700 hover:bg-cyan-50">
                    <Link to={createPageUrl("Home")}>Back to Home</Link>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
