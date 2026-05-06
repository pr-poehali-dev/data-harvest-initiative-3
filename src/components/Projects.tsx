import { useState, useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 5,
    title: "Ванная с мраморной плиткой",
    category: "Дизайн и ремонт под ключ",
    location: "Краснодар",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/97279a20-0edd-4091-a565-ce7e7ccf1567.jpeg",
  },
  {
    id: 8,
    title: "Уютный кабинет",
    category: "Дизайн интерьера",
    location: "Краснодар",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/9f6e5e28-7c56-4080-9b58-c49fa61710d1.jpeg",
  },
  {
    id: 10,
    title: "Спальня в тёплых тонах",
    category: "Дизайн интерьера",
    location: "Краснодар",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/19b1d9ea-2322-44b4-901a-649267920915.png",
  },
  {
    id: 11,
    title: "Планировочное решение",
    category: "Дизайн-проект",
    location: "Краснодар",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/4af09117-4efb-471f-a704-e4f5fa5353f0.jpeg",
  },
  {
    id: 13,
    title: "Современная квартира",
    category: "Дизайн-проект",
    location: "Краснодар",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/6b9a4713-a71b-4afa-a7d2-522d86ad5314.png",
  },
  {
    id: 14,
    title: "Ванная с подсветкой",
    category: "Дизайн-проект",
    location: "Краснодар",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/71ff7bcc-f9c3-4f96-8bf8-fc691c122f56.jpeg",
  },
  {
    id: 15,
    title: "Гостиная в светлых тонах",
    category: "Дизайн-проект",
    location: "Краснодар",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/55a80e32-d581-4120-a3fa-b87972e9484a.jpeg",
  },
  {
    id: 16,
    title: "Ванная в розовых тонах",
    category: "Дизайн-проект",
    location: "Краснодар",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/516c1b4f-142b-4882-9a6f-2b6606f182e2.jpeg",
  },
  {
    id: 17,
    title: "Ванная с мраморной плиткой",
    category: "Дизайн-проект",
    location: "Краснодар",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/81fedad2-2c05-4bc4-8b69-608014991d55.jpeg",
  },
  {
    id: 18,
    title: "Кухня с мраморным островом",
    category: "Дизайн-проект",
    location: "Краснодар",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/6d3c2bbe-4788-42fe-8507-7b0789476e7f.jpeg",
  },
  {
    id: 19,
    title: "Ванная в тёмном мраморе",
    category: "Дизайн-проект",
    location: "Краснодар",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/5d9fab8f-cb63-4dd3-89c5-fecd151ce11d.jpeg",
  },
  {
    id: 20,
    title: "Спальня с туалетным столиком",
    category: "Дизайн-проект",
    location: "Краснодар",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/22b4aeb9-71e5-4a6e-9028-74ccd47a4c6f.jpeg",
  },
  {
    id: 21,
    title: "Спальня в классическом стиле",
    category: "Дизайн-проект",
    location: "Краснодар",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/ff4d6dd7-bff4-4244-814d-c1d84c904ea6.jpeg",
  },
  {
    id: 22,
    title: "Гардеробная с мраморной столешницей",
    category: "Дизайн-проект",
    location: "Краснодар",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/4560090d-b943-4378-86bf-cc0c7bb354f6.jpeg",
  },
  {
    id: 23,
    title: "Гостиная с биокамином",
    category: "Дизайн-проект",
    location: "Краснодар",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/16ffa8c9-656e-4462-8f20-b734240ddfbc.jpeg",
  },
  {
    id: 24,
    title: "Ванная с чёрной сантехникой",
    category: "Дизайн и ремонт под ключ",
    location: "Краснодар",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/412dbf1c-4e54-4f24-8889-af3db24161b9.jpeg",
  },
  {
    id: 25,
    title: "Спальня со встроенной гардеробной",
    category: "Дизайн-проект",
    location: "Краснодар",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/d5c28441-42ca-48a9-b3cb-ae0a85b3c57c.jpeg",
  },
  {
    id: 26,
    title: "Гостиная-столовая в натуральных тонах",
    category: "Дизайн-проект",
    location: "Краснодар",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/93a4d021-ccb1-4994-bf34-4db109256b3c.jpeg",
  },
  {
    id: 27,
    title: "Ванная с подсветкой и прачечной",
    category: "Дизайн-проект",
    location: "Краснодар",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/1c8446bf-94ca-4e43-b4b7-06c5c5ced77a.jpeg",
  },
]

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [revealedImages, setRevealedImages] = useState<Set<number>>(new Set())
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setRevealedImages((prev) => new Set(prev).add(projects[index].id))
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-32 md:py-29 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Избранные работы</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">Наши проекты</h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            Смотреть все проекты
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div ref={(el) => (imageRefs.current[index] = el)} className="relative overflow-hidden aspect-[4/3] mb-6">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredId === project.id ? "scale-105" : "scale-100"
                  }`}
                />
                <div
                  className="absolute inset-0 bg-primary origin-top"
                  style={{
                    transform: revealedImages.has(project.id) ? "scaleY(0)" : "scaleY(1)",
                    transition: "transform 1.5s cubic-bezier(0.76, 0, 0.24, 1)",
                  }}
                />
              </div>


            </article>
          ))}
        </div>
      </div>
    </section>
  )
}