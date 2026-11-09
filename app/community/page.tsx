"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import {
  Search,
  MessageSquare,
  Heart,
  Share2,
  Award,
  Users,
  TrendingUp,
  Plus,
  Clock,
  CheckCircle2,
  Star,
  Flame,
  ArrowRight,
  Send,
} from "lucide-react"
import Link from "next/link"

const discussions = [
  {
    id: 1,
    title: "Best practices for community-based M&E in rural areas",
    content: "I'm working on designing an M&E framework for a rural health project. What are your experiences with participatory approaches that actually work on the ground?",
    author: "Emmanuel Bassey",
    avatar: "EB",
    color: "bg-accent/20 text-accent",
    organization: "ActionAid",
    date: "2 hours ago",
    replies: 23,
    likes: 45,
    views: 320,
    tags: ["M&E", "Rural Development", "Community"],
    pinned: true,
  },
  {
    id: 2,
    title: "Climate funding opportunities for 2025 - Let's compile a list",
    content: "With the new year approaching, I think it would be helpful to create a comprehensive list of climate-related funding opportunities. I'll start with what I know...",
    author: "Dr. Amaka Okonkwo",
    avatar: "AO",
    color: "bg-primary/20 text-primary",
    organization: "IUCN Nigeria",
    date: "5 hours ago",
    replies: 67,
    likes: 128,
    views: 890,
    tags: ["Funding", "Climate", "Resources"],
    pinned: true,
  },
  {
    id: 3,
    title: "Youth engagement strategies that actually work",
    content: "After 5 years of working with youth programs, here are my top lessons learned for meaningful youth engagement...",
    author: "Blessing Okoro",
    avatar: "BO",
    color: "bg-chart-3/20 text-chart-3",
    organization: "UN Women",
    date: "1 day ago",
    replies: 34,
    likes: 89,
    views: 456,
    tags: ["Youth", "Engagement", "Best Practices"],
    pinned: false,
  },
  {
    id: 4,
    title: "Digital tools for field data collection - recommendations?",
    content: "We're transitioning from paper-based surveys to digital. What tools have worked well for you in low-connectivity areas?",
    author: "Chisom Nwachukwu",
    avatar: "CN",
    color: "bg-chart-4/20 text-chart-4",
    organization: "FAO",
    date: "2 days ago",
    replies: 45,
    likes: 56,
    views: 380,
    tags: ["Technology", "Data Collection", "Field Work"],
    pinned: false,
  },
  {
    id: 5,
    title: "Networking at the NDDC Summit - Who's attending?",
    content: "Looking forward to the upcoming Niger Delta Development Summit in February. Would love to connect with fellow professionals!",
    author: "Fatima Abdullahi",
    avatar: "FA",
    color: "bg-accent/20 text-accent",
    organization: "WHO Nigeria",
    date: "3 days ago",
    replies: 28,
    likes: 42,
    views: 290,
    tags: ["Networking", "Events", "NDDC"],
    pinned: false,
  },
]

const topContributors = [
  {
    id: 1,
    name: "Dr. Amaka Okonkwo",
    avatar: "AO",
    color: "bg-primary/20 text-primary",
    contributions: 156,
    badge: "Expert",
    rank: 1,
  },
  {
    id: 2,
    name: "Emmanuel Bassey",
    avatar: "EB",
    color: "bg-accent/20 text-accent",
    contributions: 134,
    badge: "Rising Star",
    rank: 2,
  },
  {
    id: 3,
    name: "Blessing Okoro",
    avatar: "BO",
    color: "bg-chart-3/20 text-chart-3",
    contributions: 98,
    badge: "Active",
    rank: 3,
  },
  {
    id: 4,
    name: "Fatima Abdullahi",
    avatar: "FA",
    color: "bg-chart-4/20 text-chart-4",
    contributions: 87,
    badge: null,
    rank: 4,
  },
  {
    id: 5,
    name: "Chisom Nwachukwu",
    avatar: "CN",
    color: "bg-primary/20 text-primary",
    contributions: 76,
    badge: null,
    rank: 5,
  },
]

const badges = [
  { name: "Expert", icon: Star, color: "text-chart-3", description: "Top 1% contributor" },
  { name: "Rising Star", icon: TrendingUp, color: "text-accent", description: "Fast growing influence" },
  { name: "Active", icon: Flame, color: "text-destructive", description: "Daily contributor" },
  { name: "Verified", icon: CheckCircle2, color: "text-primary", description: "Verified professional" },
]

const topics = [
  { name: "All Topics", count: 342 },
  { name: "M&E", count: 45 },
  { name: "Climate", count: 38 },
  { name: "Youth", count: 52 },
  { name: "Funding", count: 67 },
  { name: "Technology", count: 31 },
]

