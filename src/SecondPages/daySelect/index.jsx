import "./daySelected.css"

export function DaySelected () {
    return (
        <div className="horarios">
            <div>
                <div className="day_container">
                    <p className="p_daySelect">Dia seleccionado: </p>
                </div>
                <div className="hour_container">
                    <p className="p_hourSelected">Hora seleccionada: </p>
                </div>
            </div>
        </div>
    )
}