import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calendar, User, Clock, Share2, ChevronLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function BlogPostPage() {
  // In a real implementation, you'd fetch this data based on the slug
  const post = {
    title: "Lessons Learned: Converting a Major Hotel to an Alternate Care Facility",
    excerpt:
      "A comprehensive case study examining the successful transformation of a 400-room hotel into a functioning healthcare facility during the 2023 medical surge response.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop",
    date: "January 15, 2025",
    author: "Dr. Sarah Mitchell",
    authorTitle: "Emergency Medicine Physician & HxS Consultant",
    readTime: "12 min read",
    category: "Case Studies",
  }

  const relatedPosts = [
    {
      title: "Staffing Strategies for Rapid Hospital Expansion",
      slug: "staffing-strategies",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop",
    },
    {
      title: "Cost-Benefit Analysis: Hotel vs. Convention Center",
      slug: "cost-benefit-analysis",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    },
    {
      title: "Technology Integration in Mobile Field Hospitals",
      slug: "technology-integration",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    },
  ]

  return (
    <>
      <SiteHeader />
      <div className="min-h-screen bg-background">
        {/* Back Button */}
        <div className="border-b">
          <div className="container mx-auto px-4 py-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/blog">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </div>

        {/* Article Header */}
        <article className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Badge className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <div>
                  <p className="font-medium text-foreground">{post.author}</p>
                  <p className="text-sm">{post.authorTitle}</p>
                </div>
              </div>
              <Separator orientation="vertical" className="h-8" />
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
              <div className="ml-auto">
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden mb-12">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-foreground prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3 prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-6 prose-ul:my-6 prose-ul:space-y-2 prose-ol:my-6 prose-ol:space-y-2 prose-li:text-foreground prose-strong:text-foreground prose-strong:font-semibold">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">{post.excerpt}</p>

              <h2>Executive Summary</h2>
              <p>
                In March 2023, as part of a regional surge capacity exercise, our team successfully converted a 400-room
                hotel in downtown Denver into a fully operational alternate care facility (ACF) within 72 hours. This
                case study examines the planning, execution, and lessons learned from this critical project.
              </p>

              <h2>Background and Context</h2>
              <p>
                The need for rapid hospital expansion capabilities has never been more apparent. During the COVID-19
                pandemic, healthcare systems worldwide struggled with unprecedented patient volumes. The Hospital
                Expansion Solution (HxS) framework was developed to address this challenge by providing a systematic
                approach to creating alternate care facilities.
              </p>

              <h3>Project Parameters</h3>
              <ul>
                <li>
                  <strong>Timeline:</strong> 72 hours from activation to operational status
                </li>
                <li>
                  <strong>Capacity:</strong> 300 medical/surgical beds across 350 hotel rooms
                </li>
                <li>
                  <strong>Staffing:</strong> 180 clinical and non-clinical personnel
                </li>
                <li>
                  <strong>Budget:</strong> $2.8 million for setup and first 30 days of operation
                </li>
              </ul>

              <h2>Planning Phase: 6 Months of Preparation</h2>
              <p>
                Success in rapid deployment requires extensive advance planning. Our team spent six months developing
                relationships, creating detailed operational plans, and conducting site assessments.
              </p>

              <h3>Key Planning Activities</h3>
              <p>
                <strong>Venue Selection:</strong> We evaluated 12 potential hotels based on location, room count,
                infrastructure, and proximity to supporting facilities. The selected hotel offered excellent highway
                access, adequate parking, commercial kitchen facilities, and strong existing relationships with local
                emergency management.
              </p>

              <p>
                <strong>Infrastructure Assessment:</strong> Critical considerations included electrical capacity, oxygen
                delivery systems, medical gas availability, infection control capabilities, and waste management.
                Engineering assessments revealed the need for supplemental power generation and oxygen storage.
              </p>

              <Card className="my-8 bg-muted">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">💡 Key Insight</h4>
                  <p className="text-sm">
                    Infrastructure assessments should occur 6-12 months before anticipated need. Several critical
                    infrastructure gaps identified in our initial assessment required 2-3 months to address through
                    advance contracts and equipment pre-positioning.
                  </p>
                </CardContent>
              </Card>

              <h2>Activation and Deployment</h2>
              <p>
                When the exercise activation order was issued, our pre-planning paid immediate dividends. Within 4
                hours, advance teams were on-site beginning the conversion process.
              </p>

              <h3>Hour 0-12: Facility Preparation</h3>
              <ul>
                <li>Guest checkout and room clearing</li>
                <li>Delivery and setup of modular nursing stations</li>
                <li>Installation of supplemental oxygen systems</li>
                <li>Deployment of mobile medical equipment</li>
                <li>IT infrastructure and EHR connectivity</li>
              </ul>

              <h3>Hour 12-48: Clinical Setup</h3>
              <ul>
                <li>Bed placement and room configuration</li>
                <li>Medical supply distribution</li>
                <li>Staffing assignments and team formation</li>
                <li>Safety and infection control measures</li>
                <li>Communication systems testing</li>
              </ul>

              <h3>Hour 48-72: Operational Readiness</h3>
              <ul>
                <li>Staff orientation and training</li>
                <li>System testing and validation</li>
                <li>Safety walkthroughs</li>
                <li>Final inspections and certifications</li>
              </ul>

              <h2>Challenges Encountered</h2>
              <p>Despite extensive planning, several challenges emerged during deployment:</p>

              <h3>1. Communication Systems</h3>
              <p>
                The hotel's existing WiFi infrastructure proved inadequate for clinical communications and EHR access.
                We deployed supplemental cellular hotspots and prioritized critical systems, but initial connectivity
                issues caused delays.
              </p>

              <h3>2. Staffing Coordination</h3>
              <p>
                Coordinating 180 personnel from multiple agencies required more robust command and control than
                anticipated. We implemented a modified incident command structure after the first 24 hours to improve
                coordination.
              </p>

              <h3>3. Supply Chain Management</h3>
              <p>
                Tracking and managing thousands of medical supplies across multiple floors presented significant
                challenges. We quickly implemented a simplified inventory system using barcode scanning.
              </p>

              <h2>Outcomes and Metrics</h2>
              <p>
                The project successfully demonstrated that a hotel can be converted to an alternate care facility within
                72 hours using the HxS framework:
              </p>

              <ul>
                <li>
                  <strong>Timeline Achievement:</strong> Facility declared operational at hour 71
                </li>
                <li>
                  <strong>Capacity:</strong> 285 beds ready (95% of target)
                </li>
                <li>
                  <strong>Staff Readiness:</strong> 100% of positions filled
                </li>
                <li>
                  <strong>Safety Compliance:</strong> Passed all regulatory inspections
                </li>
                <li>
                  <strong>Cost Performance:</strong> Within 3% of budget
                </li>
              </ul>

              <h2>Lessons Learned and Recommendations</h2>

              <Card className="my-8 bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4">Top 5 Recommendations for Future Deployments</h4>
                  <ol className="space-y-2 text-sm">
                    <li>
                      <strong>1. Advance Contracts:</strong> Pre-negotiate contracts with hotels before emergencies
                      occur
                    </li>
                    <li>
                      <strong>2. Equipment Pre-Positioning:</strong> Store critical equipment near potential sites
                    </li>
                    <li>
                      <strong>3. Staff Training:</strong> Conduct regular tabletop exercises with all personnel
                    </li>
                    <li>
                      <strong>4. Technology Testing:</strong> Validate all communication systems before activation
                    </li>
                    <li>
                      <strong>5. Flexible Planning:</strong> Build adaptation time into deployment schedules
                    </li>
                  </ol>
                </CardContent>
              </Card>

              <h2>Conclusion</h2>
              <p>
                The successful conversion of a major hotel to an alternate care facility demonstrates the viability of
                the HxS framework for rapid surge capacity expansion. With proper planning, training, and resource
                allocation, healthcare systems can significantly expand their capacity to respond to medical
                emergencies.
              </p>

              <p>
                The lessons learned from this exercise have been incorporated into updated HxS guidance documents and
                training materials. We encourage all emergency planners to consider hotel-based ACFs as part of their
                surge capacity strategies.
              </p>

              <Separator className="my-12" />

              {/* Author Bio */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="rounded-full bg-primary/10 h-16 w-16 flex items-center justify-center flex-shrink-0">
                      <User className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{post.author}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{post.authorTitle}</p>
                      <p className="text-sm">
                        Dr. Mitchell has over 15 years of experience in emergency medicine and disaster response. She
                        has led multiple HxS implementations and serves as a technical advisor to state and federal
                        emergency management agencies.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-3 line-clamp-2 text-balance">{relatedPost.title}</h3>
                    <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                      <Link href={`/blog/${relatedPost.slug}`}>
                        Read Article
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
      <SiteFooter />
    </>
  )
}
