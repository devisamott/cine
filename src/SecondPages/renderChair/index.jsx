import { useEffect, useState } from "react"
import { GetChair } from "../../getDataFromApi/index"
import { ChairSvg } from "../chairSvg";

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
        <div>
           {chair?.map(({id}) => (
                <div
                    key={id}
                >
                    <ChairSvg/>
                </div>
           ))}
        </div>
    )
}