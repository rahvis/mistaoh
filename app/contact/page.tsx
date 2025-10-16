"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert("Thank you for contacting us! We'll get back to you within 24 hours.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 mt-20 bg-surface">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-7xl mb-6 text-balance">Get in Touch</h1>
          <p className="text-xl text-muted leading-relaxed">
            We'd love to hear from you. Whether you have a question about our menu, want to make a reservation, or just
            want to say hello, we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Address */}
            <div className="bg-surface p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-serif text-xl mb-2">Address</h3>
              <p className="text-muted">
                41 W 24 St
                <br />
                New York, NY 10010
              </p>
              <a
                href="https://maps.google.com/?q=41+W+24+St+New+York+NY+10010"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm mt-2 inline-block"
              >
                Get Directions
              </a>
            </div>

            {/* Phone */}
            <div className="bg-surface p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-serif text-xl mb-2">Phone</h3>
              <a href="tel:6465598858" className="text-muted hover:text-primary transition-colors">
                (646) 559-8858
              </a>
              <p className="text-sm text-muted mt-2">Call for reservations or inquiries</p>
            </div>

            {/* Email */}
            <div className="bg-surface p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-serif text-xl mb-2">Email</h3>
              <a href="mailto:info@mistaoh.com" className="text-muted hover:text-primary transition-colors">
                info@mistaoh.com
              </a>
              <p className="text-sm text-muted mt-2">We'll respond within 24 hours</p>
            </div>

            {/* Hours */}
            <div className="bg-surface p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-serif text-xl mb-2">Hours</h3>
              <div className="text-sm text-muted">
                <p className="font-semibold text-foreground">Lunch</p>
                <p>Mon-Sat: 11 AM - 3 PM</p>
                <p className="font-semibold text-foreground mt-2">Dinner</p>
                <p>Mon-Thu: 3 PM - 10 PM</p>
                <p>Fri-Sat: 3 PM - 11 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 px-4 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-4xl mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  >
                    <option value="">Select a subject</option>
                    <option value="reservation">Reservation Inquiry</option>
                    <option value="catering">Catering Inquiry</option>
                    <option value="menu">Menu Question</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map */}
            <div>
              <h2 className="font-serif text-4xl mb-6">Find Us</h2>
              <div className="h-[500px] rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476819253204!2d-73.99263492346658!3d40.74290097138747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a7e3b6c5a7%3A0x1234567890abcdef!2s41%20W%2024th%20St%2C%20New%20York%2C%20NY%2010010!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="mt-6 p-6 bg-background rounded-xl">
                <h3 className="font-serif text-2xl mb-4">Getting Here</h3>
                <div className="space-y-3 text-muted">
                  <p>
                    <span className="font-semibold text-foreground">Subway:</span> N, R, W, F, M to 23rd Street
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Bus:</span> M1, M2, M3, M5, M7, M55
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Parking:</span> Street parking and nearby garages
                    available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="bg-surface p-6 rounded-xl">
              <h3 className="font-semibold text-xl mb-2">Do you take reservations?</h3>
              <p className="text-muted">
                Yes! We highly recommend making a reservation, especially for dinner and weekends. You can book online
                or call us at (646) 559-8858.
              </p>
            </div>

            <div className="bg-surface p-6 rounded-xl">
              <h3 className="font-semibold text-xl mb-2">Do you offer vegetarian options?</h3>
              <p className="text-muted">
                We have several vegetarian dishes marked on our menu. Please let us know about any dietary restrictions
                and we'll be happy to accommodate.
              </p>
            </div>

            <div className="bg-surface p-6 rounded-xl">
              <h3 className="font-semibold text-xl mb-2">Is parking available?</h3>
              <p className="text-muted">
                Street parking is available in the area, and there are several parking garages within walking distance.
                We're also easily accessible by subway.
              </p>
            </div>

            <div className="bg-surface p-6 rounded-xl">
              <h3 className="font-semibold text-xl mb-2">Do you offer catering services?</h3>
              <p className="text-muted">
                Yes! We offer catering for events of all sizes. Visit our catering page or contact us directly to
                discuss your needs.
              </p>
            </div>

            <div className="bg-surface p-6 rounded-xl">
              <h3 className="font-semibold text-xl mb-2">What payment methods do you accept?</h3>
              <p className="text-muted">We accept all major credit cards, debit cards, and cash.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
