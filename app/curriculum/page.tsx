import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, FileText, Users, Clock, CheckCircle2 } from "lucide-react"

export default function CurriculumPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-primary py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
                HxS Curriculum Materials
              </h1>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                Self-paced training courses, educational videos, and comprehensive learning materials for emergency
                healthcare professionals
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="mb-12">
                <h2 className="mb-4 text-2xl font-bold">Featured Courses</h2>
                <p className="text-muted-foreground">
                  Interactive, self-paced courses covering essential HxS implementation topics
                </p>
              </div>

              <div className="mb-16 grid gap-6 md:grid-cols-2">
                <Card className="transition-shadow hover:shadow-lg">
                  <div className="relative aspect-video w-full overflow-hidden rounded-t-lg bg-muted">
                    <div className="flex h-full items-center justify-center">
                      <Play className="h-16 w-16 text-muted-foreground" />
                    </div>
                  </div>
                  <CardHeader>
                    <div className="mb-2 flex items-center gap-2">
                      <Badge>Essential</Badge>
                      <Badge variant="secondary">3.5 hours</Badge>
                    </div>
                    <CardTitle>HxS Fundamentals</CardTitle>
                    <CardDescription>
                      Comprehensive introduction to Hospital Expansion Solutions, covering basic concepts, deployment
                      strategies, and key considerations.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="mb-4 space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>Understanding emergency healthcare capacity challenges</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>Overview of HxS deployment models</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>Legal and regulatory considerations</span>
                      </li>
                    </ul>
                    <Button className="w-full">Start Course</Button>
                  </CardContent>
                </Card>

                <Card className="transition-shadow hover:shadow-lg">
                  <div className="relative aspect-video w-full overflow-hidden rounded-t-lg bg-muted">
                    <div className="flex h-full items-center justify-center">
                      <Play className="h-16 w-16 text-muted-foreground" />
                    </div>
                  </div>
                  <CardHeader>
                    <div className="mb-2 flex items-center gap-2">
                      <Badge>Essential</Badge>
                      <Badge variant="secondary">2 hours</Badge>
                    </div>
                    <CardTitle>Infection Control & Safety</CardTitle>
                    <CardDescription>
                      Critical protocols for maintaining infection control and patient safety in alternate care
                      facilities during medical surge events.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="mb-4 space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>Isolation zone setup and patient cohorting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>PPE protocols and staff safety procedures</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>Environmental cleaning and disinfection</span>
                      </li>
                    </ul>
                    <Button className="w-full">Start Course</Button>
                  </CardContent>
                </Card>

                <Card className="transition-shadow hover:shadow-lg">
                  <div className="relative aspect-video w-full overflow-hidden rounded-t-lg bg-muted">
                    <div className="flex h-full items-center justify-center">
                      <Play className="h-16 w-16 text-muted-foreground" />
                    </div>
                  </div>
                  <CardHeader>
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="secondary">Advanced</Badge>
                      <Badge variant="secondary">2.5 hours</Badge>
                    </div>
                    <CardTitle>Patient Flow Management</CardTitle>
                    <CardDescription>
                      Best practices for efficient patient intake, triage, treatment, and discharge in HxS facilities.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="mb-4 space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>Triage protocols and patient assessment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>Optimizing bed capacity and patient placement</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>Discharge planning and patient transitions</span>
                      </li>
                    </ul>
                    <Button className="w-full">Start Course</Button>
                  </CardContent>
                </Card>

                <Card className="transition-shadow hover:shadow-lg">
                  <div className="relative aspect-video w-full overflow-hidden rounded-t-lg bg-muted">
                    <div className="flex h-full items-center justify-center">
                      <Play className="h-16 w-16 text-muted-foreground" />
                    </div>
                  </div>
                  <CardHeader>
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="secondary">Advanced</Badge>
                      <Badge variant="secondary">3 hours</Badge>
                    </div>
                    <CardTitle>Equipment Setup & Operations</CardTitle>
                    <CardDescription>
                      Technical training on medical equipment installation, maintenance, and troubleshooting in HxS
                      environments.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="mb-4 space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>Medical gas systems and oxygen delivery</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>Portable medical equipment configuration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>IT systems and electronic health records</span>
                      </li>
                    </ul>
                    <Button className="w-full">Start Course</Button>
                  </CardContent>
                </Card>
              </div>

              <div className="mb-12">
                <h2 className="mb-4 text-2xl font-bold">Training Videos</h2>
                <p className="text-muted-foreground">
                  Short instructional videos covering specific procedures and best practices
                </p>
              </div>

              <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { title: "Room Setup & Configuration", duration: "12 min" },
                  { title: "Staff Orientation Procedures", duration: "18 min" },
                  { title: "Supply Chain Management", duration: "15 min" },
                  { title: "Emergency Response Protocols", duration: "22 min" },
                  { title: "Communication Systems", duration: "10 min" },
                  { title: "Quality Assurance Checks", duration: "14 min" },
                ].map((video, i) => (
                  <Card key={i} className="transition-shadow hover:shadow-md">
                    <div className="relative aspect-video w-full overflow-hidden rounded-t-lg bg-muted">
                      <div className="flex h-full items-center justify-center">
                        <Play className="h-12 w-12 text-muted-foreground" />
                      </div>
                    </div>
                    <CardHeader className="pb-4">
                      <CardTitle className="text-base">{video.title}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {video.duration}
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>

              <div className="mb-12">
                <h2 className="mb-4 text-2xl font-bold">Downloadable Resources</h2>
                <p className="text-muted-foreground">Reference materials and guides to support your training</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <div className="mb-2 flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">Quick Reference Guides</CardTitle>
                    </div>
                    <CardDescription>One-page reference sheets for common procedures and protocols</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full bg-transparent">
                      Download All Guides (PDF)
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="mb-2 flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">Staffing Templates</CardTitle>
                    </div>
                    <CardDescription>Customizable templates for staffing plans and role assignments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full bg-transparent">
                      Download Templates (Excel)
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
