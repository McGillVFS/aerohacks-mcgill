import Prizes from "../components/Prizes";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

export default function PrizesPage() {
  return (
    <>
      <SEO
        title="Prizes & Awards | McGill AeroHacks 2026"
        description="Compete for amazing prizes at McGill AeroHacks 2026. Categories include Grand Prize, Best Navigation System, Best Computer Vision, and People's Choice awards."
        keywords="McGill AeroHacks prizes, hackathon awards, drone competition prizes, student competitions, aerospace awards, programming challenges"
      />
      
      <div className="min-h-screen">
        <Prizes />
        <Footer />
      </div>
    </>
  );
}