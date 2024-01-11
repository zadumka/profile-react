import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import friends from '../friends.json';
import transactions from '../transactions.json';

import './App.css';

function App() {
  return (
    <>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
