import { useEffect, useRef, useState, useCallback } from "react";
import hero from "../../../styles/sections/index/hero.module.scss";

export default function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const requestRef = useRef();

  useEffect(() => {
    const checkTouch = window.matchMedia("(pointer: coarse)").matches;
    setIsTouchDevice(checkTouch);

    if (checkTouch) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const updateTrail = useCallback(() => {
    if (isTouchDevice) return;
    setTrail((prevTrail) => {
      const dx = position.x - prevTrail.x;
      const dy = position.y - prevTrail.y;
      return {
        x: prevTrail.x + dx * 0.05, 
        y: prevTrail.y + dy * 0.05,
      };
    });
    requestRef.current = requestAnimationFrame(updateTrail);
  }, [position, isTouchDevice]);

  useEffect(() => {
    if (isTouchDevice) return;
    requestRef.current = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(requestRef.current);
  }, [updateTrail, isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      <div
        className={`${hero.mouseGlow} ${hero.mouseGlowPrimary}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className={`${hero.mouseGlow} ${hero.mouseGlowSecondary}`}
        style={{
          left: `${trail.x}px`,
          top: `${trail.y}px`,
        }}
      />
    </>
  );
}
