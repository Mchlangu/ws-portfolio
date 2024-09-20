import { useState, useEffect } from "react";
import nglearn from "../nglearn.png";
import furnishup from "../furnishup.png"
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    id: 1,
    name: "Ng Learn",
    href: "https://github.com/Mchlangu/angular-lms",
    imageSrc: nglearn,
    used: "Angular Typescript, TailwindCSS",
    description: "An online learning management system. Allow users to consume content and take quiz",
  },
  {
    id: 2,
    name: "IRenew",
    href: "https://github.com/tebohonthako/iRenew-store",
    imageSrc:
      "https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g",
    used: "Angular Typescript, Bootstrap CSS, Java Spring Boot",
    description: "An online shopping website for refurbished Apple product.",
  },
  {
    id: 3,
    name: "Furnish Up",
    href: "https://github.com/nonkazi/FurnishUp",
    imageSrc: furnishup,
    used: "Angular, Bootstrap, Java",
    description: "A SaaS platform.",
  },
];

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(2); // Default to 2 initially
  const [showAll, setShowAll] = useState(false); // To toggle between "View More" and "View Less"

  useEffect(() => {
    AOS.init({ duration: 2000 });

    // Adjust the number of visible projects based on screen size
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleProjects(4); // Show 4 projects initially on larger screens
      } else {
        setVisibleProjects(2); // Show 2 projects on mobile
      }
    };

    // Set the initial visible projects based on screen size
    handleResize();

    // handle window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggleProjects = () => {
    if (showAll) {
      // Show fewer projects (2 or 4 based on screen size)
      setVisibleProjects(window.innerWidth >= 1024 ? 4 : 2);
    } else {
      // Show all projects
      setVisibleProjects(projects.length);
    }
    setShowAll(!showAll); // Toggle between showing all and fewer projects
  };

  return (
    <div id="projects">
      <div className="mx-auto max-w-2xl px-6 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <h2 className="text-lg leading-7">Browse my recent</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
          Projects
        </p>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {projects.slice(0, visibleProjects).map((project) => (
            <div
              key={project.id}
              className="group relative ring-2 ring-base-300 bg-base-200 rounded-2xl shadow-xl"
              data-aos="flip-left"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:brightness-75 duration-300 delay-100 lg:h-80 rounded-t-2xl ">
                <img
                  src={project.imageSrc}
                  alt={project.name}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between p-4">
                <div className="p-4">
                  <h3 className="text-lg font-bold">
                    <a href={project.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {project.name}
                    </a>
                  </h3>
                  <p className="mt-1 mb-5 text-sm">{project.description}</p>
                  <p className="text-sm font-medium">{project.used}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <button
            className="btn btn-outline"
            onClick={handleToggleProjects}
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </div>
  );
}
