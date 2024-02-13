import React from "react";

function List() {
  let someObj = { name: "bob" }; // no se pueden renderizar objetos en react. Solo propiedades primitivas de el objeto.

  let someData = ["josep", "meri", "adri", "fran", "pablo", "abraham", "josep"];
  // como convierte el array de arriba, al array de abajo => .map()

  // let someDataJSX = someData.map((eachName) => {
  //   return <li>{eachName}</li>;
  // })
  // console.log(someDataJSX) // un array de JSX igual que al de abajo

  // let someDataJSX = [<li>josep</li>, <li>meri</li>, <li>adri</li>, <li>fran</li>, <li>pablo</li>, <li>abraham</li>]

  return (
    <div>
      <h1>Listas</h1>

        <div style={{backgroundColor: "darkred"}}>
          {someData.map((eachName, index) => {
            return (
              <p key={index}>
                <span className="star">⭐ </span>
                <span style={{fontWeight: "bold"}}>{eachName}</span>
              </p>
            )
          })}
        </div>
      

    </div>
  );
}

export default List;

// atajos para crear componentes
// rfce o rfc
