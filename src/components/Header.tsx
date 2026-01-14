"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/siteConfig";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Installs", href: "/installs" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container-custom">
        <div className="flex flex-col py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.jpg"
                alt="Aquatam Waste Water Logo"
                width={300}
                height={90}
                priority
                className="h-auto w-auto max-h-16"
              />
            </Link>

            {/* Contact Info - Desktop */}
            <div className="hidden lg:flex lg:flex-col lg:items-end lg:justify-center">
              <h3 className="text-base font-bold text-primary mb-1">Contact Us:</h3>
              <div className="text-sm text-charcoal flex flex-col items-end">
                <div className="font-semibold">Ben Glover: {siteConfig.phone.ben}</div>
                <a href="mailto:ben@aquatam.com.au" className="text-gray-text hover:text-primary">
                  ben@aquatam.com.au
                </a>
                <a href="mailto:admin@aquatam.com.au" className="text-gray-text hover:text-primary">
                  admin@aquatam.com.au
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:justify-center md:space-x-4 mt-6 pt-4 border-t border-gray-200">
            {navigation.map((item) => {
              const isActive = pathname === item.href || pathname === item.href + '/';
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-lg font-bold transition-all duration-200 px-6 py-3 rounded-lg ${
                    isActive
                      ? "text-white bg-primary shadow-md"
                      : "text-charcoal hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-text hover:bg-gray-100 hover:text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-base font-medium ${
                    pathname === item.href
                      ? "text-primary"
                      : "text-gray-text hover:text-primary"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:0438603852"
                className="btn-primary text-center text-sm"
              >
                Call Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
