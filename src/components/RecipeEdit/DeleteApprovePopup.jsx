import React from 'react'
import './DeleteApprovePopup.css'

export default function DeleteApprovePopup({ recipeName, setAnswer ,setDeleteClicked}) {
    
    function closePopup(){
        ()=>setAnswer(false)
        setDeleteClicked(false)
    }
    
    return (
        <div className='popup'>
            <h2 >האם את בטוחה שאת רוצה למחוק את המתכון {recipeName}?</h2>
            <div className='buttons'>
                <button onClick={()=>setAnswer(true)}>כן</button>
                <button onClick={closePopup}>לא</button>
            </div>
        </div>
    )
};
