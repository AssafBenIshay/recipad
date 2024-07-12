import React from 'react';
import InputField from '../../InputField';
import './NameStage.css'
import NameStageComplete from './NameStageComplete/NameStageComplete';

export default function NameStage({ stage,setStage ,name,setName}) {
    const [valI,setValI] = React.useState("") //val is set inside the input component

    function handleClick() {
        let h4s = Array.from(document.getElementsByTagName('h4'))

        if (!valI) {
            //if no value typed 
        
            h4s.map((element) => {
                element.style.color = '#af2211'
            });
        }
        else {
            h4s.map((element) => {
                element.style.color = '#fff'
            });
            setName(valI)
            setStage(2)

        }
    }
    
    console.log('stage :>> ', stage);

    return (
        <>
            {stage ===1 ?<div className='name-container'>
                <h2 className='name-title'>שלב ראשון : </h2>
                <h4 className=''>בבקשה הכניסי את שם המתכון</h4>
                <InputField setValI={setValI} />
                <h4 className=''>לחצי כאן לאחר שבחרת שם בשביל</h4>
                <button onClick={handleClick}>לעבור לשלב הבא</button>
            </div>:<NameStageComplete name={name} />}
            
        </>
    )
}