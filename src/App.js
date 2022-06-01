import React, { Component } from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy,scrollToTop , scroller } from 'react-scroll'
import './App.css';

//const senderEmail = document.getElementById('emailInput').value;
//const senderMessage = document.getElementById('messageInput').value;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOption: 0
    };
  }

  scrollToTop = () => {
    setTimeout(() => {  scroll.scrollToTop(); }, 100);
    setTimeout(() => {  this.setState({showOption:0}); }, 1500);
  }
  scrolltoBottom = () => {
    scroll.scrollToBottom();
  }

  toggleGames = () => {
    scroll.scrollToBottom();
      if (this.state.showOption !== 1) {
        this.setState({showOption:1})
      }
      if (this.state.showOption === 1) {
        this.setState({showOption:0})
      }
  }

  toggleAbout = () => {
    scroll.scrollToBottom();
      if (this.state.showOption !== 2) {
        this.setState({showOption:2})
      }
      if (this.state.showOption === 2) {
        this.setState({showOption:0})
      }
  }
  toggleContact = () => {
    scroll.scrollToBottom();
      if (this.state.showOption !== 3) {
        this.setState({showOption:3})
      }
      if (this.state.showOption === 3) {
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
        {(this.state.showOption === 1) && (
            <div className='portfolio-frame'>
              <div className='square-frame' id='frame-EPTC'>
              <div className='game-title'><h1>PROJETO EPTC</h1></div>
              <div className='about-description'><p><b>O Projeto EPTC</b> é Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet elit aliquam, lacinia dui eu, volutpat leo. Vestibulum sed viverra odio. Etiam ullamcorper leo porttitor, bibendum odio eu, laoreet lorem. Aliquam hendrerit id orci vel convallis.</p></div>
              <div className='parallax-img'></div>
            </div>
              <div className='square-frame' id='frame-cardgame'>
              <div className='game-title'><h1>PROJETO CARDGAME</h1></div>
              <div className='about-description'><p><b>O Projeto CARDGAME</b> é Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet elit aliquam, lacinia dui eu, volutpat leo. Vestibulum sed viverra odio. Etiam ullamcorper leo porttitor, bibendum odio eu, laoreet lorem. Aliquam hendrerit id orci vel convallis.</p></div>
              <div className='parallax-img'></div>
            </div>
              <div className='square-frame' id='frame-pineapple'>
              <div className='game-title'><h1>PROJETO PINEAPPLE</h1></div>
              <div className='about-description'><p><b>O Projeto PINEAPPLE</b> é Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet elit aliquam, lacinia dui eu, volutpat leo. Vestibulum sed viverra odio. Etiam ullamcorper leo porttitor, bibendum odio eu, laoreet lorem. Aliquam hendrerit id orci vel convallis.</p></div>
              <div className='parallax-img'></div>
            </div>
            <div className='square-frame' id='frame-cardgame'>
              <div className='game-title'><h1>PROJETO RITMO</h1></div>
              <div className='about-description'><p><b>O Projeto RITMO</b> é Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet elit aliquam, lacinia dui eu, volutpat leo. Vestibulum sed viverra odio. Etiam ullamcorper leo porttitor, bibendum odio eu, laoreet lorem. Aliquam hendrerit id orci vel convallis.</p></div>
              <div className='parallax-img'></div>
              <button className='special-button' onClick={this.scrollToTop}>^^</button>
            </div>
          </div>
        )}
        {(this.state.showOption === 2) && (
        <div className='square-frame'>
          <h1 className='port'>SOBRE A SQUARE PIX</h1>
          <div className='about-description'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet elit aliquam, lacinia dui eu, volutpat leo. Vestibulum sed viverra odio. Etiam ullamcorper leo porttitor, bibendum odio eu, laoreet lorem. Aliquam hendrerit id orci vel convallis.</p></div>
          <button type='button' onClick={this.scrollToTop}><b>VOLTAR</b></button>
        </div>
        )}
        {(this.state.showOption === 3) && (
          <div className='square-frame'>
          <h1>CONTATO</h1>
          <div className='about-description'>
            <p>SEU E-MAIL</p>
            <form onsubmit="sendContact(event)">
            <div class="mb-3">
              <label for="emailInput" class="form-label">E-Mail </label>
              <input type="email" class="form-control" id="emailInput"/>
            </div>
            <div class="mb-3">
              <label for="messageInput" class="form-label">Mensagem</label>
              <textarea class="form-control" id="messageInput" rows="3"></textarea>
            </div>
            <button type="submit" class="contact-submit" onClick={async function sedContact(ev) {}}>ENVIAR</button>
          </form>
            </div>
          <button type='button' onClick={this.scrollToTop}><b>VOLTAR</b></button>
        </div>
        )}
      </div>
    );
  }
}

export default App;
