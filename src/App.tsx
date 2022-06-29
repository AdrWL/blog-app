import * as React from "react";
import './App.css';

function App() {
    return (
        <>
            <div className="nav">
                <div className="nav_container">
                    <div className="nav_element">
                        <div className="menu">
                            <div className="nav_list">
                                <a href="/mainpage">Strona główna</a>
                                <a href="/createpost">Stwórz post</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;