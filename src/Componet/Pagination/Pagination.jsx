import React from 'react';

const Pagination = ({ postsPerPage, totalposts, setcurrentpage }) => {

    let pages = [];

    for (let i = 1; i <= Math.ceil(totalposts / postsPerPage); i++) {
        pages.push(i)

    }

    return (
        <div className='text-center text-4xl'>

            {
                pages.map((page, index) => {
                    return <button key={index} className='mr-10' onClick={() => setcurrentpage(page)}>{page}</button>

                })
            }

        </div>
    );
};

export default Pagination;