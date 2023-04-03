import { NavLink } from "react-router-dom";
import React from 'react';
import { Grid, GridItem, Image } from "@chakra-ui/react";


const TeamsList = ({teams}) => {
    const teamsList = teams.map((team) => {
        return (
          <GridItem key={team.id}>
            <NavLink to={"/teams/" + team.id}>
              <Image
                src={`/teams/${team.name.toLowerCase()}/${team.name.toLowerCase()}_logo.png`}
                mx="auto"
                mt="2"
                mb="4"
                w="60%"
                h="60%"
                objectFit="contain"
              />
            </NavLink>
          </GridItem>
        );
      });

    return (
        <Grid templateColumns="repeat(4, 1fr)" gap={6}>
          {teamsList}
        </Grid>
      );
};

export default TeamsList;