import React from 'react'
import './TypeStage.css'
import InputField from '../../inputComponents/InputField'
import TypeStageComplete from '../TypeStage/TypeStageComplete/TypeStageComplete'

export default function TypeStage({stage,setStage,type,setType}) {
    const [valI, setValI] = React.useState('')
        
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
            setType(valI)
            setStage(4)

        }
    }

    
    return (
        <>
            {stage === 3 ? <div className='type-container'>
                <h2 className='name-title'>שלב שלישי : </h2>
                <h4 className=''> (בשרי, חלבי, כשר וכדומה)בבקשה הכניסי את סוג המתכון</h4>
                <InputField setValI={setValI} />
                <h4 className=''>לחצי כאן לאחר שבחרת סוג בשביל</h4>
                <button onClick={handleClick}>לעבור לשלב הבא</button>
            </div> : <TypeStageComplete type={ type} />}</>
    )
}
