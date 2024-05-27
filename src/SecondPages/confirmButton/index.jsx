import { useContext } from "react";
import { DataContext } from "../../provider";
import "./confirmButton.css";
import { Modal } from "../confirmModal";

export function ConfirmButton() {
    const { handleConfirm, isModalVisible, closeModal } = useContext(DataContext);

    return (
        <div>
            <button 
                className="boton_confirmacion" 
                onClick={handleConfirm}
            >
                Confirmar reserva
            </button>
            <Modal isVisible={isModalVisible} onClose={closeModal}/>
        </div>
    );
}
