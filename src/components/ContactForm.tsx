"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });

  const [status, setStatus] = useState<{
    submitting: boolean;
    info: { error: boolean; msg: string | null };
  }>({
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleServerResponse = (ok: boolean, msg: string | null) => {
    if (ok) {
      setStatus({
        submitting: false,
        info: { error: false, msg: msg },
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        message: ""
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
        submitting: false,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic Validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields (Name, Email, Message).");
      return;
    }
    
    // Email format validation (simple regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    try {
      // Basic check for configured environment variables
      if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 
          !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 
          !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
        throw new Error("EmailJS service is not fully configured. Please check your environment variables.");
      }

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
            // Parameters matching common template variables: definition {{name}}, {{email}}, etc.
            name: formData.name,
            email: formData.email,
            company: formData.company,
            service: formData.service,
            message: formData.message,
            time: new Date().toLocaleString(),
            
            // Fallbacks for default templates
            from_name: formData.name,
            from_email: formData.email,
            reply_to: formData.email,
            to_name: "Admin", 
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      handleServerResponse(true, "Thank you, your message has been sent.");
    } catch (error) {
      console.error("Failed to send email:", error);
      handleServerResponse(false, "Failed to send message. Please try again later.");
    }
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left Side: Contact Info */}
          <div className="w-full lg:w-1/3 space-y-8 animate-fade-in-up">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary-dark leading-tight">
              Ready to streamline your business?
            </h2>
            <p className="text-gray-600">
              Reach out today to discuss how we can elevate your operational efficiency and brand presence.
            </p>
            
            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent-gold/10 rounded-full text-accent-gold">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary-dark">Phone</h4>
                  <p className="text-gray-600">+254 724 788 158</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent-gold/10 rounded-full text-accent-gold">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary-dark">Email</h4>
                  <p className="text-gray-600">ndindamithamo@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent-gold/10 rounded-full text-accent-gold">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-primary-dark">Location</h4>
                  <p className="text-gray-600">Kenya</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="w-full lg:w-2/3 bg-gray-50 p-8 lg:p-12 rounded-2xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent-gold focus:ring-1 focus:ring-accent-gold outline-none transition-all"
                    placeholder="Your Name"
                    disabled={status.submitting}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent-gold focus:ring-1 focus:ring-accent-gold outline-none transition-all"
                    placeholder="john@company.com"
                    disabled={status.submitting}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-gray-700">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  autoComplete="organization"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent-gold focus:ring-1 focus:ring-accent-gold outline-none transition-all"
                  placeholder="Company Name (Optional)"
                  disabled={status.submitting}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-gray-700">How can we help?</label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent-gold focus:ring-1 focus:ring-accent-gold outline-none transition-all bg-white"
                  disabled={status.submitting}
                >
                  <option value="" disabled>Select a service...</option>
                  
                  {/* Direct Services */}
                  <option value="Corporate Writing">Corporate Writing</option>
                  <option value="Virtual Assistance">Virtual Assistance</option>
                  <option value="PR & Customer Success">PR & Customer Success</option>
                  
                  {/* Managed Services */}
                  <option value="Web Design & Development">Web Design & Development</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="CV Revamp">CV Revamp</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent-gold focus:ring-1 focus:ring-accent-gold outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                  disabled={status.submitting}
                ></textarea>
              </div>

              {status.info.msg && (
                <div className={`p-4 rounded-lg text-center ${status.info.error ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
                  {status.info.msg}
                </div>
              )}

              <button
                type="submit"
                disabled={status.submitting}
                className="w-full bg-accent-gold text-white font-bold py-4 rounded-lg hover:bg-[#b08d4a] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.submitting ? "Sending..." : "Send Message"} <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
