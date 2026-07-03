import { motion } from 'motion/react';
import { Maximize, Grid2X2, BedDouble, Bath } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: "Проект «Семейный»",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
    area: "145",
    plot: "8",
    bedrooms: "3",
    bathrooms: "2",
    price: "от 12.5 млн ₽",
    tags: ["Хит продаж", "С отделкой"]
  },
  {
    id: 2,
    name: "Проект «Комфорт»",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    area: "180",
    plot: "10",
    bedrooms: "4",
    bathrooms: "3",
    price: "от 15.2 млн ₽",
    tags: ["Панорамные окна"]
  },
  {
    id: 3,
    name: "Проект «Премиум»",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80",
    area: "250",
    plot: "15",
    bedrooms: "5",
    bathrooms: "4",
    price: "от 21.9 млн ₽",
    tags: ["Гараж", "Терраса"]
  }
];

export function Houses() {
  return (
    <section id="houses" className="bg-base border-t border-ink/10">
      <div className="p-8 md:p-12 lg:p-20 border-b border-ink/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-6">Проекты домов</div>
            <h2 className="text-4xl md:text-5xl font-serif italic text-ink tracking-tight">Архитектура и планировки</h2>
          </div>
          <a href="#contact" className="inline-flex px-6 py-3 border border-ink text-ink text-[11px] uppercase tracking-widest font-bold hover:bg-ink hover:text-base transition-colors whitespace-nowrap">
            Смотреть все генпланы
          </a>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-px bg-ink/10">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-base flex flex-col group"
          >
            <div className="relative h-72 md:h-80 overflow-hidden border-b border-ink/10">
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute top-4 left-4 flex gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-base text-ink text-[9px] uppercase tracking-widest font-bold px-3 py-1.5 border border-ink/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="p-8 flex flex-col flex-1">
              <h3 className="text-2xl font-serif italic text-ink mb-6">{project.name}</h3>
              
              <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8 flex-1">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-ink/50 mb-1">
                    <Maximize className="w-3 h-3" />
                    <span className="text-[10px] uppercase tracking-widest">Площадь</span>
                  </div>
                  <span className="text-sm font-medium">{project.area} м²</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-ink/50 mb-1">
                    <Grid2X2 className="w-3 h-3" />
                    <span className="text-[10px] uppercase tracking-widest">Участок</span>
                  </div>
                  <span className="text-sm font-medium">{project.plot} соток</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-ink/50 mb-1">
                    <BedDouble className="w-3 h-3" />
                    <span className="text-[10px] uppercase tracking-widest">Спальни</span>
                  </div>
                  <span className="text-sm font-medium">{project.bedrooms}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-ink/50 mb-1">
                    <Bath className="w-3 h-3" />
                    <span className="text-[10px] uppercase tracking-widest">Санузлы</span>
                  </div>
                  <span className="text-sm font-medium">{project.bathrooms}</span>
                </div>
              </div>
              
              <div className="pt-6 border-t border-ink/10 flex items-end justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-ink/50 mb-2">Стоимость</p>
                  <p className="text-xl font-serif italic text-ink">{project.price}</p>
                </div>
                <button className="text-[11px] uppercase tracking-widest font-bold text-primary hover:opacity-70 transition-opacity">
                  Подробнее &rarr;
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
