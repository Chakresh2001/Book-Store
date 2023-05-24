import Fiction from "./components/Fiction";
import NonFiction from "./components/NonFiction";
import { useState } from "react";
import fiction from "./fiction.json"
import nonfiction from "./nonfiction.json"


function App() {

  let [isFiction, setFiction] = useState(true)
  let [data, setData] = useState(nonfiction)


  let handelToggle = ()=>{
    setFiction(!isFiction)
    setData(isFiction ? nonfiction : fiction)
  }

  return (
    <div>
      <h1>Mini Book Store</h1>

      <button data-testid="toggle-btn" onClick={handelToggle}>{
        isFiction ? "Show Non-Fiction Books" : "Show Fictional Books"
      }</button>

      <div data-testid="conditional-container">

        
        {
          isFiction? (
            <Fiction books={fiction}/>
          ) : (
            <NonFiction books={nonfiction}/>
          )
        }


      </div>
    </div>
  );
}

export default App;
