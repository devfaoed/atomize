import './App.css';

//components importation
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import Body from './components/body/body';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Body />
    </div>
  );
}

export default App;
