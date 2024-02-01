import { auth, providor } from '../firebase'
import { signInWithPopup } from 'firebase/auth';
import React, {useState} from 'react';

export default function Login() {
    const [authInfo, setAuthInfo] = useState('')

    const handleClick = () => {
        signInWithPopup(auth, providor).then((data) => {
            setAuthInfo(data.user.email)
            localStorage.setItem("email", data.user.email)
            console.log(data)
        }).then(() => {
            // window.location.href = '/success';
        })
    }
    return (
        <>
        <div style={{ color: 'pink'}}>
            {authInfo ? `Signed in as  ${authInfo}` : ''}
        </div>
        <button onClick={() => handleClick()}>Sign In With Google</button>
        </>
    )
}
