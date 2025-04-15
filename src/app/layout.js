import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import aprilImg from "@/../public/aapril.jpg";
import Link from "next/link";
import LinkImg1 from "@/image/帝寶.png"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "周杰穎的數位履歷",
  description: "Chieh Ying Chou",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <div className="w-screen h-screen overflow-y-auto flex flex-col sm:flex-row gap-5 p-8" style={{ backgroundColor: '#E6F0FA' }}>

          <div className=" min-w-[320px] w-full sm:w-[320px] h-full rounded-2xl bg-white flex 
          justify-start items-center flex-col p-[30px] pt-[80px] overflow-y-auto overflow-x-hidden">
            
            <Image src={aprilImg} alt="april" className="w-[100px] h-[100px] rounded-full" />

            <h1 className="mt-2 font-bold">Chieh Ying Chou</h1>
            <p className="max-w-[380px] text-center ">
              April designs functional, visually engaging solutions that bring clarity to complexity
            </p>
            
            {/* 社群連結 */}
            <div className="flex gap-2 my-5">
  {/* Instagram */}
  <a
    href="https://www.instagram.com/aorcnoux?igsh=ZmVteHduY29pZXFw&utm_source=qr"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
      <Image
        src="/ig.png" // 放在 public/ig.png
        alt="Instagram"
        width={40}
        height={40}
        className="object-cover"
      />
    </div>
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/chiehyingchou/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
      <Image
        src="/linkedin.png" // 放在 public/linkedin.png
        alt="LinkedIn"
        width={40}
        height={40}
        className="object-cover"
      />
    </div>
  </a>

  {/* Facebook */}
  <a
    href="https://www.facebook.com/profile.php?id=100072377231574&locale=zh_TW"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
      <Image
        src="/fb.png"
        alt="Facebook"
        width={40}
        height={40}
        className="object-cover"
      />
    </div>
  </a>
</div>

            {/* 頁面切換 */}
            <div className="w-full flex flex-col gap-2 font-elegant">
              <Link href="/aboutme">
                <div className="w-full h-[84px] bg-[#F1E4DD] rounded-xl flex items-center justify-center text-lg font-bold hover:opacity-90 transition">About Me</div>
              </Link>

              <Link href="/experience">
                <div className="w-full h-[84px] bg-[#D9E8F5] rounded-xl flex items-center justify-center text-lg font-bold hover:opacity-90 transition">Experience</div>
              </Link>

              <Link href="/projects">
                <div className="w-full h-[84px] bg-[#D2ECE9] rounded-xl flex items-center justify-center text-lg font-bold hover:opacity-90 transition">Projects</div>
              </Link>

              </div>

          </div>

          {children}

        </div>

      </body>
    </html>
  );
}
