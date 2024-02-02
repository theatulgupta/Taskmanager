import { Alert } from "bootstrap";
import Item from "./Item"
const FoodComponents = ({items}) => {
    return(
        <ul className="list-group">
          {items.map((item) => (
          <Item key={item} foodItem={item} handleBuyButtonClick={()=>alert(`${item} Khauga Maja ayega`)}></Item>
          ))}
        </ul>
    );
}
export default FoodComponents;