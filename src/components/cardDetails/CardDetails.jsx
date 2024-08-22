import React from 'react';
import Navbar from '../Navbar';
import { useParams } from 'react-router-dom';
import Card from '../card/Card';
import { useContext } from 'react';
import { AuthContext } from '../firebaseProvider/FirebaseProvider';

const CardDetails = () => {
    

    const {id} = useParams();
    console.log(id)
    
    return (
        <div>
            <Navbar></Navbar>
            <h3>hello</h3>
            
            
        </div>
    );
};

export default CardDetails;