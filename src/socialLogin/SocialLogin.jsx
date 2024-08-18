import React, { useContext } from 'react';
import { AuthContext } from '../components/firebaseProvider/FirebaseProvider';

const SocialLogin = () => {

    const {googleLogin, githubLogin, twitterLogin, facebookLogin} = useContext(AuthContext)

    return (
        <div className='flex gap-3'>
            <button onClick={()=> googleLogin()} className='btn btn-accent'>Google</button>
            <button onClick={()=>githubLogin()} className='btn btn-primary'>Github</button>
            <button onClick={()=>facebookLogin()} className='btn btn-secondary'>Facebook</button>
            <button onClick={()=> twitterLogin()} className='btn btn-success'>Twitter</button>
        </div>
    );
};

export default SocialLogin;

// part-4 19:40min conceptual session for private route