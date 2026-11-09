"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
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
  Search,
  MapPin,
  CheckCircle2,
  Users,
  Building2,
  Globe,
  Mail,
  ExternalLink,
  Filter,
  Briefcase,
} from "lucide-react"

const organizations = [
  {
    id: 1,
    name: "UNDP Nigeria",
    type: "International Organization",
    sector: ["Livelihoods", "Governance", "Environment"],
    location: "Abuja, Nigeria",
    verified: true,
    description: "United Nations Development Programme supporting sustainable development across Nigeria with focus on poverty reduction, democratic governance, and environmental sustainability.",
    projectCount: 45,
    teamSize: "500+",
    website: "www.ng.undp.org",
    logo: "UN",
    featured: true,
  },
  {
    id: 2,
    name: "Shell Nigeria",
    type: "Private Sector",
    sector: ["Energy", "Livelihoods", "Education"],
    location: "Port Harcourt, Nigeria",
    verified: true,
    description: "Leading energy company with extensive community development programs in the Niger Delta focusing on enterprise development, education, and health.",
    projectCount: 120,
    teamSize: "5000+",
    website: "www.shell.com.ng",
    logo: "SN",
    featured: true,
  },
  {
    id: 3,
    name: "Niger Delta Development Commission",
    type: "Government",
    sector: ["Infrastructure", "Education", "Health"],
    location: "Port Harcourt, Nigeria",
    verified: true,
    description: "Federal government agency mandated to develop the Niger Delta region through sustainable infrastructure, human capital development, and environmental remediation.",
    projectCount: 200,
    teamSize: "2000+",
    website: "www.nddc.gov.ng",
    logo: "ND",
    featured: true,
  },
  {
    id: 4,
    name: "Foundation for Partnership Initiatives",
    type: "NGO",
    sector: ["Livelihoods", "Health", "Water & Sanitation"],
    location: "Lagos, Nigeria",
    verified: true,
    description: "Nigerian NGO implementing community-based development programs with focus on sustainable livelihoods and WASH in underserved communities.",
    projectCount: 35,
    teamSize: "150+",
    website: "www.fpinigeria.org",
    logo: "FP",
    featured: false,
  },
  {
    id: 5,
    name: "World Bank Nigeria",
    type: "International Organization",
    sector: ["Agriculture", "Finance", "Infrastructure"],
    location: "Abuja, Nigeria",
    verified: true,
    description: "Multilateral development bank providing financing, policy advice, and technical assistance for development programs across Nigeria.",
    projectCount: 80,
    teamSize: "300+",
    website: "www.worldbank.org",
    logo: "WB",
    featured: true,
  },
  {
    id: 6,
    name: "GIZ Nigeria",
    type: "International Organization",
    sector: ["Governance", "Energy", "Agriculture"],
    location: "Abuja, Nigeria",
    verified: true,
    description: "German development agency implementing bilateral cooperation programs in Nigeria focusing on good governance, sustainable economic development, and renewable energy.",
    projectCount: 28,
    teamSize: "200+",
    website: "www.giz.de",
    logo: "GZ",
    featured: false,
  },
  {
    id: 7,
    name: "ActionAid Nigeria",
    type: "NGO",
    sector: ["Education", "Governance", "Gender"],
    location: "Abuja, Nigeria",
    verified: true,
    description: "International NGO working with communities to end poverty and injustice through rights-based approaches and advocacy.",
    projectCount: 40,
    teamSize: "250+",
    website: "www.actionaid.org",
    logo: "AA",
    featured: false,
  },
  {
    id: 8,
    name: "HYPREP",
    type: "Government",
    sector: ["Environment", "Health", "Livelihoods"],
    location: "Bodo, Rivers State",
    verified: true,
    description: "Hydrocarbon Pollution Remediation Project implementing the UNEP Ogoniland cleanup and restoration recommendations.",
    projectCount: 15,
    teamSize: "500+",
    website: "www.hyprep.gov.ng",
    logo: "HY",
    featured: false,
  },
]

const orgTypes = ["All Types", "International Organization", "NGO", "Government", "Private Sector", "Donor"]
const sectors = ["All Sectors", "Livelihoods", "Energy", "Education", "Environment", "Health", "Agriculture", "Governance", "Infrastructure"]

const typeColors: Record<string, string> = {
  "International Organization": "bg-chart-2/20 text-chart-2",
  "NGO": "bg-primary/20 text-primary",
  "Government": "bg-chart-3/20 text-chart-3",
  "Private Sector": "bg-chart-4/20 text-chart-4",
  "Donor": "bg-chart-5/20 text-chart-5",
}

export default function OrganizationsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState("All Types")
  const [selectedSector, setSelectedSector] = useState("All Sectors")

  const filteredOrgs = organizations.filter((org) => {
    const matchesSearch = org.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      org.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = selectedType === "All Types" || org.type === selectedType
    const matchesSector = selectedSector === "All Sectors" || org.sector.includes(selectedSector)
    return matchesSearch && matchesType && matchesSector
  })

  const featuredOrgs = filteredOrgs.filter((org) => org.featured)
  const otherOrgs = filteredOrgs.filter((org) => !org.featured)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <div className="bg-card border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-3xl font-bold text-foreground">Organizations Directory</h1>
            <p className="mt-2 text-muted-foreground">
              Discover development organizations working across the Niger Delta region.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="border-b border-border bg-card/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search organizations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex flex-wrap gap-3">
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="w-[200px]">
                    <Building2 className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {orgTypes.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedSector} onValueChange={setSelectedSector}>
                  <SelectTrigger className="w-[160px]">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Sector" />
                  </SelectTrigger>
                  <SelectContent>
                    {sectors.map((sector) => (
                      <SelectItem key={sector} value={sector}>{sector}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          {/* Featured Organizations */}
          {featuredOrgs.length > 0 && (
            <div className="mb-12">
              <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Featured Organizations
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredOrgs.map((org) => (
                  <div
                    key={org.id}
                    className="rounded-xl border border-primary/30 bg-card p-6 hover:border-primary transition-colors group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16" />
                    
                    <div className="relative">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-lg font-bold text-primary">{org.logo}</span>
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-foreground truncate">{org.name}</h3>
                            {org.verified && (
                              <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                            )}
                          </div>
                          <Badge className={typeColors[org.type]} variant="secondary">
                            {org.type}
                          </Badge>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                        {org.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {org.sector.slice(0, 3).map((s) => (
                          <Badge key={s} variant="outline" className="text-xs">
                            {s}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm border-t border-border pt-4">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Briefcase className="h-4 w-4" />
                          <span>{org.projectCount} projects</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users className="h-4 w-4" />
                          <span>{org.teamSize} staff</span>
                        </div>
                      </div>
                      
                      <Button className="w-full mt-4" variant="outline">
                        View Profile
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* All Organizations */}
          <div>
            <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
              All Organizations ({filteredOrgs.length})
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {otherOrgs.map((org) => (
                <div
                  key={org.id}
                  className="rounded-xl border border-border bg-card p-5 hover:border-primary/50 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-muted-foreground">{org.logo}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                          {org.name}
                        </h3>
                        {org.verified && (
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        )}
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                        <Badge className={typeColors[org.type]} variant="secondary">
                          {org.type}
                        </Badge>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {org.location}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {org.description}
                      </p>
                      <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-3 w-3" />
                          {org.projectCount} projects
                        </span>
                        <span className="flex items-center gap-1">
                          <Globe className="h-3 w-3" />
                          {org.website}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
