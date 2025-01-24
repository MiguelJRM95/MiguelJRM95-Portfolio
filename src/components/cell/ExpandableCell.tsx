import React, { useRef, useState } from "react";

interface CellProps {
  children?: React.ReactNode;
  className?: string;
  id: string;
}

const ExpandableCell: React.FC<CellProps> = ({
  children,
  className = "",
  id,
}) => {
  const cellRef = useRef<HTMLDivElement | null>(null);
  const [isCentered, setIsCentered] = useState(false);

  const toggleCenter = () => {
    if (cellRef.current) {
      const element = cellRef.current;
      const isCentered = element.classList.contains("centered-element");

      if (isCentered) {
        resetPosition(element);
      } else {
        moveToCenter(element);
      }
    }
  };

  const moveToCenter = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const centerX = viewportWidth / 2;
    const centerY = viewportHeight / 2;

    const offsetX = centerX - (rect.left + rect.width / 2);
    const offsetY = centerY - (rect.top + rect.height / 2);

    const maxOffsetX = Math.min(offsetX, viewportWidth - rect.width);
    const maxOffsetY = Math.min(offsetY, viewportHeight - rect.height);

    element.style.transition = "transform 0.5s ease-in-out, z-index 0s 0.5s";
    element.style.transform = `translate(${maxOffsetX}px, ${maxOffsetY}px)`;
    element.style.zIndex = "1000";

    element.classList.add("centered-element");

    createOverlay();

    setTimeout(() => {
      element.style.pointerEvents = "auto";
    }, 500);

    setIsCentered(isCentered!);
  };

  const resetPosition = (element: HTMLElement) => {
    element.style.transition = "transform 0.5s ease-in-out, z-index 0s";
    element.style.transform = "translate(0, 0)";
    element.style.zIndex = "";

    element.classList.remove("centered-element");

    removeOverlay();

    setIsCentered(isCentered!);
  };

  const createOverlay = () => {
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "50%";
    overlay.style.left = "50%";
    overlay.style.transform = "translate(-50%, -50%) scale(0)";
    overlay.style.width = "90vw";
    overlay.style.height = "90vh";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    overlay.style.zIndex = "500";
    overlay.style.pointerEvents = "none";
    overlay.style.opacity = "0";
    overlay.style.transition = "opacity 0.5s ease";

    document.body.appendChild(overlay);

    setTimeout(() => {
      overlay.style.opacity = "1";
      overlay.style.transform = "translate(-50%, -50%) scale(1)";
    }, 300);
  };

  const removeOverlay = () => {
    const overlay: HTMLElement = document.querySelector(
      "div[style*='position: fixed']",
    )!;
    overlay.style.transition = "opacity 0.5s ease";
    overlay.style.transform = "translate(-50%, -50%) scale(0)";
    overlay.style.opacity = "0";
    if (overlay) {
      overlay.remove();
    }
  };

  return (
    <div
      ref={cellRef}
      id={id}
      className={`transition-all duration-500 ease-in-out focus:scale-110 ${className}`}
      onClick={toggleCenter}
    >
      {children}
    </div>
  );
};

export default ExpandableCell;
