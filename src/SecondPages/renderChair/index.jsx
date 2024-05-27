import { useContext, useEffect, useState } from "react";
import { GetChair } from "../../getDataFromApi/index";
import { ChairSvg } from "../chairSvg";
import { DataContext } from "../../provider";
import './renderChair.css';

export function RenderChair() {
    const [chair, setChair] = useState([]);

    const { isScheduleSelected, chairsReservations, handleChairClick, selectedDay, selectedHour } = useContext(DataContext);

    useEffect(() => {
        dataChair();
    }, []);

    const dataChair = async () => {
        const result = await GetChair();
        setChair(result);
    };

    const isChairSelected = (id) => {
        return chairsReservations[selectedDay]?.[selectedHour]?.[id] !== undefined;
    };

    return (
        <div className="container">
            <h2 className="counterChair">Sillas disponibles</h2>
            <div className="chair">
                {chair?.map(({ id }) => (
                    <div
                        key={id}
                        onClick={() => isScheduleSelected && handleChairClick(id)}
                    >
                        <ChairSvg color={isChairSelected(id) ? "#ffccd5" : (isScheduleSelected ? "#fc9aab" : "#ccc")} />
                    </div>
                ))}
            </div>
        </div>
    );
}
