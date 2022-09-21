import React, {useEffect, useState} from 'react';
import {getCurrentUser} from '../../utils/user.utils';

function User() {
    const [user, setUser] = useState(null);
    useEffect(() => {    
        const id = localStorage.getItem('userId');
        getCurrentUser(id).then((user) => {
            setUser(user);
        })
    },[])
    console.log(user);
    return (
        <div className='vh-100 d-flex align-items-center justify-content-center'>
            welcome back {user ? user.username : ''}
        </div>
    )
}

export default User;