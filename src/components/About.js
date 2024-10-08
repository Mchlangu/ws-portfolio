import { useEffect, useState, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import {
  MapPinIcon,
  AtSymbolIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from "@heroicons/react/20/solid";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    name: "Email:",
    description: "william.mahlangu024@gmail.com",
    icon: AtSymbolIcon,
  },
  {
    name: "Location:",
    description: "Gauteng, South Africa",
    icon: MapPinIcon,
  },
];

export default function About() {
  const [isInView, setIsInView] = useState(false); // Track if the component is in view
  const aboutRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 2000 });

    const refValue = aboutRef.current; // Store current value of aboutRef

    // Create an Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting); // Update state based on whether the section is in view
      },
      { threshold: 0.1 } // Trigger when 10% of the element is in view
    );

    if (refValue) {
      observer.observe(refValue); // Observe the stored ref value
    }

    // Cleanup the observer when the component is unmounted
    return () => {
      if (refValue) {
        observer.unobserve(refValue); // Cleanup using the stored ref value
      }
    };
  }, []);

  return (
    <div
      ref={aboutRef} // Reference the About section
      className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0"
      id="about"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
                About Me
              </p>

              {/* Conditionally render the TypeAnimation based on whether the component is in view */}
              {isInView && (
                <TypeAnimation
                  splitter={(str) => str.split(/(?= )/)} // Split the text by words
                  sequence={[
                    "I am a creative thinker with a passion for software development, blending the quiet focus of chess with the strategic flair of pool. I thrive on the deep rhythms of jazz, the smooth beats of deep house, and the storytelling of hip hop, all while enjoying moments of connection with family and friends. My love for wall art reflects my appreciation for bold expressions and intricate details, just like in coding. A balance of introversion and extroversion keeps me grounded, whether I'm diving deep into code or sharing moments with those around me. Currently, I’m on a full-stack learnership, constantly expanding my skills and evolving in the dynamic world of tech.",
                    3000, // Wait 3 seconds after typing the paragraph
                  ]}
                  speed={{ type: "keyStrokeDelayInMs", value: 50 }} // Typing speed (50ms per keystroke)
                  omitDeletionAnimation={true} // Remove the deletion animation
                  style={{
                    fontSize: "1em",
                    display: "block",
                    minHeight: "200px",
                  }} // Custom styling
                  repeat={1} // Run only once while in view
                  className="text-justify"
                />
              )}
            </div>
          </div>
        </div>

        <div
          className="-ml-12 -mt-12 p-12 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
          data-aos="fade-left"
        >
          <img
            className="w-[38rem] ring-2 ring-base-300 max-w-none rounded-xl shadow-xl sm:w-[57rem]"
            src="https://fastly.picsum.photos/id/473/5000/3333.jpg?hmac=OrrE0aUqLbLCJ9PAlSn0dIRHjOnuuuev9IjuO3PGZf8"
            alt="Person"
          />
        </div>
      </div>

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8">
          <div className="text-base leading-7">
            <div className="grid gap-x-6 sm:grid-cols-2">
              <div
                className="ring-2 ring-base-300 bg-base-200 rounded-2xl mt-10 p-5 shadow-xl"
                data-aos="zoom-in"
              >
                <BriefcaseIcon
                  className="h-5 w-5 mx-auto"
                  aria-hidden="true"
                />
                <h2 className="text-2xl text-center font-bold tracking-tight">
                  Full Stack Developer Intern
                </h2>
                <p className="mt-3 list-item list-inside">
                  Developing RESTful APIs
                </p>
                <p className="mt-3 list-item list-inside">
                  Using Java Spring Boot to create backend
                </p>
                <p className="mt-3 list-item list-inside">
                  Using Angular Typescript, HTML5, TailwindCSS for frontend
                </p>
              </div>

              <div
                className="ring-2 ring-base-300 bg-base-200 rounded-2xl mt-10 p-5 shadow-xl"
                data-aos="zoom-in"
              >
                <AcademicCapIcon
                  className="h-5 w-5 mx-auto"
                  aria-hidden="true"
                />
                <h2 className="text-2xl text-center font-bold tracking-tight">
                  Software Development
                </h2>
                <p className="mt-3 list-item list-inside">
                  Learned database design principles, system analysis and design
                </p>
                <p className="mt-3 list-item list-inside">
                  Practiced using Oracle PL/SQL, C++ (Object Oriented Programming)
                </p>
              </div>
            </div>

            <dl
              className="mt-10 space-y-8 text-base leading-7 lg:max-w-none"
              data-aos="fade-right"
            >
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold">
                    <feature.icon
                      className="absolute left-1 top-1 h-5 w-5"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
