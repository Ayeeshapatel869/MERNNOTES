import React, { useState } from 'react'

const Hook = () => {
    // let count=0;
    let[count,setCount]=useState(0);
    function increaseCount(){
        setCount(count+1)
        console.log("count",count)
    }
  return (
    <div>
        <h1>Counter:{count}</h1>
        <button onClick={increaseCount}> Increase</button>
    </div>
  )
}

export default Hook