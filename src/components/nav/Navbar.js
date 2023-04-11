import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  useDisclosure,
  Stack,
  Link,
  Image,
  VStack,
  List,
  ListItem
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom"
import Searchbar from "./Searchbar";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Flex
        bg="gray.800"
        color="white"
        px={10}
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

        <Flex justify="space-between" align="center" w={{ base: "100%", md: "auto" }}>
          <Searchbar />
          <Stack
            spacing={4}
            align="center"
            direction="row"
            display={{ base: "none", md: "flex" }}
          >
            <NavLink to="teams">Teams</NavLink>
            <NavLink to="coaches">Coaches</NavLink>
            <NavLink to="stadiums">Stadiums</NavLink>
            <NavLink to="news">News</NavLink>
          </Stack>
        </Flex>
      </Flex>

      {isOpen ? (
        <VStack
          bg="gray.800"
          color="white"
          position="fixed"
          top="60px"
          left="20px"
          zIndex={1}
          p={4}
          spacing={4}
          align="flex-start"
          justify="center"
          direction="column"
          display={{ md: "none" }}
        >
          <List color="white" fontSize="1.2em" spacing={4}>
            <ListItem>
              <NavLink to="teams">
                Teams
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="coaches">
                Coaches
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="stadiums">
                Stadiums
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="news">
                News
              </NavLink>
            </ListItem>
          </List>
        </VStack>
      ) : null}
    </Box>
  );
};

export default Navbar;
