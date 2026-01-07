import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Building2, Calculator, Download, ChevronRight } from "lucide-react"

export default function HotelSolutionPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-primary py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
                Hotel HxS Solution
              </h1>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                Transform hotels into functional healthcare facilities during medical surge emergencies with our proven
                conversion methodology
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="mb-12 grid gap-8 lg:grid-cols-2">
                <div>
                  <h2 className="mb-4 text-2xl font-bold">Why Hotels?</h2>
                  <p className="mb-6 text-muted-foreground leading-relaxed">
                    Hotels provide an ideal foundation for emergency healthcare expansion due to their existing
                    infrastructure, room layouts, and operational systems that can be quickly adapted for medical use.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Existing Room Infrastructure</p>
                        <p className="text-sm text-muted-foreground">
                          Private rooms with bathrooms, beds, and basic amenities
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Rapid Deployment</p>
                        <p className="text-sm text-muted-foreground">
                          Can be converted in 48-72 hours with proper planning
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Scalable Capacity</p>
                        <p className="text-sm text-muted-foreground">
                          Can accommodate 50-500+ patients depending on hotel size
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <ChevronRight className="h-3 w-3 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Support Spaces</p>
                        <p className="text-sm text-muted-foreground">
                          Lobbies, conference rooms, and kitchens for clinical operations
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Implementation Guide</CardTitle>
                    <CardDescription>Comprehensive documentation for hotel-to-hospital conversions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="aspect-video w-full rounded-lg bg-muted flex items-center justify-center">
                      <Building2 className="h-16 w-16 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Access detailed guides covering site selection, infrastructure requirements, equipment lists,
                      staffing models, and operational procedures.
                    </p>
                    <Button className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Download Implementation Guide
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div id="estimator" className="scroll-mt-20">
                <div className="mb-8 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                    <Calculator className="h-8 w-8 text-accent" />
                  </div>
                  <h2 className="mb-4 text-3xl font-bold">Hotel HxS Cost Estimator</h2>
                  <p className="mx-auto max-w-2xl text-muted-foreground">
                    Calculate estimated costs for converting a hotel into a healthcare facility, including construction,
                    equipment, staffing, and IT infrastructure
                  </p>
                </div>

                <Card className="mx-auto max-w-4xl">
                  <CardHeader>
                    <CardTitle>Facility Information</CardTitle>
                    <CardDescription>
                      Enter basic details about your proposed HxS facility to generate cost estimates
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="facility-name">Facility Name</Label>
                          <Input id="facility-name" placeholder="Enter hotel name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="location">Location</Label>
                          <Input id="location" placeholder="City, State" />
                        </div>
                      </div>

                      <div className="grid gap-6 md:grid-cols-3">
                        <div className="space-y-2">
                          <Label htmlFor="total-rooms">Total Rooms Available</Label>
                          <Input id="total-rooms" type="number" placeholder="200" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="patient-rooms">Rooms for Patients</Label>
                          <Input id="patient-rooms" type="number" placeholder="150" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="operational-days">Days of Operation</Label>
                          <Input id="operational-days" type="number" placeholder="30" />
                        </div>
                      </div>

                      <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="acuity-level">Patient Acuity Level</Label>
                          <select
                            id="acuity-level"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          >
                            <option>Low Acuity (minimal care)</option>
                            <option>Medium Acuity (moderate care)</option>
                            <option>High Acuity (intensive care)</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="construction-level">Construction Requirements</Label>
                          <select
                            id="construction-level"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          >
                            <option>Minimal (basic setup)</option>
                            <option>Moderate (some modifications)</option>
                            <option>Extensive (major renovations)</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex gap-4 pt-4">
                        <Button type="submit" className="flex-1">
                          Generate Cost Estimate
                        </Button>
                        <Button type="button" variant="outline">
                          Reset
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>

                <Card className="mx-auto mt-6 max-w-4xl border-muted-foreground/20 bg-muted/30">
                  <CardHeader>
                    <CardTitle className="text-lg">Estimated Cost Breakdown</CardTitle>
                    <CardDescription>Complete the form above to see detailed cost estimates</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-border pb-2">
                        <span className="font-medium">Construction & Modifications</span>
                        <span className="text-muted-foreground">--</span>
                      </div>
                      <div className="flex items-center justify-between border-b border-border pb-2">
                        <span className="font-medium">Medical Equipment</span>
                        <span className="text-muted-foreground">--</span>
                      </div>
                      <div className="flex items-center justify-between border-b border-border pb-2">
                        <span className="font-medium">IT Infrastructure</span>
                        <span className="text-muted-foreground">--</span>
                      </div>
                      <div className="flex items-center justify-between border-b border-border pb-2">
                        <span className="font-medium">Staffing (Clinical & Non-Clinical)</span>
                        <span className="text-muted-foreground">--</span>
                      </div>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-lg font-bold">Total Estimated Cost</span>
                        <span className="text-lg font-bold text-primary">--</span>
                      </div>
                    </div>
                    <Button variant="outline" className="mt-6 w-full bg-transparent" disabled>
                      <Download className="mr-2 h-4 w-4" />
                      Download Full Cost Report
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-16 grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Case Studies</CardTitle>
                    <CardDescription>Learn from successful hotel-to-hospital conversions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" asChild className="w-full bg-transparent">
                      <Link href="/blog">View Case Studies</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Need Expert Guidance?</CardTitle>
                    <CardDescription>Our team can help with site assessments and planning</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full">
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
