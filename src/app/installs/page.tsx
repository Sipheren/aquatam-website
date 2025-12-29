import type { Metadata } from "next";
import Link from "next/link";
import Gallery from "@/components/Gallery";
import { siteConfig } from "@/content/siteConfig";
import { galleryImages } from "@/content/gallery";

export const metadata: Metadata = {
  title: "Installations",
  description:
    "View our AWTS installation projects. We install Taylex Plastic and Concrete tanks across regional NSW.",
};

export default function InstallsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-12 lg:py-16">
        <div className="container-custom">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold sm:text-5xl text-charcoal">
                Our Installations
              </h1>
              <p className="text-lg text-gray-text">
                Professional AWTS installations using quality Taylex systems.
                Free quotes available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Info */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="section-heading">New Tank Installations</h2>
                <p className="mb-6 text-gray-text">
                  We offer free quotes on installations of new AWTS tanks. Our
                  team uses quality Taylex systems, choosing between plastic and
                  concrete tanks depending on your location and specific
                  requirements.
                </p>
                <div className="space-y-4">
                <div className="flex items-start">
                  <svg
                    className="mr-3 h-6 w-6 flex-shrink-0 text-primary"
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
                  <div>
                    <h3 className="font-semibold text-charcoal">
                      Taylex Plastic Tanks
                    </h3>
                    <p className="text-sm text-gray-text">
                      Lightweight, durable, and suitable for most locations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    className="mr-3 h-6 w-6 flex-shrink-0 text-primary"
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
                  <div>
                    <h3 className="font-semibold text-charcoal">
                      Taylex Concrete Tanks
                    </h3>
                    <p className="text-sm text-gray-text">
                      Heavy-duty option for specific site requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg
                    className="mr-3 h-6 w-6 flex-shrink-0 text-primary"
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
                  <div>
                    <h3 className="font-semibold text-charcoal">
                      Free Site Assessment
                    </h3>
                    <p className="text-sm text-gray-text">
                      We assess your property to recommend the best solution.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Get a Free Quote
                </Link>
              </div>
            </div>

            <div className="rounded-2xl bg-gray-50 p-8">
              <h3 className="mb-6 text-xl font-bold text-charcoal">
                Installation Process
              </h3>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    1
                  </span>
                  <div>
                    <h4 className="font-semibold text-charcoal">
                      Free Consultation
                    </h4>
                    <p className="text-sm text-gray-text">
                      Contact us to discuss your requirements.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    2
                  </span>
                  <div>
                    <h4 className="font-semibold text-charcoal">
                      Site Assessment
                    </h4>
                    <p className="text-sm text-gray-text">
                      We visit your property to assess the installation site.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    3
                  </span>
                  <div>
                    <h4 className="font-semibold text-charcoal">
                      Detailed Quote
                    </h4>
                    <p className="text-sm text-gray-text">
                      Receive a comprehensive quote for your approval.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    4
                  </span>
                  <div>
                    <h4 className="font-semibold text-charcoal">
                      Professional Installation
                    </h4>
                    <p className="text-sm text-gray-text">
                      Our team completes the installation to the highest
                      standards.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container-custom">
          <h2 className="section-heading text-center">Project Gallery</h2>
          <p className="section-subheading mx-auto max-w-2xl text-center">
            View examples of our installation work across regional NSW.
          </p>
          <div className="mt-12">
            <Gallery images={galleryImages} />
          </div>
          <p className="mt-8 text-center text-sm text-gray-text">
            Images will be added as projects are completed. Contact us to see
            more examples.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready for a New System?</h2>
          <p className="mb-8 text-primary-100">
            Contact us for a free quote on your AWTS installation.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 font-semibold text-primary transition-all duration-200 hover:bg-gray-100"
            >
              Request a Quote
            </Link>
            <a
              href={`tel:${siteConfig.phone.ben.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-200 hover:bg-white hover:text-primary"
            >
              Call {siteConfig.phone.ben}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
