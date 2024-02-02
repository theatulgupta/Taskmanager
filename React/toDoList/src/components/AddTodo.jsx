import { useState } from "react";
import { MdAssignmentAdd } from "react-icons/md";

function AddTodo({handleItems}){
    const [todoName, settoDoName]=useState();
    const [dueDate, setdueDate]=useState();

    const handlename=(event)=>{
        settoDoName(event.target.value);
    }
    const handledate=(event)=>{
        setdueDate(event.target.value);
    }
    const handleAddButtonClicked =()=>{
        handleItems(todoName,dueDate);
        settoDoName("");
        setdueDate("");

    }

    return (
      <div className="container">
         <div className="row row-ap">
            <div className="col-6">
             <input type="text" placeholder="Enter Todo List" value={todoName} onChange={handlename} ></input>
            </div>
            <div className="col-4">
             <input type="date" value={dueDate} onChange={handledate}></input>
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