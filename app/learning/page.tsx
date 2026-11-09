"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
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
  Play,
  BookOpen,
  Award,
  Lock,
  Star,
  Users,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

const courses = [
  {
    id: 1,
    title: "Project Management for Development Professionals",
    description: "Master the fundamentals of managing development projects from initiation to closure.",
    instructor: "Dr. Amaka Okonkwo",
    organization: "NDLink Academy",
    duration: "6 hours",
    modules: 12,
    level: "Beginner",
    rating: 4.9,
    students: 2340,
    price: "Free",
    tags: ["Project Management", "PMP Prep"],
    progress: 75,
    enrolled: true,
    featured: true,
  },
  {
    id: 2,
    title: "Monitoring & Evaluation Fundamentals",
    description: "Learn to design and implement effective M&E frameworks for development programs.",
    instructor: "Emmanuel Bassey",
    organization: "ActionAid",
    duration: "4 hours",
    modules: 8,
    level: "Intermediate",
    rating: 4.8,
    students: 1890,
    price: "Free",
    tags: ["M&E", "Data Analysis"],
    progress: 30,
    enrolled: true,
    featured: true,
  },
  {
    id: 3,
    title: "Grant Writing Masterclass",
    description: "Develop winning proposals that secure funding for your organization and projects.",
    instructor: "Fatima Abdullahi",
    organization: "WHO Nigeria",
    duration: "5 hours",
    modules: 10,
    level: "Intermediate",
    rating: 4.9,
    students: 1567,
    price: "$29",
    premium: true,
    tags: ["Grant Writing", "Fundraising"],
    progress: 0,
    enrolled: false,
    featured: false,
  },
  {
    id: 4,
    title: "Climate Adaptation Strategies",
    description: "Understanding climate change impacts and designing effective adaptation interventions.",
    instructor: "Dr. Obiora Eze",
    organization: "IUCN",
    duration: "8 hours",
    modules: 15,
    level: "Advanced",
    rating: 4.7,
    students: 987,
    price: "Free",
    tags: ["Climate", "Environment"],
    progress: 0,
    enrolled: false,
    featured: false,
  },
  {
    id: 5,
    title: "Community Engagement Best Practices",
    description: "Effective strategies for meaningful community participation in development programs.",
    instructor: "Blessing Okoro",
    organization: "UN Women",
    duration: "3 hours",
    modules: 6,
    level: "Beginner",
    rating: 4.8,
    students: 2100,
    price: "Free",
    tags: ["Community", "Participation"],
    progress: 100,
    enrolled: true,
    completed: true,
    featured: false,
  },
  {
    id: 6,
    title: "Digital Tools for Development",
    description: "Leverage technology to enhance program delivery and organizational effectiveness.",
    instructor: "Chisom Nwachukwu",
    organization: "FAO",
    duration: "4 hours",
    modules: 8,
    level: "Beginner",
    rating: 4.6,
    students: 1450,
    price: "$19",
    premium: true,
    tags: ["Technology", "Digital Skills"],
    progress: 0,
    enrolled: false,
    featured: false,
  },
]

const categories = [
  "All Courses",
  "Project Management",
  "M&E",
  "Grant Writing",
  "Climate & Environment",
  "Community Development",
  "Digital Skills",
]

const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"]

