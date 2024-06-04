import { useContext, useEffect, useState } from "react";
import { GetChair } from "../../getDataFromApi/index";
import { ChairSvg } from "../chairSvg";
import { DataContext } from "../../provider";
import './renderChair.css';

export function RenderChair() {
    const [chair, setChair] = useState([]);

    const { isScheduleSelected, selectedHour, handleChairClick, chairSelecting, confirmedChairs, selectedDay } = useContext(DataContext);

    useEffect(() => {
        dataChair();
    }, []);

    const dataChair = async () => {
        const result = await GetChair();
        setChair(result);
    };

    const isChairSelected = (id) => {
        return chairSelecting.includes(id);
    };

    const isChairConfirmed = (id) => {
        return confirmedChairs.some(chair => chair.id === id && chair.day === selectedDay && chair.hour === selectedHour);
    };

    const getChairColor = (id) => {
        if (!isScheduleSelected) {
            return "#ddd";  
        }
        if (isChairSelected(id)) {
            return "#fc9aab"; 
        }
        if (isChairConfirmed(id)) {
            return "#fc9aab";  
        }
        return "#ffccd5"; 
    };

    return (
        <div className="container">
            <h2 className="counterChair">Sillas disponibles</h2>
            <div className="chair">
                {chair?.map(({ id }) => (
                    <div
                        key={id}
                        onClick={() => isScheduleSelected && selectedHour && selectedDay && handleChairClick(id)}
                    >
                        <ChairSvg color={getChairColor(id)} />
                    </div>
                ))}
            </div>
        </div>
    );
}
