import React from 'react';

const Blog = () => {
    return (
        <div className='mr-20 ml-20 mt-30'>

            <h1 className='text-6xl text-white text-center mb-20'>Blogs</h1>

            <h1 className='text-3xl text-white mb-5'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
            <p className='text-white'> Ans: You can store the access token and refresh token in the server-side session. The application can use web sessions to communicate with the server. The token is then available for any requests originating from server-side code. This is also known as the backend for frontend (BFF) proxy.</p>
            <h1 className='text-3xl text-white mb-5'>Compare SQL and NoSQL databases?</h1>
            <p className='text-white'>Ans: SQL databases are relational, and NoSQL databases are non-relational. SQL databases use structured query language (SQL) and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</p>
            <h1 className='text-3xl text-white mb-5'>What is express js? What is Nest JS</h1>
            <p className='text-white'> Ans: NestJS provides a more structured and opinionated approach, which can make it easier to build complex APIs with proper separation of concerns. Express, on the other hand, is more lightweight and flexible, which makes it a popular choice for simple or small-scale APIs.</p>
            <h1 className='text-3xl text-white mb-5'>What is MongoDB aggregate and how does it work?</h1>
            <p className='text-white'> Ans: Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>

        </div>
    );
};

export default Blog;