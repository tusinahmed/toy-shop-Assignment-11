import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Toyinfo = () => {
    let toysinfo = useLoaderData();
    console.log(toysinfo)
    return (
        <div>
            <div>

                <h1 className='text-center text-4xl text-white mt-10'> Toy Info</h1>

            </div>


            <div className=' flex flex-col justify-center items-center mt-10 '>
                <div>
                    <img className='w-96' src={toysinfo.Picture} />
                </div>

                <div>
                    <h1 className='text-white text-3xl mt-10'>{toysinfo.Name}</h1>
                </div>

                <div className='w-96  mt-5'>
                    <h1> {toysinfo?.details?.Description ? toysinfo.details.Description : <> <p> Introducing the Off-Road Adventure Cruiser, a rugged and versatile toy car for adventurers aged 5 and up. Its striking green color and robust ABS plastic construction make it ready for off-road action. With dimensions of 7 x 4 x 3 inches, it's built for thrilling outdoor escapades. The recommended age ensures safe play. Get ready for epic adventures with this incredible toy car, available at Adventure Toys Inc., located at 789 Playtime Avenue in Funland. Contact us at sales@adventuretoys.com for more details.</p> </>
                    }</h1>
                </div>


            </div>




        </div>
    );
};

export default Toyinfo;