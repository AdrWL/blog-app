import React, {useContext} from 'react';
import './MainPage.css';
import {useEffect, useState} from "react";
import {NewAdEntity} from 'types';
import {SearchContext} from "../../contexts/search.context";
import axios from "axios";
import {PostsList} from "../../views/PostsList/PostsList";
import {Loading} from "../common/Loading/Loading";

function MainPage() {
    // const {search} = useContext(SearchContext);
    const [posts, setPosts] =  useState<NewAdEntity[]>([])
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            await axios.get(`http://localhost:3001/api/`).then((data) => {
                let dataArr: NewAdEntity[] = Array.from(data.data.posts);
                setPosts(dataArr);
            });
        } finally {
            setLoading(false);
        }
    };

    // let filtertPosts = posts.filter((element) => {
    //     if (element.title.includes(search)){
    //         return element;
    //     }
    // });
    // console.log(filtertPosts);
    //
    // useEffect(() => {
    //     fetchData();
    // }, []);

    if (loading) {
        return <Loading/>
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