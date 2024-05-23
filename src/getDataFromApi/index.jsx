const jsonMovies = '../../src/HomePage/JsonMovies/movies.json'
const jsonChairs = '../../src/SecondPages/JsonChair/chair.json'


export async function GetMovies () {
    const response  = await fetch(jsonMovies)
    const data = await response.json()
    return data;
}

export async function getIdFromMovie (idParam) {
    const response = await fetch(jsonMovies)
    const data = await response.json();
    const getId = data.findIndex( ({id}) => id  === idParam);
    return(data[getId]);
}

export async function GetChair () {
    const response = await fetch(jsonChairs)
    const data = await response.json();
    return data;
}