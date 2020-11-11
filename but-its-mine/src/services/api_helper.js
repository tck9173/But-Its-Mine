import axios from 'axios';

const api = axios.create({
    baseURL : 'http://localhost:3001'
})

export const registerUser = async (registerData) =>{
    const resp = await api.post('/auth/signup', registerData);
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.user;
}

export const loginUser = async (loginData) =>{
    const resp = await api.post('/auth/login', loginData);
    localStorage.setItem('authToken', resp.data.token);
    api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
    return resp.data.user;
}

export const verifyUser = async () => {
    const token = localStorage.getItem('authToken');

    if (token) {
        api.defaults.headers.common.authorization = `Bearer ${token}`;
        const resp = await api.get('/auth/verify');
        return resp.data
    }
    return false
}

export const indexPosts = async () => {
    const resp = await api.get('/forum/posts/all');
    return resp.data
}

export const postPost = async (postData) => {
    const resp = await api.post('/forum/posts', postData);
    return resp.data;
}

export const putPost = async (postId, postData) => {
    const resp = await api.put(`/forum/posts/${postId}`, postData)
    return resp.data;
}

export const destroyPost = async (id) => {
    await api.delete(`/forum/posts/${id}`);
}