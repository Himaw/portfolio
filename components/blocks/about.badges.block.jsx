import Icon from "../utils/icon.util.jsx";
import Badges from "../utils/badge.list.util";

import badges from "../../styles/blocks/badges.module.scss";

/**
 * Badges block component.
 * Combines an icon, a heading, optional copy text, and an animated badge list
 * into a single reusable block used across About and Technical sections.
 *
 * @param {string}   title          - Block heading text
 * @param {string}   [copy]         - Optional body copy displayed below the heading
 * @param {Array}    list           - Array of badge items passed to the Badges list
 * @param {string}   fullContainer  - CSS modifier to stretch badges to full container
 * @param {string}   block          - Layout modifier class for the badge list
 * @param {string}   icon           - Font Awesome icon key for the header icon
 * @param {boolean}  [invertedColor]- Whether to invert icon colors
 * @param {string}   headerIcon     - CSS class applied to the icon wrapper span
 * @param {string}   containerClass - CSS class for the outer container
 * @returns {JSX.Element}
 */
export default function BadgesBlock({
  title,
  copy,
  list,
  fullContainer,
  block,
  icon,
  invertedColor,
  headerIcon,
  containerClass,
}) {
  return (
    <div className={`${badges.badgeBlockContainer} ${containerClass}`}>
      <span className={headerIcon}>
        <Icon icon={["fat", icon]} />
      </span>
      <h3>{title}</h3>
      <InlineCopy copy={copy} />
      <Badges
        list={list}
        block={block}
        invertedColor={invertedColor}
        fullContainer={fullContainer}
      />
    </div>
  );
}

/**
 * Conditionally renders a paragraph of copy text.
 *
 * @param {string} [copy] - Text to display; renders nothing if falsy
 * @returns {JSX.Element|null}
 */
function InlineCopy({ copy }) {
  if (copy) return <p>{copy}</p>;
  return null;
}