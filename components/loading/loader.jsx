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
          <div class="macbook">
            <div class="inner">
              <div class="screen">
                <div class="face-one">
                  <div class="camera"></div>
                  <div class="display">
                    <div class="shade"></div>
                  </div>
                  <span>MacBook Air</span>
                </div>
                <title>Layer 1</title>
              </div>
              <div class="macbody">
                <div class="face-one">
                  <div class="touchpad"></div>
                  <div class="keyboard">
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key space"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key"></div>
                    <div class="key f"></div>
                    <div class="key f"></div>
                    <div class="key f"></div>
                    <div class="key f"></div>
                    <div class="key f"></div>
                    <div class="key f"></div>
                    <div class="key f"></div>
                    <div class="key f"></div>
                    <div class="key f"></div>
                    <div class="key f"></div>
                    <div class="key f"></div>
                    <div class="key f"></div>
                    <div class="key f"></div>
                    <div class="key f"></div>
                    <div class="key f"></div>
                    <div class="key f"></div>
                  </div>
                </div>
                <div class="pad one"></div>
                <div class="pad two"></div>
                <div class="pad three"></div>
                <div class="pad four"></div>
              </div>
            </div>
            <div class="shadow"></div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
