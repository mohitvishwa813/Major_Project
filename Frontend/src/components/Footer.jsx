import React from "react";
import { Facebook, Instagram, Twitter, Linkedin, Mail } from "lucide-react";

const FooterLink = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-white transition-colors duration-200"
  >
    {children}
  </a>
);

const SocialIcon = ({ Icon, href }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-white transition-colors duration-200"
  >
    <Icon className="w-5 h-5" />
  </a>
);

const Footer = () => {
  const quickLinks = [
    { name: "About Us" },
    { name: "Services" },
    { name: "Blog" },
    { name: "Contact" },
  ];

  const services = [
    { name: "Weddings", href: "/service-category?category=Wedding" },
    { name: "Birthday Parties", href: "/service-category?category=Birthday" },
    { name: "Engagement", href: "/service-category?category=Engagement" },
    {
      name: "Special Occasions",
      href: "/service-category?category=At_Your_Place",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start gap-8">
          {/* Brand Section */}
          <div className="flex-1 min-w-[200px]">
            <h2 className="text-xl font-bold mb-2">EventEase</h2>
            <p className="text-sm text-gray-300">
              Your one-stop solution for memorable events
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-1 min-w-[150px]">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <FooterLink href={link.href}>{link.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex-1 min-w-[150px]">
            <h3 className="text-lg font-semibold mb-2">Services</h3>
            <ul className="space-y-1">
              {services.map((service) => (
                <li key={service.name}>
                  <FooterLink href={service.href}>{service.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
            <div className="flex space-x-4 mb-2">
              <SocialIcon Icon={Facebook} />
              <SocialIcon Icon={Instagram} />
              <SocialIcon Icon={Twitter} />
              <SocialIcon Icon={Linkedin} />
              <SocialIcon Icon={Mail} />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} EventEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
