import Link from "next/link"
import { Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-surface-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-2xl mb-4 text-primary">Mista Oh</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-sm">
                  41 W 24 St
                  <br />
                  New York, NY 10010
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:6465598858" className="text-sm hover:text-primary transition-colors">
                  (646) 559-8858
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-xl mb-4">Hours</h4>
            <div className="space-y-2 text-sm">
              <div>
                <p className="font-semibold text-primary">Lunch</p>
                <p>Mon-Sat: 11 AM - 3 PM</p>
              </div>
              <div className="mt-3">
                <p className="font-semibold text-primary">Dinner</p>
                <p>Mon-Thurs: 3 PM - 10 PM</p>
                <p>Fri & Sat: 3 PM - 11 PM</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link href="/menu" className="block hover:text-primary transition-colors">
                Menu
              </Link>
              <Link href="/catering" className="block hover:text-primary transition-colors">
                Catering
              </Link>
              <Link href="/reservation" className="block hover:text-primary transition-colors">
                Make a Reservation
              </Link>
              <Link href="/about" className="block hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="block hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mista Oh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
