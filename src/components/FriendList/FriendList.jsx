import FriendListItem from './FriendListItem';
import PropTypes from 'prop-types';
import {Friendlisted} from './FriendList.styled'

export default function FriendList ({friends}) {
  return (
    <Friendlisted>
      {friends.map(friend => (
        <FriendListItem 
           key={friend.id}
           isOnline = {friend.isOnline}
           name ={friend.name}
           avatar ={friend.avatar} 
        />
      ))}
    </Friendlisted>
  )
}
FriendList.prototype={
  friends: PropTypes.array.isRequired,
}