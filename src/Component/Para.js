import React, { useState } from "react";
import data from "./data.js";
import AllPara from "./Allpara.js";

export default function Para(props) {
  const [count, setCount] = useState(0);
  // console.log(props.filter);
  const ChangeCount = (e) => {
    setCount(e.target.value);
    // console.log(count);
  };
  const handleGenerateClick = () => {
    
    if(count>9){
      alert('It is too long')
      setCount(8)
    }
    
    
    // console.log(count);
    props.dataset(count);
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-[#C1630B]">
        TIRED OF BORING LOREM IPSUM?
      </h1>
      <div className="flex gap-3 p-3">
        <p className="text-2xl font-semibold">Paragraphs:</p>
        <input
          className="w-14"
          value={count}
          type="number"
          min={1}
           max={8}
          onChange={ChangeCount}
        />
        <button onClick={handleGenerateClick}>Generate</button>
      </div>
    </>
  );
}