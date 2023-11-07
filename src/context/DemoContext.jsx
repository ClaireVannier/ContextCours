import { createContext, useContext } from "react";
import { useState } from "react";

const DemoContext = createContext();


function DemoContextProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    }
    else {
      setTheme("light");
    }
  }

  return (
    <DemoContext.Provider value={{ theme, toggleTheme }}>

      <div className={theme}>
        {children}
      </div>

    </DemoContext.Provider>

  )

}

export default DemoContextProvider;

export const UseTheme = () => useContext(DemoContext);