import { useState, useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 13,
    title: "Современная квартира",
    category: "Дизайн-проект",
    location: "Краснодар",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/6b9a4713-a71b-4afa-a7d2-522d86ad5314.png",
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
  {
    id: 28,
    title: "Гостиная с кухней-столовой",
    category: "Дизайн-проект",
    location: "Краснодар",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/6938f57d-f732-4b97-8f11-6b8fd73ad1cc.jpeg",
  },
  {
    id: 29,
    title: "Спальня с мраморной стеной",
    category: "Дизайн-проект",
    location: "Краснодар",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/7a5230fa-0fd6-4c51-b529-abb0a03d6bbf.jpeg",
  },
  {
    id: 30,
    title: "Гостиная-столовая в классическом стиле",
    category: "Дизайн-проект",
    location: "Краснодар",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/ccee0aa5-d972-4d4b-a61d-b416a1320caf.jpeg",
  },
  {
    id: 32,
    title: "Ванная с мраморной плиткой и ванной",
    category: "Дизайн-проект",
    location: "Краснодар",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/be2f55d9-086f-48d7-beb7-14020c8f16b0.jpeg",
  },
  {
    id: 33,
    title: "Спальня с деревянной стеной",
    category: "Дизайн-проект",
    location: "Краснодар",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/d330ccf9-8122-48a2-91e5-e624c3a47d13.jpeg",
  },
  {
    id: 34,
    title: "3D-планировка квартиры",
    category: "Дизайн-проект",
    location: "Краснодар",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/7cd268d1-347a-4d19-afb6-d9d129e92189.png",
  },
  {
    id: 35,
    title: "Ванная с подсветкой и ванной",
    category: "Дизайн и ремонт под ключ",
    location: "Краснодар",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/7121cd7d-fc15-4515-8ac8-79cca3bac1c6.jpeg",
  },
  {
    id: 36,
    title: "Мраморная ниша с подсветкой",
    category: "Дизайн и ремонт под ключ",
    location: "Краснодар",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/ac5ca711-3414-4a6c-9010-df68565ac56f.jpeg",
  },
  {
    id: 37,
    title: "Коридор с мраморной отделкой",
    category: "Дизайн и ремонт под ключ",
    location: "Краснодар",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/295b9626-3b28-4626-a955-76c6d06f299c.jpeg",
  },
  {
    id: 38,
    title: "Гостиная-кухня с реечными панелями",
    category: "Дизайн и ремонт под ключ",
    location: "Краснодар",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/2384953a-5a8d-475d-8d6a-f5f97615c175.jpeg",
  },
  {
    id: 39,
    title: "Столовая зона с кованой люстрой",
    category: "Дизайн-проект",
    location: "Краснодар",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/e9ab6995-e3af-42f8-bbf8-6127fc0a5a24.jpeg",
  },
  {
    id: 40,
    title: "Гостиная с круглыми люстрами",
    category: "Дизайн интерьера",
    location: "Краснодар",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/add44d4c-1da0-4648-8b54-77a665ac0fdc.jpeg",
  },
  {
    id: 41,
    title: "Ванная в бордовых тонах",
    category: "Дизайн и ремонт под ключ",
    location: "Краснодар",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/695bc25d-9f59-479a-bb24-eef6f8f580df.jpeg",
  },
  {
    id: 42,
    title: "Кабинет с видом на город",
    category: "Дизайн интерьера",
    location: "Краснодар",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/096c9273-a7e9-4647-b777-d45c7a2d7a2d.jpeg",
  },
  {
    id: 43,
    title: "Квартира-студия в тёплых тонах",
    category: "Дизайн и ремонт под ключ",
    location: "Краснодар",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/30c09eab-4b39-489b-b913-353fcaecb418.jpeg",
  },
  {
    id: 44,
    title: "Кухня с бронзовым фартуком",
    category: "Дизайн-проект",
    location: "Краснодар",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/77e61aa2-bd41-43a3-9264-83e36e672c04.jpeg",
  },
  {
    id: 45,
    title: "Ванная в бордовой плитке",
    category: "Дизайн и ремонт под ключ",
    location: "Краснодар",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/e20dad56-9081-4ea9-976b-223fe45f8a71.webp",
  },
  {
    id: 46,
    title: "Ванная с тёплой подсветкой",
    category: "Дизайн-проект",
    location: "Краснодар",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/d73e8d09-744d-4e7b-97a1-03640abbc7bb.jpeg",
  },
  {
    id: 47,
    title: "Ванная с золотой люстрой",
    category: "Дизайн-проект",
    location: "Краснодар",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/764dba8f-9938-4448-b8c2-5fa3e1d827eb.jpeg",
  },
  {
    id: 48,
    title: "Столовая зона с мраморным столом",
    category: "Дизайн интерьера",
    location: "Краснодар",
    year: "2025",
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/6c855142-67b9-4a6e-bbc8-f856cdd75344.jpeg",
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