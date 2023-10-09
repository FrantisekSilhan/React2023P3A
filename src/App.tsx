import './App.css'
import {useState} from "react"
import Greetings from "./components/Greetings"
import Container from "./components/Container"
import Counter from "./components/Counter"

const App = () => {
  const [a, setA] = useState<number>(0);
  const [b, setB] = useState<number>(0);

  return (
    <>
      <Container number="2" text="t">AAAA<span>BBBB</span></Container>
      <Greetings text="Nazdar" />
      <Greetings text="hello" />
      <Counter value={a} setValue={setA} />
      <Counter />
    </>
  )
}

export default App
