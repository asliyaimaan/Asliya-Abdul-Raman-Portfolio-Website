import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
  faCode,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const tourCards = [
  {
    title: "About me",
    description: "Where my love for code started, and what I'm studying right now.",
    href: "/about",
    icon: faGraduationCap,
  },
  {
    title: "Experience",
    description: "Internships and hands-on work that shaped how I build software.",
    href: "/experience",
    icon: faBriefcase,
  },
  {
    title: "Projects",
    description: "Things I've designed, coded on my own and in group.",
    href: "/projects",
    icon: faCode,
  },
  {
    title: "Contact",
    description: "Open to internships, collaborations and a good technical chat.",
    href: "/contact",
    icon: faEnvelope,
  },
];

export default function QuickTour() {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-16 w-full bg-gradient-to-b from-[#101f4d] to-[#080a22]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs sm:text-sm font-unica tracking-widest text-[#44a5ff] uppercase mb-2 block">
            EXPLORE
          </span>
          <h2 className="text-3xl sm:text-4xl font-space-grotesk font-bold tracking-tight text-white">
            A quick tour
          </h2>
        </div>

        {/* 2x2 Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tourCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group relative p-6 rounded-2xl bg-[#131433] border border-[#31335b] hover:border-[#44a5ff] hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(68,165,255,0.2)] transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Icon */}
                <div className="mb-6 text-[#44a5ff]">
                    <FontAwesomeIcon icon={card.icon} className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-space-grotesk font-bold text-white mb-3">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm sm:text-base mb-6 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Learn More link */}
              <div className="flex items-center gap-2 text-[#c780f8] font-medium text-sm transition-transform">
                <span>Learn more</span>
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}