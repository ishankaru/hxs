import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Lock, Users, BookOpen, FileText, Video, MessageSquare, Calendar } from "lucide-react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function MemberResourcesPage() {
  return (
    <>
      <SiteHeader />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-8 w-8" />
                <h1 className="text-4xl md:text-5xl font-bold text-balance">Member Resources Portal</h1>
              </div>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Exclusive access to advanced training materials, collaboration tools, and specialized resources for HxS
                implementation partners.
              </p>
            </div>
          </div>
        </section>

        {/* Login Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Member Login</CardTitle>
                  <CardDescription>Enter your credentials to access member-only resources</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="you@organization.org" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full">
                      Sign In
                    </Button>
                    <div className="text-center text-sm">
                      <a href="#" className="text-primary hover:underline">
                        Forgot password?
                      </a>
                    </div>
                  </form>
                </CardContent>
              </Card>
              <p className="text-center text-sm text-muted-foreground mt-6">
                Not a member yet?{" "}
                <a href="/contact" className="text-primary hover:underline font-medium">
                  Contact us to request access
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Preview of Member Features */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What's Inside the Member Portal</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Get exclusive access to advanced resources designed for healthcare emergency management professionals
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <FileText className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Advanced Documentation</CardTitle>
                  <CardDescription>
                    Detailed implementation guides, technical specifications, and confidential planning materials
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Video className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Exclusive Training Videos</CardTitle>
                  <CardDescription>
                    In-depth video tutorials, webinar recordings, and expert-led training sessions
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Collaboration Network</CardTitle>
                  <CardDescription>
                    Connect with other HxS implementers, share experiences, and access peer support
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <BookOpen className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Research & Studies</CardTitle>
                  <CardDescription>
                    Access to research findings, effectiveness studies, and continuous improvement data
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <MessageSquare className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Discussion Forums</CardTitle>
                  <CardDescription>Member-only forums for Q&A, problem-solving, and knowledge sharing</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Calendar className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Events & Workshops</CardTitle>
                  <CardDescription>
                    Early access to training events, workshops, and professional development opportunities
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Membership Benefits */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 md:p-12">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl font-bold mb-6 text-center">Why Become a Member?</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-2 text-lg">For Healthcare Facilities</h3>
                      <ul className="space-y-2 text-primary-foreground/90">
                        <li>• Access comprehensive planning resources</li>
                        <li>• Learn from real-world implementations</li>
                        <li>• Connect with experienced practitioners</li>
                        <li>• Stay updated on best practices</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-lg">For Emergency Managers</h3>
                      <ul className="space-y-2 text-primary-foreground/90">
                        <li>• Advanced surge capacity planning tools</li>
                        <li>• Coordination framework templates</li>
                        <li>• Multi-agency collaboration guides</li>
                        <li>• Exercise and drill materials</li>
                      </ul>
                    </div>
                  </div>
                  <div className="text-center mt-8">
                    <Button size="lg" variant="secondary" asChild>
                      <a href="/contact">Request Membership Information</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      <SiteFooter />
    </>
  )
}
