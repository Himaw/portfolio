import { useEffect } from "react";

import Section from "../structure/section";
import Container from "../structure/container";

/**
 * Grid gap utility component.
 * Measures the width of a 32-column grid container and writes it as
 * a CSS custom property (`--grid-32`) on the root element.
 * This is recalculated on every window resize so layout spacing stays consistent.
 *
 * @returns {JSX.Element} A hidden measurement container
 */
export default function SetGridGap() {
  useEffect(() => {
    const updateGridGapSize = () => {
      const root = document.querySelector(":root");
      const container = document.querySelector(".getGapSize__grid_32");

      if (container) {
        const containerWidth = container.clientWidth;
        const columnWidth = containerWidth / 32;
        root.style.setProperty("--grid-32", `${columnWidth}px`);
      }
    };

    updateGridGapSize();
    window.addEventListener("resize", updateGridGapSize);

    return () => {
      window.removeEventListener("resize", updateGridGapSize);
    };
  }, []);

  return (
    <Section classProp={"getGapSize__container"}>
      <Container classProp={"getGapSize__grid_32"}></Container>
    </Section>
  );
}