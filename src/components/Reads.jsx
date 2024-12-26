import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Reads = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const blogFiles = [
            { title: 'Book Review: The Great Gatsby', link: '/reads/gatsby', blurb: "hello" },
            { title: 'Deep Dive into Sapiens', link: '/reads/sapiens', blurb: "hello" },
        ];

        setBlogs(blogFiles);
    }, []);

    return (
        <div className="container">
            <h1 style={{ textAlign: "center" }} >A Couple of Things I've Read</h1>
            <div className='home-head-container' style={{ fontSize: '0.6rem', textAlign: 'center' }}> <a href="/" rel="noopener noreferrer">HOME</a> </div>

            <div className='container'>
                <ul>
                    {blogs.map((blog, index) => (
                        <li key={index}>
                            <Link to={blog.link} style={{ fontSize: '1.2rem' }} >{blog.title}</Link>
                            <p style={{ fontSize: '0.9rem' }}>{blog.blurb}</p>
                            <hr style={{ border: '0', borderTop: '1px solid #cccccc', marginTop: '10px', marginBottom: '10px' }} />
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default Reads;
