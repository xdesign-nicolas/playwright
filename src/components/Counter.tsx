import React, { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="counter" data-testid="counter">
      <h2>Counter Page</h2>
      <p data-testid="count-display">Current count: {count}</p>
      <button data-testid="increment-button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button data-testid="decrement-button" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  )
}
