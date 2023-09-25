import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Edittoys = () => {

    let edittoy = useLoaderData()
    console.log(edittoy)


    let handeleeditToys = (e) => {
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

        let newtoys = { Name, Price, Rating, Picture, Category, unit, description, seller }

        console.log(newtoys)


        fetch(`http://localhost:3000/alltoys/${edittoy._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newtoys)
        })
            .then(res => res.json())
            .then(data => {


            })
    }



    return (
        <div>

            <h1> This is edit page </h1>

            <div >
                <form onSubmit={handeleeditToys} className='input-all grid grid-cols-3 gap-3'>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text"> Name </span>
                        </label>
                        <input type="text" name='name' defaultValue={edittoy.Name} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">price</span>
                        </label>
                        <input type="number" placeholder="price" name='price' defaultValue={edittoy.Price} className="input input-bordered w-full max-w-xs" />
                    </div>



                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">rating</span>
                        </label>
                        <input type="text" placeholder="Type here" name='rating' defaultValue={edittoy.Rating} className="input input-bordered w-full max-w-xs" />
                    </div>



                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">photo url</span>
                        </label>
                        <input type="text" placeholder="Type here" name='photo' defaultValue={edittoy.Picture} className="input input-bordered w-full max-w-xs" />
                    </div>



                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">category</span>
                        </label>
                        <input type="text" placeholder="Type here" name='category' defaultValue={edittoy.Category} className="input input-bordered w-full max-w-xs" />
                    </div>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text"> unit </span>
                        </label>
                        <input type="number" placeholder="Type here" name='unit' defaultValue={edittoy.unit} className="input input-bordered w-full max-w-xs" />
                    </div>



                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">seller</span>
                        </label>
                        <input type="text" placeholder="Type here" name='seller' defaultValue={edittoy.seller} className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control col-span-3 ">
                        <label className="label">
                            <span className="label-text">description</span>
                        </label>
                        <input type="textarea" placeholder="Type here" name='description' defaultValue={edittoy.description} className="input input-bordered border border-gray-300 h-40 " />
                    </div>


                    <input className='col-span-3 btn btn-primary' type="submit" value=' Update' />
                </form>

            </div>

        </div>
    );
};

export default Edittoys;