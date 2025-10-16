"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Users, Calendar, Phone, Mail, CheckCircle } from "lucide-react"
import { useState } from "react"

export default function CateringPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    guestCount: "",
    eventType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your catering inquiry! We'll contact you within 24 hours.")
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
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-02%20at%201.55.44%20PM%20%281%29-VLTe43Oi4XBF5LXSZ3k1LF8fHXOWsM.jpeg"
            alt="Mista Oh Catering Services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl mb-6 text-balance">Catering Services</h1>
          <p className="text-xl md:text-2xl text-pretty leading-relaxed">
            Bring authentic Korean flavors to your next event
          </p>
        </div>
      </section>

      {/* Catering Form */}
      <section className="py-12 px-4 bg-surface">
        <div className="max-w-2xl mx-auto">
          <div className="bg-background p-6 rounded-xl shadow-lg">
            <h2 className="font-serif text-3xl mb-4 text-center">Quick Catering Quote</h2>
            <p className="text-center text-muted mb-6 text-sm">Get a quote within 24 hours</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone *"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
                <input
                  type="date"
                  name="eventDate"
                  required
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
                <input
                  type="number"
                  name="guestCount"
                  placeholder="# of Guests *"
                  required
                  min="10"
                  value={formData.guestCount}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
              </div>

              <select
                name="eventType"
                required
                value={formData.eventType}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              >
                <option value="">Event Type *</option>
                <option value="corporate">Corporate Event</option>
                <option value="wedding">Wedding</option>
                <option value="birthday">Birthday Party</option>
                <option value="family">Family Gathering</option>
                <option value="other">Other</option>
              </select>

              <textarea
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Additional details..."
                className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-md"
              >
                Request Quote
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl mb-6">Elevate Your Event with Mista Oh</h2>
          <p className="text-lg text-muted leading-relaxed">
            Whether you're hosting a corporate event, family celebration, or special occasion, Mista Oh brings the
            authentic taste of Korea to your gathering. Our catering services feature the same quality and care that
            have made us a Flatiron favorite.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-2xl mb-3">Any Size Event</h3>
              <p className="text-muted">
                From intimate gatherings of 10 to large events of 200+, we've got you covered
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-2xl mb-3">Flexible Planning</h3>
              <p className="text-muted">We work with your schedule and dietary requirements</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-2xl mb-3">Full Service</h3>
              <p className="text-muted">Setup, service, and cleanup - we handle everything</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catering Options */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-12 text-center">Catering Packages</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Package 1 */}
            <div className="bg-surface p-8 rounded-2xl border-2 border-primary">
              <h3 className="font-serif text-3xl mb-4 text-primary">Classic Package</h3>
              <p className="text-muted mb-6">Perfect for corporate lunches and casual gatherings</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Choice of 3 main dishes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>2 appetizers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Rice and banchan (side dishes)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>Disposable plates and utensils</span>
                </li>
              </ul>
              <p className="text-2xl font-bold text-primary">Starting at $25/person</p>
            </div>

            {/* Package 2 */}
            <div className="bg-surface p-8 rounded-2xl border-2 border-premium shadow-lg">
              <h3 className="font-serif text-3xl mb-4 text-premium">Premium Package</h3>
              <p className="text-muted mb-6">Ideal for special celebrations and formal events</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-premium mt-1 flex-shrink-0" />
                  <span>Choice of 5 main dishes including premium cuts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-premium mt-1 flex-shrink-0" />
                  <span>4 appetizers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-premium mt-1 flex-shrink-0" />
                  <span>Rice, banchan, and Korean desserts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-premium mt-1 flex-shrink-0" />
                  <span>Full service staff and setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-premium mt-1 flex-shrink-0" />
                  <span>Elegant serving ware</span>
                </li>
              </ul>
              <p className="text-2xl font-bold text-premium">Starting at $45/person</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted">
              Custom packages available. Minimum order of 10 people. Contact us for detailed menu options.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Catering Items */}
      <section className="py-16 px-4 bg-surface">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl mb-12 text-center">Popular Catering Items</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bulgogi-2-PjvUbvKALCkjnx9fEPzce6WQrYKkNq.jpg"
                  alt="Bulgogi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl mb-2">Bulgogi</h4>
                <p className="text-sm text-muted">Marinated beef, a crowd favorite</p>
              </div>
            </div>

            <div className="bg-background rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/japchae-f8yb9hFK9UmTaANkh2I3L991tDRlJc.jpg"
                  alt="Japchae"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl mb-2">Japchae</h4>
                <p className="text-sm text-muted">Stir-fried glass noodles with vegetables</p>
              </div>
            </div>

            <div className="bg-background rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chickenwings-Jriq5QpQlTIRJ0bgC2Yo3Kz7cH0Als.jpg"
                  alt="Korean Fried Chicken"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl mb-2">Korean Fried Chicken</h4>
                <p className="text-sm text-muted">Crispy and flavorful</p>
              </div>
            </div>

            <div className="bg-background rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image src="/dolsot-bibimbap-korean-food.jpg" alt="Bibimbap" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl mb-2">Bibimbap</h4>
                <p className="text-sm text-muted">Mixed rice bowl with vegetables</p>
              </div>
            </div>

            <div className="bg-background rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pork%20Dumplings-JWxg0E8xFaVt6TmlhtZamWC1O3PYt4.jpg"
                  alt="Dumplings"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl mb-2">Dumplings</h4>
                <p className="text-sm text-muted">Pork, kimchi, or vegetarian options</p>
              </div>
            </div>

            <div className="bg-background rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DD_mackerel-TBCI17lH6xu23GkicSlrtzA2EqTtPO.jpg"
                  alt="Korean BBQ"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl mb-2">Korean BBQ</h4>
                <p className="text-sm text-muted">Grilled meats with traditional sides</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl mb-6 text-center">Request a Catering Quote</h2>
          <p className="text-center text-muted mb-8">
            Fill out the form below and we'll get back to you within 24 hours
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
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
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

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
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="eventDate" className="block text-sm font-medium mb-2">
                  Event Date *
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  required
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="guestCount" className="block text-sm font-medium mb-2">
                  Number of Guests *
                </label>
                <input
                  type="number"
                  id="guestCount"
                  name="guestCount"
                  required
                  min="10"
                  value={formData.guestCount}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="eventType" className="block text-sm font-medium mb-2">
                  Event Type *
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  required
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select event type</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="wedding">Wedding</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="family">Family Gathering</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Additional Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your event, dietary restrictions, or any special requests..."
                className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg shadow-md"
            >
              Submit Catering Request
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-muted mb-4">Or contact us directly:</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:6465598858" className="flex items-center gap-2 text-primary hover:underline">
                <Phone className="w-5 h-5" />
                (646) 559-8858
              </a>
              <a href="mailto:catering@mistaoh.com" className="flex items-center gap-2 text-primary hover:underline">
                <Mail className="w-5 h-5" />
                catering@mistaoh.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
