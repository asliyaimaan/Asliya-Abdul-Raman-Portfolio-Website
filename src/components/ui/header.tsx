import Image from 'next/image';

interface PageHeaderProps {
  title: string;
  maincontent: string;
  description: string;
}

export default function PageHeader({ title, maincontent, description }: PageHeaderProps) {
  return (
    <section className="relative w-full py-18 px-6 sm:px-12 lg:px-[80px] border-b border-[#31335b] overflow-hidden bg-[#080a22]">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="/images/header-bg.jpg"
          alt="Header Background"
          fill
          priority
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-[#080a22]/70 backdrop-blur-[1px]" />
      </div>

      {/* Lighting Effect */}
      <div className="floating-particles z-[1] absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${6 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-start text-left">
        <span className="text-xs sm:text-sm font-unica tracking-widest text-[#44a5ff] uppercase mb-3">
          {title}
        </span>
        
        <h1 className="text-3xl sm:text-5xl font-space-grotesk font-bold tracking-tight text-white mb-4 leading-tight">
          {maincontent}
        </h1>

        <p className="text-gray-300 text-sm sm:text-base max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}