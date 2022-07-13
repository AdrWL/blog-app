import React from 'react';
import {NewAdEntity} from 'types';
import {Link} from "react-router-dom";

interface Props {
    val: NewAdEntity | unknown | any;
}

export const PostsListRow = (props: Props) => {
    return (
        <tr>
            <td>
                <Link to={`/edit/${props.val.id}`}>
                    {props.val.title}
                </Link>
            </td>
            <td>
                <Link to={`/edit/${props.val.id}`}>
                {props.val.description.length > 200 ? props.val.description.substring(0, 500) + "..."
                : props.val.description}
                </Link>
            </td>
            <td>{props.val.createdAt.substring(0,10)}</td>
        </tr>
    );
};