// Core packages
import Image from "next/image";

import Badges from "../../utils/badge.list.util";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";

// Education scss
import education from "../../../styles/sections/index/education.module.scss";
import css from "../../../styles/sections/projects/featured.module.scss";

/**
 * Section: Education
 *
 * @returns {jsx} <Education />
 */
export default function Education() {
  return (
    <div id="education">
      <Section classProp={`${education.section} borderBottom`}>
        <Container spacing={["verticalXXXLrg"]}>
          <SectionTitle
            title="Academics"
            preTitle="Education"
            subTitle="My educational background and academic achievements."
          />
          <section className={education.area}>
            <article className={education.institution}>
              <div className={education.institutionContent}>
                <span className={education.institutionHeader}>
                  <h3>SIIT, Thammasat University</h3>
                  <h4>Aug 2018 - May 2024</h4>
                  <h5>Pathumthani, Thailand</h5>
                </span>
                <p>
                  Sirindhorn International Institute of Technology (SIIT) at Thammasat University is a leading international center of excellence in engineering and technology. 
                  My academic journey here spanned both my undergraduate and graduate studies, deeply focusing on software engineering, 
                  artificial intelligence, and advanced computing paradigms.
                </p>
              </div>
              <div className={education.institutionAlt}></div>
            </article>
            <article className={education.institutionDegrees}>
              <div className={education.degree}>
                <div className={education.degreeContent}>
                  <span className={education.degreeHeader}>
                    <h3>Master of Science in Computer Engineering</h3>
                    <h4>Aug 2022 - May 2024</h4>
                  </span>
                  <p>CGPA 3.92/4.00</p>
                  <p>
                    Focused on advanced algorithmic design, artificial intelligence, and scalable software systems. 
                    Deepened my research capabilities and understanding of machine learning models and large-scale data processing in modern real-world applications.
                  </p>
                  <Badges
                    list={mastersStack}
                    block="stack"
                    fullContainer="fullContainer"
                  />
                </div>
                <div className={education.degreeAlt}></div>
              </div>
              <div className={education.degree}>
                <div className={education.degreeContent}>
                  <span className={education.degreeHeader}>
                    <h3>Bachelor of Engineering in Computer Engineering (Hons.)</h3>
                    <h4>Aug 2018 - May 2022</h4>
                  </span>
                  <p>CGPA 3.74/4.00</p>
                  <p>
                    Built a strong foundation in computer science and engineering principles. 
                    Learned core subjects including object-oriented programming, data structures, algorithms, databases, computer networks, and software engineering methodologies. 
                    Actively participated in practical projects to hone my problem-solving skills.
                  </p>
                  <Badges
                    list={bachelorsStack}
                    block="stack"
                    fullContainer="fullContainer"
                  />
                </div>
                <div className={education.degreeAlt}></div>
              </div>
            </article>

            <article className={education.institution}>
              <div className={education.institutionContent}>
                <span className={education.institutionHeader}>
                  <h3>National Institute of Business Management</h3>
                  <h4>Oct 2017 - Mar 2018</h4>
                  <h5>Colombo, Sri Lanka</h5>
                </span>
                <p>
                  NIBM is a premier educational institution in Sri Lanka renowned for its business and computing programs. 
                  My studies here provided an early and solid introduction to the world of software development before pursuing my engineering degree.
                </p>
              </div>
              <div className={education.institutionAlt}></div>
            </article>
            <article className={education.institutionDegrees}>
              <div className={education.degree}>
                <div className={education.degreeContent}>
                  <span className={education.degreeHeader}>
                    <h3>Diploma in Computer Programming</h3>
                    <h4>Oct 2017 - Mar 2018</h4>
                  </span>
                  <p>
                    Gained an essential, practical understanding of computer programming fundamentals. 
                    Learned about basic software logic, introductory development concepts, and foundational languages that sparked my passion for coding.
                  </p>
                  <Badges
                    list={diplomaStack}
                    block="stack"
                    fullContainer="fullContainer"
                  />
                </div>
                <div className={education.degreeAlt}></div>
              </div>
            </article>

            <article className={education.institution}>
              <div className={education.institutionContent}>
                <span className={education.institutionHeader}>
                  <h3>Ananda College</h3>
                  <h4>Jun 2015 - Sep 2017</h4>
                  <h5>Colombo, Sri Lanka</h5>
                </span>
                <p>
                  Ananda College is widely recognized as one of the best and most prestigious educational 
                  institutions in Sri Lanka, offering a highly competitive and rich academic environment.
                </p>
              </div>
              <div className={education.institutionAlt}></div>
            </article>
            <article className={education.institutionDegrees}>
              <div className={education.degree}>
                <div className={education.degreeContent}>
                  <span className={education.degreeHeader}>
                    <h3>Advanced Level Examination</h3>
                    <h4>Jun 2015 - Sep 2017</h4>
                  </span>
                  <p>
                    Maths: A Grade, Physics: B Grade, Chemistry: B Grade <br /> Colombo District Rank: 532
                  </p>
                  <p>
                    Completed the Sri Lanka General Certificate of Education (Advanced Level) Examination, a crucial and high-stakes 
                    public exam that determines university entrance. This demanding curriculum fortified my analytical 
                    thinking and problem-solving abilities, particularly in mathematics and physics.
                  </p>
                </div>
                <div className={education.degreeAlt}></div>
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

const mastersStack = [
  { key: "cplusplus", name: "C++", type: "devicon" },
  { key: "python", name: "Python", type: "devicon" },
  { key: "pytorch", name: "PyTorch", type: "devicon" },
];

const bachelorsStack = [
  { key: "cplusplus", name: "C++", type: "devicon" },
  { key: "java", name: "Java", type: "devicon" },
  { key: "python", name: "Python", type: "devicon" },
  { key: "javascript", name: "JavaScript", type: "devicon" },
  { key: "react", name: "React", type: "devicon" },
  { key: "nodejs", name: "Node.js", type: "devicon" },
  { key: "mysql", name: "MySQL", type: "devicon" },
  {key: "matlab", name: "Matlab", type: "devicon"}
];

const diplomaStack = [
  { key: "c", name: "C", type: "devicon" },
  { key: "cplusplus", name: "C++", type: "devicon" },
  { key: "csharp", name: "C#", type: "devicon" },
  { key: "html5", name: "HTML5", type: "devicon" },
  { key: "css3", name: "CSS3", type: "devicon" },
];
