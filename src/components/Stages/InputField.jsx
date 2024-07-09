import React from 'react'
import './InputField.css'

export default function InputField({setVal}) {
    return (
        <input type='text' placeholder='כאן' className='search' onChange={(e)=>setVal(e.target.value)}/>
    )
}
