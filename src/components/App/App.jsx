import { Wrapper } from './App.styled';
import { Profile } from 'components/Profile/Profile';
import user from 'components/InputData/user.json';

export const App = () => {
  return (
    <Wrapper>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </Wrapper>
  );
};
