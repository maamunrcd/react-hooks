import React, { useEffect, useRef } from 'react'

export default function UseRefDemo2() {
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current?.focus();
    }, [])

    return (
        <div>
            <input ref={inputRef} type="text" placeholder='Type something...' />
        </div>
    )
}
