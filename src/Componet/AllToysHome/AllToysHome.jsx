import React, { useEffect, useState } from 'react';
import SignleToy from '../SignleToy/SignleToy';
import Pagination from '../Pagination/Pagination';

const AllToysHome = () => {
    let [alltoys, setalltoys] = useState([]);
    let [currentpage, setcurrentpage] = useState(1);
    let [postsPerPage, setpostsPerPage] = useState(6);
    let [category, setcategory] = useState('');

    useEffect(() => {
        let url = category ? `http://localhost:3000/api/category/${category}` : 'http://localhost:3000/alltoys';

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setalltoys(data);
            });
    }, [category]);

    let handelsportcar = (id) => {
        setcategory(id);
    }



    let handleCategoryChange = (e) => {
        let ce = e.target.value;
        setcategory(ce)

        if (ce === 'all cars') {
            setcategory("")
        }

        else {
            setcategory(ce)
        }

    }

    let lastpostIndex = currentpage * postsPerPage;
    let firstPostIndex = lastpostIndex - postsPerPage;
    let currentPosts = alltoys.slice(firstPostIndex, lastpostIndex);

    return (
        <div className='ml-20 mr-20 '>
            <h1 className='text-center text-white text-6xl'>All Toys</h1>
            <div className='text-center text-3xl mt-10'>


                <div>
                    <label htmlFor="categorySelect">Select Category: </label>
                    <select id="categorySelect" onChange={handleCategoryChange}>
                        <option value="all cars">All cars</option>
                        <option value="sports card">Sports Card</option>
                        <option value="jeep car">Jeep Car</option>
                        <option value="jeep car">Jeep Car</option>
                    </select>
                </div>


            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 sm:gap-40 lg:gap-4 mt-10'>
                {currentPosts.map(toy => <SignleToy toy={toy} key={toy._id}></SignleToy>)}
            </div>
            <div>
                <Pagination totalposts={alltoys.length} setcurrentpage={setcurrentpage} postsPerPage={postsPerPage}></Pagination>
            </div>
        </div>
    );
};

export default AllToysHome;
