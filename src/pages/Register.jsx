import RegistrationForm from "../components/RegistrationForm";
import RegistrationClosed from "../components/RegistrationClosed";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { REGISTRATION_OPEN } from "../lib/registration";

export default function RegisterPage() {
  return (
    <>
      <SEO
        title={REGISTRATION_OPEN ? "Register for McGill AeroHacks 2026 | Drone Programming Hackathon" : "Registration Closed | McGill AeroHacks 2026"}
        description={REGISTRATION_OPEN ? "Register for McGill AeroHacks 2026! Secure your spot at Montreal's premier drone programming hackathon. March 13 - March 15, 2026. Free to attend!" : "Online registration for McGill AeroHacks 2026 is now closed. The event runs March 13 - March 15, 2026 at McGill University in Montreal."}
        keywords="register McGill AeroHacks, hackathon registration, drone programming signup, student hackathon Montreal, free tech event, aerospace competition registration"
      />
      
      <div className="min-h-screen">
        {REGISTRATION_OPEN ? <RegistrationForm /> : <RegistrationClosed showHomeLink />}
        <Footer />
      </div>
    </>
  );
}
