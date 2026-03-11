import "./styles/Work.css";
import { MdArrowOutward } from "react-icons/md";

const projects = [
  {
    title: "Ordrz",
    category:
      "All-in-one restaurant ordering platform enabling seamless online food ordering, delivery management, and POS integration for Pakistani restaurants.",
    tools: "React, Node.js, Payment Gateway",
    image: "/images/ordrz-thumb.webp",
    link: "https://ordrz.pk/",
  },
  {
    title: "Umar Electronics",
    category:
      "E-commerce platform for electronics retail featuring product catalogs, secure checkout, and inventory management for a leading Pakistani electronics store.",
    tools: "PHP, E-commerce, MySQL",
    image: "/images/umar-thumb.jpg",
    link: "https://umarelectronics.pk/",
  },
  {
    title: "GloriaFood Integration",
    category:
      "Restaurant online ordering system integration enabling commission-free orders, table reservations, and delivery management for food businesses.",
    tools: "API Integration, React, Order Management",
    image: "/images/gloria-thumb.jpg",
    link: "https://www.gloriafood.com/",
  },
  {
    title: "HR Pakistan",
    category:
      "Professional platform for Pakistan's HR community offering resources, job listings, and networking opportunities for HR professionals nationwide.",
    tools: "React, Node.js, Responsive Design",
    image: "/images/hrpak-thumb.jpg",
    link: "https://hrpakistan.org/",
  },
  {
    title: "Close CRM Integration",
    category:
      "Integrated AI-powered sales CRM features - direct calling/email/text, AI Notetaker, automated pipelines improving deal-closing efficiency.",
    tools: "REST APIs, Node.js, CRM Integration",
    image: "/images/placeholder.webp",
    link: "https://www.close.com/",
  },
  {
    title: "Blackline Car Care",
    category:
      "Full-featured e-commerce platform for professional car detailing products serving 750,000+ customers.",
    tools: "PHP/MySQL, React, E-commerce",
    image: "/images/blackline-thumbnail.png",
    link: "https://blacklinecarcare.com/",
  },
  {
    title: "Primaalta",
    category: "Global Mineral Sourcing Website",
    tools: "React.js, API Integration, Responsive Design",
    image: "/images/primaalta.png",
    link: "https://primaalta.org/",
  },
  {
    title: "Solid Starters",
    category: "Low-Code Platform",
    tools: "Angular, Next.js, NestJS, MongoDB",
    image: "/images/Solidx.png",
  },
  {
    title: "Radix",
    category: "E-Commerce",
    tools: "Angular, Next.js, NestJS, CMS",
    image: "/images/radix.png",
  },
  {
    title: "Bond Cancellation",
    category: "Import-Export Automation",
    tools: "Angular, Next.js, NestJS, Workflows",
    image: "/images/bond.png",
  },
  {
    title: "Sapphire",
    category: "CRM Platform",
    tools: "AngularJS, NestJS, PostgreSQL",
    image: "/images/sapphire.png",
  },
  {
    title: "Mpro",
    category: "Insurance Platform",
    tools: "React.js, Node.js, Microservices",
    image: "/images/Maxlife.png",
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-grid">
          {projects.map((project, index) => (
            <div className="work-card" key={index}>
              <div className="work-card-header">
                <h4>{project.title}</h4>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-card-link"
                    data-cursor="disable"
                  >
                    <MdArrowOutward />
                  </a>
                )}
              </div>
              <p className="work-card-desc">{project.category}</p>
              <div className="work-card-tags">
                {project.tools.split(", ").map((tool, i) => (
                  <span className="work-tag" key={i}>{tool}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
