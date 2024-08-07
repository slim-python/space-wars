"use client";
import Link from "next/link";
import React, { useState } from "react";

const CharactersExpandable = ({ list }: { list: any }) => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore((p) => !p);
  };

  return (
    <div>
      {list &&
        list?.slice(0, showMore ? list.length : 3).map((characterUrl: any) => (
          <div className="bg-green-300 dark:bg-gray-500 px-1 border border-b">
            <Link
              href={`characters/${characterUrl.replace(
                "https://rickandmortyapi.com/api/character/",
                ""
              )}`}
              key={characterUrl}
              className="text-gray-500 text-xs dark:text-gray-300"
            >
              {characterUrl}
            </Link>
          </div>
        ))}

      <button onClick={handleShowMore} className="text-sm dark:text-gray-300">
        See {showMore ? "Less" : "More"}{" "}
      </button>
    </div>
  );
};

export default CharactersExpandable;
