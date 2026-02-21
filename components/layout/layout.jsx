import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";

import Navbar from "./navbar";
import Footer from "./footer";
import Loader from "../loading/loader";
import Color from "../utils/page.colors.util";
import colors from "/content/index/_colors.json";

/**
 * Root layout component.
 * Manages the initial loading animation, then fades in the full page content.
 *
 * The layout shows a full-screen loader for 3 seconds on first mount.
 * After the loader completes, the main content (Navbar, page children, Footer)
 * fades in over 0.5 seconds.
 *
 * @param {React.ReactNode} children - The active page content to render
 * @returns {JSX.Element}
 */
export default function Layout({ children }) {
  // Controls whether the loading screen is shown
  const [isLoading, setIsLoading] = useState(true);
  // Controls whether the main content is visible (slightly delayed for fade-in)
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    // Hide the loader after 3 seconds
    const loaderTimer = setTimeout(() => setIsLoading(false), 3000);
    // Begin fading in content after 3.2 seconds (slight overlap for smooth transition)
    const contentTimer = setTimeout(() => setIsContentVisible(true), 3200);

    return () => {
      clearTimeout(loaderTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  /** Style applied to the main content wrapper to fade it in */
  const contentFadeInStyle = {
    opacity: isContentVisible ? 1 : 0,
    transition: "opacity 0.5s ease",
  };

  /** Style applied to the navbar during loading — kept fully hidden */
  const hiddenNavStyle = {
    opacity: 0,
  };

  return (
    <div>
      {isLoading ? (
        <>
          <Color colors={colors} />
          <div style={hiddenNavStyle}>
            <Navbar />
          </div>
          <main>
            {" "}
            <Loader />
          </main>
        </>
      ) : (
        <div style={contentFadeInStyle}>
          <Navbar />
          <main>
            {children}
            <Analytics />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}
