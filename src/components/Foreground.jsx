import React, { useRef } from "react";
import Card from "./Card";

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      filesize: ".9mb",
      close: false,
      tag: {
        isopen: true,
        tagtitle: "Download Now",
        tagcolor: "green",
      },
    },
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      filesize: ".9mb",
      close: true,
      tag: {
        isopen: true,
        tagtitle: "Upload",
        tagcolor: "blue",
      },
    },
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      filesize: ".9mb",
      close: true,
      tag: {
        isopen: false,
        tagtitle: "Download Now",
        tagcolor: "green",
      },
    },
  ];
  return (
    <div
      ref={ref}
      className="fixed z-[3] p-5 w-full h-full flex gap-7 flex-wrap"
    >
      {data.map((item, index) => (
        <Card data={item} reference={ref} index={index} />
      ))}
    </div>
  );
}

export default Foreground;
