import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
            <h1>Hellos!</h1>
            <h3>I am Abi, a senior at Georgia Tech studying CS</h3>
            <p>
                <break></break>
                <break></break>
                Made this website to write and publish some write ups on Machine Learning and other topics that I find
                interesting. <break></break>
                I usually write about the things that I am learning or have learned recently, so if you find
                any errors or have any suggestions, feel free to reach out to me by email.
                I also plan to write about the books and articles that I've read.
            </p>


            <div className="links" style={{ textAlign: 'left' }}>
                <ul>
                    <li><Link to="/ml">Machine Learning</Link></li>
                    <li><Link to="/reads">Reads</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Home;
