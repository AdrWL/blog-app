import React, {SyntheticEvent, useEffect, useState} from 'react';
import {NewAdEntity} from 'types';
import {useParams} from "react-router-dom";
import PostEdit from "./PostEdit";
import PostSingleView from "./PostSingleView";
import axios from "axios";

const PostView = () => {
    const [isShown, setIsShown] = useState(true);
    const [isShownEdit, setIsShownEdit] = useState(false);
    const [buttonText, setButtonText] = useState('Edytuj');
    const [postInfo, setPostInfo] = useState<NewAdEntity | null>(null);
    let {postID} = useParams();

    const handleClick = (e: SyntheticEvent) => {
        e.preventDefault();
        setIsShown(current => !current);
        setIsShownEdit(current => !current);
    }

    const toggle = (e: SyntheticEvent)  => {
        if(buttonText=="Wróć") {
            setButtonText("Edytuj")
        } else if(buttonText=="Edytuj") {
            setButtonText("Wróć")
        }
    }

    const onClick = (e: SyntheticEvent) => {
        e.preventDefault();
            handleClick(e);
            toggle(e)
    }

    useEffect(() => {
        (async () => {
            const res = await axios.get(`http://localhost:3001/api/edit/${postID}`);
            setPostInfo(res.data);
        })();
    }, []);

    if (postInfo === null) {
        return null;
    }

    return <>
        <div>
            {isShown && <PostSingleView post={postInfo} />}
            <button onClick={onClick}>{buttonText}</button>
            {isShownEdit && <PostEdit postsID={postID} />}
        </div>
    </>;
};
export default PostView;