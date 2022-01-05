import PropTypes from "prop-types";
import user from './data/user.json';
import Profile from './components/Profile/Profile';
import data from './data/data.json';
import Statistics from './components/Statistics/Statistics'



export default function App() {  
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
       />
      <Statistics title="Upload stats" stats={data} />;
      <Statistics stats={data} />;
    </div>
  );
}



