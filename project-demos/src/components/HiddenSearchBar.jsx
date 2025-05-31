import { useState } from "react"


const HiddenSearchBar = () => {
    const [showInput, setShowInput] = useState(false)
    const [bgColor, setBgColor] = useState('white')

    const handleClick = (e) => {
        setBgColor('#1a1a1a');

        if(e.target.className === 'container') {
            setShowInput(false)
            setBgColor('white')
        }
    }

    return (
        <section className="container" style={{backgroundColor: bgColor}} onClick={handleClick}>
            {showInput 
                ? ( <input type="text" placeholder="search..." /> ) 
                : ( <button onClick={() => setShowInput(true)}>Show</button> )
            }
        </section>
    )
}

export default HiddenSearchBar