import React from 'react';
import Navbar from '../Navbar';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from '../card/Card';
import { useContext } from 'react';
import { AuthContext } from '../firebaseProvider/FirebaseProvider';

const CardDetails = () => {
    const cardDetails = useLoaderData();
    console.log(cardDetails)

    const {id} = useParams();
    // console.log(id)
    
    return (
        <div>
            <Navbar></Navbar>
            <h3>hello</h3>
            
            
        </div>
    );
};

export default CardDetails;