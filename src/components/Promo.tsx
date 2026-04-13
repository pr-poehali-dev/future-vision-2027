import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/6c676f3f-e259-43f0-bd09-3b77e8bb9412/files/68d02547-6b1b-48fc-97c6-55e77ac7c66b.jpg"
            alt="Строительная техника на площадке"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-black/55 z-[1]" />

      <h3 className="absolute top-12 right-6 text-white uppercase z-[2] text-sm md:text-base lg:text-lg">
        Наши преимущества
      </h3>

      <p className="absolute bottom-12 right-6 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-5xl z-[2]">
        Собственный парк тяжёлой техники, опытные механизаторы и строгое соблюдение сроков.
        Мы подготавливаем площадки под строительство любого масштаба — от частных домов до крупных объектов.
      </p>
    </div>
  );
}