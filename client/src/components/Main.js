import React, { useEffect, useState } from 'react';
import { getAllPosts } from "../utils/api";

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await getAllPosts();
            const items = await response.json();
            const postData = items.reverse().map((post) => {
                return {
                    id: post._id,
                    title: post.title,
                    author: post.username || "User Not Exist",
                    date: post.createdAt || "none",
                    content: post.content
                }
            } 
            );
            setPosts(postData);
        };
        getData();
    },[])
    

    return(
        <div className="container mx-auto">
            <ul className="p-4">
                {
                    posts.map((post) => {
                        return (
                            <li className='card p-4 btn' key={post.id}>
                                <a href="/" >
                                <h1 className="text-lg">{post.title}</h1>
                                <p className="text-sm">By {post.author} on {post.date}</p>
                                </a>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default Home;