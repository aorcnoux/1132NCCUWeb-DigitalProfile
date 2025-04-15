import Image from "next/image";
import aprilImg from "@/../public/april.jpg";

export default function About() {
  return (
    <div className="w-full h-full bg-white flex justify-center items-center rounded-2xl p-8">
      <div className="flex flex-col sm:flex-row gap-10 items-center sm:items-start max-w-5xl w-full">
       {/* 左側照片 */}
<div className="w-full sm:w-[400px] flex-shrink-0 mt-4 sm:mt-5">
  <Image
    src={aprilImg}
    alt="About photo"
    className="rounded-4xl object-cover w-full h-auto"
  />
</div>

       {/* 右側文字 */}
<div className="flex flex-col text-gray-800 self-start text-left max-w-xl pl-4 space-y-10">
<h1 className="text-4xl font-bold mt-4">Cheih Ying (April) Chou</h1>


  {/* Study at */}
  <div className="space-y-2">
    <h2 className="font-semibold text-xl">🫧 Study at:</h2>
    <p>National Chengchi University</p>
    <p>B.A. in Arabic Language and Culture</p>
    <p>B.S. in Digital Content & Technologies</p>
  </div>

  {/* Skill */}
  <div className="space-y-2">
    <h2 className="font-semibold text-xl">🫧 Skill:</h2>
    <div className="space-y-1">
      <SkillBar name="Creativity" level="w-2/3" />
      <SkillBar name="Leadership" level="w-6/7" />
      <SkillBar name="Communication" level="w-5/6" />
    </div>
  </div>

  {/* About me */}
  <div className="space-y-2">
    <h2 className="font-semibold text-xl">🫧 About me:</h2>
    <p className="leading-loose">
    Hi, I’m Chieh Ying (April) Chou.
I’m a senior at National Chengchi University, double majoring in Arabic and Digital Content & Technologies.

Passionate about marketing, UI/UX design, digital media, and interactive design, I have experience in content creation, branding, and user engagement.
    </p>
  </div>
</div>

      </div>
    </div>
  );
}

// 小元件：技能條
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

