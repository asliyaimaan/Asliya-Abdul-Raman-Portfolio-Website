import Image from 'next/image';

export default function AboutMe() {
  return (
    <section className="pt-20 px-6 sm:px-12 lg:px-[80px] w-full bg-gradient-to-b from-[#101f4d] to-[#080a22]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Profile Picture with Glow Effect */}
        <div className="lg:col-span-4 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden border border-[#31335b] shadow-[0_15px_30px_15px_rgba(68,165,255,0.3)] group">
            <Image
              src="/images/portfolio-pic.png"
              alt="Asliya Abdul Raman"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Right Column: Bio Paragraphs */}
        <div className="lg:col-span-8 flex flex-col space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed">
          <p className="text-white font-medium text-lg sm:text-xl">
            I’m Asliya — a web and software development student who genuinely enjoys the moment a messy idea finally compiles into something usable.
          </p>

          <p className="text-gray-400 text-sm sm:text-base">
            My love for coding started with curiosity about how the websites I used every day were actually built. Taking things apart turned into rebuilding them, and rebuilding them turned into designing my own. What keeps me here is the mix of logic and creativity: software is one of the few crafts where a clean solution can also feel beautiful.
          </p>

          <p className="text-gray-400 text-sm sm:text-base">
            I care about clarity — readable code, honest interfaces, and documentation that a future teammate (or future me) will thank me for. I like working across the stack, but I’m especially drawn to front-end engineering where design decisions and technical decisions meet.
          </p>

          <p className="text-gray-400 text-sm sm:text-base">
            Outside of coursework you’ll usually find me prototyping side projects, reading about interface design, or refactoring something that already worked perfectly fine.
          </p>
        </div>

      </div>
    </section>
  );
}