import { useEffect, useState } from "react"
import { GetChair } from "../../getDataFromApi/index"
import { ChairSvg } from "../chairSvg";
import './renderChair.css'

export function RenderChair () {
    const [chair, setChair] = useState();
    const [selectedChair, setSelectedChair] = useState(null)

    useEffect(() => {
        dataChair()
    },[])

    const dataChair = async () => {
        const result = await GetChair()
        setChair(result)
    } 

    const  handleChairClick = (id) => {
        setSelectedChair(prevSeletedChairs => {
            const newSelectedChairs = new Set(prevSeletedChairs);
            if(newSelectedChairs.has(id)){
                newSelectedChairs.delete(id)
            } else {
                newSelectedChairs.add(id)
            }
            return newSelectedChairs;
        })
    }

    return (
        <div className="container">
            <h2 className="counterChair">Sillas disponibles</h2>
            <div className="chair">
                {chair?.map(({ id }) => (
                    <div
                        key={id}
                        onClick={() => handleChairClick(id)}
                    >
                        <ChairSvg  color={selectedChair.has(id) ? "#ffccd5" : "#fc9aab"}/>
                    </div>
                ))}
            </div>
        </div>
    )
}