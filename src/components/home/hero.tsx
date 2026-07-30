import Link from 'next/link';
import Image from 'next/image';

const techBadges = ['TypeScript', 'React', 'PHP', 'Python', 'SQL', 'Supabase'];

export default function Hero() {
  return (
    <section className="relative min-h-[calc(103vh-80px)] flex items-center justify-center pt-24 pb-16 px-6 sm:px-12 lg:px-16 overflow-hidden w-full">
      {/* Full-width Background Image Container */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="/images/butterfly-bg.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center w-full h-full"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-[#080a22]/60 backdrop-blur-[1px]" />
      </div>

      {/* Tighter max-w-6xl container to pull text and image closer to the center */}
      <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        
        {/* Left Column: Text & CTA (takes 7 columns, text wraps better and closes gap) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <span className="text-xs sm:text-sm font-unica tracking-widest text-[#44a5ff] uppercase mb-4">
            Web & Software Development Student
          </span>

          <h1 className="text-4xl sm:text-6xl font-bold font-inter tracking-tight text-white mb-6 leading-tight">
            Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#44a5ff] via-[#6db9ff] to-purple-400">Asliya Abdul Raman</span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
            I build web and software experiences that feel fast, clear and a little bit electric. Currently studying, constantly shipping, and always chasing the next idea worth prototyping.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <Link
              href="/projects"
              className="px-6 py-3 rounded-xl bg-[#44a5ff] hover:bg-[#3293e6] text-[#080a22] font-semibold text-sm transition-all shadow-lg shadow-[#44a5ff]/20 flex items-center gap-2 group"
            >
              View my projects
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-[#161B2E]/80 hover:bg-[#1E2542] text-gray-200 border border-[#31335b] font-medium text-sm transition-all"
            >
              Get in touch
            </Link>
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap items-center gap-2.5">
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-2xl bg-[#121630]/60 border border-[#31335b]/60 text-xs font-unica text-gray-300 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Portrait Photo (Hidden on screens < 1024px, visible on lg and up) */}
        <div className="hidden lg:flex lg:col-span-5 justify-end">
          <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-[10px] overflow-hidden border border-[#31335b]/80 shadow-2xl bg-[#121630]">
            <Image
              src="/images/portfolio-pic.png"
              alt="Asliya Abdul Raman"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
        </div>

      </div>
    </section>
  );
}