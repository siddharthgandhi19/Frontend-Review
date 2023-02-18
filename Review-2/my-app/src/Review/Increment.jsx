import React, {useState} from 'react'

function Increment() {
    const initialCount=0
    const [count, setcount] =useState(initialCount)
    console.log(count)
  return (
    <div>
        Count:{count}
      <button onClick={() => setcount(count + 1)} >IncrementNum</button>
      <button onClick={() => setcount(count - 1)} >DecrementNum</button>
    </div>
  )
}
export default Increment