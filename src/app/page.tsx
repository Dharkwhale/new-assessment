"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"

import {
  Home,
  Zap,
  Circle,
  Search,
  CheckSquare,
  Type,
  FileText,
  ImageIcon,
  Video,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Grid3X3,
  Settings,
  User,
  Bell,
  HelpCircle,
  Battery as Gallery,
  Layers,
  Play,
  Wand2,
  Shuffle,
  Train,
  Eye,
} from "lucide-react"

const slides = [
  {
    id: 1,
    title: "WAN 2.2",
    subtitle: "WAN 2.2 Image generation",
    desc: "Generate complex images with the latest WAN 2.2 model. Exceptional insights and ultra-realistic features.",
    bg: ["/images/anime-1.jpg", "/images/anime-2.jpg", "/images/anime-3.jpg"],
    tag: "ANIME MODEL",
    cta: "Try WAN 2.2",
  },
  {
    id: 2,
    title: "Open Sour",
    subtitle: "FLUX.1 Krea",
    desc: "We’re making the weights to our FLUX.1 Krea model open-source. Run locally or generate with Krea image.",
    bg: ["/images/flux-krea-bg.jpg"],
    tag: "THE MODEL",
    cta: "Learn More",
  },
  // --- 5 additional dummy slides ---
  {
    id: 3,
    title: "Style Fusion",
    subtitle: "AI-powered Style Transfer",
    desc: "Blend two styles into one beautiful image using advanced transfer models.",
    bg: ["/images/slide-3.jpg"],
    tag: "STYLE MODEL",
    cta: "Try Now",
  },
  {
    id: 4,
    title: "Motion FX",
    subtitle: "Dynamic Motion Generation",
    desc: "Turn static images into animations with motion-aware AI tools.",
    bg: ["/images/slide-4.jpg"],
    tag: "MOTION MODEL",
    cta: "Animate",
  },
  {
    id: 5,
    title: "RealFace",
    subtitle: "Ultra-real Portraits",
    desc: "Generate high-resolution portraits indistinguishable from real photography.",
    bg: ["/images/slide-5.jpg"],
    tag: "PORTRAIT MODEL",
    cta: "Generate",
  },
  {
    id: 6,
    title: "Dream Scenes",
    subtitle: "Fantasy Landscape Creation",
    desc: "Create immersive landscapes and environments straight from text prompts.",
    bg: ["/images/slide-6.jpg"],
    tag: "LANDSCAPE MODEL",
    cta: "Explore",
  },
  {
    id: 7,
    title: "AI Comics",
    subtitle: "Manga & Comic Generation",
    desc: "Design panels and characters instantly with AI comic creation tools.",
    bg: ["/images/slide-7.jpg"],
    tag: "COMIC MODEL",
    cta: "Create",
  },
]


