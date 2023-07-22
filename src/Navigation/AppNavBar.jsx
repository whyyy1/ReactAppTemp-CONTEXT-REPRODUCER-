import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useAuthContext } from '../Authorize/AuthContext'

function AppNavBar() {
    const params = useParams()
    
    const { state, dispatch } = useAuthContext()
    params.user = state.user.id
    console.log(state.user)
    return (
        <nav>
            <ul>
                <li>
                    <Link to={"app/"+params.user}>Home</Link>
                </li>
                <li>
                    <Link to={'/profile/' + params.user}>Profile</Link>
                </li>
                <li>
                    <Link to={'/search/' + params.user}>Search</Link>
            </li>
            <li>
                    <Link to={'/'} onClick={()=>
                    {dispatch({type:'LOGOUT',payload:state})}}>Sign Out</Link>
            </li>
        </ul>
        </nav >
    )
}

export default AppNavBar