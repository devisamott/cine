import { useContext } from 'react'
import './cleanButton.css'
import { DataContext } from '../../provider'

export function  CleanButton () {
    const {clean} = useContext(DataContext); 
    return (
        <div>
            <button 
                className='boton_clean'
                onClick={clean}
            >
                Limpiar sala
            </button>
        </div>
    )
}