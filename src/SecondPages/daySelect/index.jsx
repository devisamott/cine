import { useContext } from "react"
import "./daySelected.css"
import { DataContext } from "../../provider"

export function DaySelected () {
    const { selectedDay, selectedHour } = useContext(DataContext);

    return (
        <div className="horarios">
            <div>
                <div className="day_container">
                    <p className="p_daySelect">Dia seleccionado: </p>
                    <p className="p_day">{selectedDay}</p>
                </div>
                <div className="hour_container">
                    <p className="p_hourSelected">Hora seleccionada: </p>
                    <p className="p_hour">{selectedHour}</p>
                </div>
            </div>
        </div>
    )
}