import './InputDigit.css'
import React from 'react'

export default function InputField({ setHours, setMinutes, placeholder }) {
    
    return (
        <input type='text' placeholder={placeholder} className='digit' onChange={(e) => {
            if (placeholder === 'שעות') {
                setHours(e.target.value)
            } else if (placeholder === 'דקות') {
                setMinutes(e.target.value)
            } 
            
        }
        }/>
    )
}
