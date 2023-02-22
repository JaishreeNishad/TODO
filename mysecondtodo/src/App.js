import React, { useState } from "react";
import { getToDB, inserttoDB } from "./Pouchdb";
import ToDoLists from "./ToDoLists";

const App = () =>{

  const  [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  // useEffect(()=> {
  //   getToDBFun();
  
  // // },[items]);

  async function getToDBFun() {
    const data = await getToDB();
    setItems(data.rows);
    console.log("getToDBFun");
  }
  

  const itemEvent  = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = async(event) =>{
    event.preventDefault();
    const newTodo = {
      task : inputList,
      isDone : false,
    };
    const responseID = await inserttoDB(newTodo);
    newTodo.id = responseID.id;
    setInputList("");
    getToDBFun()

    // setItems((oldItems) => {
    //       return[...oldItems,inputList];
    // });
    // setInputList("");

  };
  const deleteItems = (id) => {
    console.log("deleted");

    setItems(( oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index  !== id;
      })
    })
};

return<>
<div >
<div className="bg-blue-500 text-center px-30 py-40 ">
  <h1 className="text-2xl font-bold">ToDo List</h1>
  <br></br>
  <input type="text"  px-4 py-4 placeholder="Add a Items" value={inputList} onChange={itemEvent}/>
  <button onClick={listOfItems} className='bg-green-800 px-1 py-1 ml-2 rounded font-bold'>+</button>
  <ol className='mt-5'>
    {items.map((itemval, index)=> {
      return<ToDoLists key={index} id= {index}  text={itemval} onSelect = {deleteItems}/>
    })}

  </ol>

</div>
</div>
</>;


}




export  default App;