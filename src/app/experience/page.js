export default function CateWeb() {
  return (
    <div className="w-full h-full bg-white flex flex-col items-center justify-start rounded-2xl p-4 sm:p-6 md:p-8 overflow-y-auto pt-15 max-w-[1440px] mx-auto">
      {/* 主標題 */}
      <div className="text-center mb-8 px-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Work Experience</h1>
        <p className="text-gray-500 text-sm sm:text-base">
          A cross-disciplinary dive into fandom management, tiny dog behavior, and Sanrio psychology
        </p>
      </div>

      {/* 卡片容器 */}
      <div className="flex flex-col gap-6 w-full max-w-3xl px-2">
        
        {/* 卡片 1 */}
        <div className="bg-white rounded-2xl shadow-md p-6 transition duration-300 hover:scale-[1.01] animate-fade-up">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
            <h2 className="text-lg sm:text-xl font-semibold text-[#1E3A8A]">
              Senior Swiftie Intelligence Officer
            </h2>
            <span className="text-[#1E3A8A] text-sm sm:text-base">April 2014 – Present</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">13th Note International</p>
          <ul className="text-gray-700 mt-2 list-disc list-inside space-y-2 text-sm">
            <li>I’m a professional ticket sniper who can bypass CAPTCHA in 0.6 seconds and run multiple tabs like a machine—securing Taylor seats even when global systems crash.</li>
            <li>Scoring tickets is just the basics. I also possess the rare ability to decode Taylor Swift's exes’ time and location based on a single lyric.</li>
            <li>In the Swiftie universe, I’m both a hacker in the ticketing department and a postdoctoral researcher in the field of emotional entanglement.</li>
          </ul>
          <div className="flex flex-wrap gap-2 mt-4">
            <Tag text="#TicketSniper" />
            <Tag text="#LyricDetective" />
            <Tag text="#EmotionalAnalysisDept" />
            <Tag text="#SwiftieSince1989" />
          </div>
        </div>

        {/* 卡片 2 */}
        <div className="bg-white rounded-2xl shadow-md p-6 transition duration-300 hover:scale-[1.01] animate-fade-up">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
            <h2 className="text-lg sm:text-xl font-semibold text-[#1E3A8A]">
              Chihuahua Behavior Specialist
            </h2>
            <span className="text-[#1E3A8A] text-sm sm:text-base">August 2024 – Present</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">National Tremble Tracking Center</p>
          <ul className="text-gray-700 mt-2 list-disc list-inside space-y-2 text-sm">
            <li>Specializes in documenting when Chihuahuas start trembling, why they’re trembling, and which angles make the trembling look the cutest.</li>
            <li>Regularly hosts debates titled “Chihuahuas Aren’t Actually That Aggressive” to advocate for fair emotional representation.</li>
            <li>Owns a backup archive of over 1,000 adorable pointy-ear photos, head-shaking slow-mos, and soulful eye contact close-ups.</li>
          </ul>
          <div className="flex flex-wrap gap-2 mt-4">
            <Tag text="#TinyButFierce" />
            <Tag text="#VibrationAnalysis" />
            <Tag text="#PointyEarArchive" />
            <Tag text="#ShakyButConfident" />
          </div>
        </div>

        {/* 卡片 3 */}
        <div className="bg-white rounded-2xl shadow-md p-6 transition duration-300 hover:scale-[1.01] animate-fade-up">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
            <h2 className="text-lg sm:text-xl font-semibold text-[#1E3A8A]">
              Hangyodon Emotional Wellness Manager
            </h2>
            <span className="text-[#1E3A8A] text-sm sm:text-base">January 2023 – Present</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">Ministry of Deep Sea Emotions</p>
          <ul className="text-gray-700 mt-2 list-disc list-inside space-y-2 text-sm">
            <li>Logs daily Hangyodon mood swings and identifies causes of underwater emotional fluctuations.</li>
            <li>Organizes monthly campaigns like “Let Hangyodon Smile” and coordinates inter-fish empathy trainings.</li>
            <li>Curates sad-but-cute memes and manages the official fanpage @hangyohugs on IG.</li>
          </ul>
          <div className="flex flex-wrap gap-2 mt-4">
            <Tag text="#UnderwaterMoodLog" />
            <Tag text="#SanrioTherapist" />
            <Tag text="#HangyodonLore" />
            <Tag text="#MemeBasedHealing" />
          </div>
        </div>

        {/* JUST KIDDING 笑點收尾 */}
        <p className="text-center text-gray-400 text-sm mt-10 tracking-widest">
          jk...
        </p>
      </div>
    </div>
  );
}

// 標籤元件
function Tag({ text }) {
  return (
    <span className="text-sm px-3 py-1 bg-[#D9E8F5] text-[#1E3A8A] rounded-full whitespace-nowrap">
      {text}
    </span>
  );
}
