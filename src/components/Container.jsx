// componente que unicamente da estilos dinamicos a otros componentes o JSX

function Container(props) {

  const containerStyles = {
    color: "red",
    backgroundColor: "darkred",
    textDecoration: "underline",
    padding: "10px",
    margin: "10px",
    borderRadius: "10px"
  }

  return (
    <div style={containerStyles}>
      
      {props.children}

    </div>
  )
}

export default Container