import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    id: 1,
    name: "FurnishUp",
    href: "#",
    imageSrc:
      "https://fastly.picsum.photos/id/23/3887/4899.jpg?hmac=2fo1Y0AgEkeL2juaEBqKPbnEKm_5Mp0M2nuaVERE6eE",
    used: "Angular Typescript, Bootstrap CSS",
    description: "An online shopping website for refurbished furniture",
  },
  {
    id: 2,
    name: "IRenew",
    href: "#",
    imageSrc:
      "https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g",
    used: "Angular Typescript, Bootstrap CSS, Java Spring Boot",
    description: "An online shopping website for refurbished Apple product.",
  },
  {
    id: 3,
    name: "Project 3",
    href: "#",
    imageSrc:
      "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=4dXthm-NBqZdQwL-EYEBmXUtmhfjoNUBPbLkA64InGI",
    used: "React.js, TailwindCSS",
    description: "A SaaS platform.",
  },
  {
    id: 4,
    name: "Project 4",
    href: "#",
    imageSrc:
      "https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=saVlbujm3PXuVZrxzNq3vY7HsXsUeQ27U8ZTSgWzZl0",
    used: "Vue.js, Firebase",
    description: "A progressive web app for task management.",
  },
  {
    id: 5,
    name: "Project 5",
    href: "#",
    imageSrc:
      "https://fastly.picsum.photos/id/30/4917/3279.jpg?hmac=DO5Q8-Yx2THCbYJmx6dmHOyn_qmXAfqC79Y_4CGVwZs",
    used: "Next.js, TailwindCSS",
    description: "A personal portfolio website.",
  },
];

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(2); // Default to 2 initially

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

  const handleViewMore = () => {
    setVisibleProjects((prev) => prev + 2); // Show 2 more projects 
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
        {visibleProjects < projects.length && ( // Only show the button if there are more projects to display
          <div className="mt-16 flex justify-center">
            <button
              className="btn btn-outline"
              onClick={handleViewMore}
            >
              View More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
