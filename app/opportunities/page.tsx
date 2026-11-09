"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Briefcase,
  Gift,
  Calendar,
  Search,
  MapPin,
  Building2,
  Clock,
  Bookmark,
  Filter,
  DollarSign,
  Users,
  ChevronRight,
  X,
} from "lucide-react"

const opportunities = [
  {
    id: 1,
    type: "job",
    title: "Senior Program Manager - Climate Resilience",
    organization: "USAID Nigeria",
    location: "Port Harcourt, Rivers",
    deadline: "Dec 15, 2024",
    salary: "$80,000 - $100,000",
    featured: true,
    sponsored: true,
    tags: ["Full-time", "Health", "Senior Level"],
    description: "Lead climate resilience programs across the Niger Delta region, coordinating with local partners and government agencies.",
    applicants: 45,
  },
  {
    id: 2,
    type: "grant",
    title: "Climate Action Small Grants Program",
    organization: "European Union",
    location: "Niger Delta Region",
    deadline: "Jan 20, 2025",
    amount: "$50,000 - $150,000",
    featured: true,
    sponsored: false,
    tags: ["Environment", "NGO", "Community"],
    description: "Funding for community-based organizations implementing climate adaptation and mitigation projects.",
    applicants: 120,
  },
  {
    id: 3,
    type: "event",
    title: "Niger Delta Development Summit 2025",
    organization: "NDDC",
    location: "Uyo, Akwa Ibom",
    date: "Feb 10-12, 2025",
    featured: false,
    sponsored: false,
    tags: ["Conference", "Networking", "Policy"],
    description: "Annual gathering of development stakeholders to discuss priorities and partnerships for the region.",
    attendees: 500,
  },
  {
    id: 4,
    type: "job",
    title: "Monitoring & Evaluation Specialist",
    organization: "World Bank",
    location: "Abuja (Remote Option)",
    deadline: "Dec 22, 2024",
    salary: "$65,000 - $85,000",
    featured: false,
    sponsored: false,
    tags: ["Contract", "Data", "Mid Level"],
    description: "Design and implement M&E frameworks for development projects across Nigeria.",
    applicants: 78,
  },
  {
    id: 5,
    type: "grant",
    title: "Youth Entrepreneurship Development Fund",
    organization: "Shell Foundation",
    location: "Niger Delta States",
    deadline: "Rolling",
    amount: "Up to $25,000",
    featured: true,
    sponsored: true,
    tags: ["Youth", "SME", "Business"],
    description: "Support for young entrepreneurs starting or scaling businesses in the energy, agriculture, and technology sectors.",
    applicants: 230,
  },
  {
    id: 6,
    type: "job",
    title: "Community Health Program Officer",
    organization: "WHO Nigeria",
    location: "Warri, Delta",
    deadline: "Dec 30, 2024",
    salary: "$45,000 - $55,000",
    featured: false,
    sponsored: false,
    tags: ["Healthcare", "Full-time", "Field Work"],
    description: "Coordinate community health initiatives and primary healthcare strengthening programs.",
    applicants: 34,
  },
  {
    id: 7,
    type: "event",
    title: "Agricultural Innovation Workshop",
    organization: "FAO & IITA",
    location: "Calabar, Cross River",
    date: "Jan 15-16, 2025",
    featured: false,
    sponsored: false,
    tags: ["Agriculture", "Training", "Innovation"],
    description: "Hands-on workshop on climate-smart agriculture techniques for smallholder farmers.",
    attendees: 150,
  },
  {
    id: 8,
    type: "grant",
    title: "Women in Development Initiative",
    organization: "UN Women",
    location: "All Niger Delta States",
    deadline: "Feb 1, 2025",
    amount: "$10,000 - $50,000",
    featured: false,
    sponsored: false,
    tags: ["Women", "Empowerment", "NGO"],
    description: "Grants for organizations advancing gender equality and women's economic empowerment.",
    applicants: 89,
  },
]

const sectors = [
  "All Sectors",
  "Agriculture",
  "Climate & Environment",
  "Education",
  "Healthcare",
  "Technology",
  "Youth Development",
  "Women Empowerment",
]

const locations = [
  "All Locations",
  "Akwa Ibom",
  "Bayelsa",
  "Cross River",
  "Delta",
  "Edo",
  "Imo",
  "Ondo",
  "Rivers",
  "Abuja",
  "Remote",
]

const typeIcons = {
  job: Briefcase,
  grant: Gift,
  event: Calendar,
}

const typeColors = {
  job: "bg-primary/10 text-primary border-primary/30",
  grant: "bg-accent/10 text-accent border-accent/30",
  event: "bg-chart-3/10 text-chart-3 border-chart-3/30",
}

