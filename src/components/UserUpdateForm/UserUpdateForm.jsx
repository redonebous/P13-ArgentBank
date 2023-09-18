import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../actions/user.action'
import styles from './UserUpdateForm.module.css'

export default function UserUpdateForm({ setUpdate }) {

    const updateForm = useRef()
    const user = useSelector((state) => state.userReducer)
    const dispatch = useDispatch()

    const handleUpdateForm = async (e) => {
        e.preventDefault()

        let firstname
        let lastname

        updateForm.current[0].value != '' ? firstname = updateForm.current[0].value : firstname = user.firstName
        updateForm.current[1].value != '' ? lastname = updateForm.current[1].value : lastname = user.lastName

        const postData = {
            firstName: firstname,
            lastName: lastname
        }

        dispatch(updateUser(user.token, postData))
        setUpdate(false)
    }

    return (
        <form ref={updateForm} className={styles.updateForm} id='updateForm' onSubmit={(e) => handleUpdateForm(e)}>
            <div>
                <input type="text" id="firstname" placeholder={user.firstName} />
                <input type="text" id="lastname" placeholder={user.lastName} />
            </div>
            <div>
                <button type='submit' form='updateForm'>Save</button>
                <button onClick={() => setUpdate(false)}>Cancel</button>
            </div>
        </form>
    )
}
