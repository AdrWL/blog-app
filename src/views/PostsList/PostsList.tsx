import React from 'react';
import {NewAdEntity} from 'types';
import {PostsListRow} from "../../../views/PostListRow/PostsListRow";

interface Props {
    posts: NewAdEntity[] | unknown | any;
}

export const PostsList = (props: Props) => (
            props.posts.map(val => (
                <PostsListRow val={val} key={val.id}/>))

);