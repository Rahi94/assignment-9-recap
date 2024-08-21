import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
    const { location, image, segment_name, estate_title, price, description, status, id } = data;
    return (
        <div className=''>
            <div className=" bg-base-100 w-96 shadow-xl mt-4">
                <figure className="px-4 pt-10">
                    <img
                        src={image}
                        alt=""
                        className="rounded-xl w-full h-48" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {segment_name} </h2>
                    <h3>Type: {status}</h3>
                    <p>Price: {price}</p>
                    <p>Location: {location}</p>
                    <div className="card-actions mt-3 text-center items-center justify-center">
                        <button className="btn btn-primary"> 
                            <Link to={`/cardDetails/${id}`}> More Details</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;