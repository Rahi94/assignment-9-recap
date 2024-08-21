import React from 'react';
import Navbar from '../Navbar';
import { useParams } from 'react-router-dom';
import Card from '../card/Card';

const CardDetails = () => {
    const {id} = useParams();
    const {price} = Card;
    return (
        <div>
            <Navbar></Navbar>
            <p>{price}</p>
            
        </div>
    );
};

export default CardDetails;