import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import UserUpdateForm from '../UserUpdateForm/UserUpdateForm'

export default function UserHeader() {

    const user = useSelector((state) => state.userReducer)
    const [update, setUpdate] = useState(false)

    if (update) {
        return (
            <>
                <div className="header">
                    <h1>Welcome back</h1>
                    <UserUpdateForm setUpdate={setUpdate} />
                </div>
                <h2 className="sr-only">Accounts</h2>
            </>
        )
    }

    return (
        <>
            <div className="header">
                <h1>Welcome back<br />{user?.firstName && user?.lastName ? user.firstName + ' ' + user.lastName : 'Tony Jarvis'} !</h1>
                <button className="edit-button" onClick={(e) => setUpdate(true)}>Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
        </>
    )
}
