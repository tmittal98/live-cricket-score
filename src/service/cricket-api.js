const KEY = "46altHT529RQW5ZjqP4WR6kQ8mI2";

export const getCricketMatches = () => {
    const url = `https://cricapi.com/api/matches?apikey=${KEY}`;

    return fetch(url)
        .then(res => res.json())
        .catch(error => console.log(error));
};

export const getMatchDetail = (id) => {
    const url = `https://cricapi.com/api/cricketScore?apikey=${KEY}&unique_id=${id}`;

    return fetch(url)
        .then((res) => res.json())
        .catch((error) => console.log(error));
};