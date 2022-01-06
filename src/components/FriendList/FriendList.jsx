import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';

export default function FriendList ({friends}) {
  return (
    <ul>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friendData={friend} />
      ))}
    </ul>
  )
}
FriendList.prototype={
  friends: PropTypes.array.isRequired,
}