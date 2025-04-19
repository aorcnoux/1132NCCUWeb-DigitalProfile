"use client";

import { useState } from "react";
import Image from "next/image";
import aprilImg from "@/../public/april.jpg";
import HeartImg from "@/../public/ugly.png";

export default function About() {
  const [heart, setHeart] = useState(0);
  const [floatHearts, setFloatHearts] = useState([]);

  const addHeart = () => {
    setHeart((prev) => prev + 1);
    const id = Date.now();
    setFloatHearts((prev) => [...prev, id]);

    setTimeout(() => {
      setFloatHearts((prev) => prev.filter((h) => h !== id));
    }, 1000);
  };

  return (
    <div className="w-full h-full bg-white flex flex-col items-center justify-start rounded-2xl p-4 sm:p-6 md:p-8 overflow-y-auto max-w-[1440px] mx-auto relative">
      {/* 主要內容容器 */}
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-center sm:items-start w-full max-w-5xl">
        {/* 左側圖片 */}
        <div className="w-full sm:w-[400px] flex-shrink-0 mt-6 sm:mt-6">
          <Image
            src={aprilImg}
            alt="About photo"
            className="rounded-2xl object-cover w-full h-auto"
          />
        </div>

        {/* 右側內容 */}
        <div className="flex flex-col text-gray-800 w-full px-1 pt-4 sm:pt-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 mb-10">
            Chieh Ying (April) Chou
          </h1>

          {/* 就學資訊 */}
          <div className="mb-8">
            <h2 className="font-semibold text-lg sm:text-xl mb-2">🫧 Study at:</h2>
            <p className="text-sm sm:text-base">National Chengchi University</p>
            <p className="text-sm sm:text-base">B.A. in Arabic Language and Culture</p>
            <p className="text-sm sm:text-base">B.S. in Digital Content & Technologies</p>
          </div>

          {/* 技能條 */}
          <div className="mb-8">
            <h2 className="font-semibold text-lg sm:text-xl mb-2">🫧 Skill:</h2>
            <div className="space-y-2">
              <SkillBar name="Creativity" level="w-2/3" />
              <SkillBar name="Leadership" level="w-6/7" />
              <SkillBar name="Communication" level="w-5/6" />
            </div>
          </div>

          {/* 自我介紹 */}
          <div>
            <h2 className="font-semibold text-lg sm:text-xl mb-2">🫧 About me:</h2>
            <p className="leading-relaxed text-sm sm:text-base">
              Hi, I’m Chieh Ying (April) Chou. I’m a senior at National Chengchi University,
              double majoring in Arabic and Digital Content & Technologies.
              <br />
              Passionate about marketing, UI/UX design, digital media, and interactive design, I
              have experience in content creation, branding, and user engagement.
            </p>
          </div>
        </div>
      </div>
{/* ❤️ 愛心互動圖與計數器（固定在右上角，隨裝置尺寸自適應） */}
<div className="absolute top-50 right-2 sm:right-10 z-10">
  <div
    className="cursor-pointer hover:scale-105 transition-transform duration-200 flex flex-col items-center"
    onClick={addHeart}
  >
    <Image
      src={HeartImg}
      alt="heart"
      className="w-[60px] sm:w-[80px] md:w-[100px]"
    />
    <div className="text-xs sm:text-sm md:text-base font-semibold mt-1 text-center">
      {heart}
    </div>
  </div>

  {/* 飄出的表情符號 */}
  {floatHearts.map((id) => (
    <span
      key={id}
      className="absolute text-pink-500 text-3xl animate-float-heart -top-10 left-1/2 -translate-x-1/2"
    >
      🤡
    </span>
  ))}
</div>


    </div>
  );
}

// 技能條元件
function SkillBar({ name, level }) {
  return (
    <div>
      <p className="text-sm">{name}</p>
      <div className="w-full max-w-xs h-2 bg-gray-200 rounded-full">
        <div className={`h-2 bg-gray-500 rounded-full ${level}`}></div>
      </div>
    </div>
  );
}
