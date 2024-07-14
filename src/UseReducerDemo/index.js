import React, { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case "increment": {
            const newCount = state.count + 1;
            const hasError = newCount > 5;
            return { ...state, count: hasError ? state.count : newCount, error: hasError ? "Maximum reached" : null }
        }
        case "decrement": {
            const newCount = state.count - 1;
            const hasError = newCount < 0;
            return { ...state, count: hasError ? state.count : newCount, error: hasError ? "Minimum reached" : null }
        }
        default:
            return state;
    }
}
export default function UseReducerDemo() {
    const [state, dispatch] = useReducer(reducer, { count: 0, error: null });
    return (
        <div>
            Count: {state.count}
            {state.error && <div style={{ color: "red" }}>{state.error}</div>}
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Increment</button>
        </div>
    )
}
