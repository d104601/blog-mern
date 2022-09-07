import React, { useEffect, useState } from 'react';
import { getSinglePost } from '../utils/api';
import { useParams, useNavigate } from "react-router-dom";
import Auth from '../utils/auth';

const Post = () => {
    const user = Auth.getProfile();
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
            <div className='card-body'>
                <div className='card-actions justify-front border-b-2 pb-4'>
                    <button className="btn btn-outline justify-front" onClick={() => navigate(-1)}>Go Back</button>
                </div>
                <h1 className='card-title'>{post.title}</h1>
                <p>By {post.username}</p>
                <p>Posted on {post.createdAt}</p>
                <p className="my-4">{post.content}</p>
                <div className="card-actions justify-front border-b-2 pb-4">
                    {
                    user.data._id === post.user 
                    ?
                    <>
                        <button className='btn btn-outline'>Modify</button>
                        <button className='btn btn-outline'>Delete</button>
                    </>
                    :
                    <></>
                    }    
                </div>
            </div>                
        </div>
    )
}

export default Post;