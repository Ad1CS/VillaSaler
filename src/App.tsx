import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Houses } from './components/Houses';
import { Infrastructure } from './components/Infrastructure';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-base text-ink font-sans selection:bg-primary selection:text-base flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col">
        <Hero />
        <Features />
        <Houses />
        <Infrastructure />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

