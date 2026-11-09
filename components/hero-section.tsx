"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Search, Users, FolderOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero with background image */}
      <div className="relative h-[600px] lg:h-[700px]">
        <Image
          src={`${basePath}/images/niger-delta-hero.jpg`}
          alt="Niger Delta communities and waterways"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm px-4 py-1.5 text-sm text-primary mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span>Linking Partners for Niger Delta Development</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance leading-tight">
              Connecting Stakeholders,{" "}
              <span className="text-primary">Driving Impact</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl text-pretty leading-relaxed">
              The central platform for development coordination in the Niger Delta. 
              See who is doing what and where. Find partners, talent, and opportunities. 
              Access real-time data and insights.
            </p>

            {/* Key action buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="group">
                <Link href="/projects">
                  <FolderOpen className="mr-2 h-5 w-5" />
                  Explore Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/opportunities">
                  <Search className="mr-2 h-5 w-5" />
                  Find Opportunities
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-foreground/20 bg-background/50 backdrop-blur-sm" asChild>
                <Link href="/talent">
                  <Users className="mr-2 h-5 w-5" />
                  Discover Talent
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary">850+</div>
              <div className="text-sm text-muted-foreground mt-1">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground mt-1">Organizations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary">15,000+</div>
              <div className="text-sm text-muted-foreground mt-1">Professionals</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary">9</div>
              <div className="text-sm text-muted-foreground mt-1">States Covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
