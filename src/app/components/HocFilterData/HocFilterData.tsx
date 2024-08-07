"use client";

import React, { useEffect, useState } from "react";
import EpisodeCard from "../EpisodeListCard/EpisodeListCard";

const HocFilterData = ({ _data }: { _data: any }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEpisodes, setFilteredEpisodes] = useState(_data);

  // const [favorites, setFavorites] = useState(() => {
  //   const savedFavorites = localStorage.getItem("favorites");
  //   return savedFavorites ? JSON.parse(savedFavorites) : [];
  // });
  const [favorites, setFavorites] = useState<any>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedFavorites = localStorage.getItem("favorites");
      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites]);

  // useEffect(() => {
  //   localStorage.setItem("favorites", JSON.stringify(favorites));
  // }, [favorites]);

  const handleSearch = (event: any) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filtered = _data.filter(
      (episode: any) =>
        episode.name.toLowerCase().includes(query.toLowerCase()) ||
        episode.air_date.toLowerCase().includes(query.toLowerCase()) ||
        episode.episode.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredEpisodes(filtered);
  };

  const toggleFavorite = (id: any) => {
    console.log("id", id);
    setFavorites((prevFavorites: any) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((favId: any) => favId !== id)
        : [...prevFavorites, id]
    );
  };

  return (
    <div>
      {filteredEpisodes && (
        <div className="pt-4  mx-5 md:mx-20">
          <h1 className="mb-4 text-left text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <p className="text-transparent  bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Rick and Morty Episodes
            </p>{" "}
          </h1>
        </div>
      )}
      <div className="w-full mx-5">
        <input
          type="text"
          className="w-[90%] h-12 p-5 outline-none dark:bg-black border dark:border-1 mb-3 dark:text-gray-300"
          placeholder="Search episodes..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <section className=" grid grid-cols-2  md:grid-cols-4 gap-2 mx-0  md:mx-5">
        {filteredEpisodes &&
          filteredEpisodes?.length > 0 &&
          filteredEpisodes.map((list: any, index: number) => (
            <EpisodeCard
              toggleFavorite={toggleFavorite}
              key={index}
              episode={list}
              isFavorite={favorites.includes(list.id)}
            />
          ))}
      </section>
    </div>
  );
};

export default HocFilterData;
