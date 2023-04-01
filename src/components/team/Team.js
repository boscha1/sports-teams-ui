import React from 'react';

const Team = ({team}) => {
    return (
        <div>
            <h3 className="text-5xl">{team.name}</h3>
            <h3>{team.establishedDate}</h3>
            <h3>{team.stadium}</h3>
        </div>
    );
};

export default Team;