import React, { useContext } from 'react';
import './AddToys.css'
import { AuthContext } from '../../AuthProvider/AuthProvider';

const AddToys = () => {

    let { user } = useContext(AuthContext)


    let handelAddToys = (e) => {
        e.preventDefault()

        let form = e.target;
        let Name = form.name.value;
        let Price = form.price.value;
        let Rating = form.rating.value;
        let Picture = form.photo.value;
        let Category = form.category.value;
        let description = form.description.value;
        let unit = form.unit.value;
        let seller = form.seller.value;
        let email = user.email;
        console.log(email)
        let newtoys = { Name, Price, Rating, Picture, Category, unit, email, description, seller }
        console.log(newtoys)

        fetch('http://localhost:3000/alltoys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(newtoys)
        })
            .then(res => res.json())
            .then(data => {
                alert('add new toy')
                console.log(data)
            })

    }
    return (
        <div>
            <div className='mt-20'>
                <h1 className='text-center text-3xl text-white'> Add New Toy </h1>
            </div>

            <div >
                <form onSubmit={handelAddToys} className='input-all grid grid-cols-3 gap-3'>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text"> Name </span>
                        </label>
                        <input type="text" name='name' placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">price</span>
                        </label>
                        <input type="number" placeholder="price" name='price' className="input input-bordered w-full max-w-xs" />
                    </div>



                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">rating</span>
                        </label>
                        <input type="text" placeholder="Type here" name='rating' className="input input-bordered w-full max-w-xs" />
                    </div>



                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">photo url</span>
                        </label>
                        <input type="text" placeholder="Type here" name='photo' className="input input-bordered w-full max-w-xs" />
                    </div>



                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">category</span>
                        </label>
                        <input type="text" placeholder="Type here" name='category' className="input input-bordered w-full max-w-xs" />
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text"> unit </span>
                        </label>
                        <input type="number" placeholder="Type here" name='unit' className="input input-bordered w-full max-w-xs" />
                    </div>



                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">seller</span>
                        </label>
                        <input type="text" placeholder="Type here" name='seller' className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control col-span-3 ">
                        <label className="label">
                            <span className="label-text">description</span>
                        </label>
                        <input type="textarea" placeholder="Type here" name='description' className="input input-bordered border border-gray-300 h-40 " />
                    </div>


                    <input className='col-span-3 btn btn-primary' type="submit" vale='add' />
                </form>

            </div>


        </div >
    );
};

export default AddToys;