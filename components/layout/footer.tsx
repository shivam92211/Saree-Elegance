import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-saree-light mt-16">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-playfair text-2xl font-bold text-saree-primary">Mrunali</span>
              <span className="font-playfair text-2xl font-light text-saree-dark">Collectins</span>
            </Link>
            <p className="text-sm text-gray-600 max-w-xs">
              Discover the timeless elegance of traditional Indian sarees, handcrafted with love and
              showcasing exquisite craftsmanship.
            </p>
            <div className="flex space-x-4">
              {/* <a
                href="#"
                className="text-gray-600 hover:text-saree-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a> */}
              <a
                href="https://www.instagram.com/mrunali.in"
                className="text-gray-600 hover:text-saree-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              {/* <a
                href="#"
                className="text-gray-600 hover:text-saree-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-lg mb-4 text-saree-dark">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-saree-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-600 hover:text-saree-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-saree-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-saree-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-medium text-lg mb-4 text-saree-dark">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-saree-primary" />
                <span className="text-gray-600">
                302 Mukund smruti, behind orange hospital,<br />
                opposite balahabher takrey ground 401105,
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-saree-primary" />
                <a href="tel:+918779520446" className="text-gray-600 hover:text-saree-primary transition-colors">
                  +91 87795 20446
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-saree-primary" />
                <a href="mailto:mrunaligurav939@gmail.com" className="text-gray-600 hover:text-saree-primary transition-colors">
                mrunaligurav939@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200">
          <p className="text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Mrunali Collections. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
