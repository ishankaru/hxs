import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Building2, Users, BookOpen, Calculator, Shield, Zap, Video, ChevronRight } from "lucide-react"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-primary py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <Badge className="mb-6 bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30">
                Emergency Healthcare Infrastructure
              </Badge>
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl text-balance">
                Hospital Expansion Solution for Medical Surge Emergencies
              </h1>
              <p className="mb-8 text-lg text-primary-foreground/90 leading-relaxed text-pretty">
                Comprehensive resources, tools, and training materials for converting hotels into functional healthcare
                facilities during emergency medical surges. Empowering emergency management professionals and healthcare
                workers.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/deployment-playbook">
                    View Deployment Playbook <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  <Link href="/hotel-solution#estimator">
                    <Calculator className="mr-2 h-4 w-4" />
                    Cost Estimator Tool
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Complete HxS Implementation Resources
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
                Everything you need to successfully deploy a Hospital Expansion Solution, from planning to execution
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Deployment Playbook</CardTitle>
                  <CardDescription>
                    Step-by-step guidance for implementing HxS solutions in emergency situations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" asChild className="p-0">
                    <Link href="/deployment-playbook">
                      Explore Playbook <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Video className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Curriculum Materials</CardTitle>
                  <CardDescription>
                    Educational courses, training videos, and self-paced learning modules
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" asChild className="p-0">
                    <Link href="/curriculum">
                      View Courses <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Building2 className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Hotel HxS Solution</CardTitle>
                  <CardDescription>
                    Convert hotels into emergency medical facilities with our comprehensive guide
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" asChild className="p-0">
                    <Link href="/hotel-solution">
                      Learn More <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Zap className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>Portable Solutions</CardTitle>
                  <CardDescription>Mobile and temporary healthcare infrastructure for rapid deployment</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" asChild className="p-0">
                    <Link href="/portable-solutions">
                      Explore Options <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Calculator className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Cost Estimator Tool</CardTitle>
                  <CardDescription>
                    Interactive tool to calculate staffing, equipment, construction, and IT costs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" asChild className="p-0">
                    <Link href="/hotel-solution#estimator">
                      Use Estimator <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Member Resources</CardTitle>
                  <CardDescription>
                    Exclusive repository with advanced tools and documentation for registered members
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" asChild className="p-0">
                    <Link href="/member-resources">
                      Access Portal <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Audience Section */}
        <section className="bg-muted/50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Who We Serve</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Supporting the professionals who respond to healthcare emergencies
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Emergency Management</CardTitle>
                  <CardDescription>Professionals coordinating surge response and resource allocation</CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Healthcare Workers</CardTitle>
                  <CardDescription>Clinical and non-clinical staff preparing for emergency deployments</CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Government Officials</CardTitle>
                  <CardDescription>
                    Policy makers and administrators planning emergency healthcare capacity
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Building2 className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Facility Managers</CardTitle>
                  <CardDescription>Hotel and venue operators preparing for healthcare conversions</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Latest Updates */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 flex items-end justify-between">
              <div>
                <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">Latest Updates</h2>
                <p className="text-lg text-muted-foreground">
                  Recent news, resources, and best practices from the HxS community
                </p>
              </div>
              <Button variant="outline" asChild className="hidden md:inline-flex bg-transparent">
                <Link href="/blog">View All Posts</Link>
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <Badge className="mb-2 w-fit">New Resource</Badge>
                  <CardTitle className="text-xl">Updated Cost Estimator Now Available</CardTitle>
                  <CardDescription>March 1, 2026</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                    The enhanced cost estimator tool now includes updated inflation calculations, IT cost estimates, and
                    improved staffing ratios.
                  </p>
                  <Button variant="link" asChild className="p-0">
                    <Link href="/blog/updated-cost-estimator">
                      Read More <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <Badge className="mb-2 w-fit" variant="secondary">
                    Case Study
                  </Badge>
                  <CardTitle className="text-xl">Colorado HxS Deployment Success</CardTitle>
                  <CardDescription>February 15, 2026</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                    Learn how Team Colorado successfully converted a 200-room hotel into a functional medical facility
                    in 72 hours.
                  </p>
                  <Button variant="link" asChild className="p-0">
                    <Link href="/blog/colorado-deployment-success">
                      Read More <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="transition-shadow hover:shadow-lg">
                <CardHeader>
                  <Badge className="mb-2 w-fit" variant="secondary">
                    Training
                  </Badge>
                  <CardTitle className="text-xl">New Curriculum Modules Released</CardTitle>
                  <CardDescription>January 28, 2026</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                    Four new self-paced training modules covering infection control, patient flow, and equipment setup
                    are now available.
                  </p>
                  <Button variant="link" asChild className="p-0">
                    <Link href="/blog/new-curriculum-modules">
                      Read More <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center md:hidden">
              <Button variant="outline" asChild>
                <Link href="/blog">View All Posts</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl text-balance">
                Ready to Prepare for Medical Surge Emergencies?
              </h2>
              <p className="mb-8 text-lg text-primary-foreground/90 leading-relaxed text-pretty">
                Access our comprehensive resources, training materials, and cost estimation tools to ensure your
                community is prepared for healthcare capacity challenges.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/deployment-playbook">Get Started</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
