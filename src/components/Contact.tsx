import { useState } from 'react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-base border-t border-ink/10">
      <div className="grid md:grid-cols-12 gap-px bg-ink/10">
        
        {/* Left Column */}
        <div className="md:col-span-7 bg-base p-8 md:p-12 lg:p-20 flex flex-col justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-6">Ваш визит</div>
            <h2 className="text-5xl md:text-6xl font-serif italic text-ink mb-8 tracking-tight">Приезжайте на<br/>экскурсию.</h2>
            <p className="text-lg text-ink/70 max-w-md leading-relaxed mb-12">
              Оцените качество строительства, погуляйте по лесу и выберите лучший участок для вашего будущего дома.
            </p>
          </div>

          <div className="bg-white p-8 border border-ink/10 max-w-lg">
            {submitted ? (
              <div className="text-center py-4">
                <h4 className="text-lg font-serif italic text-primary mb-2">Спасибо за заявку</h4>
                <p className="text-xs text-ink/60">Наш менеджер свяжется с вами в течение 10 минут.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row gap-6 sm:items-end">
                  <div className="flex-1">
                    <label htmlFor="phone" className="block text-[9px] uppercase tracking-widest text-ink/50 mb-2">Ваш номер телефона</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required
                      className="w-full bg-transparent border-b border-ink/20 py-2 text-sm text-ink focus:outline-none focus:border-primary transition-colors"
                      placeholder="+7 (___) ___ - __ - __"
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="bg-primary text-white px-8 py-3 text-[11px] uppercase tracking-widest font-bold hover:bg-primary/90 transition-colors whitespace-nowrap"
                  >
                    Отправить заявку
                  </button>
                </div>
                <p className="mt-4 text-[9px] uppercase tracking-widest text-ink/40">Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности</p>
              </form>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-5 bg-base p-8 md:p-12 lg:p-20 flex flex-col justify-center gap-12">
          <div>
            <h4 className="text-[11px] uppercase tracking-widest font-bold text-ink mb-2">Офис продаж</h4>
            <p className="text-sm text-ink/60 font-serif italic text-lg">Московская область,<br/>д. Новое, ул. Лесная, д. 1</p>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-widest font-bold text-ink mb-2">Телефон</h4>
            <p className="text-sm text-primary font-serif italic text-2xl">+7 (495) 000-00-00</p>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-widest font-bold text-ink mb-2">Режим работы</h4>
            <p className="text-sm text-ink/60 font-serif italic text-lg">Ежедневно<br/>с 10:00 до 19:00</p>
          </div>
        </div>

      </div>
    </section>
  );
}
