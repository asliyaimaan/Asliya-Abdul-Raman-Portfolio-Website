import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const contactItems = [
  {
    title: "EMAIL",
    value: "asliya.abdulraman@gmail.com",
    icon: faEnvelope,
    href: "mailto:asliya.abdulraman@gmail.com",
    isExternal: false,
  },
  {
    title: "PHONE",
    value: "+230 5972 0580",
    icon: faPhone,
    href: null,
    isExternal: false,
  },
  {
    title: "LOCATION",
    value: "Port-Louis, Mauritius",
    icon: faLocationDot,
    href: null,
    isExternal: false,
  },
  {
    title: "GITHUB",
    value: "github.com/asliyaimaan",
    icon: faGithub,
    href: "https://github.com/asliyaimaan",
    isExternal: true,
  },
  {
    title: "LINKEDIN",
    value: "linkedin.com/in/asliya-abdul-raman",
    icon: faLinkedinIn,
    href: "https://www.linkedin.com/in/asliya-abdul-raman-69a3a52b3/",
    isExternal: true,
  },
];

export default function ContactInfo() {
  return (
    <section className="pt-20 pb-40 px-6 sm:px-12 lg:px-[80px] w-full bg-gradient-to-b from-[#101f4d] to-[#080a22]">
      <div className="max-w-4xl mx-auto">
        {/* Grid of Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactItems.map((item, index) => {
            const cardClasses =
              "group relative p-6 rounded-2xl bg-[#131433] border border-[#31335b] hover:border-[#44a5ff] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(68,165,255,0.2)] transition-all duration-300 flex flex-col justify-between shadow-xl";

            const content = (
              <>
                <div className="mb-4 text-[#44a5ff]">
                  <FontAwesomeIcon icon={item.icon} className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-sm font-unica tracking-widest text-gray-400 uppercase block mb-1">
                    {item.title}
                  </span>
                  <p className="text-white font-medium text-sm sm:text-base break-all">
                    {item.value}
                  </p>
                </div>
              </>
            );

            // If item has a link, render as <a>; otherwise render as <div> with cursor-default
            if (item.href) {
              return (
                <a
                  key={index}
                  href={item.href}
                  {...(item.isExternal
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={`${cardClasses} cursor-pointer`}
                >
                  {content}
                </a>
              );
            }

            return (
              <div key={index} className={`${cardClasses} cursor-default`}>
                {content}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}