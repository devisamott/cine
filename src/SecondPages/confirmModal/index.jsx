import './modal.css';

export const Modal = ({ isVisible, onClose }) => {
    if (!isVisible) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className='modal'>
            <h2>Reserva Confirmada</h2>
                <p className='mocal-content'>Tu reserva ha sido confirmada con éxito.</p>
                <button onClick={onClose} className='modal-close'>Cerrar</button>
            </div>
        </div>
    );
};


