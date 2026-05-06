import { HighlightedText } from "./HighlightedText"

const reasons = [
  {
    text: "Индивидуальный подход",
    description: "Каждый проект уникален — никаких шаблонных решений.",
  },
  {
    text: "Слышу и учитываю пожелания",
    description: "Ваши идеи и образ жизни — основа каждого решения.",
  },
  {
    text: "Современные и функциональные решения",
    description: "Красота, которая работает — удобно и актуально.",
  },
  {
    text: "Демократичные цены",
    description: "Достойный дизайн без переплаты за бренд.",
  },
  {
    text: "Кратчайшие сроки",
    description: "Работаю чётко и без затягивания — ценю ваше время.",
  },
  {
    text: "Подсказываю важное",
    description: "Предупрежу о нюансах, о которых легко забыть или не знать.",
  },
]

export function WhyMe() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Мои преимущества</p>
            <h2 className="text-4xl md:text-5xl font-medium leading-[1.1] tracking-tight text-balance mb-10">
              Почему выбирают <HighlightedText>меня</HighlightedText>
            </h2>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/8c42a195-c8ce-431c-8216-8939f3c074ef/bucket/2fa7b353-73e7-44df-9da2-14e214c19d70.jpeg"
                alt="Тесленко Наталья — архитектор и дизайнер интерьеров"
                className="w-full object-cover rounded-sm max-h-[520px] object-top"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-sm">
                <p className="text-foreground font-medium text-sm">Тесленко Наталья</p>
                <p className="text-muted-foreground text-xs">Архитектор · Дизайнер интерьеров</p>
                <p className="text-orange-500 text-xs font-medium mt-1">Мастер перепланировок, которые точно узаконят</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px bg-border">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-background p-8 flex items-start gap-4 group hover:bg-muted/30 transition-colors duration-300"
              >
                <span className="text-orange-400 text-xl mt-0.5 flex-shrink-0">✓</span>
                <div>
                  <p className="font-medium text-foreground text-lg leading-snug mb-1">{reason.text}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}