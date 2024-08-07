import axios from "axios";
import { useState, useEffect } from "react";
import { fetchAllEpisodes, fetchAPIData } from "../../../utils/utils";
import ButtonWrapperHoc from "../ButtonWrapperHoc";
import { Card } from "@chakra-ui/react";
import EpisodeCard from "../EpisodeListCard/EpisodeListCard";
import FilterBox from "../FilterBox/FilterBox";
import HocFilterData from "../HocFilterData/HocFilterData";

interface Character {
  name: string;
  episode: string;
}

const EpisodesList = async () => {
  const data = await fetchAllEpisodes();
  const error = null;

  if (!data) {
    return (
      <main className="h-screen w-full grid place-items-center">
        loading ....
      </main>
    );
  }

  if (error) {
    return (
      <main className="h-screen w-full grid place-items-center">
        <p>
          Error:
          <div>{JSON.stringify(error, null, 4)} error </div>
        </p>
      </main>
    );
  }

  const episodes = data?.results as Character[];

  return (
    <div className="min-h-screen w-full bg-slate-100 dark:bg-black ">
      {/* <FilterBox data={episodes} /> */}

      <HocFilterData _data={episodes} />

      {/* {data && (
        <div className="mb-4 my-8 mx-5 md:mx-20">
          <h1 className="mb-4 text-left text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <p className="text-transparent  bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
              Rick and Morty Episodes
            </p>{" "}
          </h1>
        </div>
      )} */}

      {/* <div>{JSON.stringify(data, null, 4)} data </div> */}
      {/* <section className="w-full grid grid-cols-2  md:grid-cols-4 gap-2 mx-0  md:mx-5">
        {episodes &&
          episodes?.length > 0 &&
          episodes.map((list, index) => (
            <EpisodeCard key={index} episode={list} />
          ))}
      </section> */}
    </div>
  );
};

export default EpisodesList;
