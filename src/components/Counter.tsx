import React, { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="counter">
      <h2>Counter Page</h2>
      <p>Current count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}
