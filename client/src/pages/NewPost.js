import React, { useEffect, useState } from 'react';
import Auth from '../utils/auth';
import { addPost } from "../utils/api";

function NewPost() {
    const user = Auth.getProfile();
    const [postForm, setPostForm] = useState({ title: "", username: user.data.username, content: ""})
    const [alert, setAlert] = useState(false);

    const inputHandler = (event) => {
        const {name, value} = event.target;
        setUserForm({ ...userForm, [name]: value});
    };

    return(
        <div className='container mx-auto'>
            <form className='p-4'>
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
                    className='input'
                    type="text"
                    name='content'
                    onChange={inputHandler}
                    value={postForm.content}
                    required>
                    </textarea>
                </div>
            </form>
            <div className='text-center'>
                <button className='btn btn-outline' type='submit'>Submit</button>
            </div>
        </div>
    );
}

export default NewPost;