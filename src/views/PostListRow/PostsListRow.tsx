import React from 'react';
import {NewAdEntity} from 'types';
import {Link} from "react-router-dom";
import './PostListRow.css';

interface Props {
    val: NewAdEntity | unknown | any;
}

export const PostsListRow = (props: Props) => {
    const img = props.val.title
    let photo = img.split(' ')[0]


    return (
        <div className="container-single-post">
            <div className="title-single-post">
                <Link className="post-title" to={`/edit/${props.val.id}`}>
                    {props.val.title}
                    <img className="post__photo" src={`https://source.unsplash.com/500x500/?${photo}`} alt="{photo}"/>
                </Link>
            </div>
            <div className="post-single-description">
                <Link className="post-description" to={`/edit/${props.val.id}`}>
                    {props.val.description.length > 200 ? props.val.description.substring(0, 600) + "..."
                        : props.val.description}
                </Link>
            </div>
            <div className="title-single-data">
                {props.val.createdAt.substring(0, 10)}
            </div>
            <div className="post__read_more">
                <Link className="post__read" to={`/edit/${props.val.id}`}>Czytaj więcej...</Link>
            </div>
        </div>
    );
};