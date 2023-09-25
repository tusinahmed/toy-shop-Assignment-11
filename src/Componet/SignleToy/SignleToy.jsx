import React from 'react';
import { Link } from 'react-router-dom';

const SignleToy = ({ toy }) => {
    let { Picture, Name, Price, Rating, _id } = toy

    return (
        <div>

            <div className=''>

                <div className="card text-white card-compact w-96 bg-gray-600 shadow-xl">
                    <figure><img src={Picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{Name}</h2>
                        <h1 className='text-xl'>Price:  {Price} </h1>

                        <div className="card-actions justify-between mt-4">
                            <div className='flex align-middle'>    <h1 className='text-xl text-white'> Ratting: {Rating}</h1> </div>

                            <div>
                                <Link to={`/alltoy/${_id}`}>   <button className="btn btn-primary"> View More Info</button> </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default SignleToy;