import PropTypes from 'prop-types';

export default function FriendListItem ( {friendData:{avatar,isOnline, name}}){
   return (
    <li>
    {isOnline ? 'Онлайн' : 'Оффлайн'}
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p>{name}</p>
  </li>
    )
}


FriendListItem.prototype={
    friendData: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
})
}