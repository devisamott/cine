import { useState } from "react";
import './schedule.css'
export function Schedules () {
    const [day, setDay] = useState(null)

    const schedules = {
        lunes: [
          "11:20 AM",
          "11:40 AM",
          "12:20 PM",
          "1:20 PM",
          "8:00 PM",
          "11:30 PM",
        ],
        martes: [
          "12:20 PM",
          "1:20 PM",
          "3:20 PM",
          "5:50 PM",
          "8:00 PM",
          "11:30 PM",
        ],
        miercoles: [
          "10:20 AM",
          "10:40 AM",
          "11:20 AM",
          "3:40 PM",
          "5:50 PM",
          "8:00 PM",
          "11:30 PM",
        ],
        jueves: [
          "10:20 AM",
          "1:20 PM",
          "1:40 PM",
          "3:20 PM",
          "8:00 PM",
          "11:30 PM",
        ],
        viernes: [
          "10:40 AM",
          "11:40 AM",
          "12:20 PM",
          "1:40 PM",
          "3:20 PM",
          "5:50 PM",
          "8:00 PM",
          "11:30 PM",
        ],
        sabado: [
          "3:20 PM",
          "3:40 PM",
          "5:50 PM",
          "8:00 PM",
          "11:30 PM"
        ],
        domingo: [
          "10:20 AM",
          "10:40 AM",
          "11:20 AM",
          "11:40 AM",
          "12:20 PM",
          "1:40 PM",
          "3:20 PM",
          "3:40 PM",
          "5:50 PM",
          "8:00 PM",
        ],
      };
      
      return(
        <div className="content-sidebar">
            <ul className="sidebar">
                {Object.keys(schedules).map((dayOfWeek) => (
                    <li
                        key={dayOfWeek}
                        onClick={() => setDay(dayOfWeek)}
                    >
                        {dayOfWeek}
                    </li>
                ))}
            </ul>
            {day && ( 
                <div className="contect-schedule">
                    <ul className="schedule">
                        {schedules[day].map((time, index) => (
                            <li
                                key={index}
                            >
                                {time}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
      )
}