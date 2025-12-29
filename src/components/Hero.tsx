import Link from "next/link";
import { siteConfig } from "@/content/siteConfig";

export default function Hero() {
  return (
    <section className="py-12 lg:py-16">
      <div className="container-custom">
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
              Professional AWTS Services Since {siteConfig.foundedYear}
            </h1>
            <p className="mb-8 text-lg text-gray-text sm:text-xl">
              Locally owned and operated, we provide expert maintenance and
              servicing of Aerated Wastewater Treatment Systems within a{" "}
              {siteConfig.serviceRadius} radius of {siteConfig.location}.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 font-semibold text-white transition-all duration-200 hover:bg-primary-500"
              >
                Get a Free Quote
              </Link>
              <a
                href={`tel:${siteConfig.phone.ben.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-4 font-semibold text-primary transition-all duration-200 hover:bg-primary hover:text-white"
              >
                <svg
                  className="mr-2 h-5 w-5"
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
                Call {siteConfig.phone.ben}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
