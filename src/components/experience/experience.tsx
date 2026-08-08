import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase
} from "@fortawesome/free-solid-svg-icons";

const experienceItems = [
  {
    title: "Software Engineering Intern",
    company: "Placeholder Tech Sdn Bhd",
    period: "Jun 2025 – Aug 2025",
    points: [
      "Built and shipped internal dashboard features with React and TypeScript.",
      "Wrote REST endpoints and unit tests alongside a team of four engineers.",
      "Took part in code reviews, stand-ups and sprint planning.",
    ],
  },
  {
    title: "Web Development Assistant",
    company: "Placeholder Student Association",
    period: "2024 – 2025",
    points: [
      "Maintained and redesigned the association website, improving load time and accessibility.",
      "Set up a simple content workflow so non-technical members could publish updates.",
    ],
  },
  {
    title: "Freelance Web Projects",
    company: "Self-employed",
    period: "2024 – present",
    points: [
      "Designed and delivered small business sites from brief to deployment.",
      "Handled client communication, scoping and post-launch support.",
    ],
  },
];

export default function Experiences() {
  return (
    <section className="pt-20 pb-40 px-8 sm:px-16 lg:px-24 w-full bg-gradient-to-b from-[#101f4d] to-[#080a22] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Timeline Container */}
        <div className="relative pl-8 sm:pl-12">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[7px] sm:left-[11px] top-3 bottom-3 w-[2px] bg-[#31335b]" />

          {/* Stack of Cards */}
          <div className="flex flex-col gap-6">
            {experienceItems.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline Node Dot */}
                <div className="absolute -left-[33px] sm:-left-[45px] top-8 w-4 h-4 rounded-full bg-[#080a22] border-2 border-[#44a5ff] flex items-center justify-center shadow-[0_0_10px_rgba(68,165,255,0.5)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#44a5ff]" />
                </div>

                {/* Experience Card */}
                <div className="group relative p-6 sm:p-8 rounded-2xl bg-[#131433] border border-[#31335b] hover:border-[#44a5ff] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(68,165,255,0.2)] transition-all duration-300 flex flex-col justify-between shadow-xl">
                  {/* Top Row: Title & Date */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h3 className="text-xl font-space-grotesk font-bold text-white">
                      {item.title}
                    </h3>
                    <span className="text-gray-400 text-xs font-medium">
                      {item.period}
                    </span>
                  </div>

                  {/* Company Row */}
                  <div className="flex items-center gap-2 text-[#c780f8] text-sm font-medium mb-4">
                    <FontAwesomeIcon icon={faBriefcase} className="w-4 h-4" />
                    <span>{item.company}</span>
                  </div>

                  {/* Bullet Points */}
                  <ul className="flex flex-col gap-2 text-gray-400 text-sm leading-relaxed list-disc list-inside">
                    {item.points.map((point, pIndex) => (
                      <li key={pIndex}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}