import './App.css';
import Header from './Header';
import Search from './Search';

function App() {
  const search = () => {
  }

  return (
    <div className="App">
      <Header />
      <Search search={search} />
    </div>
  );
}

export default App;
