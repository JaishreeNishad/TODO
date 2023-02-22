
import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [item, setitem]  = useState([]);

  const Event = (event) => {
    setInput (event.target.value);
  };


  const itemList = () =>{
    setitem ((oldItems) => {
    
     let i = document.getElementById("number")
     
     if(i% 2 !=== 0)
     {
      return[ input,...oldItems];
    }
    else{
      setInput("");
     }
    });
    setInput("");
  
      
     
  // const itemList = () =>{
  //   setitem ((oldItems) => {
      
  //     return[ input,...oldItems];
  //   });
  //   setInput("");
    
  };
  const deleteitem = (id) => {
    const newTodo = () => {
      return item.filter((arrele, index) =>{
        return index !==id
      })
    }
    setitem(newTodo);
  
    // setitem((oldItems) => {
    //   return oldItems.filter((arrele, index)=>{
    //     return index !==id;
    //   })

    // })
  }
   console.log(item);
    
    
    
   

return (
    <div>
      <div id="number">
        <h1>ToDo List</h1>
        
        <input
          type="text"
          placeholder="add a items"
          value={input}
          onChange={Event}
        />
        <button onClick={itemList} >+</button>
        
        <div>
        
          {item.map((itemval,index ) => {
            return <div key={index} id={index} onSelect={deleteitem}>{itemval}
            <button  onClick={ () => deleteitem (index) }>DELETE</button>
            </div>
          }
          )}
          </div>
      </div>
    </div>
  );
};

export default App;
