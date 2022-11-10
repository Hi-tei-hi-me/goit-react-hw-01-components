import PropTypes from 'prop-types';
import './profile.css';

export const Profile = props => {
  return (
    <div className="profile">
      <div className="description">
        <img src={props.avatar} alt="User avatar" className="avatar" />
        <p className="name">{props.username}</p>
        <p className="tag">@{props.tag}</p>
        <p className="location">{props.location}</p>
      </div>
      <ul className="stats">
        <li className="stats-block">
          <span className="label">Followers</span>
          <span className="quantity">{props.stats.followers.toLocaleString()}</span>
        </li>
        <li className="stats-block">
          <span className="label">Views</span>
          <span className="quantity">{props.stats.views.toLocaleString()}</span>
        </li>
        <li className="stats-block">
          <span className="label">Likes</span>
          <span className="quantity">{props.stats.likes.toLocaleString()}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
