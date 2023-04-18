import React, { useEffect, useState } from "react";
import ResidentCard from "./ResidentCard";

const ResidentList = ({ location }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const RESIDENTS_PER_PAGES = 16;

  const arrayPages = [];
  const quantityPages = Math.ceil(
    location?.residents.length / RESIDENTS_PER_PAGES
  );

  for (let i = 1; i <= quantityPages; i++) {
    arrayPages.push(i);
  }

  const starCut = RESIDENTS_PER_PAGES * currentPage - RESIDENTS_PER_PAGES;
  const endCut = RESIDENTS_PER_PAGES * currentPage;

  const residents = location?.residents;

  useEffect(()=>{
    setCurrentPage(1)
  },[location])

  return (
    <>
      <section className="p-4 grid gap-6 auto-rows-auto grid-cols-[repeat(auto-fill,_minmax(220px,1fr))] max-w-[1000px] mx-auto">
        {residents?.slice(starCut, endCut).map((resident) => (
          <ResidentCard key={resident} resident={resident} />
        ))}
      </section>
      <ul className="flex gap-4 justify-center py-4">
        {arrayPages.map((page) => (
          <li
            onClick={() => setCurrentPage(page)}
            className={`p-3 text-white cursor-pointer rounded-md ${
              page === currentPage && "bg-[#062226] text-white font-bold "
            }`}
            key={page}
          >
            {page}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ResidentList;


//*hay un bug, si en el buscador no colocamos ningun numero, se estalla la aplicacion. si colocamos texto, no pasa nada.