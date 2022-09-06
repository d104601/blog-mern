import React, { useEffect, useState } from 'react';
import Auth from '../utils/auth';
import { getUserPosts } from '../utils/api';

const Dashboard = () => {
    const [username, setUsername] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getUserdata = async () => {
            // get user data
            const user = await Auth.getProfile();
            setUsername(user.data.username);

            // get user's all posts
            const userPost = await getUserPosts(user.data._id);
            const item = await userPost.json();
            const postData = item.reverse().map((post) => {
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
        }
        getUserdata();
    }, []);

    if(!Auth.loggedIn()) {
        return (
            <div className="container mx-auto">
                <h1 className="text-center">Please sign in first.</h1>
            </div>
        );
    }

    return (
        <div className="container mx-auto">
            <h1 className='text-center'>Good to see you, {username}!</h1>

            <h1 className='text-center mt-4'>- Your Posts -</h1>

            <ul className="p-4">
                {
                    posts.length === 0 ? <h1 className='text-center'>You have no posts yet.</h1> :
                    posts.map((post) => {
                        return (
                            <li key={post.id}>
                                <a href={`/post/${post.id}`}>
                                    <div className='btn-outline text-left p-2 customCard border-b-2' href>
                                        <h1>{post.title}</h1>
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

export default Dashboard;