import React from 'react'
import Navigation from '../components/Navigation/Navigation'
import Footer from '../components/Footer/Footer'
import SignInForm from '../components/SignInForm/SignInForm'

export default function SignIn() {
    return (
        <>
            <main className='main bg-dark sign-in'>
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>

                    <SignInForm />

                </section>
            </main>
        </>
    )
}
