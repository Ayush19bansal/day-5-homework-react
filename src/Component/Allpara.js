import React, { useState } from 'react'
// import data from './data.js'
import Card from './Cards'

export default function AllPara(props) {
  // const [data,setdata] =useState([]);
  // setdata(props.data)
  // // console.log(props.data);

  return (
    <div className='flex flex-col items-center gap-3 p-10'>
      {props.data.map((item, index) => (
         <Card key={index} data={item} />
      ))}
    </div>
  )
}