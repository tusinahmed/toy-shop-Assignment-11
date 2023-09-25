import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios, { isCancel, AxiosError } from 'axios';


const AllFulltoys = () => {

    let [maildatas, setmaildatas] = useState([]);
    let [value, setvalue] = useState("");

    useEffect(() => {

        let url = value ? `http://localhost:3000/search/${value}` : `http://localhost:3000/alltoys`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setmaildatas(data)
            })
    }, [value])


    console.log(value)


    let handelSearch = (e) => {
        e.preventDefault()
        console.log(value)



    }

    return (
        <div>
            <h1 className='text-3xl text-white text-center mb-20'> My Toys</h1>

            <div className='text-center mb-10'>
                <form action="" onSubmit={handelSearch}>
                    <input onChange={(e) => setvalue(e.target.value)} className='p-3' type="text" value={value} name="search" id="" />
                    <input className='btn btn-primary' type="submit" value='search' />
                </form>
            </div>

            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th> Number</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>category</th>
                            <th>Seller </th>
                            <th>Rating</th>
                            <th> Posts </th>

                        </tr>
                    </thead>
                    <tbody>


                        {
                            maildatas.map((infoemail, index) =>

                                <>
                                    <tr >
                                        <th> {index + 1}</th>
                                        <td> {infoemail.Name} </td>
                                        <td>{infoemail.Price}</td>
                                        <td>{infoemail.category}
                                        </td>
                                        <td>  {infoemail.seller?.Name ? infoemail.seller.Name : infoemail.seller}</td>
                                        <td>  {infoemail.Rating}</td>
                                        <td>  {infoemail.email}</td>

                                    </tr>
                                </>

                            )
                        }

                    </tbody>
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>company</th>
                            <th>location</th>
                            <th>Last Login</th>
                            <th>Favorite Color</th>
                        </tr>
                    </tfoot>
                </table>
            </div>

        </div>
    );
};

export default AllFulltoys;