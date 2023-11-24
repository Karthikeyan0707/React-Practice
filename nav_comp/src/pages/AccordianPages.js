import React from "react";
import Accordion from "../components/Accordion";

function AccordianPages() {
  const items = [
    {
      id: 1,
      label: "Can i Help u 1",
      content: "Yes 1",
    },
    {
      id: 2,
      label: "Can i Help u 2",
      content: "Yes 2",
    },
    {
      id: 3,
      label: "Can i Help u 3",
      content: "Yes 3",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordianPages;
