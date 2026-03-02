import { useEffect } from "react";
import "./SpaceBackground.css";

export default function SpaceBackground() {
  useEffect(() => {
    const layers = document.querySelectorAll(".star-layer");

    layers.forEach((layer, layerIndex) => {
      for (let i = 0; i < 80; i++) {
        const star = document.createElement("div");
        star.classList.add("star");

        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;

        layer.appendChild(star);
      }
    });
  }, []);

  return (
    <div className="space-bg">
      <div className="nebula"></div>
      <div className="grid-plane"></div>

      <div className="stars-container">
        <div className="star-layer"></div>
        <div className="star-layer"></div>
        <div className="star-layer"></div>
      </div>
    </div>
  );
}
