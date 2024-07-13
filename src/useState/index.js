import React, { useState } from 'react'

export default function StateDemo() {
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </>

    )
}
