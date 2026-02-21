import Hero from "../components/sections/index/hero";
import About from "../components/sections/index/about";
import Technical from "../components/sections/index/technical";
import Career from "../components/sections/index/career";
import Education from "../components/sections/index/education";
import FeaturedProjects from "../components/sections/projects/featured";

import Color from "../components/utils/page.colors.util";
import colors from "../content/index/_colors.json";

/**
 * Home page — the main entry point of the portfolio.
 * Composes all primary sections in display order.
 *
 * @returns {JSX.Element} The full home page layout
 */
export default function HomePage() {
  return (
    <>
      <Color colors={colors} />
      <Hero />
      <About />
      <Career />
      <Education />
      <FeaturedProjects />
      <Technical />
    </>
  );
}
