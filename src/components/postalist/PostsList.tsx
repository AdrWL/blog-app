import React, {Fragment } from 'react';
import {NewAdEntity} from 'types';

// interface UserListProps {
//     id: '',
//     description: '',
//     title: '',
//     createdAt: Date,
// };

const PostsList = (props:NewAdEntity) => {
    return (
        <Fragment>
            <ul>
                    <li>
                        <span>{props.id}</span>
                        <span>{props.title}</span>
                        <span>{props.description}</span>
                    </li>
            </ul>
        </Fragment>
    );
};

export default PostsList;