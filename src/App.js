import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import WelcomeJumbo from "./components/WelcomeJumbo";
import LatestRelease from "./components/LatestRelease";

function App() {
  return (
    <div className="App">
      <header>
        <MyNav logo="StriveBook" />
        <WelcomeJumbo
          jumbo="Best Place for Books"
          p="More than 10.000 titles and 100 genres"
        />
      </header>
      <div>
        <LatestRelease />
      </div>
      <footer>
        <MyFooter textColor="blue" />
      </footer>
    </div>
  );
}

export default App;
