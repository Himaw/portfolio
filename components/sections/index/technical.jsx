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
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 *
 * @returns {jsx} <Technical />
 */
export default function Technical() {
  return (
    <Section classProp={`${about.section} borderBottom`}>
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Technical"
          preTitle="Hardskills"
          subTitle="As a software developer, I use a wide range of technologies and languages to create intuitive digital experiences."
        />
        <section className={`${about.content} ${about.container}`}>
          <div className={about.copy}>
            <BadgesBlock
              title="Languages I love to work with"
              copy="With several years of experience as a developer, I possess a strong command of a diverse range of programming languages."
              list={software}
              block="software"
              fullContainer="fullContainer"
              icon="code"
              containerClass={about.container}
              headerIcon={about.icon}
            />
            <BadgesBlock
              title="Technologies I love to build with"
              copy="My preferred technologies encompass both full-stack solutions, ensuring a comprehensive approach to project development."
              list={tech}
              block="tech"
              fullContainer="fullContainer"
              icon="laptop-code"
              containerClass={about.container}
              headerIcon={about.icon}
            />
            <CopyBlock
              title="Language Proficiency"
              icon={["fat", "language"]}
              copy="I possess professional proficiency in English and am a native speaker of Sinhala. Additionally, I have an intermediate level of proficiency in Thai. These language skills enable effective communication and adaptability in various linguistic contexts."
              iconClass={about.icon}
              containerClass={about.container}
            />
          </div>
          <div className={`${about.image} ${about.technicalSvg}`}>
            <Image
              src="/img/dataism-24.svg"
              width={477}
              height={1111}
              alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b"
            />
          </div>
        </section>
      </Container>
      {/* <SectionGridBg gridSize={4}/> */}
    </Section>
  );
}

const software = [
  { key: "python", name: "Python", type: "devicon" },
  { key: "java", name: "Java", type: "devicon" },
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "typescript", name: "TypeScript", type: "devicon" },
  { key: "matlab", name: "MATLAB", type: "devicon" },
  { key: "c", name: "C++", type: "devicon" },
  { key: "php", name: "PHP", type: "devicon" },
  { key: "go", name: "Go", type: "devicon" },
  { key: "mysql", name: "sql", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
];

const tech = [
  { key: "react", name: "React", type: "devicon" },
  { key: "react", name: "React Native", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "angularjs", name: "Angular", type: "devicon" },
  { key: "flask", name: "Flask", type: "devicon" },
  { key: "spring", name: "Spring Boot", type: "devicon" },
  { key: "mongodb", name: "MongoDB", type: "devicon" },
  { key: "express", name: "ExpressJs", type: "express" },
  { key: "postgresql", name: "Supabse", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "docker", name: "Docker", type: "devicon" },
  { key: "google", name: "Google Cloud Platform", type: "devicon" },
  { key: "amazonwebservices", name: "Amazon Web Services", type: "devicon" },
];
