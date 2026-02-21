import { useEffect, useRef, useState } from "react";
import hero from "../../../styles/sections/index/hero.module.scss";

export default function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const requestRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const updateTrail = () => {
    setTrail((prevTrail) => {
      const dx = position.x - prevTrail.x;
      const dy = position.y - prevTrail.y;
      return {
        x: prevTrail.x + dx * 0.05, 
        y: prevTrail.y + dy * 0.05,
      };
    });
    requestRef.current = requestAnimationFrame(updateTrail);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(requestRef.current);
  }, [position]);

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
