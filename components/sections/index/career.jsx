// Core packages
import Image from "next/image";

import Badges from "../../utils/badge.list.util";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Career scss
import career from "../../../styles/sections/index/career.module.scss";
import css from "../../../styles/sections/projects/featured.module.scss";

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career() {
  return (
    <div id="carreer">
      <Section classProp={`${career.section} borderBottom`}>
        <Container spacing={["verticalXXXLrg"]}>
          <SectionTitle
            title="Experience"
            preTitle="Career"
            subTitle="I am currently working as a Software Engineer at Alstom Thailand, learning and growing every day in this ever-evolving tech industry."
          />
          <section className={career.area}>
            <article className={career.company}>
              <div className={career.companyContent}>
                <span className={career.companyHeader}>
                  <h3>Alstom</h3>
                  <h4>May 2024 - Present</h4>
                  <h5>Bangkok, Thailand</h5>
                </span>
                <p>
                  Alstom is a global leader in smart and sustainable mobility,
                  developing and delivering innovative solutions for rail
                  transport.
                </p>
              </div>
              <div className={career.companyAlt}></div>
            </article>
            <article className={career.companyPositions}>
              <div className={career.position}>
                <div className={career.positionContent}>
                  <span className={career.positionHeader}>
                    <h3>Software Engineer</h3>
                    <h4>Full-Time</h4>
                  </span>
                  <p>
                    As a Software Engineer at Alstom, I am involved in the
                    development and maintenance of software solutions that
                    contribute to the advancement of rail transport systems. My
                    role encompasses designing, coding, testing, and deploying
                    software applications that enhance the efficiency, safety,
                    and sustainability of rail networks. I collaborate with
                    cross-functional teams to ensure that our software solutions
                    meet industry standards and customer needs, while also
                    staying abreast of emerging technologies in the
                    transportation sector.
                  </p>
                  <p>Some of the key contributions 👇</p>
                  <ul className={career.list}>
                    <li>
                      <a
                        href="http://www.impressions.one/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <p>MX CeViz (Counter Example Visualization Tool)</p>
                      </a>
                      <span className={career.subList}>
                        <span className={career.bullet}></span>Contributed to
                        developing a highly advanced train safety tool used for
                        visualizing and debugging train operation data.
                      </span>
                    </li>
                    <li>
                      <a
                        href="http://www.impressions.one/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <p>MX Platform</p>
                      </a>
                      <span className={career.subList}>
                        <span className={career.bullet}></span>Contributed to
                        developing software components for modern end-to-end
                        engineering platform that provides safe data to many of
                        Alstom&apos;s railway signalling products.
                      </span>
                    </li>
                  </ul>
                  <Badges
                    list={alstom}
                    block="stack"
                    fullContainer="fullContainer"
                  />
                </div>
                <div className={career.positionAlt}></div>
              </div>
            </article>

            <article className={career.company}>
              <div className={career.companyContent}>
                <span className={career.companyHeader}>
                  <h3>SIIT, Thammasat University</h3>
                  {/* <h4>Part-time</h4> */}
                  <h4>Aug 2022 - May 2024 · 1 year and 9 months</h4>
                  <h5>Pathumthani, Thailand</h5>
                </span>
                <p>
                  Sirindhorn International Institute of Technology Thammasat
                  University, was established in 1992 in cooperation with
                  Thammasat University, the Japan Federation of Economic
                  Organizations (KEIDANREN) and the Federation of Thai
                  Industries (FTI). SIIT’s objectives are to produce highly
                  qualified engineers and technologists.
                </p>
              </div>
              <div className={career.companyAlt}></div>
            </article>
            <article className={career.companyPositions}>
              <div className={career.position}>
                <div className={career.positionContent}>
                  <span className={career.positionHeader}>
                    <h3>Teaching Assistant</h3>
                    <h4>Part-Time</h4>
                  </span>
                  <p>
                    I assisted in teaching Object Oriented Programming (OOP) and
                    Data Structures and Algorithms (DES103 and DES231 courses)
                    using Java to over 500 students. The courses covered
                    fundamental OOP concepts such as Abstraction, Encapsulation,
                    Polymorphism, Inheritance, Association, Aggregation,
                    Composition, and the implementation of both linear and
                    non-linear data structures.
                  </p>

                  <Badges
                    list={ta}
                    block="stack"
                    fullContainer="fullContainer"
                  />
                </div>
                <div className={career.positionAlt}></div>
              </div>
            </article>

            <article className={career.company}>
              <div className={career.companyContent}>
                <span className={career.companyHeader}>
                  <h3>Accenture</h3>
                  {/* <h4>Internship</h4> */}
                  <h4>June 2021 - Aug 2021 · 3 months</h4>
                  <h5>Bangkok, Thailand</h5>
                </span>
                <p>
                  Accenture is a leading global professional services company
                  that helps the world’s leading businesses, governments and
                  other organizations build their digital core, optimize their
                  operations, accelerate revenue growth and enhance citizen
                  services—creating tangible value at speed and scale.
                </p>
              </div>
              <div className={career.companyAlt}></div>
            </article>

            <article className={career.companyPositions}>
              <div className={career.position}>
                <div className={career.positionContent}>
                  <span className={career.positionHeader}>
                    <h3>Software Engineer</h3>
                    <h4>Internship</h4>
                  </span>
                  <p>
                    During my internship as a full-stack software engineer, I
                    contributed in developing and maintaining web applications,
                    balancing front-end and back-end development. My role
                    involved creating user-friendly interfaces, ensuring
                    responsive layouts, and optimizing user experiences. I also
                    worked on managing databases, APIs, and server
                    infrastructure. Collaborating with a talented team, I
                    contributed to project success by writing efficient code,
                    troubleshooting issues, and enhancing application
                    performance. This experience strengthened my problem-solving
                    skills and deepened my passion for innovative, user-centric
                    software solutions.
                  </p>
                  <p>Some of the key contributions👇</p>
                  <ul className={career.list}>
                    <li>
                      Covid-19 Vaccination Registering System
                      <span className={career.subList}>
                        <span className={career.bullet}></span>Collaborated in
                        the development of a web application designed to
                        facilitate the registration of the general public for
                        Covid-19 vaccinations during the pandemic.
                      </span>
                    </li>
                  </ul>
                  <Badges
                    list={accenture}
                    block="stack"
                    fullContainer="fullContainer"
                  />
                </div>
                <div className={career.positionAlt}></div>
              </div>
            </article>
            {/* <article className={career.company}>
              <div className={career.companyContent}>
                <span className={career.companyHeader}>
                  <h3>Impressions</h3>

                  <h4>Jan 2022 - May 2024</h4>
                  <h5>Digital Startup</h5>
                </span>
                <p>
                  Impressions is an innovative software agency that specializes
                  in WebApp development and AI with a small team of highly
                  skilled and passionate individuals that are dedicated to
                  creating the best software experiences for the clients.
                </p>
              </div>
              <div className={career.companyAlt}></div>
            </article> */}
            {/* <article className={career.companyPositions}>
              <div className={career.position}>
                <div className={career.positionContent}>
                  <span class={career.positionHeader}>
                    <h3>Co-Founder & Developer</h3>
                    <h4>Part-Time</h4>
                  </span>
                  <p>
                    As a co-founder and developer of this software agency, I
                    collaborated closely with the team, to plan our development
                    efforts, manage projects, and deliver cutting-edge software
                    solutions to clients. This role required technical
                    expertise, strong communication, and problem-solving skills.
                    I also played a pivotal role in setting the agency&apos;s
                    strategic direction by identifying emerging technologies and
                    trends to stay at the forefront of the industry.
                  </p>
                  <p>Some of the key contributions 👇</p>
                  <ul className={career.list}>
                    <li>
                      <a
                        href="http://www.impressions.one/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <p>www.impressions.one</p>
                      </a>
                      <span className={career.subList}>
                        <span className={career.bullet}></span>Developed
                        ImpressionsOne, an AI-driven web application that can be
                        used for generating high quality YouTube Thumbnails,
                        boosting video impressions and engagement.
                      </span>
                    </li>
                    <li>
                      BMSafety | Product Showcase Website
                      <span className={career.subList}>
                        <span className={career.bullet}></span>Developed a
                        product showcase WebApp for a safety equipment company.
                      </span>
                    </li>
                  </ul>
                  <Badges
                    list={impressions}
                    block="stack"
                    fullContainer="fullContainer"
                  />
                </div>
                <div className={career.positionAlt}></div>
              </div>
            </article> */}

            <article className={career.company}>
              <div className={career.companyContent}>
                <span className={career.companyHeader}>
                  <h3>PentaOne</h3>
                  {/* <h4>Permanent Full-time</h4> */}
                  <h4>Aug 2020 - Jan 2022 · 1 yr 6 months</h4>
                  <h5>Colombo, Sri Lanka</h5>
                </span>
                <p>
                  PentaOne is a leading software development company
                  specializing in innovative, customized solutions for
                  businesses. With a talented team of engineers and designers,
                  we deliver cutting-edge software that meets unique client
                  requirements. Our expertise spans web and mobile app
                  development, enterprise software, and digital marketing
                  solutions. We prioritize user experience, quality, and
                  long-term customer satisfaction.
                </p>
              </div>
              <div className={career.companyAlt}></div>
            </article>
            <article className={career.companyPositions}>
              <div className={career.position}>
                <div className={career.positionContent}>
                  <span className={career.positionHeader}>
                    <h3>Full Stack Developer</h3>
                    <h4>Part-Time</h4>
                  </span>
                  <p>
                    As the full stack developer at PentaOne, I was collaborating
                    with both the back-end and front-end teams to develop
                    functional web applications and services, while also working
                    on the server-side of web applications.
                  </p>
                  <p>Some of the key contributions 👇</p>
                  <ul className={career.list}>
                    <li>
                      Multiple Hotel Management Systems
                      <span className={career.subList}>
                        <span className={career.bullet}></span>Actively
                        participated in the design, development, and management
                        of multiple hotel management systems tailored for
                        clients in Sri Lanka.
                      </span>
                    </li>
                  </ul>
                  <Badges
                    list={pentaone}
                    block="stack"
                    fullContainer="fullContainer"
                  />
                </div>
                <div className={career.positionAlt}></div>
              </div>
            </article>
          </section>
        </Container>
        <div className={css.bgContainer}>
          <span className={css.orbitalBg}>
            <span className={`${css.bgSection}`}>
              <span
                className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}
              ></span>
            </span>
            <span className={`${css.bgSection}`}>
              <span className={`${css.bgInner} ${css.heroCenter}`}></span>
            </span>
            <span className={`${css.bgSection}`}>
              <span
                className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}
              ></span>
            </span>
          </span>
          <span className={css.afterGlowBg}></span>
        </div>
      </Section>
    </div>
  );
}

