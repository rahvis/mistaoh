"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Calendar, Clock, Users, Phone, Mail } from "lucide-react"
import { useState } from "react"

export default function ReservationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    specialRequests: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert("Thank you for your reservation request! We'll confirm your booking shortly.")
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
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-02%20at%201.55.43%20PM-I2eRSekz4BiORzEyZhVTZMT0QUn7TH.jpeg"
            alt="Mista Oh Restaurant Interior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl mb-6 text-balance">Make a Reservation</h1>
          <p className="text-xl md:text-2xl text-pretty leading-relaxed">
            Join us for an authentic Korean dining experience
          </p>
        </div>
      </section>

      {/* Reservation Info */}
      <section className="py-16 px-4 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-2xl mb-2">Open Daily</h3>
              <p className="text-muted">Monday - Saturday</p>
            </div>

            <div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-2xl mb-2">Flexible Hours</h3>
              <p className="text-muted">
                Lunch: 11 AM - 3 PM
                <br />
                Dinner: 3 PM - 11 PM
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-2xl mb-2">All Party Sizes</h3>
              <p className="text-muted">From intimate dinners to large groups</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl mb-6 text-center">Reserve Your Table</h2>
          <p className="text-center text-muted mb-8">
            Fill out the form below or call us at{" "}
            <a href="tel:6465598858" className="text-primary hover:underline font-semibold">
              (646) 559-8858
            </a>
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 bg-surface p-8 rounded-2xl">
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
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background"
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
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                />
              </div>
            </div>

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
                className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium mb-2">
                  Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                />
              </div>

              <div>
                <label htmlFor="time" className="block text-sm font-medium mb-2">
                  Time *
                </label>
                <select
                  id="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                >
                  <option value="">Select time</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="11:30">11:30 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="12:30">12:30 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="13:30">1:30 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="14:30">2:30 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="15:30">3:30 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="16:30">4:30 PM</option>
                  <option value="17:00">5:00 PM</option>
                  <option value="17:30">5:30 PM</option>
                  <option value="18:00">6:00 PM</option>
                  <option value="18:30">6:30 PM</option>
                  <option value="19:00">7:00 PM</option>
                  <option value="19:30">7:30 PM</option>
                  <option value="20:00">8:00 PM</option>
                  <option value="20:30">8:30 PM</option>
                  <option value="21:00">9:00 PM</option>
                  <option value="21:30">9:30 PM</option>
                  <option value="22:00">10:00 PM</option>
                </select>
              </div>

              <div>
                <label htmlFor="guests" className="block text-sm font-medium mb-2">
                  Guests *
                </label>
                <select
                  id="guests"
                  name="guests"
                  required
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                  <option value="10+">10+ Guests</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="specialRequests" className="block text-sm font-medium mb-2">
                Special Requests
              </label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                rows={4}
                value={formData.specialRequests}
                onChange={handleChange}
                placeholder="Dietary restrictions, special occasions, seating preferences, etc."
                className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
            >
              Request Reservation
            </button>

            <p className="text-sm text-muted text-center">
              Reservations are subject to availability. We'll confirm your booking via email or phone within 2 hours.
            </p>
          </form>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 px-4 bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl mb-8 text-center">Reservation Policy</h2>

          <div className="space-y-6 text-muted">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Large Parties</h3>
              <p>
                For parties of 10 or more, please call us directly at (646) 559-8858 to ensure we can accommodate your
                group.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Cancellation Policy</h3>
              <p>
                If you need to cancel or modify your reservation, please contact us at least 2 hours in advance. We
                appreciate your consideration.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Walk-ins Welcome</h3>
              <p>
                While reservations are recommended, we always welcome walk-in guests based on availability. Feel free to
                stop by!
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-2">Contact Us</h3>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <a href="tel:6465598858" className="flex items-center gap-2 text-primary hover:underline">
                  <Phone className="w-5 h-5" />
                  (646) 559-8858
                </a>
                <a
                  href="mailto:reservations@mistaoh.com"
                  className="flex items-center gap-2 text-primary hover:underline"
                >
                  <Mail className="w-5 h-5" />
                  reservations@mistaoh.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
