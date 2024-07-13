import React from 'react'
import { useUserContext } from '../UseContextDemo/context';

export default function Profile() {
    const user = useUserContext();
    return (
        <div>{user.name}</div>
    )
}
