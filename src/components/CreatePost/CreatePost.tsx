import * as React from "react";
import './CreatePost.css';
import '../MainPage/MainPage.css';
import {SyntheticEvent, useState} from "react";
import {NewAdEntity} from 'types';
import axios from "axios";
import {Link} from "react-router-dom";
import {apiUrl} from "../config/api";


function CreatePost() {
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState('');
    const [date, setDate] = useState('');
    const [post, setPost] = useState<NewAdEntity>({
        title: '',
        description: '',
        createdAt: ''
    })

    const saveAd = async (e: SyntheticEvent) => {
        e.preventDefault();

        setLoading(true);

        try {
            const json = JSON.stringify(post)
            const res = await axios.post(`${apiUrl}/create`, json, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await res.data;
            setId(data.id);
            setDate(data.createdAt);
        } finally {
            setLoading(false);
        }
    };

    if (loading === null) {
        return (
            <div className="spiner_container">
                <div className="lds-spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }

    const updateForm = (key: string, value: string | number) => {
        setPost(post => ({
            ...post,
            [key]: value,
        }));
    };

    if (id) {
        return (
            <div className="add-info-container">
                <div className="add-info">
                    <Link className="add-info-link" to="/">Tw??j post "{post.title}" zosta?? poprawnie opublikowany z
                        dniem {date}</Link>
                    <Link className="add-info-back" to="/">Powr??t</Link>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="add-post">
                <form onSubmit={saveAd}>
                    <div className="add-post-container">
                        <div className="add-post-text">
                            <h2>Dodaj nowy post</h2>
                        </div>
                        <div className="add-post-input">
                            <table>
                                <tbody>
                                <tr>
                                    <td>
                                        <label htmlFor="title">Tytu??</label>
                                    </td>
                                    <td>
                                        <input
                                            id="title"
                                            type="text"
                                            value={post.title}
                                            onChange={e => updateForm('title', e.target.value)}
                                            required>
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
                                            placeholder="Tw??j post"
                                            value={post.description}
                                            onChange={e => updateForm('description', e.target.value)}
                                            required>
                                        </textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="createdAt">Utworzono dnia</label>
                                    </td>
                                    <td>
                                        <input
                                            id="createdAt"
                                            type="date"
                                            onChange={e => updateForm('createdAt', e.target.value)}
                                        >
                                        </input>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="add-post-btn">
                            <button className="add-post-btn_click" type="submit">Dodaj</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
};

export default CreatePost;