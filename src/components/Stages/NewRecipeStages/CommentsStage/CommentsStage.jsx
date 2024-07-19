import React from 'react';
import './CommentsStage.css'
import InputTextArea from '../../inputComponents/InputTextArea'
import CommentsStageComplete from './CommentsStageComplete/CommentsStageComplete'

export default function CommentsStage({ stage, setStage, comments, setComments }) {
    const [valI, setValI] = React.useState('')
    const [btn, setBtn] = React.useState('')
    const [isVal,setIsVal] = React.useState(false)

    React.useEffect(() => {
        setComments(valI)
        if (isVal) {
            setBtn(<button id='next' onClick={handleClick} >לעבור לשלב הבא</button>)

        } else {
            setBtn(<button id='next' onClick={handleClick} disabled>לעבור לשלב הבא</button>)
        }
    },[valI])
    
    function handleClick() {
        let textArea = document.querySelector('.text-area')
        if (valI.length>0) {
            setComments(valI)
            setStage(7)
        }
        else {
            textArea.setAttribute('placeholder', 'לא נשמר טקסט , אנא סמני את הטקסט הרצוי על ידי גרירת הסמן על הטקסט ולאחר מכן לחצי CRTL+C או אם את בנייד לחצי לחיצה ארוכה על המסך\n על מנת להעתיק את הטקסט הרצוי')
        }
        
        
    }

    function pasteText() {
        let textArea = document.querySelector('.text-area')

        let txt = navigator.clipboard.readText()
            .then((description) => {
                if (description) {
                    textArea.innerHTML = description
                    setValI(description)
                } else {
                    textArea.setAttribute('placeholder', 'לא נשמר טקסט , אנא סמני את הטקסט הרצוי על ידי גרירת הסמן על הטקסט ולאחר מכן לחצי CRTL+C או אם את בנייד לחצי לחיצה ארוכה על המסך\n על מנת להעתיק את הטקסט הרצוי')
                }
            })
    }
    
    return (
        <>
            {stage === 6 ? <div className='comments-container'>
                <div className='comments-container-top-section'>
                    <h2 className='name-title'>שלב שישי : </h2>
                    <h4 className=''> בבקשה הכניסי הערות עבור המתכון ,אם אין זה גם בסדר.</h4>
                    <h4> שימי לב שניתן גם להעתיק ולהדביק את פירוט הרכיבים והוראות ההכנה מהאתר שבו נמצא המתכון.</h4>
                    <button onClick={pasteText}>לחצי כאן כדי להדביק טקסט</button>
                </div>
                <div className='comments-container-bottom-section'>
                    <InputTextArea setValI={setValI} setIsVal={setIsVal}/>
                    {btn}
                </div>
            </div> : <CommentsStageComplete comments={comments} />}
        </>
    )
}