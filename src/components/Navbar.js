import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  useDisclosure,
  Stack,
  Icon,
  Link,
  Image
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Flex
        bg="gray.800"
        color="white"
        px={20}
        py={3}
        align="center"
        justify="space-between"
      >
        <Flex align="center">
          <IconButton
            variant="outline"
            onClick={isOpen ? onClose : onOpen}
            display={{ md: "none" }}
            aria-label="Toggle navigation"
            icon={<HamburgerIcon />}
          />
          <Link href="/" display="flex" alignItems="center">
            <Image src="/nfl_logo.svg" alt="NFL Logo" w={8} h={8} mr={2} />
            <Text fontWeight="bold">NFL Teams</Text>
          </Link>
        </Flex>

        <Stack
          spacing={4}
          align="center"
          direction="row"
          display={{ base: "none", md: "flex" }}
        >
          <Link href="/teams">Teams</Link>
          <Link href="/schedule">Schedule</Link>
          <Link href="/standings">Standings</Link>
          <Link href="/news">News</Link>
        </Stack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            <Link href="/teams">Teams</Link>
            <Link href="/schedule">Schedule</Link>
            <Link href="/standings">Standings</Link>
            <Link href="/news">News</Link>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
