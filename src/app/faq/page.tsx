import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FAQ from "@/components/FAQ";
import { siteConfig } from "@/content/siteConfig";
import { faqs } from "@/content/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about AWTS servicing, maintenance, and installations in the Tamworth region.",
};

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-12 lg:py-16">
        <div className="container-custom">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <Image
                src="/images/logo-square.png"
                alt="Aquatam Waste Water Logo"
                width={100}
                height={100}
                className="mx-auto h-24 w-auto mb-6"
              />
              <h1 className="mb-4 text-4xl font-bold sm:text-5xl text-charcoal">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-gray-text">
                Find answers to common questions about AWTS servicing,
                maintenance, and installations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <FAQ faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="section-heading">Still Have Questions?</h2>
            <p className="section-subheading">
              Can&apos;t find the answer you&apos;re looking for? Get in touch
              with our team and we&apos;ll be happy to help.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <a
                href={`tel:${siteConfig.phone.ben.replace(/\s/g, "")}`}
                className="btn-secondary"
              >
                Call {siteConfig.phone.ben}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <h2 className="section-heading text-center">Quick Facts</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-primary/5 p-6 text-center">
              <div className="mb-2 text-4xl font-bold text-primary">
                {new Date().getFullYear() - siteConfig.foundedYear}+
              </div>
              <p className="text-gray-text">Years Experience</p>
            </div>
            <div className="rounded-xl bg-primary/5 p-6 text-center">
              <div className="mb-2 text-4xl font-bold text-primary">
                {siteConfig.serviceRadius}
              </div>
              <p className="text-gray-text">Service Radius</p>
            </div>
            <div className="rounded-xl bg-primary/5 p-6 text-center">
              <div className="mb-2 text-4xl font-bold text-primary">90</div>
              <p className="text-gray-text">Day Service Intervals</p>
            </div>
            <div className="rounded-xl bg-primary/5 p-6 text-center">
              <div className="mb-2 text-4xl font-bold text-primary">
                {siteConfig.supportedBrands.length}+
              </div>
              <p className="text-gray-text">Brands Serviced</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
