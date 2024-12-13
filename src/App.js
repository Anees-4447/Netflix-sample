import logo from './logo.svg';
import './App.css';
import Nav from './Components/navbar/Nav';
import Banner from './Components/banner/Banner';
import Row from './Components/row/Row';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row/>
    </div>
  );
}

export default App;
