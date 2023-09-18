import React from 'react'
import UserHeader from '../components/UserHeader/UserHeader'
import UserAccount from '../components/UserAccount/UserAccount'
import { useSelector } from 'react-redux'

export default function User() {

    const user = useSelector((state) => state.userReducer)

    if (!user.token) {
        return (
            <>
                <div>You need a connection to access...</div>
            </>
        )
    }

    return (
        <>

            <main className='main bg-dark'>
                <UserHeader />
                <UserAccount />
            </main>

        </>
    )
}
