import React, {MouseEvent} from 'react';
import {NewAdEntity} from 'types';
import {Link} from "react-router-dom";
import axios from "axios";

interface Props {
    post: NewAdEntity[] | unknown | any;
}


function PostSingleView(props: Props) {
    const deletePost = async (e: MouseEvent) => {
        e.preventDefault();

        const res = await axios.delete(`http://localhost:3001/api/${props.post.id}`);
        if ([400, 500].includes(res.status)) {
            const error = await res;
            alert(`Error occurred: ${error}`);
            return;
        }
    };
    return <>
        <div>
            <h1>{props.post.title}</h1>
            <p><strong>{props.post.description}</strong></p>
            <p>
                <Link to="/">Wróć do listy postów</Link>
            </p>
            <Link to="/">
                <button onClick={deletePost}>🗑️</button>
            </Link>
        </div>
    </>;
};
export default PostSingleView;