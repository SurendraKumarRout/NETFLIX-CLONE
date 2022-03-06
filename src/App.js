import { requests } from "./requests.js";
import {Row} from "./components/Row.jsx"
import { Helmet } from "react-helmet";
import Banner from "./components/Banner.jsx";
import Navbar from "./components/Navbar.jsx"

function App() {
  return (
    <div className="App">
      <Helmet>
        <style>{"body { background-color:  #1a2228; }"}</style>
      </Helmet>
      <Navbar />
      <Banner />
      <Row
        title="Netflix Orignals"
        fetchUrl={requests.fetchNetflixOrignals}
        isLarge
      />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top-Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Rommance" fetchUrl={requests.fetchRomanticMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      {/* <Row title="Upcoming" fetchUrl={requests.fetchUpcoming} /> */}
    </div>
  );
}

export default App;
