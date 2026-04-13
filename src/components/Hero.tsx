import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/6c676f3f-e259-43f0-bd09-3b77e8bb9412/files/3ad03668-84da-4fcd-913a-ae5b293e9de3.jpg"
          alt="Строительная площадка Гранд Строй Механизация"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/50 z-[1]" />

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 drop-shadow-lg">
          СТРОИМ ОСНОВУ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90 drop-shadow">
          Подготовка строительных площадок и разработка котлованов любой сложности
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-black px-8 py-3 uppercase tracking-wide text-sm font-semibold hover:bg-neutral-200 transition-colors duration-300 cursor-pointer">
            Получить расчёт
          </button>
          <a
            href="tel:+79000164053"
            className="bg-transparent text-white border border-white px-8 py-3 uppercase tracking-wide text-sm font-semibold hover:bg-white hover:text-black transition-colors duration-300 text-center"
          >
            Позвонить
          </a>
        </div>
      </div>
    </div>
  );
}