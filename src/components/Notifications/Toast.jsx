import React from 'react';
import './Toast.css'

export default function Toast({ announce }) {

    
    React.useEffect(() => {
        let child = document.querySelector('.toast-frame')
        let x = 0
        const fade = setInterval(doFade, 100)
        
        function doFade() {
            x +=1
            if (x === 40) {
                clearInterval(fade)
            } else {
                if (x > 15) {
                    child.style.opacity = (1 - (x / 40))
                    child.x = 200
                }
            }
        }

        setTimeout(() => {
            if (child) {
                try {
                    let parent = child.parentElement
                    parent.removeChild(child)
 
                } catch (err) {
                    if (!child) { alert('אופס, קרתה תקלה : ', err) }
                    
                }
            }
        }, 4000);
        
    },[])


    return (
        <>
            <div className={`toast-frame ${announce.includes('תקלה')? 'bad' : 'good'}`}>
                <p>{announce}</p>
            </div>
        </>
    )
}

