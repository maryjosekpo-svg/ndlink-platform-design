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
  List,
  Map,
  Calendar,
  Building2,
  Users,
  DollarSign,
  ExternalLink,
  Filter,
  ChevronRight,
} from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Niger Delta Livelihood Enhancement Program",
    organization: "UNDP Nigeria",
    sector: "Livelihoods",
    status: "Active",
    budget: "$12.5M",
    startDate: "Jan 2024",
    endDate: "Dec 2026",
    location: "Rivers, Bayelsa, Delta",
    beneficiaries: "45,000",
    description: "Comprehensive livelihood support program targeting vulnerable communities in coastal areas with skills training and micro-enterprise development.",
    partners: ["World Bank", "NDDC", "State Governments"],
    coordinates: { lat: 4.8156, lng: 6.9764 },
  },
  {
    id: 2,
    title: "Clean Energy Access Initiative",
    organization: "Shell Foundation",
    sector: "Energy",
    status: "Active",
    budget: "$8.2M",
    startDate: "Mar 2024",
    endDate: "Feb 2027",
    location: "Akwa Ibom, Cross River",
    beneficiaries: "30,000",
    description: "Deploying solar mini-grids and clean cooking solutions to off-grid communities in the Niger Delta region.",
    partners: ["USAID", "All On", "REA"],
    coordinates: { lat: 5.0377, lng: 7.9128 },
  },
  {
    id: 3,
    title: "Youth Employment & Skills Development",
    organization: "African Development Bank",
    sector: "Education",
    status: "Active",
    budget: "$15M",
    startDate: "Jun 2023",
    endDate: "May 2026",
    location: "All 9 States",
    beneficiaries: "100,000",
    description: "Multi-state youth empowerment program providing vocational training, digital skills, and job placement support.",
    partners: ["GIZ", "British Council", "NDE"],
    coordinates: { lat: 5.5326, lng: 5.7662 },
  },
  {
    id: 4,
    title: "Mangrove Restoration & Blue Carbon",
    organization: "IUCN",
    sector: "Environment",
    status: "Active",
    budget: "$6.8M",
    startDate: "Sep 2024",
    endDate: "Aug 2028",
    location: "Bayelsa, Rivers",
    beneficiaries: "25,000",
    description: "Large-scale mangrove ecosystem restoration combining conservation with community-based sustainable livelihoods.",
    partners: ["WWF", "TNC", "HYPREP"],
    coordinates: { lat: 4.6697, lng: 6.2629 },
  },
  {
    id: 5,
    title: "Primary Healthcare Strengthening",
    organization: "WHO Nigeria",
    sector: "Health",
    status: "Active",
    budget: "$10.3M",
    startDate: "Jan 2024",
    endDate: "Dec 2027",
    location: "Delta, Edo, Ondo",
    beneficiaries: "500,000",
    description: "Strengthening primary healthcare systems through facility upgrades, staff training, and community health worker programs.",
    partners: ["UNICEF", "Bill & Melinda Gates Foundation", "FMOH"],
    coordinates: { lat: 5.8987, lng: 5.6755 },
  },
  {
    id: 6,
    title: "Agricultural Value Chain Development",
    organization: "IFAD",
    sector: "Agriculture",
    status: "Completed",
    budget: "$22M",
    startDate: "Mar 2020",
    endDate: "Feb 2024",
    location: "Rivers, Imo, Abia",
    beneficiaries: "75,000",
    description: "Supporting smallholder farmers with improved inputs, market access, and post-harvest processing facilities.",
    partners: ["FAO", "NAFDAC", "CBN"],
    coordinates: { lat: 5.4527, lng: 7.5248 },
  },
]

const sectors = ["All Sectors", "Livelihoods", "Energy", "Education", "Environment", "Health", "Agriculture", "Water & Sanitation", "Governance"]
const states = ["All States", "Rivers", "Bayelsa", "Delta", "Akwa Ibom", "Cross River", "Edo", "Ondo", "Imo", "Abia"]
const statuses = ["All Status", "Active", "Completed", "Pipeline"]

const sectorColors: Record<string, string> = {
  Livelihoods: "bg-chart-1/20 text-chart-1",
  Energy: "bg-chart-3/20 text-chart-3",
  Education: "bg-chart-2/20 text-chart-2",
  Environment: "bg-primary/20 text-primary",
  Health: "bg-destructive/20 text-destructive",
  Agriculture: "bg-chart-5/20 text-chart-5",
}

