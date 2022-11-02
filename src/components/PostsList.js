import React, { Component } from 'react';
import PropTypes from 'prop-types'

class PostsList extends Component {
    render() {
        const {posts}=this.props;
        return (
            <div className='posts-list'>
      {posts.map(post => (
         <div className='post-wrapper' key={post._id}>
            <div className='post-header'>
             <div className='post-avatar'>
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="user-pic" />
              <div>
                <span className='post-author'>{post.user.$oid} </span>
                <span className='post-time'>a minute ago </span> 
              </div>
             </div>
             <div className='post-content'> {post.content}</div>
             <div className='post-actions'>
                <div className='post-like'>
                  <img src="https://cdn-icons-png.flaticon.com/512/2589/2589054.png" alt="like-logo" />
                  <span>{post.likes.length}</span>
                </div>
                <div className='post-comments-icon'>
                  <img src="https://cdn-icons-png.flaticon.com/512/2190/2190552.png" alt="comment-logo" />
                  <span>{post.comments.length}</span>
                </div>
             </div>
             <div className='post-comment-box'>
                <input type="text" placeholder='comment here..' />
             </div>
             <div className='post-comments-list'>
              <div className='post-comments-item'>
               <div className='post-comment-header'>
                <span className='post-comment-author'>Bill</span>
                <span className='post-comment-time'>a minute ago</span>
                <span className='post-comment-likes'>22</span>

               </div>
               <div className='post-comment-content'>
                Random comment
               </div>
              </div>
             </div>
            </div>
         </div>
      ))}
      </div>
        );
    }
}

PostsList.propTypes = {
   posts: PropTypes.array.isRequired
}

export default PostsList;