import './App.css';

function App() {

  let menuoption = 0;

  return (
    <div className="App">
      <header className="App-header">
        <div class="container">
            <div class="square-logo">
                <ul>
                    <li>
                        <button>Jogos</button>
                    </li>
                    <li>
                        <button>Sobre</button>
                    </li>
                    <li>
                        <button>Contato</button>
                    </li>  
                </ul>
                <h1>Square</h1>
            </div>
        </div>
        {(menuoption == 1) && <div></div>}
      </header>
    </div>
  );
}

export default App;
