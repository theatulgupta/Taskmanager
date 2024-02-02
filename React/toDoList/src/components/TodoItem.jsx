import { RiDeleteBin5Fill } from "react-icons/ri";

function TodoItem({todoName,todoDate,onClickDelete}){
 
    return (
        <div className="container">
           <div className="row row-ap">
            <div className="col-6">{todoName}</div>
            <div className="col-4">{todoDate}</div>
            <div className="col-2 ">
            <button type="button" className="btn btn-danger ap-button" onClick={()=>onClickDelete(todoName)}><RiDeleteBin5Fill /></button>
            </div>
         </div>
        </div>
    );
}
export default TodoItem;