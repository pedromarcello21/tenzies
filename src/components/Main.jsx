import React from 'react'

const Main = () =>{

    const initialDiceArray = []
    for(let i =0;i<10;i++){
        const randomNum = Math.floor(Math.random()*6) +1
        initialDiceArray.push(randomNum)
    }

    const [floorDie, setFloorDie] = React.useState(initialDiceArray);
    const [heldDie, setHeldDie] = React.useState([]);
    const[rolls, setRolls] = React.useState(0);


    const generateRandomDice = () =>{
        const diceArray = [];
        for(let i=0; i<10; i++){
            if(heldDie.includes(i)){
                diceArray.push(floorDie[i])
            } else{
                diceArray.push(Math.floor(Math.random()* 6)+1)
            }
        }
        return diceArray
    }

    const initializeGame = () =>{
        setRolls(0);
        setHeldDie([]);
        setFloorDie(initialDiceArray)
    };

    const replay = () =>{
        initializeGame()
    };

    const clickDice = (index) =>{
        if(heldDie.includes(index)){
            setHeldDie(heldDie.filter((i)=>i!==index))
        } else{
        setHeldDie(prevHeldDie=>[...prevHeldDie, index])
        } 
    }

    const roll = () => {
        setFloorDie(generateRandomDice());
        setRolls(prevRolls=> prevRolls+1)
    };

    const dice = floorDie.map((die, index) => {
        return(<button 
                    key = {index}
                    className = {heldDie.includes(index)? 'selected--die':'floor--die'}
                    onClick = {()=>clickDice(index)}
                    >{die}
                </button>
                )
    })

    const areAllEqual = (arr) => {
        return arr.every((val) => val === arr[0])
    };


    return(
        <div className = 'card'>
            <h1>Tenzies</h1>
            <h2>Roll until all dice are the same.  Click each die to freeze it at its current value between rolls</h2>
            <div className='container'>
                {dice}
            </div>
            {heldDie.length !== 10 ?
                <button className="rollButton" onClick={roll}>Roll!</button> : 
                areAllEqual(floorDie) ? 
                <button className="resetButton" onClick={replay}>{`You Won in ${rolls} rolls! :) Click Here to Replay`}</button> :
                <button className="resetButton" onClick={replay}>You Lost :/ Click Here to Replay</button>}
        </div>
    )
}

export default Main