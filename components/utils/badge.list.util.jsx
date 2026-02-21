import { useEffect } from "react";

import Icon from "../utils/icon.util.jsx";

import badges from "../../styles/blocks/badges.module.scss";
import { m, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

/**
 * Animated badge list component.
 * Renders a list of technology/skill badges with staggered entry animations
 * that trigger when the list scrolls into view.
 *
 * @param {Array}   list            - Array of badge items: { key, name, type }
 * @param {string}  block           - CSS modifier class for the badge list layout
 * @param {boolean} color           - Whether to render devicons in color (pass false to disable)
 * @param {string}  fullContainer   - CSS class to stretch the list to a full container width
 * @returns {JSX.Element}
 */
export default function Badges({ list, block, color, fullContainer }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  /** Framer Motion variants for the outer list container (staggered children) */
  const containerVariants = {
    hidden: {
      opacity: 1,
      transition: {
        delayChildren: 0.25,
        staggerChildren: 0.025,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.025,
        staggerChildren: 0.1,
      },
    },
  };

  /** Framer Motion variants for each individual badge item */
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: -0.5,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <m.ul
      className={`${badges.list} ${badges[block]} ${badges[fullContainer]}`}
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      whileHover="hover"
    >
      {list.map(({ key, name, type }) => {
        return (
          <m.li
            key={name}
            className={`${badges.item} ${key}`}
            variants={itemVariants}
          >
            <IconModule iconKey={key} iconType={type} color={color} />
            <span className={badges.title}>{name}</span>
          </m.li>
        );
      })}
    </m.ul>
  );
}

/**
 * Renders the correct icon element based on the icon type.
 * Supports Font Awesome icon types and Devicon classes.
 *
 * @param {string}  iconKey  - The icon identifier key
 * @param {string}  iconType - The icon library type (e.g. "devicon", "fad", "fas")
 * @param {boolean} color    - Whether to apply colored class to devicons
 * @returns {JSX.Element|null}
 */
function IconModule({ iconKey, iconType, color }) {
  const colorClass = color === false ? "" : "colored";

  switch (iconType) {
    case "far":
    case "fad":
    case "fat":
    case "fas":
      return <Icon icon={[iconType, iconKey]} />;
    case "devicon":
      return <i className={`devicon-${iconKey}-plain ${colorClass}`} />;
    case "express":
      return <i className={`devicon-express-original ${colorClass}`} />;
    default:
      return null;
  }
}
