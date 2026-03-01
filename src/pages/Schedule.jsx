import Schedule from "../components/Schedule";
import Venue from "../components/Venue";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

export default function SchedulePage() {
  return (
    <>
      <SEO
        title="Schedule & Venue | McGill AeroHacks 2026"
        description="View the McGill AeroHacks schedule and venue information. March 13 - March 15, 2026 at McGill University, Montreal. Friday 5:30 PM - 7 PM, Saturday 10 AM - 4 PM, and Sunday 10 AM - 4 PM."
        keywords="McGill AeroHacks schedule, event timeline, venue information, McGill University location, hackathon agenda, Montreal events 2026"
      />
      
      <div className="min-h-screen">
        <Schedule />
        <Venue />
        <Footer />
      </div>
    </>
  );
}
