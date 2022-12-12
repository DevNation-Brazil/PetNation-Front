import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API
})

const API_kEY = process.env.REACT_APP_API_KEY

export const useApi = () => ({
      signin: async (email: string, password: string) => {
        /*Fake do Fake */  /*return {
            user: { name: 'Urgot', email: 'urgot@gmail.com' },
            token: '123456789'
        }*/
        
        const response = await axios.request({
            url: `${process.env.REACT_APP_API}/api/v1/key/auth`, 
            method: 'POST',
            headers: {
                'apikey': `${API_kEY}`
            },
            data: { 'email': email, 'password': password }});
       // console.log(response.data)
        return {
            user: { nomeUser: response.data.nomeUser, 
                    emailUser: response.data.emailUser, 
                    token: response.data.token, 
                    tipo: response.data.tipo,
                    userId: response.data.userId},
         };

    },
    signout: async () => {
         /*Fake do Fake */ return { status: true }
         
        const response = await api.post('/signout');
        return response.data;
    }
})