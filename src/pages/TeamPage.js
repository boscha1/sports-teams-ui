import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getTeamById} from "../services/TeamService"
import { Box, Heading, Text, VStack, HStack } from "@chakra-ui/react";

const TeamPage = () => {
    const {id} = useParams()
    const [team, setTeam] = useState({
        id: null,
        name: '',
        establishedDate: '',
        fightSong: '',
        mascot: '',
        stadiums: [],
        location: {
            city: '',
            state: '',
            state_code: '',
            zip_code: ''
        },
        headCoach: {
            firstName: '',
            lastName: '',
            wins: -1,
            losses: -1,
            ties: -1
        },
        colors: []
    })

    useEffect(() => {
        if (Number(id)) {
            getTeamById(Number(id))
                .then(response => {
                    setTeam(response.data.teams[0])
                })
        }
    }, [id])

    return (
        <Box height={"100vh"}>
          <Heading size="2xl" textAlign="center">
            {team.prefix} {team.name}
          </Heading>
          <Box m={4}>
            <VStack spacing={4} align="flex-start">
              <Text fontSize="lg">
                <strong>Location:</strong> {team.location.city}, {team.location.state}
              </Text>
              <Text fontSize="lg">
                <strong>Established:</strong> {new Date(team.establishedDate).getFullYear()}
              </Text>
              <Text fontSize="lg">
                <strong>Fight Song:</strong> {team.fightSong}
              </Text>
              <Text fontSize="lg">
                <strong>Mascot:</strong> {team.mascot}
              </Text>
              <Box>
                <Text fontSize="lg" mb={2}>
                  <strong>Stadiums:</strong>
                </Text>
                <VStack align="flex-start" spacing={2}>
                  {team.stadiums.map((stadium) => (
                    <Box key={stadium.id}>
                      <Text>
                        {stadium.name} ({new Date(stadium.fromDate).getFullYear()} -{" "}
                        {stadium.toDate ? new Date(stadium.toDate).getFullYear() : "present"})
                      </Text>
                    </Box>
                  ))}
                </VStack>
              </Box>
              <Box>
                <Text fontSize="lg" mb={2}>
                  <strong>Head Coach:</strong>
                </Text>
                <HStack>
                  <Text>
                    {team.headCoach.firstName} {team.headCoach.lastName}
                  </Text>
                  <Text>
                    ({team.headCoach.wins}-{team.headCoach.losses}-{team.headCoach.ties})
                  </Text>
                </HStack>
              </Box>
              <Box>
                <Text fontSize="lg" mb={2}>
                  <strong>Colors:</strong>
                </Text>
                <HStack spacing={4}>
                  {team.colors.map((color) => (
                    <Box key={color.id} w="50px" h="50px" borderRadius="50%" bg={color.hexCode}></Box>
                  ))}
                </HStack>
              </Box>
            </VStack>
          </Box>
        </Box>
      )
};

export default TeamPage;