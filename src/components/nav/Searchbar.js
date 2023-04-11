import React, { useState, useEffect } from 'react'
import { Input, List, ListItem } from "@chakra-ui/react";
import { getTeams } from '../../services/TeamService';
import { NavLink } from 'react-router-dom';

function Searchbar() {
    const getFilteredItems = (query, teams) => {
        if (!query) {
            return []
        }
        return teams.filter((team) => (team.prefix + team.name).includes(query))
    }

    const [query, setQuery] = useState("")
    const [teams, setTeams] = useState([])

    useEffect(() => {
        getTeams().then(response => {
            console.log(response.data.teams);
            setTeams(response.data.teams);
        })
    }, []);
    

    const filteredItems = getFilteredItems(query, teams)

    return (
        <div style={{ position: "relative" }}>
            <Input
                type="text"
                placeholder="Search"
                mr={4}
                w={{ base: "full", md: "300px" }}
                onChange={(e) => setQuery(e.target.value)}
                value={query} 
            />
            {filteredItems.length > 0 && (
                <List style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    width: "100%",
                    backgroundColor: "white",
                    padding: "0.5rem",
                    border: "1px solid gray",
                    borderRadius: "4px"
                }}>
                    {filteredItems.map((value) => (
                        <ListItem key={value.id} color='black' _hover={{ backgroundColor: 'gray.100', cursor: 'pointer' }}>
                            <NavLink onClick={() => setQuery("")} to={`teams/${value.id}`}>{value.prefix} {value.name}</NavLink>
                        </ListItem>
                    ))}
                </List>
            )}
        </div>
    )
}

export default Searchbar
