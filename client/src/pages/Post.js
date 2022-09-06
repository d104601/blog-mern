import React, { useEffect, useState } from 'react';
import { getSinglePost } from '../utils/api';
import { useParams, useNavigate } from "react-router-dom";

const Post = () => {
    const { postId } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState({});

    useEffect(()=> {
        const getPost = async () => {
            const response = await getSinglePost(postId);
            const item = await response.json();
            setPost(item);
        }
        getPost();
    }, []);


    return (
        <div className="container mx-auto">
            <button className="btn btn-outline" onClick={() => navigate(-1)}>Go Back</button>
            <div className='card-body'>
                <h1 className='card-title'>{post.title}</h1>
                <p>By {post.username}</p>
                <p>Posted on {post.createdAt}</p>
                <p className="my-4">{post.content}</p>
            </div>                
        </div>
    )
}

export default Post;