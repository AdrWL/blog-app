import axios from 'axios';
import {AxiosResponse} from "axios";
import {NewAdEntity, NewArticleAdEntity} from 'types';

const instance = axios.create({
    baseURL: 'http://localhost:3001/api',
    timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

export const typesConnect = {
    get: (url: string) => instance.get<NewAdEntity>(url).then(responseBody),
    post: (url: string, body: NewArticleAdEntity) => instance.post<NewArticleAdEntity>(url, body).then(responseBody),
    delete: (url: string) => instance.delete<NewAdEntity>(url).then(responseBody),
};

export const Connect = {
    getPost: () : Promise<NewAdEntity> => typesConnect.get('/'),
    createPost: (body: NewArticleAdEntity) : Promise<NewAdEntity> => typesConnect.post('/create', body),
//     createID: (data: any) => axios.post(`http://localhost:3001/api/create`, JSON.stringify(data), {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     }
// }),
}