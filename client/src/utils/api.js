export const getMe = (token) => {
    return fetch('/api/user/me', {
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${token}`,
        },
    });
};

export const getSingleUser = (id) => {
    return fetch(`/api/user/${id}`);
}

export const createUser = (userData) => {
    return fetch('/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
};

export const loginUser = (userData) => {
    return fetch('/api/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
};

export const getAllPosts = () => {
    return fetch("/api/post");
};

export const getUserPosts = (userId) => {
    return fetch(`/api/post/user/${userId}`);
};

export const getSinglePost = (postId) => {
    return fetch(`/api/post/${postId}`);
};

export const addPost = (data) => {
    return fetch('/api/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
};

export const updatePost = (data) => {
    return fetch(`/api/post/${data.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
};

export const removePost = (postId) => {
    return fetch(`/api/post/${postId}`, {
        method: 'DELETE'
    });
};
