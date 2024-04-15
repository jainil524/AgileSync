import React, { useState } from 'react'
import { CloseRounded } from '@mui/icons-material'

import "./css/Popup.css"

function Popup({ children, closePopup , popupSize}) {

    const [isOpen, setIsOpen] = useState(false)

    /**
     * 
     * @param {Event} e 
     */
    function hidePopup(e) {
        e.preventDefault();
        e.stopPropagation();

        if ((e.target.closest(".popup") != null || e.target.closest(".popup") != undefined)) return;

        setIsOpen(false);
        closePopup(false);
    }

    return (
        <div
            className={isOpen ? "popup-wrapper popup-open" : "popup-wrapper"}
            onClick={
                hidePopup
            }
        >
            <div className='popup' style={popupSize != null ? {"--Width": popupSize[0],"--Height": popupSize[1]} : {}} >
                <div className="popup-header">
                    <span><CloseRounded htmlColor='black' onClick={hidePopup} size={18} /></span>
                </div>
                <div className="popup-body">
                    {children}
                </div>
            </div>
        </div> 
    )
}

export default Popup
