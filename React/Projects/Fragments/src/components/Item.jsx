import styles from "./Item.module.css"
const Item = ({foodItem, handleBuyButtonClick}) => {
     return <li className="list-group-item">
       <span className={styles["ap-spam"]}>{foodItem}</span>
       <button className={`${styles.button} btn btn-info`} 
       onClick={handleBuyButtonClick}>BUY</button>
    </li>;
} 

export default Item;