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
                    content: post.content,
                    comments: post.comments
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
                            <li key={post.id}>
                                <a href={`/post/${post.id}`}>
                                    <div className='btn-outline text-left p-2 customCard border-b-2' href>
                                        <h1>{post.title} ({post.comments.length})</h1>
                                        <p>By {post.author} on {post.date}</p>
                                    </div>
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