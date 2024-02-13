
function FoodCard(props) {

  // console.log(props.name)
  return (
    <div>
      <h4>{props.name}</h4>
      <img src={props.image} alt={props.name} width="200px" />
    </div>
  );
}

export default FoodCard;


