import React from "react";
import './SubmitStage.css'

export default function SubmitStage() {
    function handleClick() {
        
    }

    return (
        <div className='submit-container'>
            <h1> סיימת לשמור מתכון חדש! 🍽 </h1>
            <div className='div-line'><p> המתכון החדש שלך אוטוטו בערימת המתכונים שלך!</p>
            <button onClick={handleClick}> לשמור </button></div>
        </div>
    )
};

