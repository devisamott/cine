import { createContext, useState } from "react";

export const DataContext = createContext();

export function  Provider ({ children }) {
    const [isScheduleSelected, setIsScheduleSelected] = useState(false);
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedHour, setSelectedHour] = useState(null);

    const handleScheduleSelection = (day, hour) => {
        setIsScheduleSelected(true)
        setSelectedDay(day)
        setSelectedHour(hour) 
    }

    return(
        <DataContext.Provider 
            value={{
                handleScheduleSelection,
                isScheduleSelected,
                selectedDay,
                selectedHour,
            }}  
        >
            { children }
        </DataContext.Provider>       
    )
}

