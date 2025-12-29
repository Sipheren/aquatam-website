import type { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { siteConfig } from "@/content/siteConfig";
import { services, serviceFeatures } from "@/content/services";
import { pricing } from "@/content/pricing";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional AWTS servicing, repairs, and installations. Regular 90-day maintenance services from $85.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-12 lg:py-16">
        <div className="container-custom">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold sm:text-5xl text-charcoal">Our Services</h1>
              <p className="text-lg text-gray-text">
                Comprehensive AWTS maintenance and installation services for
                properties across regional NSW.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Details */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Pricing */}
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-2xl font-bold text-charcoal">
                Service Pricing
              </h2>
              <div className="space-y-4">
                {pricing.map((item, index) => (
                  <div
                    key={item.service}
                    className={`flex items-center justify-between ${
                      index < pricing.length - 1 ? 'border-b border-gray-100 pb-4' : ''
                    }`}
                  >
                    <span className="text-gray-text">{item.service}</span>
                    <span className="font-semibold text-primary">{item.price}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary w-full text-center">
                  Get a Quote
                </Link>
              </div>
            </div>

            {/* Service Area */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-charcoal">
                Service Coverage
              </h2>
              <p className="mb-6 text-gray-text">
                We service all AWTS units within a {siteConfig.serviceRadius}{" "}
                radius of {siteConfig.location}, including:
              </p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {siteConfig.coverageAreas.map((area) => (
                  <div
                    key={area}
                    className="rounded-lg bg-white px-4 py-2 text-center text-sm shadow-sm"
                  >
                    {area}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-gray-text">
                Don&apos;t see your area listed? Contact us to confirm coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <h2 className="section-heading text-center">
            Why Choose {siteConfig.name}?
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start rounded-xl bg-white shadow-lg p-6"
              >
                <svg
                  className="mr-4 h-6 w-6 flex-shrink-0 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-charcoal font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container-custom">
          <h2 className="section-heading text-center">Brands We Service</h2>
          <p className="section-subheading mx-auto max-w-2xl text-center">
            We service all major AWTS brands. If your system isn&apos;t listed
            below, contact us to confirm compatibility.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:mx-auto lg:max-w-4xl">
            {siteConfig.supportedBrands.map((brand) => (
              <div
                key={brand}
                className="rounded-xl bg-white px-6 py-8 text-center shadow-sm"
              >
                <span className="text-lg font-semibold text-charcoal">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-4 text-3xl font-bold">Book Your Service Today</h2>
          <p className="mb-8 text-primary-100">
            Contact us to schedule your next AWTS service or get a free quote.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 font-semibold text-primary transition-all duration-200 hover:bg-gray-100"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
