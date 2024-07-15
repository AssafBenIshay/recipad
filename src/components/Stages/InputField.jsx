import './InputField.css'
import React from 'react'

export default function InputField({setValI}) {
    return (
        <input type='text' placeholder='כאן' className='search' onChange={(e)=>setValI(e.target.value)}/>
    )
}
