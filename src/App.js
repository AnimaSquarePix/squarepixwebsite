import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showOption: 0,
    };
  }

  toggleGames = () => {
      if (this.state.showOption != 1) {
        this.setState({showOption:1})
      } else {
        this.setState({showOption:0})
      }
  }
  toggleAbout = () => {
      if (this.state.showOption != 2) {
        this.setState({showOption:2})
      } else {
        this.setState({showOption:0})
      }
  }
  toggleContact = () => {
      if (this.state.showOption != 3) {
        this.setState({showOption:3})
      } else {
        this.setState({showOption:0})
      }
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <div class="container">
              <div class="square-logo">
                  <ul>
                      <li>
                          <button type='button' onClick={this.toggleGames}>Jogos</button>
                      </li>
                      <li>
                          <button type='button' onClick={this.toggleAbout}>Sobre</button>
                      </li>
                      <li>
                          <button type='button' onClick={this.toggleContact}>Contato</button>
                      </li>
                  </ul>
                  <h1>Square</h1>
              </div>
          </div>
        </header>
        {(this.state.showOption == 1) && (<div className='square-frame'>TESTE 1</div>)}
        {(this.state.showOption == 2) && (<div className='square-frame'>TESTE 2</div>)}
        {(this.state.showOption == 3) && (<div className='square-frame'>TESTE 3</div>)}
      </div>
    );
  }
}

export default App;
