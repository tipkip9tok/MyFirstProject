import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post';

const MyPosts = (props) => {
   
   let postsElements = props.posts.map ( p => <Post message = {p.message} likeCount = {p.likeCount} />);

   return <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
         <textarea></textarea>
      </div>
      <div>
         <button>Add post</button>
      </div>
      <div className={classes.posts}>
         {postsElements}
      </div>
   </div>

}

export default MyPosts;