import React, { useState } from 'react';

const App = () => {

  const [input, setInput] = useState("");
  const [item, setItem] = useState([]);


const Event =(event) => {
  setInput(event.target.value);
};

const itemlist =() =>{
  setItem ((olditem)=>{
    return [...olditem, input];
  });
  setInput('');
};

const deleteitem = (id) => {
  const newTodo = () => {
    return item.filter((arrele, index)=>{
      return index !==id
    })
  }
  setItem(newTodo);
}
console.log(item);

  return (

    <div>
      <h1>ToDo List</h1>
      <input type='text' placeholder='add a items' value={input} onChange={Event}/>
      <button onClick={itemlist}>+</button>
      <>
      {
        item.map((itemval,index)=>{
          return <div key={index} id={index} onSelect={deleteitem}>{itemval}
          <button onClick={ ()=> deleteitem(index)}>DELETE</button>
          </div>

          
        })
      }
      </>

    </div>
    
  )
}
export default App;