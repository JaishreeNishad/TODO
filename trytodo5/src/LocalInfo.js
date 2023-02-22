import React, { createContext, useEffect, useState } from "react";
import { getToDB } from './PouchDB';
import PropTypes from "prop-types";


export const LocalInfoVar = createContext();

 export const LocalInfo = ({children}) =>{
    const[itemsList,setItemslist]=useState([]);

    const getToDBFun= async ()=>{
      const data = await getToDB();
      setItemslist(data?.rows);
    }
    const value = React.useMemo(()=>({getToDBFun,itemsList}),
    [itemsList.length]
    );
    useEffect(()=>{
      getToDBFun();
    }, []);
  
     
    console.log('render ',value);
  
  return (
    <LocalInfoVar.Provider value={value}>{children}</LocalInfoVar.Provider>
  );
 };

 LocalInfo.propTypes = {
  children: PropTypes.objectOf(PropTypes.node).isRequired,
 };





