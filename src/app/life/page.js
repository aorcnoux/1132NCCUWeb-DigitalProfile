import Image from "next/image";
import Painting1 from "@/image/22.png";
import Painting2 from "@/image/33.png";
import Painting3 from "@/image/44.png";
import Painting4 from "@/image/5.png";
import Painting5 from "@/image/6.png";
import Painting6 from "@/image/7.png";

export default function CatePainting() {
  return (
    <div className="w-full h-full bg-white flex flex-col justify-start items-center rounded-2xl py-12 px-6 relative">
      
     {/* ❤️ heartt.jpg 右上角飄動 */}
<div className="absolute top-4 right-10 z-10 animate-float">
  <Image
    src="/heartt.jpg"
    alt="Heart"
    width={120}
    height={120}
  />
</div>


      {/* 標題區塊 */}
      <div className="flex flex-col w-full mb-6">
        <h1 className="text-4xl font-bold mb-2">Life</h1>
        <h3 className="text-gray-600">
          💡 Life tip: When nothing goes right... go to sleep
        </h3>
      </div>

      {/* 圖片區塊 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {[Painting1, Painting2, Painting3, Painting4, Painting5, Painting6].map((painting, idx) => (
          <div
            key={idx}
            className="rounded-2xl shadow-sm overflow-hidden aspect-[4/3] transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:brightness-110"
            style={{
              backgroundImage: `url(${painting.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
