import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API
})

export const useApi = () => ({
    validateTolken: async(token: string) => {
        /*Fake do Fake */ return {
            user: { id: 3, name: 'Urgot', email: 'urgot@gmail.com' },
        }

        const response = await api.post('/validate', {token})
        return response.data;
    },
    signin: async (email: string, password: string) => {
        /*Fake do Fake */ return {
            user: { id: 3, name: 'Urgot', email: 'urgot@gmail.com' },
            token: '123456789'
        }

        const response = await api.post('/signin', { email, password });
        return response.data;
    },
    signout: async () => {
         /*Fake do Fake */ return { status: true }
         
        const response = await api.post('/signout');
        return response.data;
    }
})