import Container from "../structure/container";
import hero from "../../styles/sections/index/hero.module.scss";
import Section from "../structure/section";
import HeroBg from "../blocks/hero.bg/bg-color-1";

export default function Loader() {
  return (
    <div id="hero">
      <Section classProp={`${hero.section}`} id="hero">
        <HeroBg theme="bg-color-1" />

        <Container spacing={"VerticalXXXL"}>
          <div className="macbook">
            <div className="inner">
              <div className="screen">
                <div className="face-one">
                  <div className="camera"></div>
                  <div className="display">
                    <div className="shade"></div>
                  </div>
                  <span>MacBook Air</span>
                </div>
                <title>Layer 1</title>
              </div>
              <div className="macbody">
                <div className="face-one">
                  <div className="touchpad"></div>
                  <div className="keyboard">
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key space"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key f"></div>
                    <div className="key f"></div>
                    <div className="key f"></div>
                    <div className="key f"></div>
                    <div className="key f"></div>
                    <div className="key f"></div>
                    <div className="key f"></div>
                    <div className="key f"></div>
                    <div className="key f"></div>
                    <div className="key f"></div>
                    <div className="key f"></div>
                    <div className="key f"></div>
                    <div className="key f"></div>
                    <div className="key f"></div>
                    <div className="key f"></div>
                    <div className="key f"></div>
                  </div>
                </div>
                <div className="pad one"></div>
                <div className="pad two"></div>
                <div className="pad three"></div>
                <div className="pad four"></div>
              </div>
            </div>
            <div className="shadow"></div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
