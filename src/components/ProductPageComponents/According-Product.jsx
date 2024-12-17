import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const AccordingProduct = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="flex flex-col border-t py-4 space-y-2">
      <div className="flex  items-center justify-between">
        <h1 className="text-[#1E293B] font-semibold">{props.title}</h1>
        <span onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <Minus /> : <Plus />}
        </span>
      </div>
      {isOpen && (
        <ul className="list-disc flex flex-col space-y-2 text-[#64748B] px-6">
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum
            saepe quos ipsum minus, repellendus delectus corrupti vel architecto
            autem est. Et a consequuntur provident magni distinctio impedit
            sapiente dignissimos accusamus?
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta vitae
            ex nulla pariatur praesentium voluptate necessitatibus quidem
            placeat non dignissimos. Repellat, temporibus suscipit sint
            laudantium nam itaque consequatur iusto recusandae?
          </li>
        </ul>
      )}
    </li>
  );
};

export default AccordingProduct;
