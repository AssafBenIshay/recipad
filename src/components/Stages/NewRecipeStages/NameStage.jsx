import React from 'react';
import InputField from '../InputField';
import './NameStage.css'

export default function NameStage({ setStage }) {
    const [val,setVal] = React.useState("") //val is set inside the input component

    function handleClick() {
        let h4s = Array.from(document.getElementsByTagName('h4'))

        if (!val) {
            //if now value typed 
        
            h4s.map((element) => {
                element.style.color = '#af2211'
            });
        }
        else {
            h4s.map((element) => {
                element.style.color = '#fff'
            });
        }
   }


    return (
        <div className='name-container'>
            <h2 className='name-title'>שלב ראשון : </h2>
            <h4 className=''>בבקשה הכניסי את שם המתכון</h4>
            <InputField setVal={ setVal} />
            <h4 className=''>לחצי כאן לאחר שבחרת שם בשביל</h4>
            <button onClick={handleClick}>לעבור לשלב הבא</button>
        </div>
    )
}