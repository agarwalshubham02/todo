import {Link, NavLink} from 'react-router-dom';

export default function Homepage({onLogin, onReg}){
    return (
        <>
            <h1 className='text-center font-sans text-2xl m-10'>TO-DO List</h1>
            <div className='text-center'>
                <button className='rounded-full text-center bg-orange-300 py-3 px-7 m-2' onClick={onLogin}><Link to="/login">Login</Link></button>
                <button className='rounded-full bg-orange-300 py-3 px-8 m-2' onClick={onReg}><Link to="/register">Registration</Link></button>
            </div>
        </>
        
    )
}