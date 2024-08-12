import React, { useContext } from 'react';
import { AuthContext } from '../components/firebaseProvider/FirebaseProvider';

const SocialLogin = () => {

    const {googleLogin, githubLogin} = useContext(AuthContext)

    return (
        <div className='flex gap-3'>
            <button onClick={()=> googleLogin()} className='btn btn-accent'>Google</button>
            <button onClick={()=>githubLogin()} className='btn btn-primary'>Github</button>
            <button className='btn btn-secondary'>Facebook</button>
            <button className='btn btn-success'>Twieter</button>
        </div>
    );
};

export default SocialLogin;

// part-3 10:58min conceptual session