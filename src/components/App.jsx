import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import Profile from './Profile/Profile';
import friends from '../friends.json';
import transactions from '../transactions.json';
import profile from '../profile.json';

import './App.css';

function App() {
  return (
    <>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <Profile items={profile} />
    </>
  );
}

export default App;
