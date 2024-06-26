import React from "react";

const Action: React.FC = ({ text }) => {
  return (
    <button className="px-3 mr-1 py-2 border text-green-500 border-green-500 border-1 font-semibold rounded-lg shadow-md hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-75">
      {text}
    </button>
  );
};

export default Action;
