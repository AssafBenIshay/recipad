import './InputDigit.css'
import React from 'react'

export default function InputField({ setHours, setMinutes, placeholder ,setValD}) {
    
    return (
        <input type='text' placeholder={placeholder} className='digit' onChange={(e) => {
            if (placeholder === 'שעות') {
                setHours(e.target.value)
            } if (placeholder === 'דקות') {
                setMinutes(e.target.value)
            } if (placeholder === 'מנות') {
                setValD(e.target.value)
            }
      
        }
        }/>
    )
}
