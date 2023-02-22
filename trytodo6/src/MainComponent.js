import React, { createContext, useEffect, useState } from 'react';
import PropTypes from "prop-types";
import {getToDB} from "./PouchDB";


export const MainComponentVar = createContext();

console.log("task", MainComponentVar);


export const MainComponent = ({children}) => {
    const [list,setlist] = useState([]);

    const getTofun = async()=>{
        const data = await getToDB();
        setlist(data?.rows);
    };

    const value = React.useMemo(
        ()=>({getTofun,list}),
        [list]
    );

    useEffect(()=>{
        getTofun();
    },[]);

    console.log("render globsl info", value);


  return (
    <MainComponentVar.Provider value={value}>{children}</MainComponentVar.Provider>
  );
  
};

MainComponent.propTypes = {
    children:PropTypes.objectOf(PropTypes.node).isRequired,
};

