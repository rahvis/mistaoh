"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Users, Clock, Phone } from "lucide-react"
import { useState } from "react"

export default function ReservationsPage() {
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
    alert("Reservation request submitted! We'll confirm via email within 1 hour.")
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

      {/* Hero Section with background image */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20201214_153049-OumRVZvFxQVhFvs7Yj28Swe7AeUNxc.jpg"
            alt="Make a Reservation at Mista Oh"
            fill
            className="object-cover"
            style={{ objectPosition: "center 20%" }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl mb-6 text-balance">Make a Reservation</h1>
          <p className="text-xl md:text-2xl text-pretty leading-relaxed">
            Reserve your table for an unforgettable Korean dining experience
          </p>
        </div>
      </section>

      {/* Reservation Form - Moved to top */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-surface p-8 rounded-2xl shadow-xl">
            <h2 className="font-serif text-4xl mb-6 text-center">Book Your Table</h2>
            <p className="text-center text-muted mb-8">Fill out the form below to reserve your table</p>

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
                    className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  />
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
                    <option value="17:00">5:00 PM</option>
                    <option value="17:30">5:30 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
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
                  placeholder="Dietary restrictions, special occasions, seating preferences..."
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg shadow-md"
              >
                Reserve Table
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted">
                For parties of 10 or more, please call us at{" "}
                <a href="tel:6465598858" className="text-primary hover:underline font-semibold">
                  (646) 559-8858
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Image Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0" style={{ transform: "translateZ(0)" }}>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0144-7ypahsbSpHWSowu6gT7NbbshB9v9Zv.jpg"
            alt="Korean Dining Experience"
            fill
            className="object-cover"
            style={{ objectPosition: "center 40%" }}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 px-4 bg-surface">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl mb-12 text-center">Reservation Information</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-2xl mb-3">Hours</h3>
              <div className="text-muted">
                <p className="font-semibold text-foreground">Lunch</p>
                <p>Mon-Sat: 11 AM - 3 PM</p>
                <p className="font-semibold text-foreground mt-2">Dinner</p>
                <p>Mon-Thu: 3 PM - 10 PM</p>
                <p>Fri-Sat: 3 PM - 11 PM</p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-2xl mb-3">Group Reservations</h3>
              <p className="text-muted">
                For parties of 10 or more, please call us directly. We offer private dining options for special events.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-serif text-2xl mb-3">Contact Us</h3>
              <p className="text-muted mb-2">Questions about your reservation?</p>
              <a href="tel:6465598858" className="text-primary hover:underline font-semibold text-lg">
                (646) 559-8858
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Image Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0" style={{ transform: "translateZ(0)" }}>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0126-MIVI0RKJ2fwn18G7BRwa22Mo09OaZr.jpg"
            alt="Korean Food Presentation"
            fill
            className="object-cover"
            style={{ objectPosition: "center 50%" }}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </section>

      <Footer />
    </div>
  )
}
