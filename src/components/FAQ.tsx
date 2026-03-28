import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "В каких городах вы делаете ремонт?",
    answer:
      "Мы базируемся в Краснодаре, но работаем по всей России. Реализуем проекты дистанционно с выездом нашей команды на объект. Уже работали в Москве, Сочи, Ростове-на-Дону, Екатеринбурге и других городах.",
  },
  {
    question: "Сколько стоит ремонт под ключ?",
    answer:
      "Стоимость зависит от площади, сложности дизайна и выбранных материалов. Ремонт квартир в среднем начинается от 15 000 ₽/м². Точную смету рассчитываем бесплатно после осмотра объекта или по фото/планировке.",
  },
  {
    question: "Сколько времени займёт ремонт?",
    answer:
      "Стандартная квартира 50-70 м² — от 2 до 4 месяцев. Сроки фиксируем в договоре. Если задержка по нашей вине — платим штраф. Вы получаете еженедельный фото-отчёт о ходе работ.",
  },
  {
    question: "Что входит в ремонт под ключ?",
    answer:
      "Всё: демонтаж, черновые и чистовые работы, электрика, сантехника, плитка, полы, потолки, покраска, установка дверей и плинтусов. Финал — уборка и передача ключей. Вы заезжаете в готовое жильё.",
  },
  {
    question: "Разрабатываете ли вы дизайн-проект?",
    answer:
      "Да, у нас есть штатные дизайнеры интерьеров. Разрабатываем полный дизайн-проект с 3D-визуализацией, рабочими чертежами и спецификацией материалов. Дизайн-проект можно заказать отдельно или в комплексе с ремонтом.",
  },
  {
    question: "Как начать сотрудничество?",
    answer:
      "Оставьте заявку или позвоните нам. Мы проведём бесплатную консультацию, выедем на объект для замеров и подготовим смету. Работы начинаем после подписания договора с фиксированной стоимостью.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}