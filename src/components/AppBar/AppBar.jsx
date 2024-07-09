import './AppBar.css'
import blackHeart from '../../assets/heartOutlineBlack.png'
import whiteHeart from '../../assets/heartOutline.png'
import favHeart from '../../assets/heart.png'
import whitePlus from '../../assets/whitePlus.png'
import blackPlus from '../../assets/blackPlus.png'
import magnifyingBlack from '../../assets/magnifyingBlack.png'
import magnifyingWhite from '../../assets/magnifyingWhite.png'


export default function AppBar() {
    return (
        <div className='app-bar'>
           
            <div className='action'>
                <img src={whitePlus} alt='heart' />
                <input type='text' className='search'></input>
                <img src={magnifyingWhite} alt='search'></img>
            </div>
            <div className='title'>
                <h1>המתכונים שלי</h1>
                <img src={whiteHeart} alt='heart' />
            </div>
        </div>
    )
}