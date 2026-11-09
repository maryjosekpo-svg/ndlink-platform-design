import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProjectMapPreview } from "@/components/project-map-preview"
import { LiveFeed } from "@/components/live-feed"
import { FeaturedOrganizations } from "@/components/featured-organizations"
import { FeaturedContributors } from "@/components/featured-contributors"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProjectMapPreview />
        <LiveFeed />
        <FeaturedOrganizations />
        <FeaturedContributors />
      </main>
      <Footer />
    </div>
  )
}
