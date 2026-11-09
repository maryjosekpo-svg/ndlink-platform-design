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
  Search,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  ExternalLink,
  Filter,
  Star,
  CheckCircle2,
} from "lucide-react"
import Link from "next/link"

const talents = [
  {
    id: 1,
    name: "Dr. Amaka Okonkwo",
    title: "Climate Policy Expert",
    location: "Port Harcourt, Rivers",
    avatar: "AO",
    color: "bg-primary/20 text-primary",
    experience: "15+ years",
    verified: true,
    available: true,
    skills: ["Climate Policy", "Environmental Assessment", "Project Management", "Stakeholder Engagement"],
    certifications: ["PMP", "LEED AP"],
    bio: "Experienced climate policy expert with extensive work in sustainable development across West Africa. Former UNDP consultant.",
    rating: 4.9,
    reviews: 28,
  },
  {
    id: 2,
    name: "Emmanuel Bassey",
    title: "Youth Development Specialist",
    location: "Uyo, Akwa Ibom",
    avatar: "EB",
    color: "bg-accent/20 text-accent",
    experience: "8 years",
    verified: true,
    available: true,
    skills: ["Youth Programming", "Capacity Building", "M&E", "Community Mobilization"],
    certifications: ["ToT Certified", "MEAL Expert"],
    bio: "Passionate about youth empowerment and economic inclusion. Led programs reaching over 10,000 young people.",
    rating: 4.8,
    reviews: 19,
  },
  {
    id: 3,
    name: "Fatima Abdullahi",
    title: "Health Programs Director",
    location: "Benin City, Edo",
    avatar: "FA",
    color: "bg-chart-3/20 text-chart-3",
    experience: "12 years",
    verified: true,
    available: false,
    skills: ["Health Systems", "PHC", "Maternal Health", "Grant Management"],
    certifications: ["MPH", "Global Health Certificate"],
    bio: "Public health professional specializing in primary healthcare strengthening and maternal health programs.",
    rating: 4.9,
    reviews: 34,
  },
  {
    id: 4,
    name: "Chisom Nwachukwu",
    title: "Agricultural Economist",
    location: "Owerri, Imo",
    avatar: "CN",
    color: "bg-chart-4/20 text-chart-4",
    experience: "10 years",
    verified: true,
    available: true,
    skills: ["Agricultural Economics", "Value Chain Analysis", "Rural Development", "Data Analysis"],
    certifications: ["PhD Economics", "Agribusiness"],
    bio: "Research-focused economist with expertise in smallholder agriculture and food systems transformation.",
    rating: 4.7,
    reviews: 15,
  },
  {
    id: 5,
    name: "Obiora Eze",
    title: "Digital Skills Trainer",
    location: "Calabar, Cross River",
    avatar: "OE",
    color: "bg-primary/20 text-primary",
    experience: "6 years",
    verified: false,
    available: true,
    skills: ["Digital Literacy", "Web Development", "Training", "Curriculum Design"],
    certifications: ["Google Certified", "AWS Cloud"],
    bio: "Tech educator focused on bridging the digital divide in underserved communities.",
    rating: 4.6,
    reviews: 22,
  },
  {
    id: 6,
    name: "Blessing Okoro",
    title: "Gender & Inclusion Advisor",
    location: "Warri, Delta",
    avatar: "BO",
    color: "bg-accent/20 text-accent",
    experience: "9 years",
    verified: true,
    available: true,
    skills: ["Gender Mainstreaming", "Social Inclusion", "Policy Advocacy", "Research"],
    certifications: ["Gender Studies MA", "UNDP Certified"],
    bio: "Advocate for gender equality and social inclusion with experience across multiple UN agencies.",
    rating: 4.8,
    reviews: 27,
  },
]

const expertiseAreas = [
  "All Areas",
  "Agriculture",
  "Climate & Environment",
  "Education",
  "Healthcare",
  "Technology",
  "Youth Development",
  "Gender & Inclusion",
]

const experienceLevels = [
  "All Levels",
  "Entry Level (0-3 years)",
  "Mid Level (4-7 years)",
  "Senior (8-12 years)",
  "Expert (13+ years)",
]

