import React from 'react'

const Die = (props) =>{
    return(
        <button 
            key = {index}
            className = {heldDie.includes(index)? 'selected--die':'floor--die'}
            onClick = {()=>clickDice(index)}
            >{props.value}
        </button>
    )
}