export default function KreaAILandingPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on("select", onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-background border-b border-border">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
            <Layers className="w-5 h-5 text-background" />
          </div>
          <span className="text-sm text-muted-foreground">kreaai.com/professional</span>
        </div>

        <div className="flex items-center gap-2 bg-muted rounded-lg p-1">
          {[
            <Home key="home" />,
            // <Zap key="zap" />,
            <ImageIcon key="image" />,
            <Video key="video" />,
            // <Circle key="circle" />,
            // <Search key="search" />,
            <Wand2 key="edit" />,
            <Sparkles key="enhancer" />,
            <CheckSquare key="check" />,
            // <Type key="type" />,
            <FileText key="file" />,
          ].map((Icon, i) => (
            <Button key={i} variant="ghost" size="sm">
              {Icon}
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm">
            <ImageIcon className="w-4 h-4 mr-2" />
            Gallery
          </Button>
          <Button variant="ghost" size="sm">
            <HelpCircle className="w-4 h-4 mr-2" />
            Support
          </Button>
          <Button variant="ghost" size="sm">
            <Bell className="w-4 h-4" />
          </Button>
          <ThemeToggle />
          <Button variant="ghost" size="sm">
            <Settings className="w-4 h-4" />
          </Button>
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
        </div>
      </header>

      <main className="px-6 py-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {slides.map((s) => (
            <Card
              key={s.id}
              className="relative flex-[0_0_85%] lg:flex-[0_0_60%] overflow-hidden h-80 rounded-xl"
            >
              {/* Background images */}
              <div className="absolute inset-0 grid grid-cols-3">
                {s.bg.map((img, i) => (
                  <div key={i} className="bg-cover bg-center" style={{ backgroundImage: `url(${img})` }} />
                ))}
              </div>
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="text-sm text-primary mb-2">{s.tag}</div>
                  <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">{s.title}</h1>
                  <div className="mb-4">
                    <h2 className="text-xl font-semibold text-white mb-2 drop-shadow-md">{s.subtitle}</h2>
                    <p className="text-sm text-gray-200 max-w-sm">{s.desc}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <Button className="bg-white/90 backdrop-blur-sm text-black border hover:bg-white">{s.cta}</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Circle indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`w-2 h-2 rounded-full ${i === selectedIndex ? "bg-primary" : "bg-gray-600"}`}
          />
        ))}
      </div>

      {/* Prev/Next arrows bottom right */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        <button onClick={scrollPrev} className="p-2 bg-primary rounded-full shadow">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={scrollNext} className="p-2 bg-primary rounded-full shadow">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>

        {/* Generate Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-foreground">Generate</h2>
            <Button variant="ghost" className="text-accent bg-ring hover:text-primary">
              Show all
            </Button>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {[
              { title: "Image", icon: <ImageIcon className="w-4 h-4 " />, badge: true, desc: "Generate high-quality images with multiple prompts and styles with Krea." },
              { title: "Video", icon: <Video className="w-4 h-4 " />, desc: "Create videos with Haiku. Play with prompts and styles." },
              { title: "Realtime", icon: <Zap className="w-4 h-4 " />, badge: true, desc: "Realtime AI image generation on a canvas. Draw and watch AI create." },
              { title: "Edit", icon: <Wand2 className="w-4 h-4 " />, badge: true, desc: "Edit images on large scale with AI. Select and modify any part." },
              { title: "Video Upscaler", icon: <Play className="w-4 h-4 " />, badge: true, desc: "Let any tiny video become studio-quality with AI upscaling." },
              { title: "Motion Transfer", icon: <Shuffle className="w-4 h-4 " />, badge: true, desc: "Transfer motion to images and create dynamic animations." },
              { title: "Enhancer", icon: <Sparkles className="w-4 h-4 " />, badge: true, desc: "Enhance and upscale images and videos with AI technology." },
              { title: "Train", icon: <Train className="w-4 h-4" />, desc: "Train AI to replicate your style, characters & objects." },
            ].map(({ title, icon, badge, desc }, i) => (
              <Card key={i} className="p-3 hover:shadow-md transition-shadow bg-muted ">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8  rounded-lg flex ">
                    {icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-medium text-foreground">{title}</h3>
                        {badge && <Badge variant="secondary" className="text-xs">NEW</Badge>}
                      </div>
                      <Button variant="ghost" size="sm" className="text-accent bg-ring p-1 h-auto text-xs">
                        Open
                      </Button>
                    </div>
                    <p className="text-[9px] text-accent mt-1 ">{desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="bg-card rounded-xl p-6 border border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-accent-foreground rounded-lg flex items-center justify-center">
                <Grid3X3 className="w-5 h-5 text-background" />
              </div>
              <h2 className="text-xl font-semibold text-accent-foreground">Krea AI</h2>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-accent-foreground text-sm">curated by</span>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                  <Eye className="w-4 h-4 text-accent-foreground" />
                </div>
                <span className="text-accent-foreground font-medium">Mobbin</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
