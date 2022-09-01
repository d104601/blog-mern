import React, { useEffect, useState } from 'react';
import { getAllPosts, getSingleUser} from "../utils/api";

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [username, setUsername] = useState("None");

    useEffect(() => {
        const getUserName = async (id) => {
            try {
                const response = await getSingleUser(id);
                if(response.status !== 200) {
                    return "User Not Exist";
                }
                const user = await response.json();
                await setUsername(user.username);
            } catch(err) {
                return err;
            }
        };

        const getData = async () => {
            const response = await getAllPosts();
            const items = await response.json();
            const postData = items.map((post) => {
                getUserName(post.user);
                return {
                    id: post._id,
                    title: post.title,
                    author: username,
                    date: post.createdAt || "none",
                    content: post.content
                }
            } 
            );
            setPosts(postData);
        };
        getData();
    }, []);

    
    return(
        <div className="container mx-auto">
            {
                posts.map((post) => {
                    return (
                        <div className='card p-4'>
                            <h1>{post.title}</h1>
                            <p>Posted on {post.date}</p>
                            <p>By {post.author}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Home;