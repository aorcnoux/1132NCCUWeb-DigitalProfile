import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import aprilImg from "@/../public/april.jpg";
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
  description: "瀏覽人次達 1000 萬，好評熱賣中",

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
        
        <div className="w-screen h-screen overflow-y-auto flex flex-col sm:flex-row gap-5 bg-gray-200 p-8">

          <div className=" min-w-[320px] w-full sm:w-[320px] h-full rounded-2xl bg-white flex 
          justify-start items-center flex-col p-[30px] pt-[80px] overflow-y-auto overflow-x-hidden">
            
            <Image src={aprilImg} alt="april" className="w-[80px] h-[80px] rounded-full" />
        
            <h1 className="mt-2">古健樺</h1>
            <p className="max-w-[380px] text-center">
              我是一個熱愛學習的學生，喜歡研究各種技術和工具，希望能夠不斷提升自己的能力。
            </p>
            
            {/* 社群連結 */}
            <div className="flex gap-2 my-5">
              <a href="https://google.com" target="_blank">
                <div className="bg-gray-300 w-[40px] h-[40px] rounded-full"></div>
              </a>
              <a href="https://google.com" target="_blank">
                <div className="bg-gray-300 w-[40px] h-[40px] rounded-full"></div>
              </a>
              <a href="https://google.com" target="_blank">
                <div className="bg-gray-300 w-[40px] h-[40px] rounded-full"></div>
              </a>
              <a href="https://google.com" target="_blank">
                <div className="bg-gray-300 w-[40px] h-[40px] rounded-full"></div>
              </a>
              <a href="https://google.com" target="_blank">
                <div className="bg-gray-300 w-[40px] h-[40px] rounded-full"></div>
              </a>
            </div>

            {/* 頁面切換 */}
            <div className="w-full flex flex-col gap-2">
              
              <Link href="/about">
                {/* <div className="w-full h-[84px] bg-gray-300 rounded-xl">About</div> */}
                <div className={`w-full h-[84px] bg-gray-300 rounded-xl`}>About</div>
              </Link>

              <Link href="/cate-web">
                <div className="w-full h-[84px] bg-gray-300 rounded-xl">Cate-Web</div>
              </Link>

              <Link href="/cate-painting">
                <div className="w-full h-[84px] bg-gray-300 rounded-xl">Cate-Painting</div>
              </Link>
              
              
              <div className="w-full h-[84px] bg-gray-300 rounded-xl">作品分類三</div>
              <div className="w-full h-[84px] bg-gray-300 rounded-xl">作品分類一</div>
              <div className="w-full h-[84px] bg-gray-300 rounded-xl">作品分類二</div>
              <div className="w-full h-[84px] bg-gray-300 rounded-xl">作品分類三</div>
            </div>

          </div>

          {children}

        </div>

      </body>
    </html>
  );
}
