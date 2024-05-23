import { createContext, useState } from "react";

export const DataContext = createContext();

export function  Provider ({ children }) {
    const [isScheduleSelected, setIsScheduleSelected] = useState(false);

    const handleScheduleSelection = () => {
        setIsScheduleSelected(true)
    }
    return(
        <DataContext.Provider 
            value={{
                handleScheduleSelection,
                isScheduleSelected
            }}  
        >
            { children }
        </DataContext.Provider>      
    )
}

