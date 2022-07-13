import React from 'react';
import {NewAdEntity} from 'types';
import {PostsListRow} from "./PostsListRow";

interface Props {
    posts: NewAdEntity[] | unknown | any;
}


export const PostsList = (props: Props) => (
    <table>
        <thead>
        <tr>
            <th>Tytuł</th>
            <th>Treść</th>
            <th>Data utworzenia</th>
        </tr>
        </thead>
        <tbody>
        {
            props.posts.map(val => (
                <PostsListRow val={val} key={val.id}/>))
            }
        </tbody>
    </table>
);