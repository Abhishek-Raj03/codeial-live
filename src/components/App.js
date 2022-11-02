import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { fetchPosts } from '../actions/posts';
// import PostsList from './PostsList';
import PropTypes from 'prop-types';
import { PostsList, Navbar } from './';

const Login = ()=>{
  return (
    <div>Login</div>
  )
}

const SignUp = ()=>{
  return (
    <div>SignUp</div>
  )
}

const Home = ()=> <div>Home</div>
   
    
  


class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    // console.log('props', this.props);
    const { posts } = this.props;

    return (
    // npm install react-router-dom

      <Router>
        <div>
          <Navbar />
          {/* <PostsList posts={posts} /> */}
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/signup'>Signup</Link>
            </li>
          </ul>
          <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          </Routes>
        </div>
      </Router>
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

App.propType = {
  posts: PropTypes.array.isRequired,
};
export default connect(mapStateToProps)(App);
