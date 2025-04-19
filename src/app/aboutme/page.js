"use client";

import { useState } from "react";
import Image from "next/image";
import aprilImg from "@/../public/april.jpg";
import HeartImg from "@/../public/ugly.png";

export default function About() {
  const [heart, setHeart] = useState(0);
  const [floatHearts, setFloatHearts] = useState([]);

  const addHeart = () => {
    setHeart(heart + 1);

    const id = Date.now();
    setFloatHearts((prev) => [...prev, id]);

    setTimeout(() => {
      setFloatHearts((prev) => prev.filter((h) => h !== id));
    }, 1000);
  };

  return (
    <div className="w-full h-full bg-white flex justify-center items-center rounded-2xl p-8 relative">
      {/* 左右區塊 */}
      <div className="flex flex-col sm:flex-row gap-10 items-center sm:items-start max-w-5xl w-full">
        {/* 左側照片 */}
        <div className="w-full sm:w-[400px] flex-shrink-0 mt-4 sm:mt-5">
          <Image
            src={aprilImg}
            alt="About photo"
            className="rounded-2xl object-cover w-full h-auto"
          />
        </div>

        {/* 右側文字區塊 */}
        <div className="flex flex-col text-gray-800 self-start text-left max-w-xl pl-4 space-y-10 animate-fade-up">
          <h1 className="text-4xl font-bold mt-4">Cheih Ying (April) Chou</h1>

          <div className="space-y-2">
            <h2 className="font-semibold text-xl">🫧 Study at:</h2>
            <p>National Chengchi University</p>
            <p>B.A. in Arabic Language and Culture</p>
            <p>B.S. in Digital Content & Technologies</p>
          </div>

          <div className="space-y-2">
            <h2 className="font-semibold text-xl">🫧 Skill:</h2>
            <div className="space-y-1">
              <SkillBar name="Creativity" level="w-2/3" />
              <SkillBar name="Leadership" level="w-6/7" />
              <SkillBar name="Communication" level="w-5/6" />
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="font-semibold text-xl">🫧 About me:</h2>
            <p className="leading-loose">
              Hi, I’m Chieh Ying (April) Chou. I’m a senior at National Chengchi
              University, double majoring in Arabic and Digital Content &
              Technologies.
              Passionate about marketing, UI/UX design, digital media, and
              interactive design, I have experience in content creation,
              branding, and user engagement.
            </p>
          </div>
        </div>
      </div>

      {/* ❤️ 愛心互動圖＆計數（固定右側中間） */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center z-10">
        <div
          className="cursor-pointer flex flex-col justify-center items-center hover:scale-105 transition-transform duration-200"
          onClick={addHeart}
        >
          <Image src={HeartImg} alt="heart" className="w-[220px]" />
          <div className="text-xl mt-2 font-semibold">{heart}</div>
        </div>

        {floatHearts.map((id) => (
          <span
            key={id}
            className="absolute text-pink-500 text-4xl animate-float-heart -top-10"
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
      <div className="w-48 h-2 bg-gray-200 rounded-full">
        <div className={`h-2 bg-gray-500 rounded-full ${level}`}></div>
      </div>
    </div>
  );
}
