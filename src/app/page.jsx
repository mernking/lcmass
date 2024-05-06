import About from "@/components/home/About";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/home/Navbar";
import "./globals.css";

export default function Home() {
  return (
    <main className="bg-background text-text w-full">
      <section className="w-full">
        <Navbar />
      </section>
      <section className="w-full">
        <Hero />
      </section>
      <section className="w-full">
        <About />
      </section>
      <section className="w-full">
        <Features />
      </section>
    </main>
  );
}
