import axios from "axios";
import React, { useEffect, useState } from "react";

const residentsStatus = {
  Alive: "bg-green-500",
  Dead: "bg-red-500",
  unknown: "bg-gray-500",
};

const ResidentCard = ({ resident }) => {
  const [residentInfo, setResidentInfo] = useState();

  useEffect(() => {
    axios
      .get(resident)
      .then((res) => setResidentInfo(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className="text-white font-normal font-fira-code border-2 border-[#8EFF8B] border-collapse">
      <div className="relative border-y border-[#8EFF8B]">
        <img className="w-full" src={residentInfo?.image} alt="" />
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-[#020A02CC] text-white py-1 px-6 flex gap-3 items-center rounded-sm">
          <div
            className={`w-3 h-3 ${
              residentsStatus[residentInfo?.status]
            } rounded-full`}
          ></div>
          <span>{residentInfo?.status}</span>
        </div>
      </div>
      <section>
        <h3 className="text-2xl font-bold" >{residentInfo?.name}</h3>
        <hr className="border-[#084851]" />
        <ul className="sm:px-0">
          <li className="flex justify-between px-16 sm:px-2">
            <span>Species: </span>
            <span>{residentInfo?.species}</span>
          </li>
          <li className="flex justify-between px-16 sm:px-2">
            <span>Origin: </span>
            <span>{residentInfo?.origin.name}</span>
          </li>
          <li className="flex justify-between px-16 sm:px-2">
            <span>Times appear: </span>
            <span>{residentInfo?.episode.length} Time</span>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default ResidentCard;
