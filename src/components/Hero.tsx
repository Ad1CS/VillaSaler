import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-12 gap-px bg-ink/10 pt-[80px]">
      
      {/* Left Column */}
      <div className="md:col-span-7 bg-base p-8 md:p-12 lg:p-20 flex flex-col justify-center min-h-[600px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-6">
            Старт продаж новой очереди
          </div>
          <h1 className="text-5xl md:text-7xl font-serif italic leading-[0.9] tracking-tight mb-8 text-ink">
            Ваш идеальный дом <br className="hidden md:block"/>в гармонии с природой.
          </h1>
          <p className="text-lg md:text-xl text-ink/70 mb-12 max-w-xl leading-relaxed">
            Премиальный коттеджный поселок бизнес-класса в 15 минутах от города. Готовые дома, участки с подрядом и вековой лес прямо за вашим окном.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#houses" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 text-[11px] uppercase tracking-widest font-bold transition-all">
              Выбрать проект
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 border border-ink/20 hover:border-ink text-ink text-[11px] uppercase tracking-widest font-bold transition-all">
              Записаться на экскурсию
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right Column */}
      <div className="md:col-span-5 bg-ink/10 flex flex-col gap-px">
        <div className="flex-1 relative min-h-[300px] md:min-h-0 bg-base">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80" 
            alt="Коттеджный поселок" 
            className="w-full h-full object-cover absolute inset-0"
          />
        </div>
      </div>
    </section>
  );
}
