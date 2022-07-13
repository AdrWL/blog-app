import * as React from "react";
import './PostEdit.css';
import {FormEvent, useEffect, useState} from "react";
import {NewAdEntity} from 'types';
import axios from "axios";

interface Props {
    postsID: string | undefined;
}

function PostEdit(props: Props) {
    const [post, setPost] = useState<NewAdEntity>({
        title: '',
        description: '',
    })

    useEffect(() => {
        (async () => {
            const res = await axios.get(`http://localhost:3001/api/edit/${props.postsID}`);
            setPost(res.data);
        })();
    }, []);

    if (post === null) {
        return null;
    }

    const updateForm = (key: string, value: string | number) => {
        setPost(post => ({
            ...post,
            [key]: value,
        }));
    };

const updatePost = async (e: FormEvent) => {
        e.preventDefault();

    const res = await axios.put(`http://localhost:3001/api/`, {id: props.postsID, description: post.description})
        .then(res => console.log(res))
        .catch(err => console.log(err))
}


    return (
        <>
            <div className="add-post">
                <form onSubmit={updatePost}>
                    <div className="add-post-container">
                        <div className="add-post-text">
                            <h2>Edytuj Post</h2>
                        </div>
                        <div className="add-post-input">
                            <table>
                                <tbody>
                                <tr>
                                    <td>
                                        <label htmlFor="title">Tytuł</label>
                                    </td>
                                    <td>
                                        <input
                                            id="title"
                                            type="text"
                                            value={post.title}
                                            disabled
                                        >
                                        </input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="description">
                                        </label>
                                    </td>
                                    <td>
                                        <textarea
                                            id="description"
                                            placeholder="Wczytywanie"
                                            value={post.description}
                                            onChange={e => updateForm('description', e.target.value)}
                                            required>
                                        </textarea>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="add-post-btn">
                            <button className="add-post-btn_click" type="submit">Aktualizuj</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
;

export default PostEdit;