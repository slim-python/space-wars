import { Link } from "@chakra-ui/next-js";
import { useEffect } from "react";
import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
// import Peoples from "./components/Peoples/Peoples";
import EpisodesList from "./components/EpisodesList/EpisodesList";

export default function Home() {
  return (
    <main>
      {/* <Peoples /> */}
      <EpisodesList />
    </main>
  );
}
