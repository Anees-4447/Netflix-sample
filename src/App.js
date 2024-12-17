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

      <Row title='NetflixOriginals'  fetchUrl={requests.fetchNetflixOriginals}/>

      <Row title="Top Rated" fetchUrl = {requests.fetchTopRated} isSmall />

      <Row title="Action Movies" fetchUrl = {requests.fetchActionMovies} isSmall />

      <Row title="Comedy Movies" fetchUrl = {requests.fetchComedyMovies} isSmall />

      <Row title="Horror Movies" fetchUrl = {requests.fetchHorrorMovies} isSmall />

      <Row title="Romance Movies" fetchUrl = {requests.fetchRomanceMovies} isSmall  />

      <Row title="Documentaries" fetchUrl = {requests.fetchDocumentaries} isSmall />
    </div>
  );
}

export default App;
