import Icon from "../utils/icon.util";
import space from "../utils/spacing.util";

/**
 * Copy block component.
 * Displays a Font Awesome icon, a heading, and a paragraph of body text.
 * Used in the About and Technical sections to render descriptive content blocks.
 *
 * @param {string}   containerClass - CSS class applied to the outer wrapper div
 * @param {string}   iconClass      - CSS class applied to the icon span
 * @param {string[]} icon           - Font Awesome icon tuple: [iconType, iconKey]
 * @param {string}   title          - Heading text for the block
 * @param {string}   copy           - Body paragraph text
 * @returns {JSX.Element}
 */
export default function CopyBlock({ containerClass, iconClass, icon, title, copy }) {
  return (
    <>
      <div className={containerClass}>
        <span className={iconClass}>
          <Icon icon={icon} />
        </span>
        <h3>{title}</h3>
        <p>
          {copy}
        </p>
      </div>
    </>
  );
}