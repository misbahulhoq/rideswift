export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Header Section */}
      <section className="bg-muted py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mt-4 text-lg">
            Last Updated: August 25, 2025
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-4xl space-y-8 px-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">1. Introduction</h2>
            <p className="text-muted-foreground">
              Welcome to RideSwift. We are committed to protecting your personal
              information and your right to privacy. This Privacy Policy
              explains what information we collect, how we use it, and what
              rights you have in relation to it. This policy applies to all
              users of our services, including Riders and Drivers.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold">2. Information We Collect</h2>
            <p className="text-muted-foreground">
              We collect personal information that you provide to us,
              information collected automatically, and information from
              third-party sources.
            </p>
            <ul className="text-muted-foreground list-inside list-disc space-y-1 pl-4">
              <li>
                <strong>Information You Provide:</strong> This includes your
                name, email, phone number, payment information, and government
                ID (for drivers) when you register for an account.
              </li>
              <li>
                <strong>Information Collected Automatically:</strong> We collect
                location data, device information (IP address, operating
                system), and usage information when you use our app.
              </li>
              <li>
                <strong>Information from Third Parties:</strong> For drivers, we
                may receive information from third-party services for background
                checks.
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold">
              3. How We Use Your Information
            </h2>
            <p className="text-muted-foreground">
              We use your information for various purposes, including:
            </p>
            <ul className="text-muted-foreground list-inside list-disc space-y-1 pl-4">
              <li>
                <strong>To Provide Our Services:</strong> To connect Riders with
                Drivers, facilitate payments, and calculate fares.
              </li>
              <li>
                <strong>For Safety and Security:</strong> To verify accounts,
                prevent fraudulent activity, and use features like the SOS
                button.
              </li>
              <li>
                <strong>For Customer Support:</strong> To assist you with your
                questions and resolve issues.
              </li>
              <li>
                <strong>For Research and Development:</strong> To improve and
                enhance the safety, security, and features of our app.
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold">
              4. How We Share Your Information
            </h2>
            <p className="text-muted-foreground">
              We may share your information with other users (e.g., your name
              and vehicle model are shared between a Rider and Driver), with our
              third-party service providers (like payment processors), and for
              legal reasons or in the event of a dispute.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold">5. Data Security</h2>
            <p className="text-muted-foreground">
              We implement a variety of security measures to maintain the safety
              of your personal information. However, no electronic transmission
              over the Internet can be guaranteed to be 100% secure.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold">6. Your Rights and Choices</h2>
            <p className="text-muted-foreground">
              You have the right to access, correct, or delete your personal
              data. You can manage your information through your in-app profile
              settings or by contacting our support team.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold">
              7. Changes to This Privacy Policy
            </h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the "Last Updated" date.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold">8. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions or concerns about this Privacy Policy,
              please contact us at:
              <br />
              <strong>Email:</strong> privacy@rideswift.com
              <br />
              <strong>Address:</strong> 123 RideSwift Avenue, Savar, Dhaka,
              Bangladesh
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
