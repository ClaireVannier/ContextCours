import DemoContextProvider from './context/DemoContext'
import Button from './components/Button'
import "./App.css"

function App() {

  return (
    <>
      <DemoContextProvider>
        <h1>Jolie transition</h1>
        <Button />
      </DemoContextProvider>
    </>
  )
}

export default App
