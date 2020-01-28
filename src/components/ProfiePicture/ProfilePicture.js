import React from 'react';
import './ProfilePicture.css';

const ProfilePicture = ({ image }) => (
  <img className="profile-circle" src={image} alt="its me!" />
);

export default ProfilePicture;