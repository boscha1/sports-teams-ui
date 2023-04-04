import React from 'react';
import {useEffect, useState} from "react";
import TeamsList from "../components/team/TeamsList";
import {getTeams} from "../services/TeamService";

const TeamsPage = () => {
    const [teams, setTeams] = useState([])

    useEffect(() => {
        getTeams()
            .then(response => {
                console.log(response.data)
                setTeams(response.data.teams)
            })
    }, [])

    return (
        <>
            <TeamsList teams={teams}/>
        </>
    );
};

export default TeamsPage;