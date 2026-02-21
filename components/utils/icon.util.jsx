// Font Awesome packages
const { library, config } = require("@fortawesome/fontawesome-svg-core");
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import { fat } from "@fortawesome/pro-thin-svg-icons";
import { fal } from "@fortawesome/pro-light-svg-icons";
import { fad } from "@fortawesome/pro-duotone-svg-icons";
import { far } from "@fortawesome/pro-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

// Register all icon packs into the FA library
library.add(fat, fal, fas, fad, far, fab);

/**
 * Icon utility component.
 * Renders a Font Awesome icon by type and key.
 * All FA icon packs are registered here, keeping icon dependencies isolated.
 *
 * @param {[string, string]} icon - Tuple of [iconType, iconKey], e.g. ["fad", "arrow-right"]
 * @returns {JSX.Element}
 */
export default function Icon({ icon }) {
  const [iconType, iconKey] = icon;

  const [activeIconKey, setActiveIconKey] = useState("circle-notch");

  useEffect(() => setActiveIconKey(iconKey), [iconKey]);

  return <FontAwesomeIcon icon={[iconType, activeIconKey]} />;
}
