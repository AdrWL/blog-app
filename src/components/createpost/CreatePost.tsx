import * as React from "react";
import './CreatePost.css';
import {useState} from "react";
import Axios from 'axios';

function CreatePost() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [createdAt, setCreatedAt] = useState('')

    const createPost = () => {
        Axios.post('http://localhost:3001/api/create', {
            title: title,
            description: description,
            createdAt: createdAt,
        });
        console.log(createPost)
    };

    return (
        <>
            <div className="add-post">
                <form>
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
                                            onChange={e => setTitle(e.target.value)}
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
                                            onChange={e => setDescription(e.target.value)}
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
                                            onChange={e => setCreatedAt(e.target.value)}
                                            placeholder="Twój e-mail*"
                                            name="email"
                                            required>
                                        </input>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="add-post-btn">
                            <button onClick={createPost} className="add-post-btn_click" type="submit">Dodaj</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default CreatePost;