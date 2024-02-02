import { useRef } from "react";
import { MdAssignmentAdd } from "react-icons/md";

function AddTodo({handleItems}){
    const toDoElement = useRef();
    const dateElement = useRef();
    const handleAddButtonClicked =()=>{
        const todoName = toDoElement.current.value;
        const dueDate = dateElement.current.value;
        handleItems(todoName,dueDate);

    }

    return (
      <div className="container">
         <div className="row row-ap">
            <div className="col-6">
             <input type="text" placeholder="Enter Todo List" ref={toDoElement}></input>
            </div>
            <div className="col-4">
             <input type="date"ref={dateElement}></input>
            </div>
            <div className="col-2">
            <button type="button" className="btn btn-success ap-button" 
            onClick={handleAddButtonClicked}><MdAssignmentAdd />
            </button>
            </div>
         </div>
        </div>
    );
}

export default AddTodo;