import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    bio: "Alex is the visionary behind RideSwift, driven by a passion for creating smarter, more efficient urban mobility solutions.",
  },
  {
    name: "Maria Garcia",
    role: "Chief Technology Officer",
    avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    bio: "Maria leads our technology team, building the robust and scalable platform that powers millions of rides.",
  },
  {
    name: "David Chen",
    role: "Head of Operations",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026707d",
    bio: "David ensures our operations run smoothly, focusing on driver satisfaction and rider safety.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Section 1: Hero */}
      <section className="relative flex h-[50vh] items-center justify-center text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            About RideSwift
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg md:text-xl">
            We&apos;re revolutionizing urban transportation by connecting riders
            and drivers through technology.
          </p>
        </div>
      </section>

      {/* Section 2: Mission & Vision */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:px-10 md:grid-cols-2 md:gap-16">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Target className="text-primary h-10 w-10" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To provide safe, reliable, and affordable transportation for
                  everyone, everywhere. We are committed to leveraging
                  technology to create a seamless mobility experience that
                  benefits both our riders and driver partners.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Eye className="text-primary h-10 w-10" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To create a future where transportation is sustainable,
                  accessible, and integrated into the fabric of our cities. We
                  envision a world with less congestion, cleaner air, and more
                  connected communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 3: Company Background / Our Story */}
      <section className="bg-muted py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Our Story
            </h2>
            <p className="text-muted-foreground mx-auto max-w-[600px] md:text-xl lg:text-base xl:text-xl">
              Founded in 2022, RideSwift started with a simple idea: what if
              getting a ride could be as easy as tapping a button? Frustrated by
              the inefficiencies of traditional transport, our founders set out
              to build a platform that was not only convenient but also
              empowered local drivers with flexible earning opportunities.
              Today, we&apos;re proud to serve thousands of users across the
              city, and we&apos;re just getting started.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Meet the Team */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="bg-muted inline-block rounded-lg px-3 py-1 text-sm">
                Our Team
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                The People Behind the Platform
              </h2>
              <p className="text-muted-foreground max-w-[900px] md:text-xl lg:text-base xl:text-xl">
                We&apos;re a diverse team of innovators, thinkers, and doers,
                united by a common goal to make transportation better for
                everyone.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center text-center"
              >
                <Avatar className="mb-4 h-24 w-24">
                  <AvatarImage src={member.avatar} />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary text-sm">{member.role}</p>
                <p className="text-muted-foreground mt-2 text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
