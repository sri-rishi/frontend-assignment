import './App.css';
import {CardList, Navbar , Sidebar} from './components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Sidebar />
        <CardList />
      </div>
    </div>
  );
}

export default App;
