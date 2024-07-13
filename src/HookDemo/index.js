import React, { useState, useEffect } from 'react'

export default function HookDemo() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // The code that we want to run
        console.log("Log Count:", count);
        return () => {
            console.log("I am being cleaned up");
        };
    }, [count]) // The dependency array

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </>

    )
}
