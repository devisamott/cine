import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export function Provider({ children }) {
    const [isScheduleSelected, setIsScheduleSelected] = useState(false);
    const [day, setDay] = useState(null);
    const [hour, setHour] = useState(null);
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedHour, setSelectedHour] = useState(null);
    const [chairsReservations, setChairsReservations] = useState({});
    const [chairSelecting, setChairSelecting] = useState([]);
    const [confirmedChairs, setConfirmedChairs] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleScheduleSelection = (day, hour) => {
        setIsScheduleSelected(true);
        setSelectedDay(day);
        setSelectedHour(hour);
    };

    function markChairAsBussy(chairsReservation, day, hour, id) {
        let reservations = { ...chairsReservation };
        reservations[day] = reservations[day] || {};
        reservations[day][hour] = reservations[day][hour] || {};
        reservations[day][hour][id] = id;
        return reservations;
    }


    const handleChairClick = (id) => {
        if (!isScheduleSelected) return;

        let reservationsCopy = { ...chairsReservations };

        if (reservationsCopy?.[selectedDay]?.[selectedHour]?.[id]) {
            delete reservationsCopy[selectedDay][selectedHour][id];
        } else {
            reservationsCopy = markChairAsBussy(reservationsCopy, selectedDay, selectedHour, id);
        }

        setChairsReservations(reservationsCopy);
        setChairSelecting(Object.keys(reservationsCopy[selectedDay][selectedHour] || {}));
    };

    const handleDayChange = (newDay) => {
        setDay(newDay);
        setHour(null); 
        setIsScheduleSelected(false); 
    };

    useEffect(() => {
        if (chairsReservations && chairsReservations[day] && chairsReservations[day][hour]) {
            setChairSelecting(Object.keys(chairsReservations[day][hour]));
        } else {
            setChairSelecting([]);
        }
    }, [day, hour, chairsReservations]);

    const handleConfirm = () => {
        setConfirmedChairs((prevState) => [...prevState, ...chairSelecting]);
        setChairSelecting([]);
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false); 
    };

    const handleTimeChange = (newTime) => {
        setHour(newTime);
        handleScheduleSelection(day, newTime);
        setChairSelecting([]);
    };

    const clean = () => {
        const newReservation = { ...chairsReservations };
        delete newReservation[day][hour];
        
        setChairSelecting([]);
        setChairsReservations(newReservation);
    };

    return (
        <DataContext.Provider
            value={{
                setHour,
                handleScheduleSelection,
                handleChairClick,
                handleDayChange,
                handleTimeChange,
                isScheduleSelected,
                selectedDay,
                selectedHour,
                chairsReservations,
                day,
                setDay,
                hour,
                handleConfirm,
                chairSelecting,
                confirmedChairs,
                isModalVisible,
                closeModal,
                clean
            }}
        >
            {children}
        </DataContext.Provider>
    );
}