export default function OpportunitiesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [typeFilter, setTypeFilter] = useState<string>("all")
  const [sectorFilter, setSectorFilter] = useState<string>("All Sectors")
  const [locationFilter, setLocationFilter] = useState<string>("All Locations")
  const [savedItems, setSavedItems] = useState<number[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const filteredOpportunities = opportunities.filter((opp) => {
    const matchesSearch = opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      opp.organization.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = typeFilter === "all" || opp.type === typeFilter
    const matchesLocation = locationFilter === "All Locations" || 
      opp.location.includes(locationFilter)
    return matchesSearch && matchesType && matchesLocation
  })

  const toggleSave = (id: number) => {
    setSavedItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  const activeFiltersCount = [
    typeFilter !== "all",
    sectorFilter !== "All Sectors",
    locationFilter !== "All Locations",
  ].filter(Boolean).length

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-secondary/30 border-b border-border py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-foreground">Opportunities Hub</h1>
            <p className="text-muted-foreground mt-2">
              Discover jobs, grants, and events in the Niger Delta development sector
            </p>

            {/* Search and Filters */}
            <div className="mt-6 flex flex-col lg:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search opportunities..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-background"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button
                  variant={typeFilter === "all" ? "default" : "outline"}
                  onClick={() => setTypeFilter("all")}
                >
                  All
                </Button>
                <Button
                  variant={typeFilter === "job" ? "default" : "outline"}
                  onClick={() => setTypeFilter("job")}
                >
                  <Briefcase className="h-4 w-4 mr-2" />
                  Jobs
                </Button>
                <Button
                  variant={typeFilter === "grant" ? "default" : "outline"}
                  onClick={() => setTypeFilter("grant")}
                >
                  <Gift className="h-4 w-4 mr-2" />
                  Grants
                </Button>
                <Button
                  variant={typeFilter === "event" ? "default" : "outline"}
                  onClick={() => setTypeFilter("event")}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Events
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                  {activeFiltersCount > 0 && (
                    <Badge className="ml-2 h-5 w-5 p-0 flex items-center justify-center">
                      {activeFiltersCount}
                    </Badge>
                  )}
                </Button>
              </div>
            </div>

            {/* Advanced Filters */}
            <div className={`mt-4 flex flex-wrap gap-4 ${showFilters ? 'block' : 'hidden lg:flex'}`}>
              <Select value={sectorFilter} onValueChange={setSectorFilter}>
                <SelectTrigger className="w-48 bg-background">
                  <SelectValue placeholder="Sector" />
                </SelectTrigger>
                <SelectContent>
                  {sectors.map((sector) => (
                    <SelectItem key={sector} value={sector}>
                      {sector}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="w-48 bg-background">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {activeFiltersCount > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setTypeFilter("all")
                    setSectorFilter("All Sectors")
                    setLocationFilter("All Locations")
                  }}
                >
                  <X className="h-4 w-4 mr-1" />
                  Clear Filters
                </Button>
              )}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Showing <span className="text-foreground font-medium">{filteredOpportunities.length}</span> opportunities
              </p>
              <Select defaultValue="relevance">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="deadline">Deadline Soon</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              {filteredOpportunities.map((opp) => {
                const Icon = typeIcons[opp.type as keyof typeof typeIcons]
                const colorClass = typeColors[opp.type as keyof typeof typeColors]

                return (
                  <Card
                    key={opp.id}
                    className={`transition-all hover:border-primary/50 ${opp.featured ? 'border-primary/30' : ''}`}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                        {/* Icon */}
                        <div className={`h-14 w-14 rounded-xl flex items-center justify-center shrink-0 ${colorClass}`}>
                          <Icon className="h-7 w-7" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-2 flex-wrap">
                                <h3 className="text-lg font-semibold text-foreground">
                                  {opp.title}
                                </h3>
                                {opp.featured && (
                                  <Badge className="bg-primary/10 text-primary border-0">
                                    Featured
                                  </Badge>
                                )}
                                {opp.sponsored && (
                                  <Badge variant="outline" className="text-xs">
                                    Sponsored
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground flex-wrap">
                                <span className="flex items-center gap-1">
                                  <Building2 className="h-4 w-4" />
                                  {opp.organization}
                                </span>
                                <span className="flex items-center gap-1">
                                  <MapPin className="h-4 w-4" />
                                  {opp.location}
                                </span>
                                {opp.salary && (
                                  <span className="flex items-center gap-1 text-primary">
                                    <DollarSign className="h-4 w-4" />
                                    {opp.salary}
                                  </span>
                                )}
                                {opp.amount && (
                                  <span className="flex items-center gap-1 text-accent">
                                    <Gift className="h-4 w-4" />
                                    {opp.amount}
                                  </span>
                                )}
                              </div>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => toggleSave(opp.id)}
                              className="shrink-0"
                            >
                              <Bookmark
                                className={`h-5 w-5 ${savedItems.includes(opp.id) ? 'fill-primary text-primary' : ''}`}
                              />
                            </Button>
                          </div>

                          <p className="text-muted-foreground mt-3 line-clamp-2">
                            {opp.description}
                          </p>

                          <div className="flex items-center justify-between mt-4 flex-wrap gap-4">
                            <div className="flex items-center gap-2 flex-wrap">
                              {opp.tags.map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                {(opp.applicants || opp.attendees) && (
                                  <span className="flex items-center gap-1">
                                    <Users className="h-4 w-4" />
                                    {opp.applicants ? `${opp.applicants} applicants` : `${opp.attendees} attending`}
                                  </span>
                                )}
                                <span className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" />
                                  {opp.deadline || opp.date}
                                </span>
                              </div>
                              <Button className="shrink-0">
                                Apply Now
                                <ChevronRight className="h-4 w-4 ml-1" />
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

            {filteredOpportunities.length === 0 && (
              <div className="text-center py-12">
                <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">No opportunities found</h3>
                <p className="text-muted-foreground mt-1">
                  Try adjusting your search or filters
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
