import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Contact Us</h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Have questions about Hospital Expansion Solutions? We're here to help. Reach out to our team for
                support, partnership opportunities, or general inquiries.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Send Us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input id="firstName" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input id="lastName" required />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input id="email" type="email" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" type="tel" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="organization">Organization *</Label>
                        <Input id="organization" required />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="role">Your Role *</Label>
                        <Select>
                          <SelectTrigger id="role">
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="em">Emergency Manager</SelectItem>
                            <SelectItem value="clinical">Clinical Healthcare Worker</SelectItem>
                            <SelectItem value="nonclinical">Non-Clinical Healthcare Worker</SelectItem>
                            <SelectItem value="government">Government Official</SelectItem>
                            <SelectItem value="vendor">Vendor/Supplier</SelectItem>
                            <SelectItem value="researcher">Researcher/Academic</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Select>
                          <SelectTrigger id="subject">
                            <SelectValue placeholder="What can we help you with?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="implementation">Implementation Support</SelectItem>
                            <SelectItem value="training">Training & Education</SelectItem>
                            <SelectItem value="membership">Member Portal Access</SelectItem>
                            <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                            <SelectItem value="technical">Technical Support</SelectItem>
                            <SelectItem value="media">Media Inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          rows={6}
                          placeholder="Please provide details about your inquiry..."
                          required
                        />
                      </div>

                      <div className="flex items-start gap-2">
                        <input type="checkbox" id="consent" className="mt-1" required />
                        <Label htmlFor="consent" className="text-sm font-normal">
                          I consent to having this website store my submitted information so they can respond to my
                          inquiry. *
                        </Label>
                      </div>

                      <Button type="submit" size="lg" className="w-full md:w-auto">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex gap-4">
                      <div className="rounded-lg bg-primary/10 p-3 flex-shrink-0 h-fit">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a href="mailto:info@hxsolution.org" className="text-primary hover:underline">
                          info@hxsolution.org
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="rounded-lg bg-primary/10 p-3 flex-shrink-0 h-fit">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <a href="tel:+1-555-123-4567" className="text-primary hover:underline">
                          +1 (555) 123-4567
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="rounded-lg bg-primary/10 p-3 flex-shrink-0 h-fit">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Address</h3>
                        <p className="text-sm text-muted-foreground">
                          Colorado Department of Public Health & Environment
                          <br />
                          Denver, CO
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="rounded-lg bg-primary/10 p-3 flex-shrink-0 h-fit">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Business Hours</h3>
                        <p className="text-sm text-muted-foreground">
                          Monday - Friday
                          <br />
                          8:00 AM - 5:00 PM MT
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-muted">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Response Time</h3>
                    <p className="text-sm text-muted-foreground">
                      We typically respond to inquiries within 1-2 business days. For urgent matters, please indicate so
                      in your message.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Emergency?</h3>
                    <p className="text-sm text-primary-foreground/90 mb-4">
                      For immediate emergency management support, please contact your local emergency operations center.
                    </p>
                    <Button variant="secondary" size="sm" asChild>
                      <a href="tel:911">Call 911</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Quick answers to common questions</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How do I access member resources?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Contact us to request membership access. We'll verify your credentials and provide login information
                    within 2-3 business days.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Can you help with implementation?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Yes! We provide technical assistance and guidance throughout the implementation process. Use the
                    contact form to describe your needs.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Is training available?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    We offer self-paced online courses and can arrange custom training sessions. Visit our Curriculum
                    Materials page for more information.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How is HxS funded?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    HxS is supported through federal grant funding and aims to provide free resources to healthcare
                    emergency management professionals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <SiteFooter />
    </>
  )
}
