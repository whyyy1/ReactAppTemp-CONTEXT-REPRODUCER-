import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuthContext } from '../Authorize/AuthContext';

function AppNavBar({ userId }) { // Receive userId as a prop
    const { state, dispatch } = useAuthContext();
    console.log(userId)
    return (
        <nav>
            <ul>
                <li>
                    <Link to={`/home/${userId}`}>Home</Link>
                </li>
                <li>
                    <Link to={`/profile/${userId}`}>Profile</Link>
                </li>
                <li>
                    <Link to={`/activity/${userId}`}>Activity</Link>
                </li>
                <li>
                    <Link to="/loading" onClick={() => dispatch({ type: 'LOGOUT', payload: state })}>
                        Sign Out
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default AppNavBar;
