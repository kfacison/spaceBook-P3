import { useState } from 'react';
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({setUser}){
    const [authState, setAuthState ] = useState([true]);
    return (
        <main>
        <h1>AuthPage</h1>
        <button onClick={() => setAuthState(!authState)}>{authState ? "Login" : "SignUp"}</button>
        {authState && 
        <>
        <h2>SignUp</h2>
        <SignUpForm setUser={setUser}/>
        </>
        }
        { !authState &&
        <>
        <h2>Login</h2>
        <LoginForm setUser={setUser}/>
        </>
        }
        </main>
    );
}