import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Tent, Truck, Zap, Clock } from "lucide-react"

export default function PortableSolutionsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-primary py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
                Portable HxS Solutions
              </h1>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                Mobile and temporary healthcare infrastructure for rapid deployment in diverse emergency scenarios
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-2xl font-bold">Flexible Healthcare Solutions</h2>
                <p className="mx-auto max-w-2xl text-muted-foreground">
                  When permanent structures aren't available, portable HxS solutions provide critical healthcare
                  capacity through mobile units, field hospitals, and temporary structures
                </p>
              </div>

              <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Tent className="h-6 w-6 text-primary" />
                    </div>
                    <Badge className="mb-2 w-fit">Field Hospitals</Badge>
                    <CardTitle>Medical Tents & Structures</CardTitle>
                    <CardDescription>Temporary tent-based medical facilities for outdoor deployment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Climate-controlled environments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Modular configurations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Rapid setup (4-8 hours)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>50-200 patient capacity</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Truck className="h-6 w-6 text-primary" />
                    </div>
                    <Badge className="mb-2 w-fit">Mobile Units</Badge>
                    <CardTitle>Medical Response Vehicles</CardTitle>
                    <CardDescription>Self-contained mobile healthcare units for immediate deployment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Built-in medical equipment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Independent power systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Drive-to-site capability</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>5-20 patient capacity per unit</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <Badge className="mb-2 w-fit">Container Solutions</Badge>
                    <CardTitle>Modular Medical Containers</CardTitle>
                    <CardDescription>ISO container-based healthcare modules with full functionality</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Fully equipped interior</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Stackable configuration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Transportable by truck/rail/ship</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>10-30 patients per container</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mb-12">
                <h2 className="mb-6 text-2xl font-bold">Deployment Considerations</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <div className="mb-2 flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        <CardTitle>Setup Timeline</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="mb-1 font-medium">Immediate (0-4 hours)</p>
                        <p className="text-sm text-muted-foreground">
                          Mobile medical vehicles, pre-equipped response trailers
                        </p>
                      </div>
                      <div>
                        <p className="mb-1 font-medium">Rapid (4-24 hours)</p>
                        <p className="text-sm text-muted-foreground">
                          Medical tents, modular container units, basic field hospitals
                        </p>
                      </div>
                      <div>
                        <p className="mb-1 font-medium">Standard (1-3 days)</p>
                        <p className="text-sm text-muted-foreground">
                          Complex field hospitals, interconnected container systems
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Site Requirements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="font-semibold">• Space:</span>
                          <span>Minimum 10,000 sq ft for 50-patient facility</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-semibold">• Access:</span>
                          <span>Vehicle access for delivery and emergency transport</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-semibold">• Utilities:</span>
                          <span>Power connection or generator capacity, water access</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-semibold">• Terrain:</span>
                          <span>Level ground, adequate drainage</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-semibold">• Security:</span>
                          <span>Perimeter control and staff safety measures</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Card className="border-accent bg-accent/5">
                <CardHeader>
                  <CardTitle>When to Use Portable Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <p className="mb-3 font-medium">Ideal Scenarios:</p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-accent">✓</span>
                          <span>No suitable permanent structures available</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">✓</span>
                          <span>Need for rapid deployment (hours vs. days)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">✓</span>
                          <span>Temporary surge expected (days to weeks)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">✓</span>
                          <span>Remote or austere environments</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent">✓</span>
                          <span>Testing/training for emergency preparedness</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="mb-3 font-medium">Consider Hotel HxS Instead:</p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-muted-foreground">→</span>
                          <span>Extended operations (weeks to months)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-muted-foreground">→</span>
                          <span>Large patient capacity needed (200+)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-muted-foreground">→</span>
                          <span>Urban setting with available hotels</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-muted-foreground">→</span>
                          <span>Staff comfort and sustainability priorities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-muted-foreground">→</span>
                          <span>Complex care requiring infrastructure</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-12 grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Equipment Lists & Specs</CardTitle>
                    <CardDescription>Detailed specifications for portable medical infrastructure</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full bg-transparent">
                      Download Equipment Guide
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Vendor Resources</CardTitle>
                    <CardDescription>Directory of suppliers for portable healthcare solutions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" asChild className="w-full bg-transparent">
                      <Link href="/additional-resources">View Vendor Directory</Link>
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
