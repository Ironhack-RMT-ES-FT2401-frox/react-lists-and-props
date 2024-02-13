import React from 'react'

function TurtlesList() {

  const favTurtle = "donatello"

  const ninjaTurtles = [
    {
      name: "leonardo",
      color: "blue", 
      weapon: "katana",
    },
    {
      name: "raphael",
      color: "red",
      weapon: "sai",
    },
    {
      name: "donatello",
      color: "purple",
      weapon: "bo",
    },
    {
      name: "michelangelo",
      color: "orange",
      weapon: "nunchaku",
    },
    {
      name: "splinter",
      color: "gray",
      weapon: "cane",
    }
  ]

  return (
    <div>
      
        <h2>Lista de Tortugas</h2>

        <div>

            {ninjaTurtles.map((eachCharacterObj, index) => {

              let charStyles = {
                backgroundColor: eachCharacterObj.color,
              }

              // let emoji;
              // if (eachCharacterObj.name === "splinter") {
              //   emoji = "🐀"
              // } else {
              //   emoji = "🐢"
              // }

              return (
                <div key={index} style={charStyles} className='char-card'>
                  <h4>name: {eachCharacterObj.name}</h4>
                  <p>weapon: {eachCharacterObj.weapon}</p>
                  <span className='emoji'>{eachCharacterObj.name === "splinter" ? "🐀" : "🐢"}</span>
                  <span className='emoji'>{eachCharacterObj.name === favTurtle ? "⭐" : null }</span>
                  {/* <span className='emoji'>{eachCharacterObj.name === favTurtle && "⭐" }</span> */}
                </div>
              )
            })}

        </div>

    </div>
  )
}

export default TurtlesList