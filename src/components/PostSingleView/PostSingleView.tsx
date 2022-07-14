import React, {MouseEvent, useState} from 'react';
import {NewAdEntity} from 'types';
import './PostSingleView.css';
import {Link} from "react-router-dom";
import axios from "axios";
import {Loading} from "../common/Loading/Loading";
import {apiUrl} from "../config/api";

interface Props {
    post: NewAdEntity;
}

function PostSingleView(props: Props) {
    const [loading, setLoading] = useState(false);
    const [DeleteData, setDeleteData] = useState('');

    const deletePost = async (e: MouseEvent) => {
        e.preventDefault();

        setLoading(true);

        try {
            const res = await axios.delete(`${apiUrl}/api/${props.post.id}`);
            if ([400, 500].includes(res.status)) {
                const error = await res;
                alert(`Error occurred: ${error}`);
            }
            const data = await res.data;
            setDeleteData(data);
        } finally {
            setLoading(false);
        }
    }

    if (loading === null) {
        return <Loading/>
    }

    if (DeleteData) {
        return (
            <div className="add-info-container">
                <div className="add-info">
                    Post poprawnie skasowany
                    <Link className="add-info-back" to="/">Powrót</Link>
                </div>
                <div className="box">
                </div>
            </div>
        )
    }

return <>
    <div className="post-single-view">
        <div className="post-single-title">
            {props.post.title}
        </div>
        <div className="post-single-description">
            {props.post.description}
        </div>
        <div className="buttons">
            <Link className="back-button-link" to="/">
                <button className="back-button">Wróć do listy postów</button>
            </Link>
            <Link className="delete-button-link" to="/">
                <button className="delete-button" onClick={deletePost}>Skasuj Post</button>
            </Link>
        </div>
    </div>
</>;
}
;
export default PostSingleView;