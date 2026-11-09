"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Briefcase,
  Gift,
  Calendar,
  TrendingUp,
  Clock,
  MapPin,
  Building2,
  ArrowRight,
  Bookmark,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"

const feedItems = [
  {
    id: 1,
    type: "job",
    title: "Senior Program Manager",
    organization: "USAID Nigeria",
    location: "Port Harcourt",
    deadline: "Dec 15, 2024",
    featured: true,
    tags: ["Full-time", "Health"],
  },
  {
    id: 2,
    type: "grant",
    title: "Climate Action Small Grants",
    organization: "European Union",
    amount: "$50,000 - $150,000",
    deadline: "Jan 20, 2025",
    featured: true,
    tags: ["Environment", "NGO"],
  },
  {
    id: 3,
    type: "event",
    title: "Niger Delta Development Summit 2025",
    organization: "NDDC",
    location: "Uyo, Akwa Ibom",
    date: "Feb 10-12, 2025",
    featured: false,
    tags: ["Conference", "Networking"],
  },
  {
    id: 4,
    type: "job",
    title: "M&E Specialist",
    organization: "World Bank",
    location: "Abuja (Remote Option)",
    deadline: "Dec 22, 2024",
    featured: false,
    tags: ["Contract", "Data"],
  },
  {
    id: 5,
    type: "grant",
    title: "Youth Entrepreneurship Fund",
    organization: "Shell Foundation",
    amount: "Up to $25,000",
    deadline: "Rolling",
    featured: true,
    tags: ["Youth", "SME"],
  },
]

const trendingTopics = [
  { name: "Climate Resilience", count: 234 },
  { name: "Youth Employment", count: 189 },
  { name: "Digital Skills", count: 156 },
  { name: "Agricultural Innovation", count: 142 },
  { name: "Healthcare Access", count: 128 },
]

const typeIcons = {
  job: Briefcase,
  grant: Gift,
  event: Calendar,
}

const typeColors = {
  job: "bg-primary/10 text-primary",
  grant: "bg-accent/10 text-accent",
  event: "bg-chart-3/10 text-chart-3",
}

export function LiveFeed() {
  const [filter, setFilter] = useState<"all" | "job" | "grant" | "event">("all")
  const [savedItems, setSavedItems] = useState<number[]>([])

  const filteredItems = filter === "all" 
    ? feedItems 
    : feedItems.filter(item => item.type === filter)

  const toggleSave = (id: number) => {
    setSavedItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  return (
    <section className="py-16 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Feed */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Live Updates</h2>
                <p className="text-muted-foreground">Latest opportunities tailored for you</p>
              </div>
              <div className="flex gap-2">
                {(["all", "job", "grant", "event"] as const).map((type) => (
                  <Button
                    key={type}
                    variant={filter === type ? "default" : "secondary"}
                    size="sm"
                    onClick={() => setFilter(type)}
                  >
                    {type.charAt(0).toUpperCase() + type.slice(1)}s
                  </Button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {filteredItems.map((item) => {
                const Icon = typeIcons[item.type as keyof typeof typeIcons]
                const colorClass = typeColors[item.type as keyof typeof typeColors]

                return (
                  <Card 
                    key={item.id} 
                    className={`transition-all hover:border-primary/50 ${item.featured ? 'border-primary/30 bg-card' : ''}`}
                  >
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                        <div className={`h-12 w-12 rounded-lg flex items-center justify-center shrink-0 ${colorClass}`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-2 flex-wrap">
                                <h3 className="font-semibold text-foreground">{item.title}</h3>
                                {item.featured && (
                                  <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                                    Featured
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground flex-wrap">
                                <span className="flex items-center gap-1">
                                  <Building2 className="h-3.5 w-3.5" />
                                  {item.organization}
                                </span>
                                {item.location && (
                                  <span className="flex items-center gap-1">
                                    <MapPin className="h-3.5 w-3.5" />
                                    {item.location}
                                  </span>
                                )}
                                {item.amount && (
                                  <span className="text-primary font-medium">{item.amount}</span>
                                )}
                              </div>
                            </div>
                            <Button 
                              variant="ghost" 
                              size="icon"
                              onClick={() => toggleSave(item.id)}
                              className="shrink-0"
                            >
                              <Bookmark 
                                className={`h-4 w-4 ${savedItems.includes(item.id) ? 'fill-primary text-primary' : ''}`} 
                              />
                            </Button>
                          </div>
                          <div className="flex items-center justify-between mt-4 flex-wrap gap-2">
                            <div className="flex items-center gap-2 flex-wrap">
                              {item.tags.map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex items-center gap-4 text-sm">
                              <span className="flex items-center gap-1 text-muted-foreground">
                                <Clock className="h-3.5 w-3.5" />
                                {item.deadline || item.date}
                              </span>
                              <Button variant="ghost" size="sm" className="text-primary">
                                View Details
                                <ExternalLink className="ml-1 h-3.5 w-3.5" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div className="mt-6 text-center">
              <Button variant="outline" asChild>
                <Link href="/opportunities">
                  View All Opportunities
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-80 space-y-6">
            {/* Trending Topics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Trending Topics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <Link
                    key={topic.name}
                    href={`/insights?topic=${encodeURIComponent(topic.name)}`}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-muted-foreground text-sm w-5">{index + 1}</span>
                      <span className="text-foreground font-medium text-sm">{topic.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{topic.count} posts</span>
                  </Link>
                ))}
              </CardContent>
            </Card>

            {/* Sponsored */}
            <Card className="border-primary/30">
              <CardContent className="p-4">
                <div className="text-xs text-muted-foreground mb-2">Sponsored</div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-bold">AF</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">Africa Foundation</div>
                    <div className="text-xs text-muted-foreground">Leadership Program</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Apply now for our 6-month leadership development program for emerging development professionals.
                </p>
                <Button size="sm" className="w-full">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
