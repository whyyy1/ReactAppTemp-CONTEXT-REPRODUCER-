import React from 'react'
import { useAuthContext } from '../../Authorize/AuthContext'
import { useNavigate,useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

function Login() {
    const navigate = useNavigate()
    const params = useParams()
    
    const { state, dispatch } = useAuthContext()
    let user = {
        firstName: 'him',
        lastName: 'himmy',
        email: 'this@that.com',
        units: [{ this: 'that thing' }, 1, 'cant'],
        id:uuidv4(),
    }
    params.user = user.id
    let userAtt = '/' + params.user


    return (
        <div>Login
            <button onClick={() => {
                console.log(dispatch({ type: 'GET_USER', payload: state }))
                dispatch({ type: 'LOGIN', payload: user })
                navigate(userAtt)
                console.log(dispatch({ type: 'GET_USER', payload: state }))
            }}>Click me</button>
        </div>
    )
}

export default Login