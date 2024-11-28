
import { Link } from "@inertiajs/react"
import { Facebook, Instagram, Twitter } from "lucide-react"


export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold text-pink-600">Wedding Planner</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Making your special day perfect
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-pink-600">
                  Full Planning
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-pink-600">
                  Day Coordination
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-pink-600">
                  Vendor Selection
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-pink-600">
                  Venue Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-pink-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-pink-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-pink-600">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-pink-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-pink-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-pink-600">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-pink-600">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mx-auto max-w-7xl border-t px-6 py-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link href="#" className="text-muted-foreground hover:text-pink-600">
            <span className="sr-only">Facebook</span>
            <Facebook className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-pink-600">
            <span className="sr-only">Instagram</span>
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-pink-600">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-5 w-5" />
          </Link>
        </div>
        <p className="mt-4 text-center text-sm text-muted-foreground md:order-1 md:mt-0">
          © {new Date().getFullYear()} Wedding Planner. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

