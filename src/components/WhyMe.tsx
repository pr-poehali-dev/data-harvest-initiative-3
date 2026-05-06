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
        <div className="mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Мои преимущества</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] tracking-tight text-balance">
            Почему выбирают <HighlightedText>меня</HighlightedText>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-background p-8 flex flex-col gap-3 group hover:bg-muted/30 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <span className="text-orange-400 text-xl mt-0.5 flex-shrink-0">✓</span>
                <div>
                  <p className="font-medium text-foreground text-lg leading-snug mb-2">{reason.text}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
