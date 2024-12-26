import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ML = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Fetch the list of ML blogs (for now we will hardcode this, later you can use fs or import if using a backend)
        const blogFiles = [
            { title: 'Basics of Neural Networks', link: '/ml/NN', blurb: 'Exploring the MNIST dataset with Neural Networks' },
            { title: 'Understanding Convolutional Neural Networks', link: '/ml/CNN', blurb: 'Exploring the CIFAR10 dataset with CNNs' },
        ];

        setBlogs(blogFiles);
    }, []);

    return (
        <div className="container">
            <h1 style={{ textAlign: "center" }} >Machine Learning Blogs</h1>

            <div className='home-head-container' style={{ fontSize: '0.6rem', textAlign: 'center' }}> <a href="/" rel="noopener noreferrer">HOME</a> </div>

            <div className='container'>
                <ul>
                    {blogs.map((blog, index) => (
                        <li key={index}>
                            <Link to={blog.link} style={{ fontSize: '1.2rem' }}>{blog.title}</Link>

                            <p style={{ fontSize: '0.9rem' }}>{blog.blurb}</p>

                            <hr style={{ border: '0', borderTop: '1px solid #cccccc', marginTop: '10px', marginBottom: '10px' }} />
                        </li>

                    ))}
                </ul>
            </div>


        </div>

    );
};

export default ML;
