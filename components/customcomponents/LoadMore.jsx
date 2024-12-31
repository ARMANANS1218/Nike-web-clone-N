import React, { useState } from "react";
const LoadMore = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div>{isExpanded ? text : `${text.slice(0, 100)}...`}</div>
      {!isExpanded && (
        <button
          className="w-[150px] py-2 rounded-full bg-black text-white text-sm font-medium transition-transform active:scale-95 mt-5 mb-3 hover:opacity-75"
          onClick={toggleExpand}
        >
          View All
        </button>
      )}
    </div>
  );
};

export default LoadMore;
