import React, { useEffect, useState } from 'react';
import Auth from '../utils/auth';
import { addPost } from "../utils/api";

function NewPost() {
    const [postForm, setPostForm] = useState({ title: "", username: "", content: ""})
    const [alert, setAlert] = useState(false);

    const inputHandler = (event) => {
        const {name, value} = event.target;
        setUserForm({ ...userForm, [name]: value});
    };

    return(
        <div>

        </div>
    );
}

export default NewPost;