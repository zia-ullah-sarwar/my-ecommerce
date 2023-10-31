"use client";
import { useState } from "react";

const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem",
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering",
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering",
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)",
  ],
  [
    "Vanilla JavaScript requires imperative programming",
    "Imperative Programming: You define all the steps needed to achieve a result",
    "React on the other hand embraces declarative programming",
    "With React, you define the goal and React figures out how to get there",
  ],
];

const ProductInformation = () => {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  return (
    <div>
      <div>
        <menu className="flex gap-3 border-b-2 border-gray-600">
          <button
            className={
              activeContentIndex === 0
                ? "text-gray-00 bg-gray-600 font-bold text-lg p-3 rounded-t-lg"
                : "text-gray-600 font-bold text-lg p-3 "
            }
            onClick={() => setActiveContentIndex(0)}
          >
            Description
          </button>
          <button
            className={
              activeContentIndex === 1
                ? "text-gray-00 bg-gray-600 font-bold text-lg px-3 rounded-t-lg"
                : "text-gray-600 font-bold text-lg px-3 "
            }
            onClick={() => setActiveContentIndex(1)}
          >
            Reviews
          </button>
          <button
            className={
              activeContentIndex === 2
                ? "text-gray-00 bg-gray-600 font-bold text-lg p-3 rounded-t-lg"
                : "text-gray-600 font-bold text-lg p-3 "
            }
            onClick={() => setActiveContentIndex(2)}
          >
            Shipping and Return
          </button>
          <button
            className={
              activeContentIndex === 3
                ? "text-gray-00 bg-gray-600 font-bold text-lg p-3 rounded-t-lg"
                : "text-gray-600 font-bold text-lg p-3 "
            }
            onClick={() => setActiveContentIndex(3)}
          >
            Customer Care
          </button>
        </menu>
        <div id="tab-content">
          <ul>
            {content[activeContentIndex].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ProductInformation;
