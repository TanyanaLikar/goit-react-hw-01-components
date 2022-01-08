import PropTypes from 'prop-types';
import {Profiled, Description,Avatar,Stats,Name,TagLocation,Items} from "./Profile.styled";

export default function Profile ({ username, tag, location, avatar, followers, views, likes } ){
    return(
    <Profiled>
    <Description>
      <Avatar
        src={avatar}
        alt="User avatar"
        class="avatar"
      />
      <Name>{username}</Name>
      <TagLocation>@{tag}</TagLocation>
      <TagLocation>{location}</TagLocation>
    </Description>
  
    <Stats>
      <Items>
        <span class="label">Followers</span>
        <span class="quantity">{followers}</span>
      </Items>
      <Items>
        <span class="label">Views</span>
        <span class="quantity">{views}</span>
      </Items>
      <Items>
        <span class="label">Likes</span>
        <span class="quantity">{likes}</span>
      </Items>
    </Stats>
  </Profiled>)
}
Profile.propTypes ={
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired, 
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  
}