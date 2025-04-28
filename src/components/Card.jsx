import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
function Card({ data, reference, index }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
      key={index}
      className=" relative flex-shrink-0 w-60 h-72 px-8 rounded-[50px] text-white bg-zinc-900 py-10 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm mt-5 leading-tight font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full  left-0">
        <div className="flex justify-between items-center py-3 px-8 mb-3">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoClose size=".8em" color="#fff" />
            ) : (
              <FiDownload size=".8em" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isopen && (
          <div
            className={`tag w-full py-4 flex items-center justify-center ${
              data.tag.tagcolor === "blue" ? "bg-blue-600" : "bg-green-600"
            } rounded-b-[50px]`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagtitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
