import { useState } from "react";
import H3 from "./H3";
import Strong from "./Strong";
import Subtitle from "./Subtitle";
import ToggleExpandIcon from "./ToggleExpandIcon";

export default function Card({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
    setIsOpen((open) => !open);
  };

  return (
    <div
      className="flex cursor-pointer flex-col gap-4 rounded-lg bg-slate-800/75 p-3 transition [-webkit-tap-highlight-color:transparent]	hover:bg-slate-800"
      onClick={onClickHandler}
    >
      <div className="flex flex-col gap-2">
        <div className="pl-2">
          <div className="mb-2 flex justify-between">
            <H3>Full-stack engineer</H3>
            <button>
              <ToggleExpandIcon isOpen={isOpen} />
            </button>
          </div>
          <Subtitle>jun 2021 — dec 2022</Subtitle>
          <Subtitle>Sr. Pago - Konfio</Subtitle>
        </div>
        <ul className="flex flex-wrap gap-3">
          <li className="rounded-lg border border-slate-700 px-3 py-2 font-mono text-sky-400">
            TypeScript
          </li>
          <li className="rounded-lg border border-slate-700 px-3 py-2 font-mono text-sky-400">
            React
          </li>
          <li className="rounded-lg border border-slate-700 px-3 py-2 font-mono text-sky-400">
            Nest.js
          </li>
          <li className="rounded-lg border border-slate-700 px-3 py-2 font-mono text-sky-400">
            AWS
          </li>
          <li className="rounded-lg border border-slate-700 px-3 py-2 font-mono text-sky-400">
            Material UI
          </li>
          <li className="rounded-lg border border-slate-700 px-3 py-2 font-mono text-sky-400">
            Tailwind CSS
          </li>
          <li className="rounded-lg border border-slate-700 px-3 py-2 font-mono text-sky-400">
            Storybook
          </li>
        </ul>
      </div>
      {isOpen ? (
        <ul className="mb-2 flex list-disc flex-col gap-4 px-6 text-slate-400">
          <li>
            Collaborated on the user dashboard migration from PHP to{" "}
            <Strong>React</Strong> to improve page load times. Developed
            responsive design and data visualization features.
          </li>
          <li>
            Participated in the development of the Authentication API
            microservice using <Strong>Nest.js</Strong> and{" "}
            <Strong>Amazon Cognito</Strong>. Implemented user authentication,
            authorization, and password recovery features.
          </li>
          <li>
            Collaborated on developing and maintaining reusable UI elements,
            design tokens, and accessibility guidelines for a component library
            using <Strong>Material UI</Strong>, <Strong>TailwindCSS</Strong>,
            and <Strong>Storybook</Strong>.
          </li>
          <li>
            Worked with other developers and designers to develop new features
            and fix bugs on the frontend of the main product using{" "}
            <Strong>React</Strong>.
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}
