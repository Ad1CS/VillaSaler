import { motion } from 'motion/react';
import { TreePine, ShieldCheck, MapPin, Wifi, Car, Home } from 'lucide-react';

const features = [
  {
    icon: <TreePine className="w-6 h-6" />,
    title: "Экология и природа",
    description: "Поселок окружен хвойным лесом площадью 400 гектаров. Чистый воздух и тишина."
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Отличная локация",
    description: "Всего 15 минут от города по скоростному шоссе без пробок и светофоров."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Безопасность 24/7",
    description: "Закрытая охраняемая территория, видеонаблюдение и пропускная система."
  },
  {
    icon: <Wifi className="w-6 h-6" />,
    title: "Все коммуникации",
    description: "Магистральный газ, электричество, центральное водоснабжение и скоростной интернет."
  },
  {
    icon: <Car className="w-6 h-6" />,
    title: "Асфальтированные дороги",
    description: "Широкие асфальтированные дороги, тротуары и уличное освещение по всему поселку."
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "Единый стиль",
    description: "Архитектурная концепция в стиле Райт, создающая гармоничный облик поселка."
  }
];

export function Features() {
  return (
    <section id="features" className="bg-base border-t border-ink/10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-ink/10">
        <div className="md:col-span-4 bg-base p-8 md:p-12 lg:p-20 flex flex-col justify-center">
          <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-6">Жизнь с комфортом</div>
          <h2 className="text-4xl md:text-5xl font-serif italic text-ink mb-6 tracking-tight">Продуманная<br/>до мелочей.</h2>
          <p className="text-ink/70 leading-relaxed text-sm">Мы продумали каждую деталь, чтобы ваша жизнь за городом была максимально комфортной и безопасной. Наслаждайтесь природой без компромиссов.</p>
        </div>

        <div className="md:col-span-8 bg-base p-8 md:p-12 lg:p-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex flex-col"
              >
                <div className="text-primary mb-4 border-b border-ink/10 pb-4">
                  {feature.icon}
                </div>
                <h3 className="text-[11px] uppercase tracking-widest font-bold text-ink mb-2">{feature.title}</h3>
                <p className="text-ink/60 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
