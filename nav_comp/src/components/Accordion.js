import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    console.log(expandedIndex);
    if (expandedIndex === nextIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(nextIndex);
    }
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    // console.log(isExpanded);                           //2
    // if (index === expandedIndex) {                     //1
    //   console.log("expanded");
    // } else {
    //   console.log("collapsed");
    // }
    return (
      <div key={item.id}>
        {/* <div>{item.content}</div> */}
        <div
          className="flex p-3 bg-violet-400 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && (
          <div className="bg-blue-100 border-b p-5">{item.content}</div>
        )}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
