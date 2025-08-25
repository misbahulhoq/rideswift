export default function TermsOfServicePage() {
  return (
    <div className="bg-background text-foreground">
      {/* Header Section */}
      <section className="bg-muted py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            Terms of Service
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
            <h2 className="text-2xl font-bold">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing or using the RideSwift platform
              (&quot;Service&quot;), you agree to be bound by these Terms of
              Service (&quot;Terms&quot;). If you disagree with any part of the
              terms, then you may not access the Service. These Terms apply to
              all visitors, users, and others who access or use the Service,
              including Riders and Drivers.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold">2. The Service</h2>
            <p className="text-muted-foreground">
              RideSwift provides a technology platform that connects users
              seeking transportation (Riders) with independent third-party
              transportation providers (Drivers). You acknowledge that RideSwift
              is not a transportation carrier and does not provide
              transportation services. All transportation services are provided
              by independent Drivers, who are not employees of RideSwift.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold">3. User Accounts</h2>
            <p className="text-muted-foreground">
              To use most aspects of the Service, you must register for and
              maintain an active personal user account. You must be at least 18
              years of age to obtain an account. You are responsible for all
              activity that occurs under your account, and you agree to maintain
              the security and secrecy of your account username and password at
              all times.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold">4. User Conduct</h2>
            <p className="text-muted-foreground">
              You agree not to use the Service to cause nuisance, annoyance,
              inconvenience, or property damage, whether to a Driver, other
              third-party provider, or any other party. In certain instances,
              you may be asked to provide proof of identity to access or use the
              Services, and you agree that you may be denied access to or use of
              the Services if you refuse to provide proof of identity.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold">5. Payment</h2>
            <p className="text-muted-foreground">
              You understand that use of the Services may result in charges to
              you for the services you receive from a Driver
              (&quot;Charges&quot;). Charges will be inclusive of applicable
              taxes where required by law. All Charges are due immediately and
              payment will be facilitated by RideSwift using the preferred
              payment method designated in your account.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold">
              6. Disclaimers; Limitation of Liability
            </h2>
            <p className="text-muted-foreground">
              THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS
              AVAILABLE.&quot; RIDESWIFT DISCLAIMS ALL REPRESENTATIONS AND
              WARRANTIES, EXPRESS, IMPLIED, OR STATUTORY. IN NO EVENT SHALL
              RIDESWIFT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
              EXEMPLARY, PUNITIVE, OR CONSEQUENTIAL DAMAGES, INCLUDING LOST
              PROFITS, LOST DATA, PERSONAL INJURY, OR PROPERTY DAMAGE RELATED
              TO, IN CONNECTION WITH, OR OTHERWISE RESULTING FROM ANY USE OF THE
              SERVICES.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold">7. Termination</h2>
            <p className="text-muted-foreground">
              RideSwift may, in its sole discretion, terminate or suspend your
              account at any time for any reason, including, but not limited to,
              a breach of these Terms. You may terminate your agreement to these
              Terms by deleting your account and discontinuing your use of the
              Service.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold">8. Governing Law</h2>
            <p className="text-muted-foreground">
              These Terms shall be governed and construed in accordance with the
              laws of Bangladesh, without regard to its conflict of law
              provisions.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold">9. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about these Terms, please contact us at:
              <br />
              <strong>Email:</strong> legal@rideswift.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
