import React, { useState, useMemo } from 'react'
import { initialItems } from '../utils';

export default function UseMemoDemo() {
    const [count, setCount] = useState(0);
    const [items] = useState(initialItems);

    const selectedItem = useMemo(() => items.find((item) => item.id === count), [items, count]);

    return (
        <div>
            <h1>{count}</h1>
            <h2>Selected Item: {selectedItem?.id}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}
