import React, { useState } from 'react';
import Auth from '../utils/auth';
import { addPost } from "../utils/api";

function NewPost() {
    const user = Auth.getProfile();
    const [postForm, setPostForm] = useState({ title: "", user: user.data._id, username: user.data.username, content: ""})

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
            const response = await addPost(postForm)
            if(response.status !== 200) {
                console.log("failed to upload post");
            }
            else {
                window.location.assign('/dashboard');
            }
            setPostForm({ title: "", username: user.data.username, content: "" });
        } catch (err) {
            console.error(err);
        }
    }

    return(
        <div className='container mx-auto'>
            <form className='p-4' onSubmit={formSubmit}>
                <div className='text-xl text-center pb-4'>
                    Create New Post
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