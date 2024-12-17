import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";

const AccordingComponent = ({ title, items }) => {
const [openAccord, setOpenAccord] = useState(false);
return (
    <>
      <li className="border-b flex flex-col py-2" onClick={() => setOpenAccord(prev => !prev)}>
        <h1 className="flex justify-between items-center">
          {title} {openAccord ? <Minus /> : <Plus />}
        </h1>
        {openAccord &&  
        <ul className="flex flex-col text-[#64748B] text-lg mt-2 font-light">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>}
      </li>
    </>
  );
};

export default AccordingComponent;
