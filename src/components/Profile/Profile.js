import PropTypes from 'prop-types';
import css from './Profile.module.css';
import { getRandomColor } from '../../utils/getRandomColor';
import defaultAvatar from '../../assets/defaultAvatar.jpg';

export const Profile = props => {
  const { avatar = defaultAvatar, username, tag, location, stats } = props;
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul
        className={css.stats}
        style={{
          backgroundColor: getRandomColor(),
        }}>
        <li className={css.statsBlock}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{stats.followers.toLocaleString()}</span>
        </li>
        <li className={css.statsBlock}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{stats.views.toLocaleString()}</span>
        </li>
        <li className={css.statsBlock}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{stats.likes.toLocaleString()}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
