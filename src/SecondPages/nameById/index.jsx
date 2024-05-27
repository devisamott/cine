import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getIdFromMovie } from "../../getDataFromApi";
import "./movieName.css"


export function NameById () {
    const { id } = useParams()
    const [movie, setMovie] = useState({})

    const fetchNameById =  async () => {
        const data = await getIdFromMovie(id);
        setMovie(data)
    }

    useEffect(() => {
        fetchNameById()
    }, [id])

    return (
        <div className="pelicula">
            <p>Pelicula elegida: </p>
            <p className="p_movie">{movie?.name}</p>
        </div>
    )
}