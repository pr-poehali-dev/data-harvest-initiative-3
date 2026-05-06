import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { HighlightedText } from "./HighlightedText"
import func2url from "../../backend/func2url.json"

export function CallToAction() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch(func2url["send-lead"], {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, message }),
      })
      if (res.ok) {
        setStatus("success")
        setName("")
        setPhone("")
        setMessage("")
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="py-32 md:py-29 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary-foreground/60 text-sm tracking-[0.3em] uppercase mb-8">Начать диалог</p>

            <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium leading-[1.1] tracking-tight mb-8 text-balance">
              Давайте создадим
              <br />
              <HighlightedText>ваше пространство</HighlightedText>
            </h2>

            <p className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Напишите мне — и уже через час мы начнём разговор о вашем будущем интерьере. Бесплатно, без обязательств.
            </p>
          </div>

          {status === "success" ? (
            <div className="max-w-lg mx-auto text-center py-12 px-8 border border-primary-foreground/20">
              <p className="text-2xl font-medium mb-3">Заявка отправлена!</p>
              <p className="text-primary-foreground/70">Наталья свяжется с вами в течение часа.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex flex-col gap-4">
              <input
                type="text"
                placeholder="Ваше имя *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-transparent border border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/40 px-5 py-4 text-sm focus:outline-none focus:border-primary-foreground/70 transition-colors"
              />
              <input
                type="tel"
                placeholder="Телефон *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="bg-transparent border border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/40 px-5 py-4 text-sm focus:outline-none focus:border-primary-foreground/70 transition-colors"
              />
              <textarea
                placeholder="Расскажите о вашем проекте (необязательно)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="bg-transparent border border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/40 px-5 py-4 text-sm focus:outline-none focus:border-primary-foreground/70 transition-colors resize-none"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center gap-3 bg-primary-foreground text-foreground px-8 py-4 text-sm tracking-wide hover:bg-primary-foreground/90 transition-colors duration-300 group disabled:opacity-60"
              >
                {status === "loading" ? "Отправляю..." : "Начать диалог и получить консультацию"}
                {status !== "loading" && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
              </button>
              {status === "error" && (
                <p className="text-red-400 text-sm text-center">Ошибка отправки. Позвоните напрямую: +7 (961) 588-02-95</p>
              )}
              <a
                href="https://t.me/artspace_home"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border border-primary-foreground/30 text-primary-foreground px-8 py-4 text-sm tracking-wide hover:border-primary-foreground/70 hover:bg-primary-foreground/10 transition-colors duration-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.32 13.617l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.942z"/></svg>
                Написать в Telegram
              </a>
              <p className="text-primary-foreground/40 text-xs text-center">
                Или напрямую:{" "}
                <a href="tel:+79615880295" className="hover:text-primary-foreground transition-colors">+7 (961) 588-02-95</a>
                {" · "}
                <a href="mailto:Tesla.house@yandex.ru" className="hover:text-primary-foreground transition-colors">Tesla.house@yandex.ru</a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}