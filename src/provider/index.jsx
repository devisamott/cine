import { createContext } from "react";

const DataContext = createContext();

function  Provider ({ children }) {

    return(
        <DataContext.Provider 
            value={{

            }}  
        >
            { children }
        </DataContext.Provider>      
    )
}

export { Provider, DataContext}