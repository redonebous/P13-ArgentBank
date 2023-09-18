import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, getUser } from '../../actions/user.action';
import { useNavigate } from 'react-router-dom';

export default function SignInForm() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const form = useRef()
    const user = useSelector((state) => state.userReducer)

    const handleForm = async (e) => {
        e.preventDefault();

        const postData = {
            email: form.current[0].value,
            password: form.current[1].value
        }

        dispatch(loginUser(postData));
        form.current.reset();
    }

    useEffect(() => {
        if (user.token) {
            dispatch(getUser(user.token))
            navigate('/user');
        }
    }, [user.token])


    return (
        <form ref={form} onSubmit={(e) => handleForm(e)}>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="sign-in-button">Sign In</button>
        </form>
    )
}
