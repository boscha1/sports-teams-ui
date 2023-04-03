import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Stack,
  Image,
  Badge
} from "@chakra-ui/react";
import CardItem from "../components/CardItem";

const Home = () => {
  return (
    <Box>

      <Box bg="gray.100" py={10}>
        <Flex maxW="1200px" mx="auto" align="center" justify="space-between">
          <Box flex="1" mr={10}>
            <Heading size="xl" mb={5}>
              NFL Central
            </Heading>
            <Text fontSize="lg" mb={5}>
              Welcome to NFL Central, where you can find comprehensive information
              on all 32 NFL teams. From team schedules and standings to player stats and
              injury updates, we've got you covered. Whether you're a die-hard fan or 
              just getting into the game, our website is the perfect resource for all things NFL. 
              To learn more about what we offer, click the 'Learn More' button below.
            </Text>
            <Button colorScheme="teal" size="lg">
              Learn More
            </Button>
          </Box>
          <Box flex="1" maxW="500px">
            <Image
              src="/nfl_logo.svg"
              alt="NFL Image"
              borderRadius="md"
              boxShadow="md"
            />
          </Box>
        </Flex>
      </Box>

      <Box maxW="1200px" mx="auto" my={10}>
        <Heading size="xl" mb={5}>
          Featured Content
        </Heading>
        <Flex mb={10}>

          <CardItem 
            title={'The Top NFL Teams to Watch This Season'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.'}
            image={'/article_image.jpg'}
          />
          <CardItem 
            title={'Shop Our Selection of NFL Gear'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.'}
            image={'/product_image.jpg'}
          />
          <CardItem 
            title={'Watch Our Latest NFL Highlight Reel'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.'}
            image={'/video_image.jpg'}
          />
        </Flex>
        <Heading size="xl" mb={5}>
          Latest News
        </Heading>
          <Flex>
            <CardItem 
              title={'The Latest NFL Headlines You Need to Know'}
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.'}
              image={'/news_image.jpg'}
            />
            <CardItem 
              title={'Breaking: NFL Announces Changes to Playoff Format'}
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.'}
              image={'/news_image.jpg'}
            />
            <CardItem 
              title={'Key Players to Watch in This Year\'s NFL Draft'}
              description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat.'}
              image={'/news_image.jpg'}
            />
          </Flex>
        </Box>
      </Box>
  )
}

export default Home