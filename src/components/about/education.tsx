import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faUniversity,
} from "@fortawesome/free-solid-svg-icons";

const educationItems = [
  {
    title: "BSc Applied Computing (In progress)",
    institution: "University Of Mauritius",
    period: "2024 – present",
    description: "Focused on software engineering, algorithms and web technologies. Consistently on the dean's list.",
  },
  {
    title: "Higher School Certificate (HSC)",
    institution: "Renganaden Seeneevassen SSS",
    period: "2023",
    description: "French, Computer Science, Economics",
  },
  {
    title: "School Certificate (SC)",
    institution: "Renganaden Seeneevassen SSS",
    period: "2021",
    description: "English, Maths, French, Computer Science, Economics, Biology, Sociology",
  },
];

export default function Education() {
  return (
    <section className="pt-20 pb-40 px-6 sm:px-12 lg:px-[80px] w-full bg-[#080a22]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs sm:text-sm font-unica tracking-widest text-[#44a5ff] uppercase mb-2 block">
            EDUCATION
          </span>
          <div className="flex items-center gap-3">
            <div className="text-[#44a5ff] text-2xl">
              <FontAwesomeIcon icon={faGraduationCap} className="w-7 h-7" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-space-grotesk font-bold tracking-tight text-white">
              Academic achievements
            </h2>
          </div>
        </div>

        {/* Stack of Cards */}
        <div className="flex flex-col gap-6">
          {educationItems.map((item, index) => (
            <div
              key={index}
              className="group relative p-6 sm:p-8 rounded-2xl bg-[#131433] border border-[#31335b] hover:border-[#44a5ff] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(68,165,255,0.2)] transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              {/* Top Row: Title & Date */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <h3 className="text-xl font-space-grotesk font-bold text-white">
                  {item.title}
                </h3>
                <span className="text-gray-400 text-xs font-medium">
                  {item.period}
                </span>
              </div>

              {/* Institution Row */}
              <div className="flex items-center gap-2 text-[#c780f8] text-sm font-medium mb-3">
                <FontAwesomeIcon icon={faUniversity} className="w-4 h-4" />
                <span>{item.institution}</span>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}