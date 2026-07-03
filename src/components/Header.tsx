import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'О поселке', href: '#about' },
    { name: 'Преимущества', href: '#features' },
    { name: 'Проекты', href: '#houses' },
    { name: 'Инфраструктура', href: '#infrastructure' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-ink/10 bg-base px-6 md:px-12 h-[80px] flex items-center justify-between`}>
      <a href="#" className="flex flex-col group">
        <span className="font-serif italic text-2xl tracking-tighter text-ink">GreenWood</span>
        <span className="text-[10px] uppercase tracking-[0.2em] font-semibold opacity-60 text-ink">Коттеджный поселок</span>
      </a>

      <nav className="hidden md:flex gap-8 text-[11px] uppercase tracking-widest font-medium text-ink">
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className="hover:opacity-50 transition-opacity">
            {link.name}
          </a>
        ))}
      </nav>

      <div className="hidden md:flex items-center gap-6">
        <div className="text-right">
          <a href="tel:+74950000000" className="block text-sm font-semibold tracking-tighter text-primary">
            +7 (495) 000-00-00
          </a>
          <a href="#contact" className="text-[10px] uppercase opacity-50 text-ink hover:opacity-100 transition-opacity">
            Заказать звонок
          </a>
        </div>
      </div>

      <button className="md:hidden text-ink" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-base border-b border-ink/10 py-6 px-6 flex flex-col gap-4 text-ink md:hidden">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-[11px] uppercase tracking-widest font-medium" onClick={() => setMobileMenuOpen(false)}>
              {link.name}
            </a>
          ))}
          <hr className="my-2 border-ink/10" />
          <a href="tel:+74950000000" className="flex items-center gap-2 text-sm font-semibold tracking-tighter text-primary">
            <Phone className="w-4 h-4" />
            +7 (495) 000-00-00
          </a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="mt-2 text-center w-full bg-primary text-white text-[11px] uppercase tracking-widest font-bold py-3">
            Заказать звонок
          </a>
        </div>
      )}
    </header>
  );
}
