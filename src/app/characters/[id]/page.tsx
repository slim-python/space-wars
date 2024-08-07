import { fetchSingleCharacter } from "@/utils/utils";
import Link from "next/link";
import React, { Suspense } from "react";
import Loading from "./loading";
import Card from "@/app/components/Peoples/Card";

const Page = async (props: any) => {
  const data = await fetchSingleCharacter(props?.params?.id);

  return (
    // <Suspense fallback={<Loading />}>
    <section className="dark:bg-gray-600">
      <Link
        className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-400 dark:bg-gray-400 rounded-lg mx-5 md:mx-20 mt-10  "
        href={"/"}
      >
        Back
      </Link>
      {/* <div>{JSON.stringify(data, null, 4)} data </div> */}
      <main className="flex flex-col items-center justify-center py-5">
        <h1 className="mb-4 text-left text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <p className="text-transparent  bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            {data?.name}
          </p>{" "}
        </h1>
        {data && <Card type={"datailPage"} character={data} />}
      </main>
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-5 md:mx-20 py-10">
        {data &&
          data?.episode.map((item: any, index: any) => (
            <button
              key={index}
              type="button"
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 dark:bg-gray-500 rounded-lg    "
            >
              Episode: {index}
            </button>
          ))}
      </section>
    </section>
    // </Suspense>
  );
};

export default Page;
