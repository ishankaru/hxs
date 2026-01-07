import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { Download, FileText, CheckCircle2, AlertCircle } from "lucide-react"

export default function DeploymentPlaybookPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="bg-primary py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
                HxS Deployment Playbook
              </h1>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                Comprehensive step-by-step guidance for implementing Hospital Expansion Solutions during medical surge
                emergencies
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Playbook Overview
                  </CardTitle>
                  <CardDescription>
                    The HxS Deployment Playbook provides a structured framework for converting existing buildings into
                    functional healthcare facilities during emergency medical surges.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild>
                    <Link href="#">
                      <Download className="mr-2 h-4 w-4" />
                      Download Full Playbook (PDF)
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <h2 className="mb-6 text-2xl font-bold">Deployment Phases</h2>

              <Accordion type="single" collapsible className="mb-12">
                <AccordionItem value="phase-1">
                  <AccordionTrigger className="text-lg font-semibold">Phase 1: Assessment & Planning</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Initial evaluation of potential facilities and development of deployment strategy.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>Conduct facility site assessments for structural suitability</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>Evaluate electrical, plumbing, and HVAC systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>Determine patient capacity and room configurations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>Identify staffing requirements and resource needs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>Create initial cost estimates using the Cost Estimator Tool</span>
                      </li>
                    </ul>
                    <Button variant="outline" asChild size="sm">
                      <Link href="#">Download Phase 1 Checklist</Link>
                    </Button>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="phase-2">
                  <AccordionTrigger className="text-lg font-semibold">Phase 2: Infrastructure Setup</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Physical modifications and infrastructure improvements to support healthcare operations.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>Install medical gas systems and oxygen supply infrastructure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>Upgrade electrical systems for medical equipment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>Establish isolation and infection control zones</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>Set up IT infrastructure and communication systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>Configure patient rooms with necessary medical equipment</span>
                      </li>
                    </ul>
                    <Button variant="outline" asChild size="sm">
                      <Link href="#">Download Phase 2 Checklist</Link>
                    </Button>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="phase-3">
                  <AccordionTrigger className="text-lg font-semibold">Phase 3: Staffing & Training</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Recruitment, training, and preparation of healthcare personnel for HxS operations.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>Recruit clinical and non-clinical staff based on capacity needs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>Conduct facility-specific training using curriculum materials</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>Establish communication protocols and chain of command</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>Implement safety and infection control procedures</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>Conduct emergency drills and readiness exercises</span>
                      </li>
                    </ul>
                    <Button variant="outline" asChild size="sm">
                      <Link href="/curriculum">View Training Materials</Link>
                    </Button>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="phase-4">
                  <AccordionTrigger className="text-lg font-semibold">Phase 4: Operations Launch</AccordionTrigger>
                  <AccordionContent className="space-y-4 pt-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Activation and initial operations of the Hospital Expansion Solution facility.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>Activate facility and begin patient admissions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>Implement patient flow and triage protocols</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>Establish supply chain and logistics management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>Monitor and adjust staffing levels as needed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>Document operations and maintain regulatory compliance</span>
                      </li>
                    </ul>
                    <Button variant="outline" asChild size="sm">
                      <Link href="#">Download Phase 4 Checklist</Link>
                    </Button>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Card className="border-accent bg-accent/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-accent" />
                    Critical Considerations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="font-medium">Key factors for successful HxS deployment:</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="font-semibold">• Timeline:</span>
                      <span>Plan for 48-72 hours minimum for basic facility conversion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold">• Coordination:</span>
                      <span>Establish clear lines of communication with local health departments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold">• Compliance:</span>
                      <span>Maintain awareness of regulatory waivers and emergency authorities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-semibold">• Sustainability:</span>
                      <span>Ensure adequate supply chains for extended operations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="mt-12 grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Related Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" asChild className="w-full justify-start bg-transparent">
                      <Link href="/hotel-solution#estimator">Cost Estimator Tool</Link>
                    </Button>
                    <Button variant="outline" asChild className="w-full justify-start bg-transparent">
                      <Link href="/curriculum">Training Curriculum</Link>
                    </Button>
                    <Button variant="outline" asChild className="w-full justify-start bg-transparent">
                      <Link href="/additional-resources">Additional Resources</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Need Assistance?</CardTitle>
                    <CardDescription>
                      Our team is here to support your HxS deployment planning and implementation.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full">
                      <Link href="/contact">Contact Our Team</Link>
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
