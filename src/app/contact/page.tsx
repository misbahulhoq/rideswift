import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "./contact-form";

export default function ContactPage() {
  return (
    <div>
      {/* Header Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-3 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Get in Touch
          </h1>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg md:text-xl">
            We'd love to hear from you. Whether you have a question, feedback,
            or need support, our team is ready to help.
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto grid grid-cols-1 gap-12 px-4 lg:grid-cols-3">
          {/* Contact Information */}
          <div className="space-y-6 lg:col-span-1">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Mail className="text-primary h-6 w-6" />
                  <CardTitle>Email Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">support@rideswift.com</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Phone className="text-primary h-6 w-6" />
                  <CardTitle>Call Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">(+880) 123 456 7890</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                  <MapPin className="text-primary h-6 w-6" />
                  <CardTitle>Visit Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    123 RideSwift Avenue, Savar, Dhaka, Bangladesh
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
