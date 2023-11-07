import { UseTheme } from "../context/DemoContext";


function Button() {

  const { toggleTheme } = UseTheme()

  return <button onClick={toggleTheme}>Changer le thème</button>
}

export default Button;