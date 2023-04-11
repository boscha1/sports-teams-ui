import React from "react";
import { Box, Heading, Text, Image, Button } from "@chakra-ui/react";

const CardItem = ({ title, description, image }) => {
  return (
    <Box flex="1" mr={10}>
        <Image
            src={image}
            alt="Article Image"
            borderRadius="md"
            boxShadow="md"
        />
        <Heading size="lg" mt={5}>
            {title}
        </Heading>
        <Text fontSize="md" mt={2}>
            {description}
        </Text>
        <Button colorScheme="teal" size="md" mt={5}>
            Read More
        </Button>
    </Box>
  );
};

export default CardItem;