export default function TalentPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [expertiseFilter, setExpertiseFilter] = useState("All Areas")
  const [experienceFilter, setExperienceFilter] = useState("All Levels")
  const [availableOnly, setAvailableOnly] = useState(false)
  const [showFilters, setShowFilters] = useState(false)

  const filteredTalents = talents.filter((talent) => {
    const matchesSearch = talent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      talent.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      talent.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesAvailable = !availableOnly || talent.available
    return matchesSearch && matchesAvailable
  })

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-secondary/30 border-b border-border py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Talent Marketplace</h1>
                <p className="text-muted-foreground mt-2">
                  Connect with skilled professionals across the Niger Delta
                </p>
              </div>
              <Button asChild>
                <Link href="/talent/profile">
                  Create Your Profile
                </Link>
              </Button>
            </div>

            {/* Search and Filters */}
            <div className="mt-6 flex flex-col lg:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search by name, title, or skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-background"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                <Select value={expertiseFilter} onValueChange={setExpertiseFilter}>
                  <SelectTrigger className="w-44 bg-background">
                    <SelectValue placeholder="Expertise" />
                  </SelectTrigger>
                  <SelectContent>
                    {expertiseAreas.map((area) => (
                      <SelectItem key={area} value={area}>
                        {area}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={experienceFilter} onValueChange={setExperienceFilter}>
                  <SelectTrigger className="w-48 bg-background">
                    <SelectValue placeholder="Experience" />
                  </SelectTrigger>
                  <SelectContent>
                    {experienceLevels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button
                  variant={availableOnly ? "default" : "outline"}
                  onClick={() => setAvailableOnly(!availableOnly)}
                >
                  Available Only
                </Button>
                <Button variant="outline" className="lg:hidden" onClick={() => setShowFilters(!showFilters)}>
                  <Filter className="h-4 w-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Showing <span className="text-foreground font-medium">{filteredTalents.length}</span> professionals
              </p>
              <Select defaultValue="relevance">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="experience">Most Experienced</SelectItem>
                  <SelectItem value="recent">Recently Active</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTalents.map((talent) => (
                <Card
                  key={talent.id}
                  className="group hover:border-primary/50 transition-all"
                >
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-start gap-4">
                      <div className={`h-14 w-14 rounded-full ${talent.color} flex items-center justify-center text-lg font-bold shrink-0`}>
                        {talent.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                            {talent.name}
                          </h3>
                          {talent.verified && (
                            <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground truncate">{talent.title}</p>
                        <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                          <MapPin className="h-3.5 w-3.5" />
                          <span className="truncate">{talent.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 mt-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-chart-3 fill-chart-3" />
                        <span className="font-medium text-foreground">{talent.rating}</span>
                        <span className="text-muted-foreground">({talent.reviews})</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Briefcase className="h-4 w-4" />
                        {talent.experience}
                      </div>
                      {talent.available ? (
                        <Badge className="bg-primary/10 text-primary border-0">Available</Badge>
                      ) : (
                        <Badge variant="secondary">Engaged</Badge>
                      )}
                    </div>

                    {/* Bio */}
                    <p className="text-sm text-muted-foreground mt-4 line-clamp-2">
                      {talent.bio}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {talent.skills.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {talent.skills.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{talent.skills.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Certifications */}
                    {talent.certifications.length > 0 && (
                      <div className="flex items-center gap-2 mt-3 text-sm">
                        <GraduationCap className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground truncate">
                          {talent.certifications.join(", ")}
                        </span>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex gap-2 mt-5">
                      <Button className="flex-1" asChild>
                        <Link href={`/talent/${talent.id}`}>
                          View Profile
                        </Link>
                      </Button>
                      <Button variant="outline" size="icon">
                        <Mail className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredTalents.length === 0 && (
              <div className="text-center py-12">
                <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">No professionals found</h3>
                <p className="text-muted-foreground mt-1">
                  Try adjusting your search or filters
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA for Recruiters */}
        <section className="py-16 bg-secondary/30 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground">
                Looking for Top Talent?
              </h2>
              <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
                Get premium access to our talent pool with advanced search filters, 
                direct messaging, and recruitment tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <Button size="lg">
                  Recruiter Access
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
