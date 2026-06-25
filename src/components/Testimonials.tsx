import { useState } from "react"

const testimonials = [
  {
    id: 1,
    name: "Александра З.",
    text: "Наталья, отзывчивый, четкий, оперативный специалист. Выполнила задание на 5 и мы продолжили совместную работу по ремонту! Очень благодарна и рада, что попался именно такой специалист. Рекомендую на 100%!",
    rating: 5,
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/f03a827f-5a5b-4939-86d1-bf9634c5e343.jpeg",
  },
  {
    id: 2,
    name: "Клиент",
    text: "Большое спасибо за работу! Отличное исполнение, быстрое и качественное)",
    rating: 5,
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/7c05997d-c9f9-487e-a1d3-719e9dda6bcb.jpeg",
  },
  {
    id: 3,
    name: "Клиент",
    text: "Великолепная работа с полной самоотдачей. Браво! Хороший подход, оперативные ответы. Я получил именно то, чего хотел, на 100%. Рекомендую",
    rating: 5,
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/56ab3c2d-b22d-4082-a6a0-bdb64bca0462.jpeg",
  },
  {
    id: 4,
    name: "Клиент",
    text: "В проекте есть всё основное: планировка, мебель, освещение, розетки, сантехника, кухня и плитка. Наталья была на связи, отвечала на вопросы и учитывала мои пожелания. С проектом можно двигаться дальше к ремонту. Могу порекомендовать Наталью для подобных задач. Спасибо за работу!",
    rating: 5,
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/7f6755a7-1957-4dbb-ad4c-d8ce136066c8.jpeg",
  },
  {
    id: 5,
    name: "Клиент",
    text: "Спасибо Наталье, всё быстро, чётко. Много уточняющих вопросов, что тоже важно — понятно, что отношение к заданию ответственное, а не лишь бы сделать.",
    rating: 5,
    image: "https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/fd327dc9-3bd3-479f-af5e-9a27b7647cb9.jpeg",
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((p) => (p === 0 ? testimonials.length - 1 : p - 1))
  const next = () => setActive((p) => (p === testimonials.length - 1 ? 0 : p + 1))

  const t = testimonials[active]

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <p className="text-foreground/40 text-sm tracking-[0.3em] uppercase mb-6">Отзывы клиентов</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.1] tracking-tight">
              Что говорят<br />о нашей работе
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/4] overflow-hidden bg-foreground/5">
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-full object-cover transition-opacity duration-500"
                key={t.id}
              />
            </div>

            <div className="flex flex-col justify-between h-full gap-8">
              <div>
                <Stars count={t.rating} />
                <blockquote className="mt-6 text-lg md:text-xl leading-relaxed text-foreground/80 font-light">
                  «{t.text}»
                </blockquote>
                <p className="mt-6 text-sm font-medium tracking-wide text-foreground/50 uppercase">{t.name}</p>
              </div>

              <div className="flex items-center gap-6">
                <button
                  onClick={prev}
                  className="w-12 h-12 border border-foreground/20 flex items-center justify-center hover:border-foreground/60 hover:bg-foreground hover:text-white transition-all duration-300"
                  aria-label="Предыдущий"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M10 12L6 8l4-4" />
                  </svg>
                </button>
                <span className="text-sm text-foreground/40">{active + 1} / {testimonials.length}</span>
                <button
                  onClick={next}
                  className="w-12 h-12 border border-foreground/20 flex items-center justify-center hover:border-foreground/60 hover:bg-foreground hover:text-white transition-all duration-300"
                  aria-label="Следующий"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M6 4l4 4-4 4" />
                  </svg>
                </button>
              </div>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-0.5 transition-all duration-300 ${i === active ? "w-8 bg-foreground" : "w-4 bg-foreground/20"}`}
                    aria-label={`Отзыв ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
