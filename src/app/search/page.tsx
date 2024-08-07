"use client";
import Card from "@/app/components/Peoples/Card";
import { fetchAllEpisodes, fetchSingleCharacter } from "@/utils/utils";
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";
import FilterBox from "../components/FilterBox/FilterBox";
import EpisodesList from "../components/EpisodesList/EpisodesList";
import EpisodeCard from "../components/EpisodeListCard/EpisodeListCard";

const Page = async (props: any) => {
  const [list, setlist] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAllEpisodes();
      console.log("Data", data?.results);
      setlist(data?.results);
    };

    fetchData();
  }, []);

  return (
    // <Suspense fallback={<Loading />}>
    <section>
      <FilterBox />

      <section className="w-full grid grid-cols-2  md:grid-cols-4 gap-2 mx-0  md:mx-5">
        {list &&
          list?.length > 0 &&
          list.map((list, index) => <EpisodeCard key={index} episode={list} />)}
      </section>
    </section>
    // </Suspense>
  );
};

export default Page;
