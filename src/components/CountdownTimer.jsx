import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds }
  ];

  return (
    <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-black/60 backdrop-blur-xl rounded p-3 md:p-4 min-w-[75px] md:min-w-[100px] border-2 border-blue-500/50 shadow-2xl shadow-blue-500/30 transition-all duration-300 hover:border-red-500/50 hover:shadow-red-500/30"
        >
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono text-red-500 mb-1" style={{
            textShadow: '0 0 10px rgba(255, 68, 68, 0.5)'
          }}>
            {String(unit.value).padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-blue-400 uppercase tracking-wider font-medium font-mono">
            {unit.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}