import css from "../../styles/utils/page.colors.module.scss";

/**
 * Page-level color override utility.
 * Injects per-page CSS custom property overrides for the mesh gradient
 * and neon color variables into each theme scope.
 *
 * @param {{ dark: object, unicorn: object, light: object }} colors - Color definitions per theme
 * @returns {JSX.Element}
 */
export default function ColorOverrides({ colors }) {
  return (
    <>
      <data id="page-specific-colors" className={css.colors}>
        <DarkThemeColors colors={colors.dark} />
        <UnicornThemeColors colors={colors.unicorn} />
        <LightThemeColors colors={colors.light} />
        <svg aria-hidden="true" focusable="false">
          <linearGradient id="fa-gradient" x1="0%" y1="0%" x2="175%" y2="175%">
            <stop offset="0%" stopColor="var(--neon-1-2)" />
            <stop offset="100%" stopColor="var(--neon-1-1)" />
          </linearGradient>
        </svg>
      </data>
    </>
  );
}

/**
 * Injects mesh color overrides for the dark theme.
 *
 * @param {object} colors - Dark theme color values
 * @returns {JSX.Element|null}
 */
function DarkThemeColors({ colors }) {
  if (Object.keys(colors).length === 0) return null;

  return (
    <style>
      {`
      :root[data-theme=dark] {
        --mesh-color-1: ${colors.mesh__secondaryDark};
        --mesh-color-2: ${colors.mesh__secondaryLight};
        --mesh-color-3: ${colors.mesh__primaryDark};
        --mesh-color-4: ${colors.mesh__primaryLight};
      }
      `}
    </style>
  );
}

/**
 * Injects mesh color overrides for the unicorn theme.
 *
 * @param {object} colors - Unicorn theme color values
 * @returns {JSX.Element|null}
 */
function UnicornThemeColors({ colors }) {
  if (Object.keys(colors).length === 0) return null;

  return (
    <style>
      {`
      :root[data-theme=unicorn] {
        --mesh-color-1: ${colors.mesh__secondaryDark};
        --mesh-color-2: ${colors.mesh__secondaryLight};
        --mesh-color-3: ${colors.mesh__primaryDark};
        --mesh-color-4: ${colors.mesh__primaryLight};
      }
      `}
    </style>
  );
}

/**
 * Injects mesh color overrides for the light theme.
 *
 * @param {object} colors - Light theme color values
 * @returns {JSX.Element|null}
 */
function LightThemeColors({ colors }) {
  if (Object.keys(colors).length === 0) return null;

  return (
    <style>
      {`
      :root[data-theme=light] {
        --mesh-color-1: ${colors.mesh__secondaryDark};
        --mesh-color-2: ${colors.mesh__secondaryLight};
        --mesh-color-3: ${colors.mesh__primaryDark};
        --mesh-color-4: ${colors.mesh__primaryLight};
      }
      `}
    </style>
  );
}