import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import { List } from './ListOfFriends.styled';

export default function FriendList({ friends }) {
  friends = friends.sort((a, b) => b.isOnline - a.isOnline);
  return (
    <List>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return <FriendListItem key={id} id={id} avatar={avatar} name={name} isOnline={isOnline} />;
      })}
    </List>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
