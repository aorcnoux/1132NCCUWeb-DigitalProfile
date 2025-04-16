import "./globals.css";
import Image from "next/image";
import aprilImg from "@/../public/aapril.jpg";
import Link from "next/link";

export const metadata = {
  title: "AprilChouDigitalProfile",
  description: "Chieh Ying Chou",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        <div
          className="w-screen h-screen overflow-y-auto flex flex-col sm:flex-row gap-5 p-8"
          style={{ backgroundColor: "#E6F0FA" }}
        >
          {/* 側邊欄 */}
          <div className="min-w-[320px] w-full sm:w-[320px] h-full rounded-2xl bg-white flex 
            justify-start items-center flex-col p-[30px] pt-[80px] overflow-y-auto overflow-x-hidden">
            
            {/* 大頭照 */}
            <Image src={aprilImg} alt="april" className="w-[100px] h-[100px] rounded-full" />

            <h1 className="mt-2 font-bold">Chieh Ying Chou</h1>
            <p className="max-w-[380px] text-center">
              April designs functional, visually engaging solutions that bring clarity to complexity
            </p>

            {/* 社群連結 */}
            <div className="flex gap-2 my-5">
              <SocialIcon href="https://www.instagram.com/aorcnoux" src="/ig.png" alt="Instagram" />
              <SocialIcon href="https://www.linkedin.com/in/chiehyingchou/" src="/linkedin.png" alt="LinkedIn" />
              <SocialIcon href="https://www.facebook.com/profile.php?id=100072377231574&locale=zh_TW" src="/fb.png" alt="Facebook" />
            </div>

            {/* 導覽按鈕 */}
            <div className="w-full flex flex-col gap-2 font-elegant">
              <SidebarButton href="/aboutme" bg="#F1E4DD" label="About Me" />
              <SidebarButton href="/experience" bg="#D9E8F5" label="Experience" />
              <SidebarButton href="/life" bg="#D2ECE9" label="Life" />
            </div>
          </div>

          {/* 右側內容 */}
          {children}
        </div>
      </body>
    </html>
  );
}

// 側邊欄按鈕元件
function SidebarButton({ href, bg, label }) {
  return (
    <Link href={href}>
      <div
        className="w-full h-[84px] rounded-xl flex items-center justify-center text-lg font-bold 
          transition-transform duration-300 hover:scale-105 hover:opacity-90"
        style={{ backgroundColor: bg }}
      >
        {label}
      </div>
    </Link>
  );
}

// 社群 icon 元件
function SocialIcon({ href, src, alt }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className="w-[40px] h-[40px] rounded-full overflow-hidden transform transition-transform duration-300 hover:scale-110">
        <Image src={src} alt={alt} width={40} height={40} className="object-cover" />
      </div>
    </a>
  );
}
