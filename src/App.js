import React, { Component } from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy,scrollToTop , scroller } from 'react-scroll'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOption: 0
    };
  }

  scrollToTop = () => {
    setTimeout(() => {  scroll.scrollToTop(); }, 100);
    setTimeout(() => {  this.setState({showOption:0}); }, 1000);
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
        {(this.state.showOption == 1) && (
                  <div className='portfolio-frame'>
                  <div className='square-frame' id='frame-EPTC'>
                  <div className='game-title'><h1>PROJETO EPTC</h1></div>
                  <div className='about-description'><p><b>O Projeto EPTC</b> é Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet elit aliquam, lacinia dui eu, volutpat leo. Vestibulum sed viverra odio. Etiam ullamcorper leo porttitor, bibendum odio eu, laoreet lorem. Aliquam hendrerit id orci vel convallis.</p></div>
                  <div className='parallax-img'></div>
                    <button className='special-button' onClick={this.scrollToTop}>^^</button>
                  </div>
                  <div className='square-frame' id='frame-cardgame'>
                  <div className='game-title'><h1>PROJETO CARDGAME</h1></div>
                  <div className='about-description'><p><b>O Projeto CARDGAME</b> é Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet elit aliquam, lacinia dui eu, volutpat leo. Vestibulum sed viverra odio. Etiam ullamcorper leo porttitor, bibendum odio eu, laoreet lorem. Aliquam hendrerit id orci vel convallis.</p></div>
                  <div className='parallax-img'></div>
                    <button className='special-button' onClick={this.scrollToTop}>^^</button>
                  </div>
                  <div className='square-frame' id='frame-pineapple'>
                  <div className='game-title'><h1>PROJETO PINEAPPLE</h1></div>
                  <div className='about-description'><p><b>O Projeto PINEAPPLE</b> é Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet elit aliquam, lacinia dui eu, volutpat leo. Vestibulum sed viverra odio. Etiam ullamcorper leo porttitor, bibendum odio eu, laoreet lorem. Aliquam hendrerit id orci vel convallis.</p></div>
                  <div className='parallax-img'></div>
                    <button className='special-button' onClick={this.scrollToTop}>^^</button>
                  </div>
                  <div className='square-frame' id='frame-cardgame'>
                  <div className='game-title'><h1>PROJETO RITMO</h1></div>
                  <div className='about-description'><p><b>O Projeto RITMO</b> é Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet elit aliquam, lacinia dui eu, volutpat leo. Vestibulum sed viverra odio. Etiam ullamcorper leo porttitor, bibendum odio eu, laoreet lorem. Aliquam hendrerit id orci vel convallis.</p></div>
                  <div className='parallax-img'></div>
                    <button className='special-button' onClick={this.scrollToTop}>^^</button>
                  </div>
                </div>
        )}
        {(this.state.showOption == 2) && (
        <div className='square-frame'>
          <h1 className='port'>SOBRE A SQUARE PIX</h1>
          <div className='about-description'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet elit aliquam, lacinia dui eu, volutpat leo. Vestibulum sed viverra odio. Etiam ullamcorper leo porttitor, bibendum odio eu, laoreet lorem. Aliquam hendrerit id orci vel convallis.</p></div>
          <button type='button' onClick={this.scrollToTop}><b>VOLTAR</b></button>
        </div>
        )}
        {(this.state.showOption == 3) && (
        <div className='square-frame'>
          <h1>CONTATO</h1>
          <div className='about-description'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet elit aliquam, lacinia dui eu, volutpat leo. Vestibulum sed viverra odio. Etiam ullamcorper leo porttitor, bibendum odio eu, laoreet lorem. Aliquam hendrerit id orci vel convallis.</p></div>
          <button type='button' onClick={this.scrollToTop}><b>VOLTAR</b></button>
        </div>
        )}
      </div>
    );
  }
}

export default App;
