import { useContext } from "react";
import "./reservedChairs.css"
import { DataContext } from "../../provider";

export function ResevedChair ( ) {
    const {chairSelecting} = useContext(DataContext);

    return(
        <div className="sillas_reservadas">
            <p>Sillas elegidas:</p>
            <div className="componet_sillas">
                {chairSelecting.map((summary, index) => (
                    <p className="p_chair" key={index}>{summary}</p>
                ))}
            </div>
        </div>
    )
}