import './InputTextArea.css'
import React from 'react'


export default function InputField({ setValI }) {
    let btn = document.getElementById('next')

    return (
        <textarea rows={500} 
            className='text-area'
            onChange={(e) => {
            setValI(e.currentTarget.value)
            btn.removeAttribute('disabled')

            }}>
            
        </textarea>
        //<input type='text' placeholder='כאן' className='text-area' />
    )
}
