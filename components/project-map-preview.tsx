"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, MapPin } from "lucide-react"
import Link from "next/link"

const projectLocations = [
  { id: 1, state: "Rivers", projects: 145, top: "45%", left: "52%" },
  { id: 2, state: "Bayelsa", projects: 89, top: "55%", left: "42%" },
  { id: 3, state: "Delta", projects: 120, top: "35%", left: "35%" },
  { id: 4, state: "Akwa Ibom", projects: 78, top: "60%", left: "65%" },
  { id: 5, state: "Cross River", projects: 65, top: "40%", left: "75%" },
  { id: 6, state: "Edo", projects: 55, top: "20%", left: "30%" },
  { id: 7, state: "Ondo", projects: 42, top: "15%", left: "15%" },
  { id: 8, state: "Imo", projects: 38, top: "50%", left: "80%" },
  { id: 9, state: "Abia", projects: 35, top: "35%", left: "85%" },
]

export function ProjectMapPreview() {
  return (
    <section className="py-16 lg:py-24 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Content */}
          <div className="lg:w-1/3">
            <Badge variant="secondary" className="mb-4">
              Real-time Data
            </Badge>
            <h2 className="text-3xl font-bold text-foreground text-balance">
              Who is doing what and where?
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Explore the comprehensive map of development projects across all 9 
              Niger Delta states. Track active projects, identify coordination 
              opportunities, and avoid duplication of efforts.
            </p>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-secondary/50 p-4">
                <div className="text-2xl font-bold text-primary">850+</div>
                <div className="text-sm text-muted-foreground">Active Projects</div>
              </div>
              <div className="rounded-lg bg-secondary/50 p-4">
                <div className="text-2xl font-bold text-primary">$2.5B</div>
                <div className="text-sm text-muted-foreground">Total Investment</div>
              </div>
            </div>
            
            <Button className="mt-8" asChild>
              <Link href="/projects">
                Explore Full Map
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          {/* Map visualization */}
          <div className="lg:w-2/3">
            <div className="relative aspect-[4/3] rounded-xl border border-border bg-background overflow-hidden">
              {/* Map background pattern */}
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-border" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>
              
              {/* Niger Delta region shape outline (simplified) */}
              <div className="absolute inset-4 border border-primary/20 rounded-xl" />
              
              {/* Project markers */}
              {projectLocations.map((location) => (
                <div
                  key={location.id}
                  className="absolute group cursor-pointer"
                  style={{ top: location.top, left: location.left }}
                >
                  {/* Pulse animation */}
                  <span className="absolute inline-flex h-8 w-8 rounded-full bg-primary/30 animate-ping" />
                  
                  {/* Marker */}
                  <div className="relative h-8 w-8 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/25">
                    <MapPin className="h-4 w-4 text-primary-foreground" />
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="bg-popover border border-border rounded-lg px-3 py-2 shadow-xl whitespace-nowrap">
                      <div className="text-sm font-medium text-foreground">{location.state}</div>
                      <div className="text-xs text-muted-foreground">{location.projects} projects</div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Legend */}
              <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm border border-border rounded-lg p-3">
                <div className="text-xs text-muted-foreground mb-2">Project Density</div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary/30" />
                  <span className="text-xs text-muted-foreground">Low</span>
                  <div className="w-3 h-3 rounded-full bg-primary/60" />
                  <span className="text-xs text-muted-foreground">Medium</span>
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-xs text-muted-foreground">High</span>
                </div>
              </div>
              
              {/* State labels */}
              <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm border border-border rounded-lg p-3">
                <div className="text-xs font-medium text-foreground mb-2">Top States</div>
                <div className="space-y-1">
                  {projectLocations.slice(0, 4).map((loc) => (
                    <div key={loc.id} className="flex items-center justify-between gap-4 text-xs">
                      <span className="text-muted-foreground">{loc.state}</span>
                      <span className="font-medium text-foreground">{loc.projects}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
