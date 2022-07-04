import * as React from "react";
import './CreatePost.css';
import {SyntheticEvent, useState} from "react";
import {NewAdEntity} from 'types';
import axios from "axios";

function CreatePost() {
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState('');
    const [date, setDate] = useState('');
    const [post, setPost] = useState<NewAdEntity>({
        title: '',
        description: '',
        createdAt: new Date().toISOString().slice(0, 10)
    })


    const saveAd = async (e: SyntheticEvent) => {
        e.preventDefault();

        setLoading(true);

        try {
            const json = JSON.stringify(post)
            const res = await axios.post(`http://localhost:3001/api/create`, json, {
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
        return <h1>Error loading</h1>;
    }

    const updateForm = (key: string, value: string | number) => {
        setPost(post => ({
            ...post,
            [key]: value,
        }));
    };

    if (id) {
        return <h2>Twój post "{post.title}" został poprawnie dodany do serwisu pod ID: {id} dnia {date}.</h2>;
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
                                        <label htmlFor="title">Tytuł</label>
                                    </td>
                                    <td>
                                        <input
                                            id="title"
                                            type="text"
                                            // value={title}
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
                                            placeholder="Twój post"
                                            // value={description}
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
                                            // value={createdAt}
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