import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock, ArrowRight, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function BlogPage() {
  const featuredPost = {
    title: "Lessons Learned: Converting a Major Hotel to an Alternate Care Facility",
    excerpt:
      "A comprehensive case study examining the successful transformation of a 400-room hotel into a functioning healthcare facility during the 2023 medical surge response.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    date: "January 15, 2025",
    author: "Dr. Sarah Mitchell",
    readTime: "12 min read",
    category: "Case Studies",
    slug: "hotel-conversion-lessons-learned",
  }

  const blogPosts = [
    {
      title: "New Federal Guidelines for Alternate Care Facilities Released",
      excerpt:
        "The CDC and ASPR have jointly released updated guidance for planning and operating alternate care sites. Here's what you need to know.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      date: "January 10, 2025",
      author: "James Rodriguez",
      readTime: "6 min read",
      category: "Policy Updates",
      slug: "federal-guidelines-2025",
    },
    {
      title: "Staffing Strategies for Rapid Hospital Expansion",
      excerpt:
        "Exploring innovative approaches to healthcare staffing during surge capacity events, including cross-training and volunteer coordination.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=600&fit=crop",
      date: "January 5, 2025",
      author: "Maria Chen, RN",
      readTime: "8 min read",
      category: "Best Practices",
      slug: "staffing-strategies",
    },
    {
      title: "Technology Integration in Mobile Field Hospitals",
      excerpt:
        "How modern EHR systems and telemedicine capabilities are revolutionizing portable healthcare facilities.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop",
      date: "December 28, 2024",
      author: "Dr. Michael Park",
      readTime: "10 min read",
      category: "Technology",
      slug: "technology-integration",
    },
    {
      title: "Cost-Benefit Analysis: Hotel vs. Convention Center Conversions",
      excerpt:
        "A detailed financial comparison of different venue types for alternate care facilities, including setup costs, capacity, and operational expenses.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      date: "December 20, 2024",
      author: "Thomas Wright",
      readTime: "9 min read",
      category: "Planning",
      slug: "cost-benefit-analysis",
    },
    {
      title: "Emergency Preparedness: Building Community Partnerships",
      excerpt:
        "Success stories and strategies for fostering collaboration between hospitals, hotels, and local emergency management agencies.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
      date: "December 15, 2024",
      author: "Jennifer Adams",
      readTime: "7 min read",
      category: "Community Engagement",
      slug: "community-partnerships",
    },
    {
      title: "Infection Control in Non-Traditional Healthcare Settings",
      excerpt:
        "Best practices for maintaining proper infection prevention protocols when operating outside of traditional hospital environments.",
      image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&h=600&fit=crop",
      date: "December 10, 2024",
      author: "Dr. Lisa Thompson",
      readTime: "11 min read",
      category: "Safety & Compliance",
      slug: "infection-control",
    },
  ]

  const categories = [
    "All Posts",
    "Case Studies",
    "Best Practices",
    "Policy Updates",
    "Technology",
    "Planning",
    "Community Engagement",
    "Safety & Compliance",
  ]

  return (
    <>
      <SiteHeader />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary-dark text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">HxS Blog & Updates</h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
                Stay informed with the latest insights, case studies, and updates in hospital expansion and emergency
                healthcare preparedness.
              </p>
              {/* Search Bar */}
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Search articles..." className="pl-10 bg-background text-foreground" />
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-background border-b">
          <div className="container mx-auto px-4">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All Posts" ? "default" : "outline"}
                  size="sm"
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-4">
              <Badge variant="secondary">Featured Article</Badge>
            </div>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative h-[300px] md:h-auto">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-3">{featuredPost.category}</Badge>
                  <h2 className="text-3xl font-bold mb-4 text-balance">{featuredPost.title}</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <Button asChild className="w-fit">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Recent Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                  <div className="relative h-48">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <Badge className="w-fit mb-2">{post.category}</Badge>
                    <CardTitle className="line-clamp-2 text-balance">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                      <Link href={`/blog/${post.slug}`}>
                        Read More
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pagination */}
        <section className="py-8 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex justify-center gap-2">
              <Button variant="outline" disabled>
                Previous
              </Button>
              <Button variant="default">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 md:p-12">
                <div className="max-w-2xl mx-auto text-center">
                  <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                  <p className="text-lg mb-6 text-primary-foreground/90">
                    Subscribe to our newsletter for the latest HxS updates, training opportunities, and industry
                    insights delivered to your inbox.
                  </p>
                  <div className="flex gap-2 max-w-md mx-auto">
                    <Input placeholder="Enter your email" type="email" className="bg-background text-foreground" />
                    <Button variant="secondary">Subscribe</Button>
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
