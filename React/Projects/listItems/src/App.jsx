import AddTodo from "./components/AddTodo";
import Items from "./components/Items";
import Container from "./components/Container";
import "./App.css";
import { useState } from "react";
import ErrorComponent from "./components/ErrorComponent";
function App() {
  const initialtoDoList = [{
    name: "Chole Bhature",
    dueDate: "04/10/2023",
  },
  {
    name: "Masala Dosa",
    dueDate: "04/10/2023",
  },
  {
    name: "Hakka Noodles",
    dueDate: "04/10/2023",
  },
  {
    name: "Paneer Momos",
    dueDate: "04/10/2023",
  },
  ];

  let [toDoList, settoDOList] = useState(initialtoDoList);

  const handleItems = (itemName, itemdueDate) =>{
    console.log(`name is ${itemName} and date is ${itemdueDate}`);
    const newTodoItem =[...toDoList,{ name: itemName, dueDate: itemdueDate}];
    settoDOList(newTodoItem);
  };

  const handleDeleteItem = (toDoItemName)=>{
    const newTodoItem = toDoList.filter((item)=>item.name !== toDoItemName);
    settoDOList(newTodoItem);
    console.log(`Item Deleeted is:${toDoItemName}`);
  }
  return (
  <Container>
    <h1>Todo List</h1>
    <AddTodo handleItems={handleItems}/>
    <Items toDoList={toDoList} onClickDelete={handleDeleteItem}></Items>
    <ErrorComponent items={toDoList} ></ErrorComponent>
  </Container>

  );
}

export default App;
