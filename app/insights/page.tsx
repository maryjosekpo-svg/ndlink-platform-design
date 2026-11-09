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
  Clock,
  User,
  Building2,
  Bookmark,
  Share2,
  Sparkles,
  TrendingUp,
  ArrowRight,
  FileText,
  BarChart3,
  Lightbulb,
} from "lucide-react"
import Link from "next/link"

const articles = [
  {
    id: 1,
    title: "Climate Resilience in Coastal Communities: Lessons from the Niger Delta",
    excerpt: "An in-depth analysis of successful climate adaptation strategies implemented across coastal communities, with key takeaways for policymakers and practitioners.",
    author: "Dr. Amaka Okonkwo",
    organization: "IUCN Nigeria",
    date: "Nov 28, 2024",
    readTime: "12 min read",
    category: "Research",
    tags: ["Climate", "Coastal Communities", "Adaptation"],
    featured: true,
    aiSummary: true,
    views: 2340,
  },
  {
    id: 2,
    title: "Youth Employment Programs: What Works and What Doesn't",
    excerpt: "Examining the effectiveness of various youth employment initiatives in the region, based on data from over 50 programs.",
    author: "Emmanuel Bassey",
    organization: "ActionAid",
    date: "Nov 25, 2024",
    readTime: "8 min read",
    category: "Analysis",
    tags: ["Youth", "Employment", "Programs"],
    featured: true,
    aiSummary: true,
    views: 1890,
  },
  {
    id: 3,
    title: "Digital Transformation in Agricultural Value Chains",
    excerpt: "How technology is reshaping agricultural markets and creating new opportunities for smallholder farmers.",
    author: "Chisom Nwachukwu",
    organization: "FAO",
    date: "Nov 22, 2024",
    readTime: "10 min read",
    category: "Innovation",
    tags: ["Agriculture", "Technology", "Value Chains"],
    featured: false,
    aiSummary: true,
    views: 1456,
  },
  {
    id: 4,
    title: "Maternal Health Outcomes: A Decade of Progress",
    excerpt: "Tracking improvements in maternal health indicators and identifying remaining challenges.",
    author: "Fatima Abdullahi",
    organization: "WHO Nigeria",
    date: "Nov 20, 2024",
    readTime: "15 min read",
    category: "Report",
    tags: ["Health", "Maternal Health", "Data"],
    featured: false,
    aiSummary: false,
    views: 1234,
  },
  {
    id: 5,
    title: "Sustainable Fisheries Management in the Niger Delta",
    excerpt: "Balancing economic needs with environmental conservation in the region's fishing communities.",
    author: "Dr. Obiora Eze",
    organization: "NDDC",
    date: "Nov 18, 2024",
    readTime: "9 min read",
    category: "Policy Brief",
    tags: ["Fisheries", "Environment", "Sustainability"],
    featured: false,
    aiSummary: true,
    views: 987,
  },
  {
    id: 6,
    title: "Gender-Responsive Programming: Best Practices Guide",
    excerpt: "Practical guidance for designing and implementing programs that advance gender equality.",
    author: "Blessing Okoro",
    organization: "UN Women",
    date: "Nov 15, 2024",
    readTime: "7 min read",
    category: "Guide",
    tags: ["Gender", "Programming", "Best Practices"],
    featured: false,
    aiSummary: false,
    views: 876,
  },
]

const categories = [
  { name: "All", icon: FileText },
  { name: "Research", icon: BarChart3 },
  { name: "Analysis", icon: TrendingUp },
  { name: "Innovation", icon: Lightbulb },
  { name: "Policy Brief", icon: FileText },
]

const topics = [
  "All Topics",
  "Climate & Environment",
  "Youth Development",
  "Healthcare",
  "Agriculture",
  "Gender & Inclusion",
  "Technology",
  "Education",
]

export default function InsightsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("All")
  const [topicFilter, setTopicFilter] = useState("All Topics")
  const [savedItems, setSavedItems] = useState<number[]>([])

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === "All" || article.category === categoryFilter
    return matchesSearch && matchesCategory
  })

  const featuredArticles = filteredArticles.filter(a => a.featured)
  const regularArticles = filteredArticles.filter(a => !a.featured)

  const toggleSave = (id: number) => {
    setSavedItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-secondary/30 border-b border-border py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-foreground">Insights & Content</h1>
            <p className="text-muted-foreground mt-2">
              Research, analysis, and thought leadership from across the region
            </p>

            {/* Search */}
            <div className="mt-6 flex flex-col lg:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search articles, reports, and analysis..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-background"
                />
              </div>
              <Select value={topicFilter} onValueChange={setTopicFilter}>
                <SelectTrigger className="w-48 bg-background">
                  <SelectValue placeholder="Topic" />
                </SelectTrigger>
                <SelectContent>
                  {topics.map((topic) => (
                    <SelectItem key={topic} value={topic}>
                      {topic}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Category Tabs */}
            <div className="mt-6 flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <Button
                  key={cat.name}
                  variant={categoryFilter === cat.name ? "default" : "outline"}
                  onClick={() => setCategoryFilter(cat.name)}
                  className="gap-2"
                >
                  <cat.icon className="h-4 w-4" />
                  {cat.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <section className="py-8 border-b border-border">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Featured Insights
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {featuredArticles.map((article) => (
                  <Card key={article.id} className="group hover:border-primary/50 transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge className="bg-primary/10 text-primary border-0">Featured</Badge>
                        <Badge variant="outline">{article.category}</Badge>
                        {article.aiSummary && (
                          <Badge variant="secondary" className="gap-1">
                            <Sparkles className="h-3 w-3" />
                            AI Summary
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        <Link href={`/insights/${article.id}`}>{article.title}</Link>
                      </h3>
                      <p className="text-muted-foreground mt-2 line-clamp-2">{article.excerpt}</p>
                      <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {article.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          {article.organization}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{article.date}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {article.readTime}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="icon" onClick={() => toggleSave(article.id)}>
                            <Bookmark className={`h-4 w-4 ${savedItems.includes(article.id) ? 'fill-primary text-primary' : ''}`} />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Articles */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">Latest Content</h2>
              <p className="text-muted-foreground">
                {filteredArticles.length} articles
              </p>
            </div>
            <div className="space-y-4">
              {regularArticles.map((article) => (
                <Card key={article.id} className="group hover:border-primary/50 transition-all">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <Badge variant="outline">{article.category}</Badge>
                          {article.aiSummary && (
                            <Badge variant="secondary" className="gap-1">
                              <Sparkles className="h-3 w-3" />
                              AI Summary
                            </Badge>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          <Link href={`/insights/${article.id}`}>{article.title}</Link>
                        </h3>
                        <p className="text-muted-foreground mt-2 line-clamp-2">{article.excerpt}</p>
                        <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground flex-wrap">
                          <span className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {article.author}
                          </span>
                          <span>{article.date}</span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {article.readTime}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mt-3">
                          {article.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex lg:flex-col items-center gap-2">
                        <Button variant="ghost" size="icon" onClick={() => toggleSave(article.id)}>
                          <Bookmark className={`h-4 w-4 ${savedItems.includes(article.id) ? 'fill-primary text-primary' : ''}`} />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">No articles found</h3>
                <p className="text-muted-foreground mt-1">
                  Try adjusting your search or filters
                </p>
              </div>
            )}

            {filteredArticles.length > 0 && (
              <div className="mt-8 text-center">
                <Button variant="outline">
                  Load More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
