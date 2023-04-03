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
  ListItem,
  ListIcon
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom"

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
          <NavLink to="teams">Teams</NavLink>
          <NavLink to="teams">Schedule</NavLink>
          <NavLink to="teams">Standings</NavLink>
          <NavLink to="teams">News</NavLink>
        </Stack>
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
              <NavLink to="schedule">
                Schedule
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="standings">
                Standings
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
