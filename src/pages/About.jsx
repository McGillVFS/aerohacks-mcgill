import About from "../components/About";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About McGill AeroHacks 2026 | Drone Programming Hackathon"
        description="Learn about McGill AeroHacks, a 3-day hackathon where students design and program autonomous drone systems. Network, compete, and innovate in aerospace technology."
        keywords="about McGill AeroHacks, drone hackathon, aerospace innovation, student competition, McGill University, autonomous drones, programming challenges"
      />
      
      <div className="min-h-screen">
        <About />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </>
  );
}