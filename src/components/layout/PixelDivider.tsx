import React from "react";

interface PixelDividerProps {
  color?: string;
  background?: string;
}

export default function PixelDivider({
  color = "#0B0C10",
  background = "#22C55E",
}: PixelDividerProps) {
  return (
    <div
      className="pixel-divider-wrap"
      style={{ color, background }}
      aria-hidden="true"
    >
      <svg
        className="pixel-divider"
        viewBox="0 0 1440 20"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,20 L0,0 h20 v10 h20 v-10 h20 v10 h20 v-10 h20 v10 h20 v-10 h20 v10 h20 v-10 h20 v10 h20 v-10 h20 v10 h20 v-10 h20 v10 h20 v-10 h20 v10 h20 v-10 h20 v10 h20 v-10 h20 v10 h20 v-10 h20 v-10 h20 v10 h20 v-10 h20 v10 h20 v-10 h20 v10 h20 v-10 h20 v10 h20 v-10 h20 v10 h20 v-10 h20 v10 h20 v-10 h20 v10 h20 v-10 h20 v10 h20 v-10 h20 v-10 h20 v10 h20 v-10 h20 v10 h20 v-10 h20 v10 h20 v-10 h20 v10 h20 v-10 h20 v10 h20 v-10 h20 v10 h20 v-10 h20 v-10 L1440,20 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
