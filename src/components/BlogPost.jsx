import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

const BlogPost = ({ category }) => {
    const { slug } = useParams();  // Get the slug from the URL
    const [content, setContent] = useState('');

    useEffect(() => {
        // Construct the path to the blog post Markdown file
        const filePath = `/articles/${category}/${slug}.md`;

        // Fetch the Markdown file
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
            {/* Only render the content of the blog post */}
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    );
};

export default BlogPost;
