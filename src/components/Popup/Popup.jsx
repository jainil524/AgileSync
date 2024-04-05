import { CloseRounded } from '@mui/icons-material'
import React from 'react'

/**
 * 
 * @param {Event} e 
 */
function closePopup(e,setIsOpen){
    e.preventDefault();
    e.stopPropagation();

    setIsOpen(false);
}

function Popup({children}) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div 
            className={isOpen ? "popup-wrapper popup-open":"popup-wrapper"}
            onClick={
                closePopup.bind(setIsOpen)
            }
        >
            <div className='popup'>
                <div className="popup-header">
                    <span><CloseRounded onClick={closePopup} size={18}/></span>
                </div>
                {children}
            </div>
        </div>
    )
}

export default Popup
