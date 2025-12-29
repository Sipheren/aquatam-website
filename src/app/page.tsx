import Link from "next/link";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { siteConfig } from "@/content/siteConfig";
import { services, serviceFeatures } from "@/content/services";
import { team } from "@/content/team";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Services Preview */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            <div className="text-center">
              <h2 className="section-heading">Our Services</h2>
              <p className="section-subheading mx-auto max-w-2xl">
                Expert AWTS maintenance and installation services for residential
                and commercial properties across regional NSW.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/services" className="btn-primary">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
              <h2 className="section-heading">
                Why Choose {siteConfig.name}?
              </h2>
              <p className="section-subheading">
                With over {new Date().getFullYear() - siteConfig.foundedYear}{" "}
                years of experience, we provide reliable, professional AWTS
                services you can trust.
              </p>
              <ul className="space-y-4">
                {serviceFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
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
                    <span className="text-gray-text">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-2xl font-bold text-charcoal text-center">
                Brands We Service
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:mx-auto lg:max-w-4xl">
                {siteConfig.supportedBrands.map((brand) => (
                  <div
                    key={brand}
                    className="rounded-xl bg-gray-50 border border-gray-200 px-6 py-8 text-center shadow-sm transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-white hover:border-primary cursor-pointer"
                  >
                    <span className="text-lg font-semibold">
                      {brand}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24">
        <div className="container-custom">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold text-charcoal mb-6">Meet Our Team</h2>
                <p className="text-gray-text mb-8">
                  Aquatam has been a locally run and owned business since 1998. Ben has worked in the field of Aerated Wastewater Treatment Systems (AWTS) since 2004, providing expert service and installations.
                </p>
                <div className="space-y-6">
                  {team.map((member) => (
                    <div key={member.name} className="border-l-4 border-primary pl-4">
                      <h3 className="text-xl font-bold text-charcoal">{member.name}</h3>
                      <p className="text-sm text-primary mb-2">{member.role}</p>
                      <div className="space-y-1 text-sm">
                        <div>
                          <span className="font-semibold">Email:</span>{" "}
                          <a href={`mailto:${member.email}`} className="text-primary hover:underline">
                            {member.email}
                          </a>
                        </div>
                        <div>
                          <span className="font-semibold">Phone:</span>{" "}
                          <a href={`tel:${member.phone.replace(/\s/g, "")}`} className="text-primary hover:underline">
                            {member.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/pete-ben.jpg"
                  alt="Ben Glover - Aquatam Team"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 text-white">
        <div className="container-custom text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mb-8 text-lg text-primary-100">
            Contact us today for a free quote on servicing or new installations.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 font-semibold text-primary transition-all duration-200 hover:bg-gray-100"
            >
              Contact Us
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
