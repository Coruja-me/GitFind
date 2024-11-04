import { Header } from "../../Components/Header";
import background from "../../Assets/bg.png";
import "./styles.css"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <img src={background} className="bg" alt="Background app" />
        <div className="info">
          <div>
            <input name="user" placeholder="@username" />
            <button>BUSCAR</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
