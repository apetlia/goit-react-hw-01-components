import PropTypes from 'prop-types';

import {
  UserCard,
  UserInfo,
  UserImg,
  UserName,
  UserTag,
  UserLocation,
  UserStats,
  UserLabel,
  UserQuantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, likes, views },
}) => {
  return (
    <UserCard>
      <UserInfo>
        <UserImg src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <UserTag>@{tag}</UserTag>
        <UserLocation>{location}</UserLocation>
      </UserInfo>

      <UserStats>
        <li>
          <UserLabel>Followers</UserLabel>
          <UserQuantity>{followers}</UserQuantity>
        </li>
        <li>
          <UserLabel>Views</UserLabel>
          <UserQuantity>{views}</UserQuantity>
        </li>
        <li>
          <UserLabel>Likes</UserLabel>
          <UserQuantity>{likes}</UserQuantity>
        </li>
      </UserStats>
    </UserCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
  }),
};
