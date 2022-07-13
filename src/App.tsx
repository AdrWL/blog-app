import * as React from "react";
import Header from "./components/header/Header";
import './App.css';
import {Route, Routes} from "react-router-dom";
import {SearchContext} from './contexts/search.context'
import MainPage from "./components/mainpage/MainPage";
import PostView from "./components/postalist/PostView";
import CreatePost from "./components/createpost/CreatePost";
import {useState} from "react";

function App() {
    const [search, setSearch] = useState('')


    return (
        <SearchContext.Provider value={{search, setSearch}}>
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/add" element={<CreatePost/>}/>
                <Route path="/edit/:postID" element={<PostView/>}/>
            </Routes>
        </SearchContext.Provider>
    );
}

export default App;