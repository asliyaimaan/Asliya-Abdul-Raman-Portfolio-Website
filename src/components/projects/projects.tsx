import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    year: '2026',
    title: 'Aurora Task Dashboard',
    description: 'A full-stack productivity dashboard with real-time task boards, filtering and analytics. Built to practise clean state management and accessible component design.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    image: '/images/project-placeholder.jpg',
    liveDemo: '#',
    source: '#',
    imagePosition: 'left', // image on left, text on right
  },
  {
    year: '2025',
    title: 'Campus Study Buddy',
    description: 'A matching app that pairs students by course, availability and study style. Includes authentication, a scheduling calendar and email reminders.',
    tags: ['Next.js', 'PostgreSQL', 'Prisma'],
    image: '/images/project-placeholder.jpg',
    liveDemo: null,
    source: '#',
    imagePosition: 'right', // text on left, image on right
  },
  {
    year: '2025',
    title: 'Pixel Weather CLI',
    description: 'A small command-line weather client with cached requests and a retro pixel-art output mode. A fun exercise in API design and terminal rendering.',
    tags: ['Python', 'REST APIS'],
    image: '/images/project-placeholder.jpg',
    liveDemo: null,
    source: '#',
    imagePosition: 'left', // image on left, text on right
  },
];

export default function ProjectsList() {
  return (
    <section className="pt-20 pb-40 px-6 sm:px-12 lg:px-[80px] w-full bg-gradient-to-b from-[#101f4d] to-[#080a22]">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative rounded-2xl bg-[#131433] border border-[#31335b] hover:border-[#44a5ff] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(68,165,255,0.2)] transition-all duration-300 overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center"
          >
            {/* Image Container */}
            <div
              className={`lg:col-span-6 relative w-full aspect-[16/10] overflow-hidden border-b lg:border-b-0 ${
                project.imagePosition === 'right' ? 'lg:order-2 lg:border-l' : 'lg:border-r'
              } border-[#31335b]`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content Container */}
            <div
              className={`lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between ${
                project.imagePosition === 'right' ? 'lg:order-1' : ''
              }`}
            >
              <div>
                <span className="text-xs font-medium text-gray-400 mb-1 block">
                  {project.year}
                </span>
                <h3 className="text-2xl font-space-grotesk font-bold text-white mb-3 group-hover:text-[#44a5ff] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-[#080a22] text-gray-300 border border-[#31335b]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex items-center gap-6 text-sm font-medium">
                {project.liveDemo && (
                  <Link
                    href={project.liveDemo}
                    className="text-[#c780f8] hover:underline flex items-center gap-1.5"
                  >
                    Live demo ↗
                  </Link>
                )}
                {project.source && (
                  <Link
                    href={project.source}
                    className="text-[#c780f8] hover:underline flex items-center gap-1.5"
                  >
                    Source ↗
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}