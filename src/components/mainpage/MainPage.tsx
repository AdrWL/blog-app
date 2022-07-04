import React from 'react';
import './MainPage.css';
import {useEffect, useState} from "react";
import axios from "axios";

function MainPage() {
    const [posts, setPosts] = useState(null)


    const fetchData = async () => {
            await axios.get(`$http://localhost:3001/api`).then((data) => {
                setPosts(data.data);
                console.log(data.data);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);


    return <>
        <h1>Posty</h1>
        {posts}
    </>;
}

export default MainPage;