export default function LearningPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("All Courses")
  const [levelFilter, setLevelFilter] = useState("All Levels")
  const [showEnrolledOnly, setShowEnrolledOnly] = useState(false)

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesLevel = levelFilter === "All Levels" || course.level === levelFilter
    const matchesEnrolled = !showEnrolledOnly || course.enrolled
    return matchesSearch && matchesLevel && matchesEnrolled
  })

  const enrolledCourses = courses.filter(c => c.enrolled && !c.completed)
  const completedCourses = courses.filter(c => c.completed)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-secondary/30 border-b border-border py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Learning Hub</h1>
                <p className="text-muted-foreground mt-2">
                  Micro-learning modules to advance your development career
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">{enrolledCourses.length}</div>
                  <div className="text-xs text-muted-foreground">In Progress</div>
                </div>
                <div className="h-8 w-px bg-border" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{completedCourses.length}</div>
                  <div className="text-xs text-muted-foreground">Completed</div>
                </div>
              </div>
            </div>

            {/* Search and Filters */}
            <div className="mt-6 flex flex-col lg:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-background"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-44 bg-background">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={levelFilter} onValueChange={setLevelFilter}>
                  <SelectTrigger className="w-36 bg-background">
                    <SelectValue placeholder="Level" />
                  </SelectTrigger>
                  <SelectContent>
                    {levels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button
                  variant={showEnrolledOnly ? "default" : "outline"}
                  onClick={() => setShowEnrolledOnly(!showEnrolledOnly)}
                >
                  My Courses
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Continue Learning */}
        {enrolledCourses.length > 0 && !showEnrolledOnly && (
          <section className="py-8 border-b border-border">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Continue Learning
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {enrolledCourses.map((course) => (
                  <Card key={course.id} className="group hover:border-primary/50 transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <BookOpen className="h-8 w-8 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {course.title}
                          </h3>
                          <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                            <span>{course.instructor}</span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5" />
                              {course.duration}
                            </span>
                          </div>
                          <div className="mt-3">
                            <div className="flex items-center justify-between text-sm mb-1">
                              <span className="text-muted-foreground">Progress</span>
                              <span className="font-medium text-foreground">{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                          </div>
                          <Button className="mt-4 w-full" asChild>
                            <Link href={`/learning/${course.id}`}>
                              <Play className="h-4 w-4 mr-2" />
                              Continue
                            </Link>
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

        {/* All Courses */}
        <section className="py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">
                {showEnrolledOnly ? "My Courses" : "All Courses"}
              </h2>
              <p className="text-muted-foreground">
                {filteredCourses.length} courses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="group hover:border-primary/50 transition-all flex flex-col">
                  <CardContent className="p-6 flex-1 flex flex-col">
                    {/* Header */}
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline">{course.level}</Badge>
                      {course.premium && (
                        <Badge className="bg-chart-3/10 text-chart-3 border-0">Premium</Badge>
                      )}
                      {course.completed && (
                        <Badge className="bg-primary/10 text-primary border-0">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Completed
                        </Badge>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2 flex-1">
                      {course.description}
                    </p>

                    {/* Instructor */}
                    <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                      <GraduationCap className="h-4 w-4" />
                      <span>{course.instructor}</span>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        {course.modules} modules
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-4 mt-3 text-sm">
                      <span className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-chart-3 fill-chart-3" />
                        <span className="font-medium text-foreground">{course.rating}</span>
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        {course.students.toLocaleString()} students
                      </span>
                    </div>

                    {/* Progress (if enrolled) */}
                    {course.enrolled && !course.completed && (
                      <div className="mt-4">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="text-foreground">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-1.5" />
                      </div>
                    )}

                    {/* Action */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                      <span className={`font-semibold ${course.price === "Free" ? "text-primary" : "text-foreground"}`}>
                        {course.price}
                      </span>
                      {course.enrolled ? (
                        <Button size="sm" asChild>
                          <Link href={`/learning/${course.id}`}>
                            <Play className="h-4 w-4 mr-1" />
                            {course.completed ? "Review" : "Continue"}
                          </Link>
                        </Button>
                      ) : course.premium ? (
                        <Button size="sm">
                          <Lock className="h-4 w-4 mr-1" />
                          Unlock
                        </Button>
                      ) : (
                        <Button size="sm" variant="secondary">
                          Enroll Free
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <div className="h-16 w-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">No courses found</h3>
                <p className="text-muted-foreground mt-1">
                  Try adjusting your search or filters
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Certification CTA */}
        <section className="py-16 bg-secondary/30 border-t border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground">
                Earn Professional Certifications
              </h2>
              <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
                Complete learning paths and earn recognized certifications to boost your career in development.
              </p>
              <Button size="lg" className="mt-6">
                View Certifications
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
