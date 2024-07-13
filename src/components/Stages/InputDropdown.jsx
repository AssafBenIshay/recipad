import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import './InputDropdown.css'

export default function InputDropdown({ setValC, categories}) {
    let options = categories
    const defaultOption = options[0]

    function handleChange(e) { //set value from en existing drpdown values
        setValC( e.value)
    }
    return (
        <Dropdown
            className='search'
            options={options}
            onChange={handleChange}
            value={defaultOption} 
            placeholder={"select an optioon"}
            />
        // <input type='' placeholder='כאן' className='search' onChange={(e)=>setVal(e.target.value)}/>
    )
}
