"use client";

import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
  Link,
  Card,
  CardHeader,
  StackDivider,
  CardBody,
  Button,
  ButtonGroup,
  Stack,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Page = (props: any) => {
  const { id } = props?.params;

  const [character, setCharacter] = useState<any>(null);
  const [films, setFilms] = useState<string[]>([]);

  useEffect(() => {
    if (id) {
      fetchCharacterDetail();
    }
  }, [id]);

  const fetchCharacterDetail = async () => {
    const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
    setCharacter(response.data);
    fetchFilms(response.data.films);
  };

  const fetchFilms = async (filmUrls: string[]) => {
    const filmPromises = filmUrls.map((url) => axios.get(url));
    const filmResponses = await Promise.all(filmPromises);
    setFilms(filmResponses.map((res) => res.data.title));
  };

  if (!character) {
    return (
      <main className="h-screen w-full grid place-items-center">
        <Spinner size="xl" mx="auto" my={4} />
      </main>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Box m={5}>
        {character && (
          <Card w={[350, 500, "500"]} p={5}>
            <CardHeader>
              <Heading size="md"> {character.name}</Heading>
            </CardHeader>

            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Summary
                  </Heading>

                  <List spacing={3} mt={2}>
                    <ListItem>
                      <Text as="b" mr={2}>
                        Height:
                      </Text>
                      {character.height}
                    </ListItem>
                    <ListItem>
                      <Text as="b" mr={2}>
                        Mass:
                      </Text>
                      {character.mass}
                    </ListItem>
                    <ListItem>
                      <Text as="b" mr={2}>
                        Hair Color:
                      </Text>
                      {character.hair_color}
                    </ListItem>
                    <ListItem>
                      <Text as="b" mr={2}>
                        Skin Color:
                      </Text>
                      {character.skin_color}
                    </ListItem>
                    <ListItem>
                      <Text as="b" mr={2}>
                        Eye Color:
                      </Text>
                      {character.eye_color}
                    </ListItem>
                    <ListItem>
                      <Text as="b" mr={2}>
                        Birth Year:
                      </Text>
                      {character.birth_year}
                    </ListItem>
                    <ListItem>
                      <Text as="b" mr={2}>
                        Gender:
                      </Text>
                      {character.gender}
                    </ListItem>

                    <ListItem>
                      <Text as="b" mr={2}>
                        Films:
                      </Text>
                      {films &&
                        films.map((film, index) => (
                          <Text key={index}>{film}</Text>
                        ))}
                    </ListItem>
                  </List>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        )}

        <Stack direction="row" spacing={4}>
          <Link href="/" mt={5}>
            <Button
              leftIcon={
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                    />
                  </svg>
                </>
              }
              colorScheme="pink"
              variant="solid"
            >
              Back
            </Button>
          </Link>
        </Stack>
      </Box>
    </div>
  );
};

export default Page;
