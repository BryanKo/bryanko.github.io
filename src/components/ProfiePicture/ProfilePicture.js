import React from 'react';
import './ProfilePicture.css';

const ProfilePicture = ({ image }) => (
  <img className="profile-circle" src={image} />
);

export default ProfilePicture;