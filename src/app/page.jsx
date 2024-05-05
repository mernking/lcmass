import About from "@/components/home/About";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/home/Navbar";
import "./globals.css";

export default function Home() {
  return (
    <main className="bg-background text-text">
      <section>
        <Navbar />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Features />
      </section>
    </main>
  );
}
