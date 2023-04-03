import {Link} from "react-router-dom";
import React from 'react';


const TeamsList = ({teams}) => {
    const teamsList = teams.map(team => {
        return <tr key={team.id}>
            <td style={{whiteSpace: 'nowrap', textTransform: 'capitalize'}}>
                <Link to={"/teams/" + team.id}>{team.prefix} {team.name}</Link>
            </td>
        </tr>
    })
    return (
        <>
            <table>
                <tbody>
                    {teamsList}
                </tbody>
            </table>
        </>
    );
};

export default TeamsList;