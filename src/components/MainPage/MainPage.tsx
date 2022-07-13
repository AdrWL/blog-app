import React from 'react';
import './MainPage.css';
import {useEffect, useState} from "react";
import {NewAdEntity} from 'types';
import axios from "axios";
import {PostsList} from "../postalist/PostsList";

function MainPage() {
    const [posts, setPosts] = useState<NewAdEntity[] | unknown[]>([])
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            await axios.get(`http://localhost:3001/api`).then((data) => {
                let dataArr: NewAdEntity[] = Array.from(data.data.posts);
                setPosts(dataArr);
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="spiner_container">
                <div className="lds-spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }

    return <>
        <div className="list-post">
            <div className="show_posts">
                <PostsList posts={posts}/>
            </div>
        </div>
    </>;
}

export default MainPage;