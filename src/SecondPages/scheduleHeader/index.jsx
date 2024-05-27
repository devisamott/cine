import { useContext } from "react";
import './schedule.css'
import { DataContext } from "../../provider";

export function Schedules() {
    const { handleDayChange, handleTimeChange, day, hour } = useContext(DataContext);
    
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
    
    const handleDayClick = (dayOfWeek) => {
      handleDayChange(dayOfWeek);
    }
    
    const handleTimeClick = (time) => {
      handleTimeChange(time);
    }

    return (
        <div className="content-sidebar">
            <ul className="sidebar">
                {Object.keys(schedules).map((dayOfWeek) => (
                    <li
                        key={dayOfWeek}
                        onClick={() => handleDayClick(dayOfWeek)}
                        className={day === dayOfWeek ? 'selected' : ''}
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
                                onClick={() => handleTimeClick(time)}
                                className={hour === time ? 'selected' : ''}
                            >
                                {time}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
