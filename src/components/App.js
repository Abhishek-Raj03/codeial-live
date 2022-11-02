import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
// import PostsList from './PostsList';
import PropTypes from 'prop-types'
import {PostsList} from './';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    // console.log('props', this.props);
    const { posts } = this.props;

    return (
      <div>
        <nav className='nav'>
           <div className='left-div'>
            <img src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png" alt="logo"  />

           </div>
           <div className='search-container'>
            <img className='search-icon' src="https://cdn-icons-png.flaticon.com/512/428/428094.png" alt="search-icon" />
            <input placeholder='Search' />
            <div className='search-results'>
              <ul>
                <li className='search-results-row'>
                  <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user-dp" />
                  <span>John Doe</span>
                </li>
              </ul>
            </div>
           </div>
           <div className='right-nav'>
            <div className='user'>
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user-dp" id='user-dp'/>
            <span>John Doe</span>
            </div>
            <div className='nav-links'>
          <ul>
            <li>Log in</li>
            <li>Log out</li>
            <li>Register</li>
          </ul>
            </div>
           </div>
        </nav>
        <PostsList posts={posts} />
        
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

App.propType={
  posts: PropTypes.array.isRequired
}
export default connect(mapStateToProps)(App);
