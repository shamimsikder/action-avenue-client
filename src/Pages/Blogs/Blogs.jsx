import React from 'react';
import Lottie from "lottie-react";
import blogs from '../../../public/blogs.json'
import useTitle from '../../Hooks/useTitle';

const Blogs = () => {
    
    useTitle("Blogs");

    return (
        <div className="w-full max-w-7xl mx-auto mt-20 mb-20">

            <h2 className='font-semibold text-5xl text-center mb-10'>Our Latest Blogs</h2>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center'>
                            
                <div>

                    <div tabIndex={0} className="collapse collapse-arrow border border-[#65C3C8] mt-5 rounded-md text-black">
                        <div className="collapse-title text-xl font-medium">
                            What is an access token and refresh token? How do they work and where should we store them on the client-side?
                        </div>
                        <div className="collapse-content">
                            <p>
                                An access token is a credential that is issued to a user after successful authentication.<br/>
                                A refresh token is a long-lived credential that is also issued during authentication.<br/>
                                Access token and refresh token are used in authentication systems to verify the identity of a user and grant access to protected resources.
                            </p>
                        </div>
                    </div>

                    <div tabIndex={0} className="collapse collapse-arrow border border-[#65C3C8] mt-5 rounded-md text-black">
                        <div className="collapse-title text-xl font-medium">
                            Compare SQL and NoSQL databases?
                        </div>
                        <div className="collapse-content">
                            <p>
                                SQL databases are relational databases that store data in tables
                                with a predefined schema, while NoSQL databases are non-relational
                                and store data in a flexible schemaless format. NoSQL databases scale horizontally, SQL databases scale vertically. NoSQL databases are document, key-value, graph, or wide-column stores, SQL databases are table-based. NoSQL databases are better for unstructured data like documents or JSON, SQL databases are better for multi-row transactions.
                            </p>
                        </div>
                    </div>

                    <div tabIndex={0} className="collapse collapse-arrow border border-[#65C3C8] mt-5 rounded-md text-black">
                        <div className="collapse-title text-xl font-medium">
                            What is express js? What is Nest JS?
                        </div>
                        <div className="collapse-content">
                            <p>
                                Express.js is a popular Node.js framework for building web
                                applications, while Nest.js is a newer framework that builds on top
                                of Express.js and provides a more structured and scalable
                                architecture.
                            </p>
                        </div>
                    </div>

                    <div tabIndex={0} className="collapse collapse-arrow border border-[#65C3C8] mt-5 rounded-md text-black">
                        <div className="collapse-title text-xl font-medium">
                            What is MongoDB aggregate and how does it work?
                        </div>
                        <div className="collapse-content">
                            <p>
                                MongoDB aggregate  is the process of going through various stages with a large collection of documents to process them.<br/>
                                The aggregation processes and manipulates data through a pipeline of stages.<br/>
                                Every stage carries out a particular operation on the input documents and sends the outcomes to the following stage. 
                                Operations like data filtering, sorting, grouping, projecting, and aggregation can be included in the stages.
                            </p>
                        </div>
                    </div>

                </div>

                <div className='h-[75%] w-[75%]'>
                    <Lottie animationData={blogs} loop={false} />
                </div>
            
            </div>

        </div>
    );
};

export default Blogs;
