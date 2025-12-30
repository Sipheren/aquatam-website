import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/content/siteConfig";
import { team } from "@/content/team";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Aquatam for AWTS servicing, repairs, and installation quotes. Serving the Tamworth region.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-12 lg:py-16">
        <div className="container-custom">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold sm:text-5xl text-charcoal">Contact Us</h1>
              <p className="text-lg text-gray-text">
                Get in touch for service bookings, quotes, or any questions about
                your AWTS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
              <h2 className="mb-6 text-2xl font-bold text-charcoal">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-10">
              <h2 className="mb-6 text-2xl font-bold text-charcoal">
                Direct Contact
              </h2>
              <p className="mb-8 text-gray-text">
                For immediate assistance, call us directly. We&apos;re happy to
                answer your questions and schedule service appointments.
              </p>

              <div className="space-y-6">
                {team.map((member) => (
                  <div
                    key={member.name}
                    className="rounded-xl border border-gray-100 bg-gray-50 p-6 shadow-sm"
                  >
                    <div className="flex items-start">
                      <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <svg
                          className="h-6 w-6 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-charcoal">
                          {member.name}
                        </h3>
                        <p className="mb-3 text-sm text-primary">
                          {member.role}
                        </p>
                        <div className="space-y-2">
                          <a
                            href={`tel:${member.phone.replace(/\s/g, "")}`}
                            className="flex items-center text-gray-text hover:text-primary transition-colors"
                          >
                            <svg
                              className="mr-2 h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                              />
                            </svg>
                            {member.phone}
                          </a>
                          <a
                            href={`mailto:${member.email}`}
                            className="flex items-center text-gray-text hover:text-primary transition-colors"
                          >
                            <svg
                              className="mr-2 h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                            {member.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Service Area */}
              <div className="mt-8 rounded-xl bg-gray-50 p-6 border border-gray-100">
                <h3 className="mb-4 font-bold text-charcoal">Service Area</h3>
                <p className="mb-4 text-gray-text">
                  We service all AWTS units within a {siteConfig.serviceRadius}{" "}
                  radius of {siteConfig.location}.
                </p>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.coverageAreas.slice(0, 6).map((area) => (
                    <span
                      key={area}
                      className="rounded-full bg-white px-3 py-1 text-sm text-gray-text shadow-sm"
                    >
                      {area}
                    </span>
                  ))}
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                    + more
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
