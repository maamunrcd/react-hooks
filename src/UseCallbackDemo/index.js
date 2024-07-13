import { useCallback, useState } from 'react'
import Search from './Search';
import { shuffle } from '../utils';

const allUsers = [
    "john",
    "alex",
    "george",
    "simon",
    "james"
]

export default function UseCallbackDemo() {
    const [count, setCount] = useState(0);
    const [users, setUsers] = useState(allUsers);
    const handleSearch = useCallback((text) => {
        const filteredUsers = allUsers.filter((user) => {
            return user.includes(text);
        })
        setUsers(filteredUsers);
    }, []);
    return (
        <div>
            <button onClick={() => setUsers(shuffle(allUsers))}>
                Shuffle
            </button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <Search count={count} onChange={handleSearch}></Search>
            <ul>
                {users.map((user) =>
                    <li key={user}>{user}</li>
                )}
            </ul>
        </div>
    )
}
