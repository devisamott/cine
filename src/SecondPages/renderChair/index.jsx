import { useEffect, useState } from "react"
import { GetChair } from "../../getDataFromApi/index"
import { ChairSvg } from "../chairSvg";
import './renderChair.css'

export function RenderChair () {
    const [chair, setChair] = useState();

    useEffect(() => {
        dataChair()
    },[])
    const dataChair = async () => {
        const result = await GetChair()
        setChair(result)
    }
    console.log(GetChair())

    return (
        <div className="container">
            <h2 className="counterChair">Sillas disponibles</h2>
            <div className="chair">
            {chair?.map(({id}) => (
                    <div
                        key={id}
                    >
                        <ChairSvg/>
                    </div>
            ))}
            </div>
        </div>
    )
}