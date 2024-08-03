import './Stage0Complete.css'
import React from 'react'

export default function Stage0Complete({ stage }) {
    
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

    return (
        <div className='container-stage0-complete'>
            <h1> 🎉התחלת מתכון חדש ! 🎊 </h1>
            <p> זכרי, ככל שתמלאי יותר פרטים, יהיה יותר קל בעתיד לנהל את המתכונים שלך.</p>
            <h2> בישול נעים! </h2>
        </div>
    )
    
};
