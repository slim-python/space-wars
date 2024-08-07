import { formatAirDate } from "@/utils/utils";
import Link from "next/link";
import CharactersExpandable from "../CharactersExpandable/CharactersExpandable";

const EpisodeCard = ({
  episode,
  isFavorite,
  toggleFavorite,
}: {
  episode: any;
  isFavorite?: any;
  toggleFavorite?: any;
}) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-600 p-4 rounded-md shadow-md">
      <div className="w-full flex justify-between">
        <h2 className="text-xl font-bold mb-2 text-gray-500 dark:text-gray-100 dark:te">
          {episode.name}
        </h2>

        <button
          onClick={() => toggleFavorite(episode.id)}
          className=" text-yellow-300 text-xs bg-gray-400 h-7 px-1  rounded-xl"
        >
          {isFavorite ? "Unfavorite" : "Favorite"}
        </button>
      </div>

      <p className="text-gray-600 dark:text-gray-200">
        <b>Air Date:</b> {formatAirDate(episode.air_date)}
      </p>
      <p className="text-gray-600 dark:text-gray-300">
        <b>Episode:</b> {episode.episode}
      </p>

      <p className="text-gray-600 dark:text-gray-300 font-bold mb-2">
        Characters:
      </p>
      {/* {episode.characters.map((characterUrl: any) => (
          <li key={characterUrl} className="text-gray-600 text-xs">
            Characters: {characterUrl}
          </li>
        ))} */}
      <CharactersExpandable list={episode.characters} />
    </div>
  );
};

export default EpisodeCard;
