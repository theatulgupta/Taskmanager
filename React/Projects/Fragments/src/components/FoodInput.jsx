import styles from "./FoodInput.module.css"

const FoodInput = ({handleKeyDown}) =>{
    return(
        <input type="text" placeholder="Enter Food Item" className={styles.food}
        onKeyDown={handleKeyDown}
        />
    );
}
export default FoodInput;