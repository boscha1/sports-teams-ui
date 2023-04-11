import { Center, Heading, Text } from "@chakra-ui/react";

const ComingSoon = () => {
  return (
    <Center h="100vh">
      <div>
        <Heading as="h1" size="2xl" mb="4">
          Coming Soon
        </Heading>
        <Text fontSize="xl">This page is not ready yet, but it will be soon.</Text>
      </div>
    </Center>
  );
}

export default ComingSoon;
