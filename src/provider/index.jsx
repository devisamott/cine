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
        setChairSelecting([])
    };

    function markChairAsBussy(chairsReservation, day, hour, id) {
        let reservations = { ...chairsReservation };
        reservations[day] = reservations[day] || {};
        reservations[day][hour] = reservations[day][hour] || {};
        reservations[day][hour][id] = id;
        return reservations;
    }

    const handleChairClick = (id) => {
        let newChairSelecting = [...chairSelecting];
        let reservationsCopy = { ...chairsReservations };

        if (reservationsCopy?.[selectedDay]?.[selectedHour]?.[id]) {
            delete reservationsCopy[selectedDay][selectedHour][id];
            newChairSelecting = newChairSelecting.filter(chairId => chairId !== id);
        } else {
            reservationsCopy = markChairAsBussy(reservationsCopy, selectedDay, selectedHour, id);
            newChairSelecting.push(id);
        }

        setChairsReservations(reservationsCopy);
        setChairSelecting(newChairSelecting);
    };

    const handleDayChange = (newDay) => {
        setDay(newDay);
        setHour(null);
        setIsScheduleSelected(false);
        setChairSelecting([]);
    };

    useEffect(() => {
        if (chairsReservations[day] && chairsReservations[day][hour]) {
            Object.keys(chairsReservations[day][hour]);
        } else {
            setChairSelecting([]);
        }

    }, []);

    const handleConfirm = () => {
        setConfirmedChairs(prevConfirmedChairs => [
            ...prevConfirmedChairs, 
            ...chairSelecting.map(id => ({
                id,
                day: selectedDay,
                hour: selectedHour
            }))
        ]);

        const newReservations = { ...chairsReservations };
        chairSelecting.forEach(id => {
            newReservations[selectedDay][selectedHour][id] = id;
        });

        setChairsReservations(newReservations);
        setChairSelecting([]);
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    const handleTimeChange = (newTime) => {
        setHour(newTime);
        handleScheduleSelection(day, newTime);
        setChairSelecting([]);  // Limpiar selección de sillas
    };

    const clean = () => {
        const newReservation = { ...chairsReservations };
        if (newReservation[day] && newReservation[day][hour]) {
            delete newReservation[day][hour];
        }

        setChairSelecting([]);
        setChairsReservations(newReservation);

        const newConfirmedChairs = confirmedChairs.filter(chair => 
            !(chair.day === day && chair.hour === hour));
        setConfirmedChairs(newConfirmedChairs);
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
                clean,
                setConfirmedChairs
            }}
        >
            {children}
        </DataContext.Provider>
    );
}
