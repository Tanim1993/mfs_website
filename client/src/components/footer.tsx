import { Link } from "wouter";
import { Smartphone, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { footerServices, footerSupport, footerLegal } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white" data-testid="footer">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-bangladesh-green rounded-lg flex items-center justify-center">
                <Smartphone className="text-white h-5 w-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold">PayFlow</h3>
                <p className="text-gray-400 text-sm">MFS Bangladesh</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6">
              Bangladesh's trusted mobile financial service provider, serving millions with secure,
              convenient, and affordable banking solutions.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-bangladesh-green transition-colors"
                data-testid="social-facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-bangladesh-green transition-colors"
                data-testid="social-twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-bangladesh-green transition-colors"
                data-testid="social-instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-bangladesh-green transition-colors"
                data-testid="social-youtube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerServices.map((service, index) => (
                <li key={index}>
                  <Link href="/services">
                    <span className="text-gray-300 hover:text-bangladesh-green transition-colors cursor-pointer text-sm">
                      {service}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {footerSupport.map((item, index) => (
                <li key={index}>
                  <Link href="/support">
                    <span className="text-gray-300 hover:text-bangladesh-green transition-colors cursor-pointer text-sm">
                      {item}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <i className="fas fa-phone text-bangladesh-green"></i>
                <span className="text-gray-300 text-sm">16247 (24/7)</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-envelope text-bangladesh-green"></i>
                <span className="text-gray-300 text-sm">support@payflow.com.bd</span>
              </div>
              <div className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt text-bangladesh-green mt-1"></i>
                <span className="text-gray-300 text-sm">
                  PayFlow Tower, Gulshan-2<br />
                  Dhaka-1212, Bangladesh
                </span>
              </div>
            </div>

            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLegal.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-bangladesh-green transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 PayFlow Limited. All rights reserved. Licensed by Bangladesh Bank.
            </div>

            {/* Language Toggle */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-gray-800 rounded-full p-1">
                <button className="px-3 py-1 rounded-full bg-bangladesh-green text-white text-sm">
                  EN
                </button>
                <button className="px-3 py-1 rounded-full text-gray-400 text-sm hover:bg-gray-700 transition-colors">
                  বাংলা
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
