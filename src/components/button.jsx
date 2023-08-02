import "./styles/Button.css"
import React from "react"

const Button = ({handleChangeQuote}) => {
  return (
          
            <button onClick={handleChangeQuote} className='button'><i class='bx bx-refresh'></i></button>
        
    
  )
}
export default Button