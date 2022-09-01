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

export const getAllPosts = (data) => {
    return fetch("/api/post");
};

export const addPost = (data) => {
    
}
