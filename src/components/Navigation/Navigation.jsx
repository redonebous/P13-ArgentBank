import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../img/argentBankLogo.png';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/user.action';

export default function Navigation() {

    const user = useSelector((state) => state.userReducer)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const login = <Link className="main-nav-item" to="/signin"><i className="fa fa-user-circle"></i>Sign In</Link>
    const logout = <span className='main-nav-item' onClick={(e) => handleLougout()}><i className="fa fa-user-circle"></i>Sign Out</span>

    const handleLougout = (e) => {
        dispatch(logoutUser())
        navigate('/')
    }


    return (
        <nav className="main-nav">
            <Link className="main-nav-logo" to="/">
                <img
                    className="main-nav-logo-image"
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            <div>
                {user.token ? logout : login}
            </div>
        </nav>
    )
}
