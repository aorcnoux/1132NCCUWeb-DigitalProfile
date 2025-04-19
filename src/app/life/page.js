"use client";

import Image from "next/image";
import Painting1 from "@/image/22.png";
import Painting2 from "@/image/33.png";
import Painting3 from "@/image/44.png";
import Painting4 from "@/image/5.png";
import Painting5 from "@/image/6.png";
import Painting6 from "@/image/7.png";

export default function CatePainting() {
  return (
    <div className="w-full h-full bg-white flex flex-col items-center justify-start rounded-2xl p-4 sm:p-6 md:p-8 overflow-y-auto max-w-[1440px] mx-auto">
      {/* 飄動愛心圖（右上角） */}
      <div className="absolute top-12 right-10 sm:right-10 z-10 animate-float">
        <Image
          src="/heartt.jpg"
          alt="Heart"
          width={70}
          height={70}
          className="w-[60px] sm:w-[80px] md:w-[100px]"
        />
      </div>

      {/* 標題區塊 */}
      <div className="flex flex-col w-full text-center mb-6 px-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Life</h1>
        <p className="text-gray-600 text-sm sm:text-base">
          💡 Life tip: When nothing goes right... go to sleep
        </p>
      </div>

      {/* 圖片區塊（RWD） */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl px-2">
        {[Painting1, Painting2, Painting3, Painting4, Painting5, Painting6].map((painting, idx) => (
          <div
            key={idx}
            className="rounded-2xl overflow-hidden aspect-[4/3] w-full shadow-sm transition-transform transform duration-300 hover:scale-105 hover:shadow-lg hover:brightness-110"
            style={{
              backgroundImage: `url(${painting.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}
      </div>
    </div>
  );
}
