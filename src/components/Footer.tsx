export function Footer() {
  return (
    <footer className="bg-ink text-white px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between text-[9px] uppercase tracking-[0.2em] opacity-90 gap-6 border-t border-ink/10">
      <div className="opacity-60">© {new Date().getFullYear()} GreenWood Development Group</div>
      
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 opacity-80">
        <span>Московская область</span>
        <a href="#" className="hover:opacity-70 transition-opacity">Instagram</a>
        <a href="#" className="hover:opacity-70 transition-opacity">Telegram</a>
        <a href="#" className="hover:opacity-70 transition-opacity">Политика конфиденциальности</a>
      </div>
    </footer>
  );
}
