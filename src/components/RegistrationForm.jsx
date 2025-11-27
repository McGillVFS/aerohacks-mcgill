import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mlh_code_of_conduct: false,
    mlh_privacy_policy: false,
    mlh_emails: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    // Validate required MLH checkboxes
    if (!formData.mlh_code_of_conduct || !formData.mlh_privacy_policy) {
      setError("You must agree to the MLH Code of Conduct and Privacy Policy to register.");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const endpoint = import.meta.env.VITE_REGISTRATION_ENDPOINT || "/api/register";

      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });

        if (!response.ok) {
          const { error: responseError } = await response.json().catch(() => ({}));
          throw new Error(responseError || "Registration request failed");
        }
      } else {
        // Fallback to a client-only success flow when no endpoint is configured
        await new Promise((resolve) => setTimeout(resolve, 400));
        console.info("Registration data captured (not sent to a remote service):", formData);
      }

      setIsSuccess(true);
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        mlh_code_of_conduct: false,
        mlh_privacy_policy: false,
        mlh_emails: false
      });
      
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Registration error:", error);
      setError(error?.message || "An error occurred. Please try again.");
    }
    
    setIsSubmitting(false);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError("");
  };

  return (
    <section id="register" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Pre-Register for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-500">McGill AeroHacks</span>
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            Be the first to know when full registration opens!
          </p>
          <p className="text-gray-500">
            March 13 - March 15, 2026
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Pre-Registration Successful!</h3>
              <p className="text-xl text-gray-600 mb-8">
                Welcome to McGill AeroHacks! We'll email you when full registration opens with all the details you need.
              </p>
              <Button
                onClick={() => setIsSuccess(false)}
                className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700"
              >
                Pre-Register Another Person
              </Button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Card className="shadow-xl border-gray-200">
                <CardHeader>
                  <CardTitle className="text-2xl">Pre-Registration Information</CardTitle>
                  <CardDescription>Enter your basic information to stay updated about McGill AeroHacks 2026. Full registration will open soon!</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="first_name">First Name *</Label>
                        <Input
                          id="first_name"
                          value={formData.first_name}
                          onChange={(e) => handleChange("first_name", e.target.value)}
                          required
                          placeholder="John"
                          aria-required="true"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="last_name">Last Name *</Label>
                        <Input
                          id="last_name"
                          value={formData.last_name}
                          onChange={(e) => handleChange("last_name", e.target.value)}
                          required
                          placeholder="Doe"
                          aria-required="true"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        placeholder="john.doe@example.com"
                        aria-required="true"
                      />
                    </div>

                    <div className="border-t border-gray-200 pt-6 space-y-4">
                      <p className="text-sm text-gray-600 mb-4">
                        We are currently in the process of partnering with MLH. The following checkboxes are for this partnership. If we do not end up partnering with MLH, your information will not be shared.
                      </p>

                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="mlh_code_of_conduct"
                          checked={formData.mlh_code_of_conduct}
                          onCheckedChange={(checked) => handleChange("mlh_code_of_conduct", checked)}
                          required
                          aria-required="true"
                        />
                        <label
                          htmlFor="mlh_code_of_conduct"
                          className="text-sm text-gray-700 leading-tight cursor-pointer"
                        >
                          I have read and agree to the{" "}
                          <a
                            href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-600 hover:text-cyan-700 underline"
                          >
                            MLH Code of Conduct
                          </a>
                          . *
                        </label>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="mlh_privacy_policy"
                          checked={formData.mlh_privacy_policy}
                          onCheckedChange={(checked) => handleChange("mlh_privacy_policy", checked)}
                          required
                          aria-required="true"
                        />
                        <label
                          htmlFor="mlh_privacy_policy"
                          className="text-sm text-gray-700 leading-tight cursor-pointer"
                        >
                          I authorize you to share my application/registration information with Major League Hacking for event administration, ranking, and MLH administration in-line with the{" "}
                          <a
                            href="https://github.com/MLH/mlh-policies/blob/main/privacy-policy.md"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-600 hover:text-cyan-700 underline"
                          >
                            MLH Privacy Policy
                          </a>
                          . I further agree to the terms of both the{" "}
                          <a
                            href="https://github.com/MLH/mlh-policies/blob/main/contest-terms.md"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-600 hover:text-cyan-700 underline"
                          >
                            MLH Contest Terms and Conditions
                          </a>{" "}
                          and the{" "}
                          <a
                            href="https://github.com/MLH/mlh-policies/blob/main/privacy-policy.md"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-600 hover:text-cyan-700 underline"
                          >
                            MLH Privacy Policy
                          </a>
                          . *
                        </label>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="mlh_emails"
                          checked={formData.mlh_emails}
                          onCheckedChange={(checked) => handleChange("mlh_emails", checked)}
                        />
                        <label
                          htmlFor="mlh_emails"
                          className="text-sm text-gray-700 leading-tight cursor-pointer"
                        >
                          I authorize MLH to send me occasional emails about relevant events, career opportunities, and community announcements.
                        </label>
                      </div>
                    </div>

                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded" role="alert">
                        <p className="text-sm">{error}</p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white py-6 text-lg"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Complete Pre-Registration"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}