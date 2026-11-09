import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Award, Users } from "lucide-react"
import Link from "next/link"

const contributors = [
  {
    id: 1,
    name: "Dr. Amaka Okonkwo",
    role: "Climate Policy Expert",
    organization: "IUCN Nigeria",
    avatar: "AO",
    color: "bg-primary/20 text-primary",
    contributions: 45,
    badge: "Top Contributor",
  },
  {
    id: 2,
    name: "Emmanuel Bassey",
    role: "Youth Development Lead",
    organization: "ActionAid",
    avatar: "EB",
    color: "bg-accent/20 text-accent",
    contributions: 38,
    badge: "Rising Star",
  },
  {
    id: 3,
    name: "Fatima Abdullahi",
    role: "Health Programs Director",
    organization: "WHO Nigeria",
    avatar: "FA",
    color: "bg-chart-3/20 text-chart-3",
    contributions: 32,
    badge: "Expert Voice",
  },
  {
    id: 4,
    name: "Chisom Nwachukwu",
    role: "Agricultural Economist",
    organization: "FAO",
    avatar: "CN",
    color: "bg-chart-4/20 text-chart-4",
    contributions: 29,
    badge: null,
  },
]

export function FeaturedContributors() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              Featured Contributors
            </h2>
            <p className="text-muted-foreground mt-1">
              Leading voices in Niger Delta development
            </p>
          </div>
          <Button variant="outline" asChild className="hidden sm:flex">
            <Link href="/community">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contributors.map((contributor) => (
            <Card 
              key={contributor.id} 
              className="group hover:border-primary/50 transition-all cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className={`h-16 w-16 rounded-full ${contributor.color} flex items-center justify-center text-xl font-bold mb-4`}>
                    {contributor.avatar}
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {contributor.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{contributor.role}</p>
                  <p className="text-xs text-muted-foreground">{contributor.organization}</p>
                  
                  <div className="flex items-center gap-2 mt-4">
                    {contributor.badge && (
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                        <Award className="h-3 w-3 mr-1" />
                        {contributor.badge}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="text-sm text-muted-foreground mt-3">
                    <span className="text-foreground font-medium">{contributor.contributions}</span> contributions
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Button variant="outline" asChild>
            <Link href="/community">
              View All Contributors
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
