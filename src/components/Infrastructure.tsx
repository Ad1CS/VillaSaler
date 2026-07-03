import { GraduationCap, ShoppingBag, Dumbbell, Coffee } from 'lucide-react';

export function Infrastructure() {
  return (
    <section id="infrastructure" className="bg-base border-t border-ink/10">
      <div className="grid md:grid-cols-12 gap-px bg-ink/10">
        
        {/* Left Content */}
        <div className="md:col-span-7 bg-base p-8 md:p-12 lg:p-20">
          <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-6">Инфраструктура</div>
          <h2 className="text-4xl md:text-5xl font-serif italic text-ink mb-8 tracking-tight">Всё необходимое<br/>рядом с домом.</h2>
          <p className="text-ink/70 mb-12 max-w-lg leading-relaxed text-sm">
            Вам не придется выезжать из поселка по мелочам. На территории и в шаговой доступности предусмотрена богатая инфраструктура для комфортной жизни всей семьи.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
            <div className="flex flex-col">
              <div className="text-primary mb-3">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h4 className="text-[11px] uppercase tracking-widest font-bold text-ink mb-2">Образование</h4>
              <p className="text-xs text-ink/60 leading-relaxed">Частный детский сад на территории и школа в 5 минутах езды.</p>
            </div>
            <div className="flex flex-col">
              <div className="text-primary mb-3">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <h4 className="text-[11px] uppercase tracking-widest font-bold text-ink mb-2">Магазины</h4>
              <p className="text-xs text-ink/60 leading-relaxed">Супермаркет, фермерские лавки и аптека у въезда в поселок.</p>
            </div>
            <div className="flex flex-col">
              <div className="text-primary mb-3">
                <Dumbbell className="w-5 h-5" />
              </div>
              <h4 className="text-[11px] uppercase tracking-widest font-bold text-ink mb-2">Спорт</h4>
              <p className="text-xs text-ink/60 leading-relaxed">Фитнес-клуб с бассейном, теннисные корты и беговые дорожки.</p>
            </div>
            <div className="flex flex-col">
              <div className="text-primary mb-3">
                <Coffee className="w-5 h-5" />
              </div>
              <h4 className="text-[11px] uppercase tracking-widest font-bold text-ink mb-2">Досуг</h4>
              <p className="text-xs text-ink/60 leading-relaxed">Уютное кафе, прогулочные зоны у озера и детские площадки.</p>
            </div>
          </div>
        </div>

        {/* Right Stats & Image */}
        <div className="md:col-span-5 flex flex-col gap-px bg-ink/10">
          <div className="flex-1 bg-base relative min-h-[300px]">
            <img 
              src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80" 
              alt="Инфраструктура поселка" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="bg-primary p-10 md:p-12 grid grid-cols-2 gap-8 text-white">
            <div className="flex flex-col justify-center">
              <span className="text-5xl font-serif italic mb-2">30+</span>
              <span className="text-[10px] uppercase tracking-widest opacity-60">Объектов на территории</span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-5xl font-serif italic mb-2">15м</span>
              <span className="text-[10px] uppercase tracking-widest opacity-60">До города</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
