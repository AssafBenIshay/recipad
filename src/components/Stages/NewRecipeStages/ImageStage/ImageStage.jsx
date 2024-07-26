import React from 'react';
import './ImageStage.css'
import ImageStageComplete from './ImageStageComplete/ImageStageComplete';

export default function ImageStage({ stage, setStage, image, setImage }) {
    const [imageOpacity, setImageOpacity] = React.useState(document.getElementById('image-dest'))
    const [btn, setBtn] = React.useState('')

    React.useEffect(() => {
        setBtn(<button id='next2stage8' disabled>לעבור לשלב הבא</button>)
        setImageOpacity(document.getElementById('image-dest').style.opacity = '0.05')
    },[])


    function pasteImageLink() {
        navigator.clipboard.readText()
            .then(
                
                (clipText) => {
                    if (clipText.includes('jpg') || clipText.includes('jpeg') || 
                        clipText.includes('png') || clipText.includes('webp')) {
                            setImage(clipText)
                            setImageOpacity(document.getElementById('image-dest').style.opacity = '1')
                            setBtn(<button id='next2stage8' onClick={()=>setStage(8)}>לעבור לשלב הבא</button>)
                            navigator.clipboard.writeText('')
                        }
                    else {
                        //~ לעשות בשלב מאוחר יותר חלון קופץ עבור טעויות, כדאי בסיגנון toast
                        const alertMsg ='הקישור שהעתקת להדבקה אינו מכיל תמונה,    לדוגמה: https://www.onceuponachef.com/images/2024/04/shakshuka-760x584.jpg.    זכרי, עלייך ללחוץ כפתור ימני בעכבר ואז לבחור באופציה Copy image address'
                        setImageOpacity(document.getElementById('image-dest').style.opacity = '0.05')
                        alert(alertMsg)
                    }
                    
                }
        )
        
    }

    return (
        <>
            {stage === 7 ? <div className='image-container'>
                <div className='image-container-top-section'>
                    <div>
                    <h2 className='name-title'>  שלב שבע : (כמעט מסיימים)</h2>
                    <h4 className=''> בבקשה הכניסי תמונה עבור המנה ,התמונה חשובה.</h4>
                    <h4> שימי לב שניתן להעתיק ולהדביק את התמונה על ידי לחיצה על כפתור ימני בעכבר כאשר הוא על התמונה הרצויה,
                        ואז יש לבחור באפשרות copy image ולאחר מכן להדביקה פה.</h4></div>
                    <div><button onClick={pasteImageLink}>לחצי כאן כדי להדביק תמונה</button></div>
                </div>
                <div className='image-container-bottom-section'>
                    <div className='img-container'>
                        <img src={image} alt='your selected image' id='image-dest' />
                    </div>
                    {/* <InputTextArea setValI={setValI}/> */}
                    <div>{btn}</div>
                </div>
            </div> : <ImageStageComplete image={image} />}
        </>
    )
}