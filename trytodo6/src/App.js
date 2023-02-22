import React from 'react';
import ParentCom from './ParentCom';
import Children from './Children';

const App = () => 
   (
    <div className="flex items-center flex-col">
      <ParentCom/>
      <Children/>
    </div>
  );


export default App;