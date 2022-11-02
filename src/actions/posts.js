// import posts from '../reducers/posts';
import { UPDATE_POSTS } from './actionTypes';
// import mongoose from 'mongoose';
// const mongoose = require('mongoose');
// const url = `http://www.omdbapi.com/?i=tt3896198&apikey=891abfa5`;
// const url = 'http://codeial.com:8000/api/v2/posts?page=1&limit=5';
export function fetchPosts() {
  return function (dispatch) {

    //command: json-server --watch src/actions/data.json --port 8000
    const url='http://localhost:8000/users' // npm install json-server
   
    fetch(url)
      .then((response) => {
        console.log('response', response);
        return response.json();
      })
      .then((data) => {
        // console.log('data',data[0].content);
        dispatch(updatePosts(data));
      });
    // const url = `http://www.omdbapi.com/?i=tt3896198&apikey=891abfa5&s=superman`;
    // const DB='mongodb+srv://root:root@cluster0.mfdxja2.mongodb.net/?retryWrites=true&w=majority'
    // const url = 'data.json';
    
    // mongoose.connect(DB)
    // mongoose.connect(DB,{
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true
    // }).then((response)=>{
    //   console.log('response',response)
    // }).catch((err)=> console.log("error"))
    // fetch(url)
    //   .then((response) => {
    //     console.log('response', response);
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log('data', data);
    //     // dispatch(updatePosts(data.Search));
    //   }).catch((err)=> console.log('Error',err))
  };
}

export function updatePosts(posts) {
  return {
    type: UPDATE_POSTS,
    posts,
  };
}
