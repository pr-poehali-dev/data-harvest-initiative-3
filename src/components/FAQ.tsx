import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "В каких городах вы работаете?",
    answer:
      "Работаем в Краснодаре, Москве, Санкт-Петербурге и Сочи. Реализуем дизайн-проекты дистанционно — вы получаете все чертежи и визуализации онлайн, с выездом дизайнера на объект при необходимости.",
  },
  {
    question: "Какие пакеты дизайн-проекта у вас есть?",
    answer:
      "Есть несколько пакетов под любой бюджет. Самый ходовой — планировка плюс электрика: оптимальное решение для старта. Также доступны полный дизайн-проект с 3D-визуализацией и комплексный пакет с авторским надзором.",
  },
  {
    question: "Что входит в пакет «Планировка + электрика»?",
    answer:
      "Планировочное решение с расстановкой мебели и зонированием, а также полный проект электрики: схемы розеток, выключателей, световых групп. Этого достаточно для начала строительных работ.",
  },
  {
    question: "Что такое полный дизайн-проект?",
    answer:
      "Полный дизайн-проект включает планировку, 3D-визуализацию всех помещений, рабочие чертежи, спецификацию материалов и мебели. Вы видите финальный результат ещё до начала работ.",
  },
  {
    question: "Можно ли заказать только планировку?",
    answer:
      "Да, пакет «Планировка + электрика» — наше самое популярное предложение. Он подходит тем, кто хочет грамотно спланировать пространство и электрику без полного дизайн-проекта.",
  },
  {
    question: "Как начать сотрудничество?",
    answer:
      "Оставьте заявку или напишите нам. Мы проведём бесплатную консультацию, уточним задачи и подберём подходящий пакет. Работы начинаем после подписания договора.",
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
