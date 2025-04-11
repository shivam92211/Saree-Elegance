import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function ContactPage() {
  return (
    <div className="container py-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Contact</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-playfair font-medium text-saree-dark text-center mb-6">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <p className="text-gray-600">
              We'd love to hear from you! Whether you have questions about our sarees, 
              need styling advice, or want to place a custom order, our team is here to help.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-3 text-saree-primary" />
                <div>
                  <h3 className="font-medium">Our Address</h3>
                  <p className="text-gray-600 mt-1">
                    201/B, Ramchandra Plaza, Kashi Nagar,<br />
                    Bhayander East, 400001
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-6 w-6 mr-3 text-saree-primary" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <a 
                    href="tel:+918779520446" 
                    className="text-gray-600 hover:text-saree-primary transition-colors mt-1 block"
                  >
                    +91 87795 20446
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-6 w-6 mr-3 text-saree-primary" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a 
                    href="mailto:contact@sareeelegance.com" 
                    className="text-gray-600 hover:text-saree-primary transition-colors mt-1 block"
                  >
                    mrunaligurav939@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <h3 className="font-medium mb-3">Business Hours</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>10:00 AM - 7:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-saree-light p-8 rounded-lg">
            <h2 className="text-xl font-medium text-saree-dark mb-6 text-center">
              Quick Connect
            </h2>
            
            <div className="space-y-6">
              <p className="text-center text-gray-600">
                For the fastest response, contact us directly on WhatsApp. We typically
                respond within 1-2 hours during business hours.
              </p>
              
              <div className="flex justify-center">
                <Button 
                  variant="saree"
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <a href="https://wa.me/918779520446" target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
              
              <p className="text-center text-sm text-gray-500">
                Or call us directly at{" "}
                <a 
                  href="tel:+918779520446" 
                  className="text-saree-primary hover:underline"
                >
                  +91 87795 20446
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
