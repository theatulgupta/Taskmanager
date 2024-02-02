import TodoItem from "./TodoItem";
const Items =({toDoList, onClickDelete}) =>{
    return(
        <div className="item-container">
            {toDoList.map((item)=>(<TodoItem key={item.name} todoName={item.name} todoDate={item.dueDate} onClickDelete={onClickDelete}></TodoItem>
            ))}
        </div>
    );
};
export default Items;