"use client";

import {
  Box,
  Flex,
  Grid,
  GridItem,
  Link,
  Spinner,
  Text,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useState, useEffect } from "react";

interface Character {
  name: string;
  url: string;
}
const Peoples = () => {
  const baseUrl = "https://swapi.dev/api/";
  const endpoint = "people";
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async (url: string) => {
      setIsLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
        localStorage.setItem("people", JSON.stringify(response.data));
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (localStorage.getItem("people")) {
      setData(JSON.parse(localStorage.getItem("people")!));
      return;
    } else {
      fetchData(`${baseUrl}/${endpoint}/?page=${currentPage}`);
    }
  }, [endpoint, currentPage]);

  const handlePageChange = (page: number) => {
    localStorage.removeItem("people");
    setCurrentPage(page);
  };

  if (isLoading) {
    return (
      <main className="h-screen w-full grid place-items-center">
        <Spinner size="xl" mx="auto" my={4} />
      </main>
    );
  }

  if (error) {
    return (
      <main className="h-screen w-full grid place-items-center">
        <Text color="red.500">Error: {error?.message}</Text>
      </main>
    );
  }

  const characters = data?.results as Character[]; // Type assertion

  return (
    <div className="min-h-screen w-full">
      {data && (
        <Text fontSize="2xl" p={[4, 8, 12, 16]} fontWeight="bold" mb={4}>
          Star Wars Characters
        </Text>
      )}
      <Box p={[4, 8, 12, 16]}>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={3}
        >
          {characters &&
            characters?.length > 0 &&
            characters.map((character) => (
              <GridItem
                key={character.url}
                // w="25%"
                p={4}
                m={4}
                borderWidth={1}
                borderRadius={4}
                _hover={{ bg: "gray.200" }}
              >
                <Link href={`/characters/${character.url.split("/")[5]}`}>
                  <Text fontSize="xl">{character.name}</Text>
                </Link>
              </GridItem>
            ))}
        </Grid>

        {data && (
          <ButtonGroup mt={4} spacing={4}>
            {data.previous && (
              <Button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={!data.previous}
              >
                Previous
              </Button>
            )}
            {data.next && (
              <Button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={!data.next}
              >
                Next
              </Button>
            )}
          </ButtonGroup>
        )}
      </Box>
    </div>
  );
};

export default Peoples;
