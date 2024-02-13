import './App.css'
import Container from './components/Container'
import FoodMenu from './components/FoodMenu'

import List from './components/List'
import Message from './components/Message'
import TurtlesList from './components/TurtlesList'

import ReactPlayer from 'react-player'

import Draggable from 'react-draggable'

function App() {

  return (
    <div>

      {/* <List /> */}

      {/* <TurtlesList /> */}

      {/* <Container>
        <FoodMenu />
      </Container>

      


      <Container>
        <h2>patata</h2>
      </Container>


      <Container>
        <p>javascript</p>
      </Container>

      <Container>

        <Message number={3} text={"patata"}>
          <p>javascript con react!</p>
        </Message>

      </Container> */}

      <ReactPlayer url='https://youtu.be/dQw4w9WgXcQ' controls={true}/>

      <Draggable>
        <h1>patata</h1>
      </Draggable>


    </div>
  )
}

export default App
