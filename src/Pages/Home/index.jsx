import { Header } from "../../Components/Header";
import background from "../../Assets/bg.png";
import "./styles.css"
import ItemList from "../../Components/ItemList";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <img src={background} className="bg" alt="Background app" />
        <main className="info">
          <section>
            <input name="user" placeholder="@username" />
            <button>BUSCAR</button>
          </section>
          <section className="perfil">
            <img src="https://avatars.githubusercontent.com/u/178964215?v=4" className="profile" alt="Foto de perfil" />
            <article>
              <h3>Cauã Vieira Alves</h3>
              <h4>@Coruja-me</h4>
              <p>Descrição</p>
            </article>
          </section>
          <hr />
          <section className="repositorios">
            <h3>Repositórios</h3>
            <ItemList title="Teste 1" desc="lorem ipsum"/>
            <ItemList title="Teste 2" desc="lorem ipsum"/>
            <ItemList title="Teste 3" desc="lorem ipsum"/>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
