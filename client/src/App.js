import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Posts from './Components/Posts'
import {Route, Routes} from 'react-router-dom';
import AddPost from "./Components/AddPost";
import AdminPostsPage from "./Pages/AdminPostsPage";
import EditPostPage from "./Components/EditPostPage";


function App() {
  return (
    <Routes>
        <Route path="/" element ={<Posts/>}/>
        <Route path="/admin/add-book" element ={<AddPost/>}/>
        <Route path="/admin/books" element ={<AdminPostsPage/>}/>
        <Route path="/admin/books/edit-book/:id" element ={<EditPostPage/>}/>
    </Routes>
  );
}

export default App;