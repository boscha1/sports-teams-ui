const baseUrl = 'http://localhost:8081/api/v1/teams/'

export async function getTeams() {
    const response = await fetch(baseUrl);

    return await response.json();
}

export async function getTeamById(id) {
    const response = await fetch(`${baseUrl}${id}/`)

    return await response.json();
}