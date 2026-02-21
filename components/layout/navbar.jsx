import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ThemeMode from "../utils/theme.util";

import settings from "../../content/_settings.json";
import content from "../../content/navbar.json";
import css from "../../styles/structure/navbar.module.scss";
import logoCss from "../../styles/structure/logo.module.scss";

/**
 * Navbar component.
 * Handles navigation links, mobile menu toggle, scroll-based hide/show behaviour,
 * and route-change menu closing.
 *
 * @returns {JSX.Element}
 */
export default function Navbar() {
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState();

  // Ensure the menu starts closed on mount
  useEffect(() => {
    setIsMenuOpen(false);
  }, []);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    class RouteEvents {
      constructor() {
        this.addEventListeners();
      }

      closeMenu() {
        setIsMenuOpen(false);
      }

      addEventListeners() {
        router.events.on("routeChangeComplete", this.closeMenu);
      }

      removeEventListeners() {
        router.events.off("routeChangeComplete", this.closeMenu);
      }
    }

    const routeEvents = new RouteEvents();

    return () => {
      routeEvents.removeEventListeners();
    };
  }, [router.events]);

  // Hide the navbar when scrolling down past the hero; reveal when scrolling back up
  useEffect(() => {
    class ScrollEvents {
      constructor() {
        window.sticky = {};
        window.sticky.nav = document.querySelector(`nav`);

        this.addEventListeners();
      }

      addEventListeners() {
        if (window.sticky.nav) {
          window.addEventListener("DOMContentLoaded", this.maybeHideNav, false);
          document.addEventListener("scroll", this.maybeHideNav, false);
        }
      }

      removeEventListeners() {
        if (window.sticky.nav) {
          window.removeEventListener(
            "DOMContentLoaded",
            this.maybeHideNav,
            false
          );
          document.removeEventListener("scroll", this.maybeHideNav, false);
        }
      }

      getPosition(element = null, fromTop = true) {
        if (!element) return;

        const scrollOffset = fromTop
          ? element.getBoundingClientRect().top +
            document.documentElement.scrollTop -
            window.sticky.nav.at
          : element.getBoundingClientRect().bottom +
            document.documentElement.scrollTop -
            window.sticky.nav.at;

        return scrollOffset;
      }

      maybeHideNav() {
        const navClassList = window.sticky.nav.classList;
        // Hide the navbar once the user has scrolled past half the viewport height
        const hiddenAt = window.innerHeight / 2;

        if (
          window.scrollY > this.lastY &&
          window.scrollY > hiddenAt &&
          !navClassList.contains(css.hidden)
        ) {
          navClassList.add(css.hidden);
        } else if (
          window.scrollY < this.lastY &&
          navClassList.contains(css.hidden)
        ) {
          navClassList.remove(css.hidden);
        }

        this.lastY = window.scrollY;
      }
    }

    const scrollEvents = new ScrollEvents();

    return () => {
      scrollEvents.removeEventListeners();
    };
  }, []);

  /**
   * Toggles the mobile navigation menu open or closed.
   */
  const toggleMenu = () => {
    const nextMenuState = !isMenuOpen;
    setIsMenuOpen(nextMenuState);
  };

  /**
   * Smoothly scrolls the page to the element with the given ID.
   *
   * @param {string} elementId - The ID of the DOM element to scroll to
   */
  function scrollToSection(elementId) {
    const element = document.getElementById(elementId);

    if (element) {
      const elementRect = element.getBoundingClientRect();
      const scrollPosition = elementRect.top + window.scrollY;

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    } else {
      console.error(`Element with ID '${elementId}' not found.`);
    }
  }

  return (
    <nav id="Navbar" className={css.container}>
      <ul className={css.menu}>
        <li className={css.menuHeader}>
          <div className={logoCss.logo} onClick={() => scrollToSection("hero")}>
            <span className={logoCss.text}>HimaTheCoder</span>
            <span className={logoCss.dot}>.</span>
          </div>
          <button
            onClick={toggleMenu}
            className={css.mobileToggle}
            data-open={isMenuOpen}
          >
            <div>
              <span></span>
              <span></span>
            </div>
          </button>
        </li>
        <li data-open={isMenuOpen} className={css.menuContent}>
          <ul>
            {content.map(({ url, title }, index) => {
              return (
                <li onClick={() => scrollToSection(url)} key={index}>
                  <a className={css.cursor_change}>{title}</a>
                </li>
              );
            })}
            <li>
              <ThemeMode />
            </li>
          </ul>
        </li>
      </ul>
      <span
        onClick={toggleMenu}
        className={css.menuBlackout}
        data-open={isMenuOpen}
      ></span>
    </nav>
  );
}
