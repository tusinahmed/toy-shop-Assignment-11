import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const MyToys = () => {
    let [maildata, setmaildata] = useState([]);
    let { user } = useContext(AuthContext);
    let email = user.email;
    console.log(email)



    useEffect(() => {
        fetch(`http://localhost:3000/emails?email=${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setmaildata(data)
            })
    }, [])


    let handeldel = (id) => {
        console.log(id)

        fetch(`http://localhost:3000/emails/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                let remain = maildata.filter(onedata => onedata._id !== id)
                setmaildata(remain)
            })



    }

    return (
        <div>
            <h1 className='text-3xl text-white text-center'> My Toys</h1>

            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>category</th>
                            <th>location</th>
                            <th>Last Login</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            maildata.map((infoemail, index) =>

                                <>
                                    <tr>
                                        <th>{index + 1}</th>
                                        <td> {infoemail.Name} </td>
                                        <td>{infoemail.Price}</td>
                                        <td>{infoemail.Category
                                        }</td>
                                        <td> {infoemail.seller}</td>
                                        <td> <Link to={`/edittoy/${infoemail._id}`}> <button className='btn btn-outline'> edit</button>  </Link>  </td>
                                        <td> <button className='btn btn-outline' onClick={() => handeldel(infoemail._id)} > x </button> </td>
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

export default MyToys;