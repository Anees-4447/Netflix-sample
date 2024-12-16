import './App.css';
import Nav from './Components/navbar/Nav';
import Banner from './Components/banner/Banner';
import Row from './Components/row/Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner title="" fetchUrl={requests.fetchTrending} />
      <Row/>
    </div>
  );
}

export default App;
