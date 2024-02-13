
function Message(props) {

  let number = props.number
  let text = props.text

  let repeatedText = text.repeat(number)

  return (
    <div>
      <p>{repeatedText}</p>
      {props.children}

    </div>
  )
}

export default Message