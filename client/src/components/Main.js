import React, { useEffect, useState } from 'react';
import Auth from '../utils/auth';
import { getAllPosts, getMe } from "../utils/api";

function Home() {
    const [posts, setPosts] = useState({});

    useEffect(() => {
        getAllPosts().then(response => {
            setPosts(response.json())
        })
    }, []);

    console.log(posts);
    
    return(
        <div className="container mx-auto">
        </div>
    );
}

export default Home;