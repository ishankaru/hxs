"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Search, User } from "lucide-react"
import { useState } from "react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function SiteHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="text-xl font-bold text-primary-foreground">HxS</span>
            </div>
            <span className="hidden text-lg font-semibold md:inline-block">Hospital Expansion Solution</span>
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/deployment-playbook"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Deployment Playbook</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Step-by-step guidance for HxS implementation
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/curriculum"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Curriculum Materials</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Training courses and educational content
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/additional-resources"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Additional Resources</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Supplementary tools and documentation
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/member-resources"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Member Resources</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Exclusive content for registered members
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/hotel-solution"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Hotel HxS Solution</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Convert hotels into emergency medical facilities
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/portable-solutions"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Portable HxS Solutions</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Mobile and temporary healthcare infrastructure
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Blog
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)} aria-label="Search">
            <Search className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon" asChild className="hidden md:inline-flex">
            <Link href="/member-resources" aria-label="Member login">
              <User className="h-5 w-5" />
            </Link>
          </Button>

          <Button asChild className="hidden md:inline-flex">
            <Link href="/hotel-solution#estimator">Cost Estimator</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                <Link href="/" className="text-lg font-semibold">
                  Home
                </Link>
                <Link href="/deployment-playbook" className="text-lg font-medium">
                  Deployment Playbook
                </Link>
                <Link href="/curriculum" className="text-lg font-medium">
                  Curriculum Materials
                </Link>
                <Link href="/hotel-solution" className="text-lg font-medium">
                  Hotel HxS Solution
                </Link>
                <Link href="/portable-solutions" className="text-lg font-medium">
                  Portable HxS Solutions
                </Link>
                <Link href="/additional-resources" className="text-lg font-medium">
                  Additional Resources
                </Link>
                <Link href="/member-resources" className="text-lg font-medium">
                  Member Resources
                </Link>
                <Link href="/blog" className="text-lg font-medium">
                  Blog
                </Link>
                <Link href="/contact" className="text-lg font-medium">
                  Contact Us
                </Link>
                <Button asChild className="mt-4">
                  <Link href="/hotel-solution#estimator">Cost Estimator</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {isSearchOpen && (
        <div className="border-t border-border bg-background px-4 py-3">
          <input
            type="search"
            placeholder="Search HxS resources..."
            className="w-full rounded-md border border-input bg-background px-4 py-2 text-sm outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
            aria-label="Search"
          />
        </div>
      )}
    </header>
  )
}

export default SiteHeader
