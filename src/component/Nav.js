import { useState } from "react";

const ExpandButton = () => {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
      ></path>
    </svg>
  );
};

const ReduceButton = () => {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20 12H4"
      ></path>
    </svg>
  );
};

const Nav = ({ name, handleHide }) => {
  const [expand, setExpand] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setExpand(!expand);
    handleHide();
  };

  return (
    <nav className="flex items-center justify-between bg-gray-700 text-white px-3 py-2">
      <span className="font-bold ">{name}</span>
      <button onClick={handleClick}>
        {expand ? ReduceButton() : ExpandButton()}
      </button>
    </nav>
  );
};

export default Nav;
