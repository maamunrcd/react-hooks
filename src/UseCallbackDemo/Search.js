import { memo } from 'react'

function Search({ count, onChange }) {
    console.log("Search rendered");
    return (
        <>
            <h1>{count}</h1>
            <input type='text' placeholder='Search users....' onChange={(e) => onChange(e.target.value)} />
        </>
    )
}

export default memo(Search);
