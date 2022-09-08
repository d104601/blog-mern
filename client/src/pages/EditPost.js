import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { getSinglePost, updatePost } from "../utils/api";

function NewPost() {
    const location = useLocation();
    const data = location.state;
    const [postForm, setPostForm] = useState({id:data._id, title:data.title, content:data.content});


    useEffect(() => {
        const getData = async () => {
            setPostForm({});
        }
    }, []);

    const inputHandler = (event) => {
        const {name, value} = event.target;
        setPostForm({ ...postForm, [name]: value});
    };

    const formSubmit = async(event) => {
        event.preventDefault();
        
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const response = await updatePost(postForm)
            if(response.status !== 200) {
                console.log("failed to update post");
            }
            else {
                window.location.assign('/dashboard');
            }
            setPostForm({ title: "", content: "" });
        } catch (err) {
            console.error(err);
        }
    }

    return(
        <div className='container mx-auto'>
            <form className='p-4' onSubmit={formSubmit}>
                <div className='text-xl text-center pb-4'>
                    Edit Post
                </div>
                <div className='pb-4'>
                    <label className='block'>Title</label>
                    <input
                    className='input'
                    type="text"
                    name='title'
                    onChange={inputHandler}
                    value={postForm.title}
                    required>
                    </input>
                </div>
                <div className='pb-4'>
                    <label className='block'>Content</label>
                    <textarea
                    rows={10}
                    className='customTextarea'
                    type="text"
                    name='content'
                    onChange={inputHandler}
                    value={postForm.content}
                    required>
                    </textarea>
                </div>
                <div className='text-center'>
                    <button className='btn btn-outline' type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default NewPost;