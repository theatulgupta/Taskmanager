import "bootstrap/dist/css/bootstrap.min.css"
import ErrorComponents from "./components/ErrorComponents";
import FoodComponents from "./components/FoodComponents";
import Container from "./components/Container";
import "./App.css"
import FoodInput from "./components/FoodInput"
import { useState } from "react";
function App() {
  let [textState, settextState] = useState(""); 
  const onKeyDown =() =>{
    if(event.key === "Enter"){
      let newFoodItem = event.target.value;
      let newFood =[...foodItem, newFoodItem];
      setfoodItem(newFood);
    }
  }
  
  let [foodItem, setfoodItem] = useState([]);
  
  return (
<Container>
  <h1 className="food-item" >Food Items</h1>
  <FoodInput handleKeyDown={onKeyDown}></FoodInput>
  <p>{textState}</p>
  <ErrorComponents items={foodItem}></ErrorComponents>
  <FoodComponents items={foodItem}></FoodComponents>
</Container>
  );
}

export default App
