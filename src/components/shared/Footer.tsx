"use client";
import Link from "next/link";
import { Car, Facebook, Twitter, Instagram } from "lucide-react";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathName = usePathname();
  const isSignupPage = pathName.includes("/register");
  const isLoginPage = pathName.includes("/login");

  if (isSignupPage || isLoginPage) {
    return null;
  }
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand and Mission */}
          <div className="flex flex-col items-start">
            <Link href="/" className="mb-4 flex items-center space-x-2">
              <Car className="text-primary h-6 w-6" />
              <span className="text-foreground text-lg font-bold">
                RideSwift
              </span>
            </Link>
            <p className="text-sm">
              Our mission is to provide safe, reliable, and affordable
              transportation for everyone, everywhere.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-primary">
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/register?role=driver"
                  className="hover:text-primary"
                >
                  Become a Driver
                </Link>
              </li>
              <li>
                <Link href="/dashboard/rider" className="hover:text-primary">
                  Book a Ride
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-foreground mb-4 font-semibold">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-foreground mb-4 font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-primary">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-primary">
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} RideSwift. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
