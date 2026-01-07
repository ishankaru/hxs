import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Download, ExternalLink, Video, ImageIcon, BookOpen } from "lucide-react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function AdditionalResourcesPage() {
  const resourceCategories = [
    {
      title: "Planning & Assessment Tools",
      description: "Essential tools for evaluating and planning alternate care facilities",
      resources: [
        { name: "Site Assessment Checklist", type: "PDF", size: "2.3 MB", icon: FileText },
        { name: "Capacity Planning Worksheet", type: "Excel", size: "1.8 MB", icon: FileText },
        { name: "Staffing Calculator Template", type: "Excel", size: "1.2 MB", icon: FileText },
        { name: "Equipment Inventory List", type: "PDF", size: "890 KB", icon: FileText },
      ],
    },
    {
      title: "Regulatory & Compliance",
      description: "Guidelines and requirements for alternate care facilities",
      resources: [
        { name: "Federal Guidelines Summary", type: "PDF", size: "3.1 MB", icon: FileText },
        { name: "State Licensing Requirements", type: "PDF", size: "2.7 MB", icon: FileText },
        { name: "HIPAA Compliance Checklist", type: "PDF", size: "1.5 MB", icon: FileText },
        { name: "Infection Control Standards", type: "PDF", size: "2.2 MB", icon: FileText },
      ],
    },
    {
      title: "Case Studies & Best Practices",
      description: "Real-world examples and proven strategies",
      resources: [
        { name: "Colorado Hotel Conversion Case Study", type: "PDF", size: "4.2 MB", icon: BookOpen },
        { name: "Convention Center Implementation", type: "PDF", size: "3.8 MB", icon: BookOpen },
        { name: "Mobile Field Hospital Success Stories", type: "PDF", size: "2.9 MB", icon: BookOpen },
        { name: "Lessons Learned Compilation 2020-2024", type: "PDF", size: "5.1 MB", icon: BookOpen },
      ],
    },
    {
      title: "Multimedia Resources",
      description: "Videos, images, and interactive content",
      resources: [
        { name: "HxS Deployment Overview Video", type: "Video", size: "125 MB", icon: Video },
        { name: "Site Conversion Photo Gallery", type: "Images", size: "45 MB", icon: ImageIcon },
        { name: "Setup & Breakdown Time-Lapse", type: "Video", size: "89 MB", icon: Video },
        { name: "Equipment Setup Demonstrations", type: "Video", size: "156 MB", icon: Video },
      ],
    },
  ]

  const externalResources = [
    {
      title: "CDC Emergency Preparedness",
      url: "https://www.cdc.gov",
      description: "Federal guidelines for healthcare emergency preparedness",
    },
    {
      title: "FEMA Healthcare Resources",
      url: "https://www.fema.gov",
      description: "Emergency management resources for healthcare facilities",
    },
    {
      title: "ASPR Technical Resources",
      url: "https://aspr.hhs.gov",
      description: "Assistant Secretary for Preparedness and Response materials",
    },
    {
      title: "State Emergency Operations",
      url: "#",
      description: "Colorado Department of Public Health & Environment emergency resources",
    },
  ]

  return (
    <>
      <SiteHeader />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Additional HxS Resources</h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                A comprehensive collection of tools, documents, and reference materials to support your Hospital
                Expansion Solution implementation.
              </p>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              {resourceCategories.map((category, index) => (
                <div key={index}>
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold mb-2">{category.title}</h2>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {category.resources.map((resource, resourceIndex) => (
                      <Card key={resourceIndex} className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="rounded-lg bg-primary/10 p-3 flex-shrink-0">
                              <resource.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold mb-1 text-balance">{resource.name}</h3>
                              <p className="text-sm text-muted-foreground mb-3">
                                {resource.type} • {resource.size}
                              </p>
                              <Button size="sm" className="gap-2">
                                <Download className="h-4 w-4" />
                                Download
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* External Resources */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">External Resources & Partners</h2>
              <p className="text-muted-foreground">Links to additional information and partner organizations</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {externalResources.map((resource, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {resource.title}
                      <ExternalLink className="h-4 w-4" />
                    </CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <a href={resource.url} target="_blank" rel="noopener noreferrer">
                        Visit Resource
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 md:p-12">
                <div className="max-w-2xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-4">Need Access to Member-Only Resources?</h2>
                  <p className="text-lg mb-6 text-primary-foreground/90">
                    Join our member portal to access exclusive training materials, advanced planning tools, and
                    collaboration resources.
                  </p>
                  <Button size="lg" variant="secondary" asChild>
                    <a href="/member-resources">Access Member Portal</a>
                  </Button>
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
