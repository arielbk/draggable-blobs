import { useState } from "react";
import { motion } from "framer-motion";
import "./styles.css";

export const Blob = ({ color, onDuplicate }) => {
  return (
    <motion.div
      drag
      dragConstraints={{
        top: 0,
        left: 0,
        right: 500,
        bottom: 500
      }}
      style={{
        position: "absolute",
        top: 0,
        borderRadius: "50%",
        width: 100,
        height: 100,
        background: color
      }}
    />
  );
};

export default function App() {
  return (
    <div className="App">
      <svg>
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            {/* <feComposite in="SourceGraphic" in2="goo" operator="atop" /> */}
          </filter>
        </defs>
      </svg>
      <div style={{ filter: 'url("#goo")' }}>
        <Blob color="#4D76E1" />
        <Blob color="#FFBF73" />
        <Blob color="#7973FF" />
        <Blob color="#73F9FF" />
        <Blob color="#BF73FF" />
      </div>
    </div>
  );
}
