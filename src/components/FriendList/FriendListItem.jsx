import PropTypes from 'prop-types';
import {StatusOn,StatusOff,Item,Name,Avatar} from './FriendList.styled'

export default function FriendListItem ({isOnline, name, avatar}){
   return (
    <Item>
    {isOnline ? <StatusOn></StatusOn> : <StatusOff></StatusOff>}
    <Avatar src={avatar} alt={name} width="48" />
    <Name>{name}</Name>
  </Item>
    );
}


FriendListItem.prototype={    
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}