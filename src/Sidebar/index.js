import React from 'react'
import { useUserContext } from '../UseContextDemo/context';

export default function Sidebar() {
    const user = useUserContext();
    return (
        <>
            <div>{user.name}</div>
            <div>Subscription Status: {user.isSubscribed.toString()}</div>
        </>
    )
}
