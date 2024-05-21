import { useEffect, useState } from "react"
import { GetChair } from "../../getDataFromApi"
import { ChairSvg } from "../chairSvg";

export function RenderChair () {
    const [chair, setChair] = useState();

    useEffect(() => {
        dataChair()
    })
    const dataChair = async () => {
        const result = GetChair()
        setChair(result)
    
    }

    return (
        <div>
           {chair.map(({id}) => (
                <div
                    key={id}
                >
                    <ChairSvg/>
                </div>
           ))}
        </div>
    )
}