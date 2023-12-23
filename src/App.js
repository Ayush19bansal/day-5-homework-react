import React, { useState } from 'react';
import Para from './Component/Para';
import AllPara from './Component/Allpara';
import data from './Component/data'

function App() {
  const [fillter, setfillter] = useState([]);

  const Arrr = (arg) => {
    console.log(arg);
    const arr = [];
    console.log(arg);

    data.forEach((ele, index) => {
      
      if (arr.length < arg) {
        arr.push(ele);
      }
    });

    setfillter(arr);
    // console.log(arr);

    // Log the updated state using the callback
    // setfillter((prevFillter) => {
    //   console.log(prevFillter);
    //   return prevFillter;
    // });
  };

  return (
    <div className="bg-[#FFE6D6] min-h-screen flex flex-col items-center p-8">
      <Para dataset={Arrr} />
      <AllPara data={fillter} />
    </div>
  );
}

export default App;