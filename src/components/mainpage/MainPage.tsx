import React from 'react';
import './MainPage.css';
import {useEffect, useState} from "react";
import {NewAdEntity} from 'types';
import axios from "axios";
import {PostsList} from "../postalist/PostsList";

function MainPage() {
    const [posts, setPosts] = useState<NewAdEntity[]  | unknown[]>([])
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
        await axios.get(`http://localhost:3001/api`).then((data) => {
            let dataArr: NewAdEntity[] = Array.from(data.data.posts);
            setPosts(dataArr);
            console.log(dataArr);
        });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <h1>Wczytywanie</h1>;
    }

    return <>
        <h1>Posty</h1>
        <PostsList posts={posts}/>
    </>;
}

export default MainPage;