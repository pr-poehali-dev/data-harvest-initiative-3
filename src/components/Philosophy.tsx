import { useEffect, useRef, useState } from "react"
import { HighlightedText } from "./HighlightedText"

const philosophyItems = [
  {
    title: "100% попадание в пожелания",
    description:
      "Мы внимательно слушаем каждого заказчика и глубоко погружаемся в его образ жизни, вкусы и ожидания. Результат — интерьер, который ощущается как будто создан именно для вас.",
  },
  {
    title: "Ведомость на все материалы",
    description:
      "Составляем подробную ведомость мебели, отделочных материалов и сантехники с конкретными позициями и ценами. Вы видите полную картину ещё до начала работ.",
  },
  {
    title: "Контроль бюджета на ремонт",
    description:
      "Ведомость позволяет точно понять итоговую стоимость и при необходимости скорректировать её под ваш бюджет — без сюрпризов и скрытых доплат в процессе.",
  },
  {
    title: "Краснодар, Москва, Питер, Сочи",
    description:
      "Работаем дистанционно с выездом на объект. Вы получаете все чертежи, визуализации и ведомости онлайн — в удобном формате и в согласованные сроки.",
  },
]

export function Philosophy() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.3 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - Title and image */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Наш подход</p>
            <h2 className="text-4xl md:text-5xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-6xl">
              Проект с
              <br />
              <HighlightedText>душой</HighlightedText>
            </h2>

            <div className="relative hidden lg:block">
              <img
                src="https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/2fa7b353-73e7-44df-9da2-14e214c19d70.jpeg"
                alt="Тесленко Наталья — архитектор и дизайнер интерьеров"
                className="relative z-10 w-full object-cover rounded-sm"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-sm z-20">
                <p className="text-foreground font-medium text-sm">Тесленко Наталья</p>
                <p className="text-muted-foreground text-xs">Архитектор · Дизайнер интерьеров</p>
              </div>
            </div>
          </div>

          {/* Right column - Description and Philosophy items */}
          <div className="space-y-6 lg:pt-48">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-12">
              Мы не просто рисуем красивые картинки — мы прислушиваемся к каждому пожеланию и создаём проект, который точно соответствует вашим ожиданиям и бюджету.
            </p>

            {philosophyItems.map((item, index) => (
              <div
                key={item.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-6">
                  <span className="text-muted-foreground/50 text-sm font-medium">0{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}