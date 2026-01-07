import Link from "next/link"
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-xl font-bold text-primary-foreground">HxS</span>
              </div>
              <span className="text-lg font-semibold">HxS</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Providing comprehensive resources for emergency healthcare infrastructure expansion during medical surge
              events.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Solutions</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/hotel-solution" className="text-muted-foreground hover:text-foreground transition-colors">
                  Hotel HxS Solution
                </Link>
              </li>
              <li>
                <Link
                  href="/portable-solutions"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Portable Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/hotel-solution#estimator"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Cost Estimator Tool
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/deployment-playbook"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Deployment Playbook
                </Link>
              </li>
              <li>
                <Link href="/curriculum" className="text-muted-foreground hover:text-foreground transition-colors">
                  Curriculum Materials
                </Link>
              </li>
              <li>
                <Link
                  href="/additional-resources"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Additional Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/member-resources"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Member Portal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Connect</h3>
            <ul className="space-y-3 text-sm mb-4">
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Hospital Expansion Solution. Funded by grant through Team Colorado.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
