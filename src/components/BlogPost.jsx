import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

const BlogPost = ({ category }) => {
    const { slug } = useParams();
    const [content, setContent] = useState('');

    useEffect(() => {
        const filePath = `/articles/${category}/${slug}.md`;

        fetch(filePath)
            .then((response) => response.text())
            .then((text) => {
                setContent(text);
            })
            .catch((error) => {
                console.error("Error loading blog:", error);
                setContent("Sorry, this blog post could not be loaded.");
            });
    }, [slug, category]);

    return (
        <div className="container">
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default BlogPost;
