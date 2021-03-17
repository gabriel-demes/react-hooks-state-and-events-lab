import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);

  // this data will be passed down to the ShoppingList as a prop
  console.log(items);
  const [isLight, setisLight] = useState(true)
  const handleClick = () => {
    setisLight(light => (light = !isLight))
  }
  return (
    <div className={"App " + (isLight ? "light" : "dark")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{isLight ? "light" : "dark"} Mode</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
