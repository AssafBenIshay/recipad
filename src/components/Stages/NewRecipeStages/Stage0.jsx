import whitePlus from '../../../assets/whitePlus.png'
import './Stage0.css'


export default function Stage0({ setStage }) {
    return (
        <div className='container'>
        <h2 className=''>עריכת מתכון חדש</h2>
        <p className=''>בשביל לשמור מתכון חדש יש לבצע כמה שלבים, חלקם לא הכרחיים ונתונים לשיקול דעתך.</p>
        <p className=''>תהליך עריכת המתכון הינו בעצם הכנסת נתונים שלב אחר שלב , והתהליך הינו קל ומהיר. ואם משהו יתפקשש , תמיד ניתן לערוך או למחוק ולהתחיל מחדש.</p>
        <button className='btn' onClick={() => setStage(1)}>
            לחצי בשביל להתחיל
            <img src={ whitePlus } alt='start new recipe'/>
        </button>
    </div>

    )
}