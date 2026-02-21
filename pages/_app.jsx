import Head from "next/head";

// Core packages
import { LazyMotion, domAnimation } from "framer-motion";

// Utils
import SetGridGap from "../components/utils/set.grid.util";

// Structure
import Layout from "../components/layout/layout";

// CSS reset (https://github.com/elad2412/the-new-css-reset.git)
import "../node_modules/the-new-css-reset/css/reset.css";

// Fontsource local font imports (https://github.com/fontsource/fontsource)
import "@fontsource/fira-code/400.css";
import "@fontsource/fira-code/600.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";

// Devicon import (https://github.com/devicons/devicon)
import "../node_modules/devicon/devicon.min.css";

// Global CSS
import "../styles/css/variables.css";
import "../styles/css/global.css";

/**
 * Custom Next.js App component.
 * Wraps every page with shared layout, fonts, global styles, and motion context.
 *
 * @param {React.ComponentType} Component - The active page component
 * @param {object} pageProps - Initial props pre-fetched for the active page
 * @returns {JSX.Element}
 */
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Himasara Warnakulasuriya</title>
      </Head>
      <LazyMotion features={domAnimation}>
        <Layout>
          <Component {...pageProps} />
          <SetGridGap />
        </Layout>
      </LazyMotion>
    </>
  );
}
