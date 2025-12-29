import Link from "next/link";
import { siteConfig } from "@/content/siteConfig";
import { team } from "@/content/team";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Installs", href: "/installs" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container-custom py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-bold">{siteConfig.name}</h3>
            <p className="text-sm text-gray-300">
              Locally owned and operated since {siteConfig.foundedYear}. We
              service all Aerated Wastewater Treatment Systems within a{" "}
              {siteConfig.serviceRadius} radius of {siteConfig.location}.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Contact Us</h3>
            <ul className="space-y-3">
              {team.map((member) => (
                <li key={member.name} className="text-sm">
                  <p className="font-medium text-white">{member.name}</p>
                  <a
                    href={`tel:${member.phone.replace(/\s/g, "")}`}
                    className="text-gray-300 hover:text-white"
                  >
                    {member.phone}
                  </a>
                  <br />
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-300 hover:text-white"
                  >
                    {member.email}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Service Areas</h3>
            <p className="text-sm text-gray-300">
              {siteConfig.coverageAreas.slice(0, 8).join(", ")} and surrounding
              areas.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
