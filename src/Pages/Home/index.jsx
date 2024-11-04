import { useState } from "react";
import { Header } from "../../Components/Header";
import background from "../../Assets/bg.png";
import "./styles.css"
import ItemList from "../../Components/ItemList";

function App() {
  const [user, setUser] = useState('');
  const [cUser, setCUser] = useState(null)
  const [repos, setRepos] = useState(null)

  const handleGetData = async() => {
    const userData = await fetch(`https://api.github.com/users/${user}`)
    const newUser = await userData.json()

    if(newUser.name){
      const {avatar_url, name, bio, login} = newUser
      setCUser({avatar_url, name, bio, login})
      const reposData = await fetch(`https://api.github.com/users/${user}/repos`)
      const newRepos = await reposData.json()

      if(newRepos.length){
        setRepos(newRepos)
      }
    }
  }

  return (
    <div className="App">
      <Header />
      <div className="content">
        <img src={background} className="bg" alt="Background app" />
        <main className="info">
          <section>
            <input name="usuario" 
            value={user} 
            onChange={event => setUser(event.target.value)} 
            placeholder="@username" />
            <button onClick={handleGetData}>BUSCAR</button>
          </section>
          {cUser?.name ? (<>
            <section className="perfil">
              <img src={cUser.avatar_url} className="profile" alt="Foto de perfil" />
              <article>
                <h3>{cUser.name}</h3>
                <h4>@{cUser.login}</h4>
                <p>{cUser.bio}</p>
              </article>
            </section>
            <hr />
          </>
          ): null}
          
          {repos?.length ? (
            <section className="repositorios">
              <h3>Repositórios</h3>
              {repos.map(rep => (
                <ItemList title={rep.name} desc={rep.description} />
              ))}
            </section>
          ): null}
        </main>
      </div>
    </div>
  );
}

export default App;
