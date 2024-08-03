import './LinkStage.css'
import React from 'react'
import LinkStageComplete from './LinkStageComplete/LinkStageComplete'
import InputLinkField from '../../inputComponents/InputLinkField'

export default function LinkStage({stage,setStage,rLink,setRLink}) {
    const [linkI, setLinkI] = React.useState('')
    const [btn, setBtn] = React.useState(<button id='next' disabled>סיום</button>)
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

    
    function pasteLink() {
        let tAreaEl = document.getElementById('link')
        navigator.clipboard.readText()
            .then((link) => {
                if (link) {
                    setRLink(link)
                    tAreaEl.innerText = link
                    setBtn(<button id='next' onClick={()=>setStage(9)}>סיום</button>)
                } else {
                    alert('נראה שלא שמרת קישור בשביל המתכון, אנא נסי שוב')
                    setBtn(<button id='next' disabled>סיום</button>)
                }
            })
    }

    return (
        <>
            {stage === 8 ? <div className='link-container'>
                <div className='link-container-top-section'>
                    <h2 className='name-title'>שלב אחרון 🤩: </h2><div>
                    <h4 className=''> העתיקי את שורת הקישור בדף המתכון שאת רוצה לשמור.</h4>
                    <h4> שימי לב שסימנת את כל שורת הקישור.</h4></div>
                    <button onClick={pasteLink}>לחצי כאן כדי להדביק את הקישור שהעתקת</button>
                </div>
                <div className='link-container-bottom-section'>
                    <InputLinkField/>
                    {btn}
                </div>
            </div> : <LinkStageComplete rLink={rLink} />}
        </>
    )
}