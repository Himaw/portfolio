
import Container from "../structure/container";

// Section scss
import section from "../../styles/blocks/section.title.module.scss";

/**
 * Section header block.
 * Renders a standardized three-line heading used at the top of every section:
 * a small pre-title label, a large main title, and a subtitle paragraph.
 *
 * @param {string} preTitle - Small label displayed above the main title (e.g. "Career")
 * @param {string} title    - Primary section heading (e.g. "Experience")
 * @param {string} subTitle - Short description below the title
 * @returns {JSX.Element}
 */
export default function SectionTitle({ preTitle, title, subTitle }) {
  return (
    <>
      <div className={`${section.title}`}>
        <h4>{preTitle}</h4>
        <h2>{title}</h2>
        <p className="subtitle">{subTitle}</p>
      </div>
    </>
  );
}