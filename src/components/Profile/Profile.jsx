import React from 'react';
import MyPosts from './MyPosts/Posts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
   return (
      <div>
         <ProfileInfo />
         <MyPosts posts = {props.state.posts} />
      </div>
   )   
}

export default Profile;