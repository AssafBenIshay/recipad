import React from 'react'
import './InputLinkField.css'

export default function InputLinkField() {
    return (
        <textarea
            rows={2}
            type='text'
            id='link'
            placeholder='לחצי כאן CTRL+V או לחיצה ארוכה אם את בנייד, על מנת להדביק את הקישור שהעתקת '
            className='link-input'
            
        />
    )
}