const statusColors: Record<string, string> = {
  Active: "bg-primary/20 text-primary border-primary/30",
  Completed: "bg-muted text-muted-foreground border-border",
  Pipeline: "bg-chart-3/20 text-chart-3 border-chart-3/30",
}

export default function ProjectsPage() {
  const [viewMode, setViewMode] = useState<"list" | "map">("list")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSector, setSelectedSector] = useState("All Sectors")
  const [selectedState, setSelectedState] = useState("All States")
  const [selectedStatus, setSelectedStatus] = useState("All Status")

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.organization.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesSector = selectedSector === "All Sectors" || project.sector === selectedSector
    const matchesState = selectedState === "All States" || project.location.includes(selectedState)
    const matchesStatus = selectedStatus === "All Status" || project.status === selectedStatus
    return matchesSearch && matchesSector && matchesState && matchesStatus
  })

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <div className="bg-card border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Projects & Tenders</h1>
                <p className="mt-2 text-muted-foreground">
                  Explore development projects across the Niger Delta. See who is doing what and where.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4 mr-2" />
                  List
                </Button>
                <Button
                  variant={viewMode === "map" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("map")}
                >
                  <Map className="h-4 w-4 mr-2" />
                  Map
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="border-b border-border bg-card/50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search projects, organizations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex flex-wrap gap-3">
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
                <Select value={selectedState} onValueChange={setSelectedState}>
                  <SelectTrigger className="w-[160px]">
                    <MapPin className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="State" />
                  </SelectTrigger>
                  <SelectContent>
                    {states.map((state) => (
                      <SelectItem key={state} value={state}>{state}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    {statuses.map((status) => (
                      <SelectItem key={status} value={status}>{status}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          {viewMode === "map" ? (
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Map placeholder */}
              <div className="lg:col-span-2 rounded-xl border border-border bg-card overflow-hidden">
                <div className="relative h-[600px] bg-secondary/30 flex items-center justify-center">
                  <div className="text-center">
                    <Map className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Interactive Map View</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Showing {filteredProjects.length} projects across the Niger Delta
                    </p>
                  </div>
                  {/* Simulated map markers */}
                  <div className="absolute inset-0 p-8">
                    {filteredProjects.slice(0, 5).map((project, index) => (
                      <div
                        key={project.id}
                        className="absolute w-4 h-4 rounded-full bg-primary animate-pulse cursor-pointer"
                        style={{
                          top: `${20 + index * 15}%`,
                          left: `${25 + index * 12}%`,
                        }}
                        title={project.title}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Project list sidebar */}
              <div className="space-y-4 max-h-[600px] overflow-y-auto">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="rounded-lg border border-border bg-card p-4 hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <Badge className={sectorColors[project.sector]}>
                        {project.sector}
                      </Badge>
                      <Badge variant="outline" className={statusColors[project.status]}>
                        {project.status}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-foreground line-clamp-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{project.organization}</p>
                    <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {project.location}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground mb-6">
                Showing {filteredProjects.length} projects
              </div>
              
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Main content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge className={sectorColors[project.sector]}>
                          {project.sector}
                        </Badge>
                        <Badge variant="outline" className={statusColors[project.status]}>
                          {project.status}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 mt-2">
                        <Building2 className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{project.organization}</span>
                      </div>
                      
                      <p className="mt-4 text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.partners.map((partner) => (
                          <Badge key={partner} variant="secondary" className="text-xs">
                            {partner}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Stats sidebar */}
                    <div className="lg:w-64 flex-shrink-0 space-y-4 p-4 rounded-lg bg-secondary/30">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <DollarSign className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Budget</div>
                          <div className="font-semibold text-foreground">{project.budget}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-chart-2/10 flex items-center justify-center">
                          <Users className="h-5 w-5 text-chart-2" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Beneficiaries</div>
                          <div className="font-semibold text-foreground">{project.beneficiaries}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-chart-3/10 flex items-center justify-center">
                          <Calendar className="h-5 w-5 text-chart-3" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Timeline</div>
                          <div className="font-semibold text-foreground text-sm">
                            {project.startDate} - {project.endDate}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center">
                          <MapPin className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground">Location</div>
                          <div className="font-semibold text-foreground text-sm">{project.location}</div>
                        </div>
                      </div>
                      
                      <Button className="w-full mt-4" variant="outline">
                        View Details
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
