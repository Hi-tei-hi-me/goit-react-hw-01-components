import PropTypes from 'prop-types';
import defaultAvatar from '../../assets/defaultAvatar.jpg';
import { FcApproval, FcCancel } from 'react-icons/fc';
import { Item, Status, Avatar, Name } from './ListOfFriends.styled';

export default function FriendListItem({ avatar = defaultAvatar, name, isOnline, id }) {
  return (
    <Item>
      <Status>{isOnline ? <FcApproval /> : <FcCancel />}</Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
