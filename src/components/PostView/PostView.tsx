import React, {SyntheticEvent, useEffect, useState} from 'react';
import {NewAdEntity} from 'types';
import {useParams} from "react-router-dom";
import PostEdit from "../PostEdit/PostEdit";
import PostSingleView from "../PostSingleView/PostSingleView";
import axios from "axios";
import './PostView.css';
import {apiUrl} from "../config/api";

const PostView = () => {
    const [isShown, setIsShown] = useState(true);
    const [isShownEdit, setIsShownEdit] = useState(false);
    const [buttonText, setButtonText] = useState('Edytuj');
    const [postInfo, setPostInfo] = useState<NewAdEntity | null>(null);
    const {postID} = useParams<"postID">();

    const handleClick = (e: SyntheticEvent) => {
        e.preventDefault();
        setIsShown(current => !current);
        setIsShownEdit(current => !current);
    }

    const toggle = () => {
        if (buttonText == "Wróć") {
            setButtonText("Edytuj")
        } else if (buttonText == "Edytuj") {
            setButtonText("Wróć")
        }
    }

    const onClick = (e: SyntheticEvent) => {
        e.preventDefault();
        handleClick(e);
        toggle()
    }

    useEffect(() => {
        (async () => {
            const res = await axios.get(`${apiUrl}/edit/${postID}`);
            setPostInfo(res.data);
        })();
    }, []);

    if (postInfo === null) {
        return null;
    }

    return <>
        <div className="post-single-view-container">
            {isShown && <PostSingleView post={postInfo}/>}
            <div className="edit-button-div">
                <button className="edit-button" onClick={onClick}>{buttonText}</button>
            </div>
            {isShownEdit && <PostEdit postsID={postID}/>}
        </div>
    </>;
};
export default PostView;