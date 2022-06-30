import * as React from "react";
import './CreatePost.css';

function CreatePost() {
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
                                        <input id="title" type="text" required></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="description"></label>
                                    </td>
                                    <td>
                                    <textarea id="description" placeholder="Twój post" required></textarea>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="createdAt">Utwożono dnia</label>
                                    </td>
                                    <td>
                                        <input id="createdAt" type="date" placeholder="Twój e-mail*" name="email" required></input>
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
    );
}

export default CreatePost;