const fullStack = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "php", name: "PHP", type: "devicon" },
  { key: "wordpress", name: "WordPress", type: "devicon" },
  { key: "woocommerce", name: "WooCommerce", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "sass", name: "SASS", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
  { key: "mongodb", name: "MongoDB", type: "devicon" },
];

const impressions = [
  { key: "react", name: "React", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "flask", name: "Flask", type: "devicon" },
  { key: "postgresql", name: "Supabase/Postgresql", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
];

const alstom = [
  { key: "vuejs", name: "VueJs", type: "devicon" },
  { key: "spring", name: "Spring Boot", type: "devicon" },
  { key: "graphql", name: "GraphQL", type: "devicon" },
  { key: "cypressio", name: "Cypress", type: "devicon" },
  { key: "azure", name: "Azure DevOps", type: "devicon" },
];

const ta = [{ key: "java", name: "Java", type: "devicon" }];

const accenture = [
  { key: "angularjs", name: "Angular", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "spring", name: "Spring Boot", type: "devicon" },
  { key: "redis", name: "Redis", type: "devicon" },
  { key: "docker", name: "Docker", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "jira", name: "Jira", type: "devicon" },
];

const pentaone = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "php", name: "PHP", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
];

const stack = [
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "nodejs", name: "NodeJS", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "nextjs", name: "NextJS", type: "devicon" },
  { key: "php", name: "PHP", type: "devicon" },
  { key: "wordpress", name: "WordPress", type: "devicon" },
  { key: "woocommerce", name: "WooCommerce", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
  { key: "sass", name: "SASS", type: "devicon" },
  { key: "git", name: "Git", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
  { key: "mongodb", name: "MongoDB", type: "devicon" },
];
