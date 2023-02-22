import React, { useState } from 'react'

const Form = () => {

    const [activity, setactivity] = useState("");
    const [listdata, setlistdata] = useState([]);

    const Addactivity = ()=> {
        setlistdata((listdata)=>{
            return (...listdata, activity)
        })

}
  return (
    
    <>
        <h1>ToDo List</h1>
        <input type="text" placeholder="add activity" value={activity} onChange={(e) => setactivity(e.target.value)}
        />
        <button className='font-bold ' onClick={Addactivity}>+</button>
        
    
    </>
  )
}

export default Form;