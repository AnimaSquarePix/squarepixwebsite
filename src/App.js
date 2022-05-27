import React, { Component } from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy,scrollToTop , scroller } from 'react-scroll'
import EPTCpicture from './img/eptcpicture.png'
import CARDGAMEpicture from './img/cardgamepicture.jpeg'
import PINEAPPLEpicture from './img/pineapplepicture.png'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOption: 0,
      showGame:1,
      Game1: 'Projeto EPTC',
      Game2: 'Projeto Pineapple',
      Game3: 'Projeto Cardgame',
      Game4: 'Projeto Ritmo'
    };
  }

  scrollToTop = () => {
    scroll.scrollToTop();
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

  nextGame = () => {
    this.setState({showGame:(this.state.showGame+1)})
  }
  prevGame = () => {
    this.setState({showGame:(this.state.showGame-1)})
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
        <div className='square-frame' id='frame-EPTC'>
        <div className='game-title'><h1>PROJETO EPTC</h1></div>
        <div className='about-description'><p><b>{this.state.showGame+1}. O Projeto EPTC</b> é Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet elit aliquam, lacinia dui eu, volutpat leo. Vestibulum sed viverra odio. Etiam ullamcorper leo porttitor, bibendum odio eu, laoreet lorem. Aliquam hendrerit id orci vel convallis.</p></div>
          {(this.state.showGame > 0) && (<button className='prev-button' type='button' onClick={this.prevGame}><b>ANTERIOR</b></button>)}
          {(this.state.showGame < 3) && (<button className='next-button' type='button' onClick={this.nextGame}><b>PRÓXIMO</b></button>)}
        <div className='parallax-img'></div>
          <button className='special-button' onClick={this.scrollToTop}>^^</button>
        </div>
        <div className='square-frame' id='frame-cardgame'>
        <div className='game-title'><h1>PROJETO CARDGAME</h1></div>
        <div className='about-description'><p><b>{this.state.showGame+1}. O Projeto CARDGAME</b> é Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet elit aliquam, lacinia dui eu, volutpat leo. Vestibulum sed viverra odio. Etiam ullamcorper leo porttitor, bibendum odio eu, laoreet lorem. Aliquam hendrerit id orci vel convallis.</p></div>
        <div className='parallax-img'></div>
          <button className='special-button' onClick={this.scrollToTop}>^^</button>
        </div>
        <div className='square-frame' id='frame-pineapple'>
        <div className='game-title'><h1>PROJETO PINEAPPLE</h1></div>
        <div className='about-description'><p><b>{this.state.showGame+1}. O Projeto PINEAPPLE</b> é Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet elit aliquam, lacinia dui eu, volutpat leo. Vestibulum sed viverra odio. Etiam ullamcorper leo porttitor, bibendum odio eu, laoreet lorem. Aliquam hendrerit id orci vel convallis.</p></div>
          {(this.state.showGame > 0) && (<button className='prev-button' type='button' onClick={this.prevGame}><b>ANTERIOR</b></button>)}
          {(this.state.showGame < 3) && (<button className='next-button' type='button' onClick={this.nextGame}><b>PRÓXIMO</b></button>)}
        <div className='parallax-img'></div>
          <button className='special-button' onClick={this.scrollToTop}>^^</button>
        </div>
        <div className='square-frame' id='frame-cardgame'>
        <div className='game-title'><h1>PROJETO RITMO</h1></div>
        <div className='about-description'><p><b>{this.state.showGame+1}. O Projeto RITMO</b> é Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet elit aliquam, lacinia dui eu, volutpat leo. Vestibulum sed viverra odio. Etiam ullamcorper leo porttitor, bibendum odio eu, laoreet lorem. Aliquam hendrerit id orci vel convallis.</p></div>
          {(this.state.showGame > 0) && (<button className='prev-button' type='button' onClick={this.prevGame}><b>ANTERIOR</b></button>)}
          {(this.state.showGame < 3) && (<button className='next-button' type='button' onClick={this.nextGame}><b>PRÓXIMO</b></button>)}
        <div className='parallax-img'></div>
          <button className='special-button' onClick={this.scrollToTop}>^^</button>
        </div>
        {(this.state.showOption == 1) && (console.log('teste'))}
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
