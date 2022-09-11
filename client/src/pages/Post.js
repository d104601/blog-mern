import React, { useEffect, useState } from 'react';
import { getSinglePost, removePost } from '../utils/api';
import { useParams, useNavigate, Link} from "react-router-dom";
import Auth from '../utils/auth';

const Post = () => {
    let user = {};
    if (Auth.loggedIn()) {
        user = Auth.getProfile();
    }
    const { postId } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState({});

    useEffect(() => {
        const getPost = async () => {
            const response = await getSinglePost(postId);
            const item = await response.json();
            setPost(item);
        }
        getPost();
    }, []);

    const deletePost = async () => {
        const response = await removePost(postId);
        if (response.status === 200) {
            window.location.assign('/dashboard');
        } else {
            console.log("failed to delete post");
        }
    }

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
                        Auth.loggedIn() && user.data._id === post.user
                            ?
                            <>
                                <Link to={"/dashboard/edit"} state={post} className='btn btn-outline'>Edit</Link>
                                <label htmlFor="delete" className='btn btn-outline modal-button'>Delete</label>

                                <input type="checkbox" id="delete" className="modal-toggle" />
                                <div className='modal'>
                                    <div className='modal-box'>
                                        <h1>Are your sure?</h1>
                                        <div className='modal-action'>
                                            <label htmlFor='delete' className='btn btn-outline' onClick={deletePost}>Yes</label>
                                            <label htmlFor='delete' className='btn btn-outline'>No</label>
                                        </div>
                                    </div>
                                </div>
                            </> : <></>
                    }


                    {/* Temp Delete button for just in case */}
                </div>
            </div>
        </div>
    )
}

export default Post;