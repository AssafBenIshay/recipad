import './InputTextArea.css'
import React from 'react'


export default function InputField({ setValI, setIsVal }) {
    return (
        <textarea rows={500} 
            className='text-area'
            onChange={(e) => {
                setValI(e.currentTarget.value)
                setIsVal(true)
            }}>
            
        </textarea>
        //<input type='text' placeholder='כאן' className='text-area' />
    )
}
