import ensaladaImg from "../assets/images/ensalada.jpg"
import bandejaPaisaImg from "../assets/images/bandeja-paisa.jpg"
import heladoImg from "../assets/images/helado.jpg"
import FoodCard from "./FoodCard"

function FoodMenu() {

  let dateToday = new Date()
  console.log(dateToday)

  return (
    <div>
      
      <h2>Menu de hoy</h2>
      {/* <p>fecha: {dateToday.getDate()} / {dateToday.getMonth()} / {dateToday.getFullYear()}</p> */}
      <p>fecha: {dateToday.toDateString()}</p>

      {/* <div>
        <h4>ensalada</h4>
        <img src={ensaladaImg} alt="ensalada" width="200px"/>
      </div>

      <div>
        <h4>bandeja paisa</h4>
        <img src={bandejaPaisaImg} alt="bandeja paisa" width="200px"/>
      </div>

      <div>
        <h4>helado</h4>
        <img src={heladoImg} alt="helado" width="200px"/>
      </div> */}

      <FoodCard 
        name={"ensalada"} 
        image={ensaladaImg}
      />
      <FoodCard 
        name={"bandeja paisa"} 
        image={bandejaPaisaImg}
      />
      <FoodCard 
        name={"helado"} 
        image={heladoImg}
      />

    </div>
  )
}

export default FoodMenu