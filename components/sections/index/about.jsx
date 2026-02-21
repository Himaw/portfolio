import { useState, useEffect } from "react";

// Core packages
import Image from "next/image";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Section specific blocks
import BadgesBlock from "../../blocks/about.badges.block";
import CopyBlock from "../../blocks/about.copy.block";

// Section scss
import about from "../../../styles/sections/index/about.module.scss";

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 *
 * @returns {jsx} <About />
 */
export default function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Define a media query for mobile screens
    const mobileMediaQuery = window.matchMedia("(max-width: 767px)");

    // Function to update isMobile state
    const handleResize = (event) => {
      setIsMobile(event.matches);
    };

    // Add event listener for changes in screen size
    mobileMediaQuery.addListener(handleResize);

    // Initialize isMobile state based on the initial screen size
    setIsMobile(mobileMediaQuery.matches);

    // Clean up the event listener on component unmount
    return () => {
      mobileMediaQuery.removeListener(handleResize);
    };
  }, []);

  return (
    <div id="about">
      <Section classProp={about.section}>
        <Container spacing={["verticalXXXLrg"]}>
          <SectionTitle
            title="About Me"
            preTitle="Synopsis"
            subTitle="With a diverse skill set that includes Full-stack Development, Project Management, and Artificial Intelligence (AI), I am a well-rounded tech enthusiast."
          />
          <section
            style={{ scrollBehavior: "smooth" }}
            className={about.content}
          >
            <div className={about.image}>
              {isMobile ? (
                <Image src="/img/hima.jpg" width={600} height={800} alt="Himasara Profile Picture" priority />
              ) : (
                <Image src="/img/hima.jpg" layout="fill" alt="Himasara Profile Picture" priority />
              )}
            </div>
            <div className={about.copy}>
              <CopyBlock
                title="Softskills that pay the bills"
                containerClass={about.container}
                iconClass={about.icon}
                icon={["fat", "ear-listen"]}
                copy="In addition to my design and technical capabilities, I have great leadership, time management, and multitasking abilities that I honed as a Co-Founder, Developer, and Master's Student. Outside of work, I enjoy being active by getting involved with sports like football and skateboarding. I am confident in my abilities to add value and passion to any project."
              />
              <BadgesBlock
                title="Research and planning"
                containerClass={about.container}
                list={methods}
                fullContainer="fullContainer"
                block="methods"
                icon="fingerprint"
                copy="I thrive in the planning and research stage of every project. This is where the seeds of success are sown. I believe in having a crystal-clear vision before embarking on any endeavor."
                //invertedColor="invertedColor"
                headerIcon={`${about.icon}`}
              />
            </div>
          </section>
        </Container>
      </Section>
    </div>
  );
}

const methods = [
  { key: "planet-moon", name: "User Research", type: "fad" },
  { key: "qrcode", name: "Digital Strategy", type: "fad" },
  { key: "cubes", name: "Content Strategy", type: "fad" },
  { key: "bar-chart", name: "Analysis", type: "fad" },
  { key: "window", name: "Design Systems", type: "fad" },
  { key: "solar-system", name: "Operations", type: "fad" },
];