export default function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTopic, setSelectedTopic] = useState("All Topics")
  const [likedPosts, setLikedPosts] = useState<number[]>([])

  const filteredDiscussions = discussions.filter((discussion) => {
    const matchesSearch = discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      discussion.content.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTopic = selectedTopic === "All Topics" || 
      discussion.tags.some(tag => tag.toLowerCase().includes(selectedTopic.toLowerCase()))
    return matchesSearch && matchesTopic
  })

  const toggleLike = (id: number) => {
    setLikedPosts(prev => 
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
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Community</h1>
                <p className="text-muted-foreground mt-2">
                  Connect, share knowledge, and grow together
                </p>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Start Discussion
              </Button>
            </div>

            {/* Search */}
            <div className="mt-6 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search discussions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background"
              />
            </div>

            {/* Topic Pills */}
            <div className="mt-4 flex gap-2 flex-wrap">
              {topics.map((topic) => (
                <Button
                  key={topic.name}
                  variant={selectedTopic === topic.name ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTopic(topic.name)}
                >
                  {topic.name}
                  <span className="ml-2 text-xs opacity-70">{topic.count}</span>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Discussions */}
              <div className="flex-1">
                <div className="space-y-4">
                  {filteredDiscussions.map((discussion) => (
                    <Card key={discussion.id} className="group hover:border-primary/50 transition-all">
                      <CardContent className="p-6">
                        {/* Header */}
                        <div className="flex items-start gap-4">
                          <div className={`h-12 w-12 rounded-full ${discussion.color} flex items-center justify-center text-lg font-bold shrink-0`}>
                            {discussion.avatar}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              {discussion.pinned && (
                                <Badge className="bg-primary/10 text-primary border-0">Pinned</Badge>
                              )}
                              <Link 
                                href={`/community/${discussion.id}`}
                                className="font-semibold text-foreground hover:text-primary transition-colors"
                              >
                                {discussion.title}
                              </Link>
                            </div>
                            <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                              <span className="font-medium text-foreground">{discussion.author}</span>
                              <span>{discussion.organization}</span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-3.5 w-3.5" />
                                {discussion.date}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <p className="text-muted-foreground mt-4 line-clamp-2">
                          {discussion.content}
                        </p>

                        {/* Tags */}
                        <div className="flex items-center gap-2 mt-4 flex-wrap">
                          {discussion.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                          <div className="flex items-center gap-4">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="gap-2"
                              onClick={() => toggleLike(discussion.id)}
                            >
                              <Heart 
                                className={`h-4 w-4 ${likedPosts.includes(discussion.id) ? 'fill-destructive text-destructive' : ''}`} 
                              />
                              {discussion.likes + (likedPosts.includes(discussion.id) ? 1 : 0)}
                            </Button>
                            <Button variant="ghost" size="sm" className="gap-2">
                              <MessageSquare className="h-4 w-4" />
                              {discussion.replies}
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Share2 className="h-4 w-4" />
                            </Button>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {discussion.views} views
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {filteredDiscussions.length === 0 && (
                  <div className="text-center py-12">
                    <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                      <Search className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">No discussions found</h3>
                    <p className="text-muted-foreground mt-1">
                      Try adjusting your search or start a new discussion
                    </p>
                  </div>
                )}

                {filteredDiscussions.length > 0 && (
                  <div className="mt-6 text-center">
                    <Button variant="outline">
                      Load More Discussions
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="w-full lg:w-80 space-y-6">
                {/* Quick Post */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Post</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Textarea 
                      placeholder="Share something with the community..."
                      className="min-h-[100px] resize-none"
                    />
                    <Button className="w-full mt-3">
                      <Send className="h-4 w-4 mr-2" />
                      Post
                    </Button>
                  </CardContent>
                </Card>

                {/* Top Contributors */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      Top Contributors
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {topContributors.map((contributor) => (
                      <div key={contributor.id} className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground w-4">
                          {contributor.rank}
                        </span>
                        <div className={`h-10 w-10 rounded-full ${contributor.color} flex items-center justify-center text-sm font-bold`}>
                          {contributor.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-foreground text-sm truncate">
                              {contributor.name}
                            </span>
                            {contributor.badge && (
                              <Badge variant="secondary" className="text-xs shrink-0">
                                {contributor.badge}
                              </Badge>
                            )}
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {contributor.contributions} contributions
                          </span>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/community/leaderboard">
                        View Leaderboard
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Badges */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Star className="h-5 w-5 text-chart-3" />
                      Recognition Badges
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {badges.map((badge) => (
                      <div key={badge.name} className="flex items-center gap-3">
                        <badge.icon className={`h-5 w-5 ${badge.color}`} />
                        <div>
                          <div className="text-sm font-medium text-foreground">{badge.name}</div>
                          <div className="text-xs text-muted-foreground">{badge.description}</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Community Stats */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Users className="h-5 w-5 text-accent" />
                      Community Stats
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-secondary/50 rounded-lg">
                        <div className="text-2xl font-bold text-foreground">15K+</div>
                        <div className="text-xs text-muted-foreground">Members</div>
                      </div>
                      <div className="text-center p-3 bg-secondary/50 rounded-lg">
                        <div className="text-2xl font-bold text-foreground">342</div>
                        <div className="text-xs text-muted-foreground">Discussions</div>
                      </div>
                      <div className="text-center p-3 bg-secondary/50 rounded-lg">
                        <div className="text-2xl font-bold text-foreground">2.1K</div>
                        <div className="text-xs text-muted-foreground">Replies Today</div>
                      </div>
                      <div className="text-center p-3 bg-secondary/50 rounded-lg">
                        <div className="text-2xl font-bold text-foreground">89</div>
                        <div className="text-xs text-muted-foreground">Online Now</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
