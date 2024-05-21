const jsonApi = '../../src/JsonMovies/movies.json'

export async function GetMovies () {
    const response  = await fetch(jsonApi)
    const data = await response.json()
    return data 
}