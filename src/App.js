import "bootstrap/dist/css/bootstrap.css";
import Carousel from "./components/Carousel";
import NavBar from "./components/NavBar";
import './styles/app.css';
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <Carousel />
  
    </div>
  );
}

export default App;
