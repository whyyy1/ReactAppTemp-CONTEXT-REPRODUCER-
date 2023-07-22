import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
function AuthNavBar() {
    

    return (
        <nav>
            <ul>
                <li>
                <Link to='/loading/'>Home</Link>
                </li>
                <li>
                    <Link to="/login/">Login</Link>
                </li>
                <li>
                <Link to="/register/">Sign Up</Link>
            </li>
        </ul>
        </nav >
    )
}

export default AuthNavBar