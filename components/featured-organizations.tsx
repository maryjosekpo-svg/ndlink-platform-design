import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

const organizations = [
  {
    id: 1,
    name: "UNDP Nigeria",
    type: "International Organization",
    logo: "UN",
    projects: 45,
    verified: true,
  },
  {
    id: 2,
    name: "Shell Nigeria",
    type: "Private Sector",
    logo: "SN",
    projects: 120,
    verified: true,
  },
  {
    id: 3,
    name: "NDDC",
    type: "Government",
    logo: "ND",
    projects: 200,
    verified: true,
  },
  {
    id: 4,
    name: "World Bank",
    type: "International Organization",
    logo: "WB",
    projects: 80,
    verified: true,
  },
  {
    id: 5,
    name: "GIZ Nigeria",
    type: "International Organization",
    logo: "GZ",
    projects: 28,
    verified: true,
  },
  {
    id: 6,
    name: "ActionAid",
    type: "NGO",
    logo: "AA",
    projects: 40,
    verified: true,
  },
]

const typeColors: Record<string, string> = {
  "International Organization": "text-chart-2",
  "NGO": "text-primary",
  "Government": "text-chart-3",
  "Private Sector": "text-chart-4",
}

export function FeaturedOrganizations() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <Badge variant="secondary" className="mb-4">
              Partner Network
            </Badge>
            <h2 className="text-3xl font-bold text-foreground">
              Featured Organizations
            </h2>
            <p className="mt-2 text-muted-foreground">
              Leading development partners working across the Niger Delta
            </p>
          </div>
          <Button variant="outline" asChild className="hidden sm:flex">
            <Link href="/organizations">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {organizations.map((org) => (
            <Link
              key={org.id}
              href="/organizations"
              className="group rounded-xl border border-border bg-card p-5 hover:border-primary/50 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                  <span className="text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors">
                    {org.logo}
                  </span>
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                      {org.name}
                    </h3>
                    {org.verified && (
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className={typeColors[org.type]}>{org.type}</span>
                    <span className="text-muted-foreground">·</span>
                    <span className="text-muted-foreground">{org.projects} projects</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 sm:hidden">
          <Button variant="outline" asChild className="w-full">
            <Link href="/organizations">
              View All Organizations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
