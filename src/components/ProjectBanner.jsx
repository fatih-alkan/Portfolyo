import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    "/ecommerce_project.jpg",
    "/twitter_project.jpg",
    "/pizza_project.jpg",
    "/derskayit_project.png",
];

export default function ProjectBanner() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((index + 1) % images.length);
    const prev = () => setIndex((index - 1 + images.length) % images.length);

    const handleDragEnd = (e, info) => {
        if (info.offset.x < -80) next();
        if (info.offset.x > 80) prev();
    };

    return (
        <div className="min-h-screen bg-soft-bg flex flex-col items-center justify-center px-4 select-none">

            <h1 className="text-3xl md:text-4xl text-white mb-6 font-bold text-center">
                Featured Projects
            </h1>

            <div className="relative w-full max-w-[900px] h-[300px] md:h-[450px] lg:h-[500px] 
                            bg-[#0f1629] rounded-2xl shadow-2xl overflow-hidden">

                <AnimatePresence mode="wait">
                    <motion.img
                        key={index}
                        src={images[index]}
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -60 }}
                        transition={{ duration: 0.4 }}

                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={handleDragEnd}
                        dragElastic={0.2}

                        className="w-full h-full object-contain p-4 md:p-8 
                                   cursor-grab active:cursor-grabbing"
                    />
                </AnimatePresence>

                {/* Sol Buton */}
                <button
                    onClick={prev}
                    className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 
                               bg-soft-bg hover:bg-white/20 text-white 
                               p-2 md:p-3 rounded-full"
                >
                    ❮
                </button>

                {/* Sağ Buton */}
                <button
                    onClick={next}
                    className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 
                               bg-soft-bg hover:bg-white/20 text-white 
                               p-2 md:p-3 rounded-full"
                >
                    ❯
                </button>
            </div>

            {/* Dot Navigation */}
            <div className="flex gap-2 mt-4">
                {images.map((_, i) => (
                    <div
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-2 h-2 md:w-3 md:h-3 rounded-full cursor-pointer transition-all ${
                            i === index ? "bg-white scale-125" : "bg-white/30"
                        }`}
                    ></div>
                ))}
            </div>
        </div>
    );
}
