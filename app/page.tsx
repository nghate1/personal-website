import Header from './components/client/Header';
import Hero from './components/client/Hero';
import Education from './components/client/Education';
import Experience from './components/client/Experience';
import Skills from './components/client/Skills';

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Education />
      <Experience />
      <Skills />
    </main>
  );
}
