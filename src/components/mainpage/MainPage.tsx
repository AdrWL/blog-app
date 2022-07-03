import React, {Fragment} from 'react';
import './MainPage.css';
import {useEffect, useState} from "react";
import {Connect} from "../axios/posts";
import {NewAdEntity} from 'types';
import {AxiosResponse} from "axios";
import PostsList from "../postalist/PostsList";

function MainPage() {

    const [posts, setPosts] = useState<NewAdEntity>({
        id: '',
        description: '',
        title: '',
    })


    //     const createPost = async () => {
//         let res = await axios.post('/create', {
//             title: title,
//             description: description,
//             createdAt: createdAt,
//         });
//         console.log(res)
//     }
// };

    // useEffect(() => {
    //         const fetchPosts = async () => {
    //             await axios
    //                 .get<NewAdEntity[]>('/')
    //                 .then((response: AxiosResponse) => {
    //                     setPosts(response.data)
    //                     console.log(response.data);
    //                 });
    //         }
    //         fetchPosts();
    //     }
    // )

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //             const response = await axios.get('/');
    //             setPosts(response.data);
    //     }
    //     fetchPosts();
    // }, [])

    // useEffect(()=>{
    //     Connect.getPost()
    //         .then((data) => {
    //             setPosts(data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // },[])

    return (
        <>
            <div className="mainpage">
                <Fragment>
                    <PostsList {...posts} />
                </Fragment>
            </div>
        </>
    );
}

export default MainPage;