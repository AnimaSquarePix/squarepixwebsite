import React, { Component } from 'react';
import './App.css';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy,scrollToTop , scroller } from 'react-scroll'

class App extends Component {
  constructor(props) {
    super(props);


    this.state = {
      showOption: 0,
    };
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  }
  scrolltoBottom = () => {
    scroll.scrollToBottom();
  }


  toggleGames = () => {
    scroll.scrollToBottom();
      if (this.state.showOption != 1) {
        this.setState({showOption:1})
      }
      if (this.state.showOption == 1) {
        this.setState({showOption:0})
      }
  }
  toggleAbout = () => {
    scroll.scrollToBottom();
      if (this.state.showOption != 2) {
        this.setState({showOption:2})
      }
      if (this.state.showOption == 2) {
        this.setState({showOption:0})
      }
  }
  toggleContact = () => {
    scroll.scrollToBottom();
      if (this.state.showOption != 3) {
        this.setState({showOption:3})
      }
      if (this.state.showOption == 3) {
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
        <div className='square-frame'>
          <h1>SOBRE A SQUARE PIX</h1>
          <div className='about-description'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet elit aliquam, lacinia dui eu, volutpat leo. Vestibulum sed viverra odio. Etiam ullamcorper leo porttitor, bibendum odio eu, laoreet lorem. Aliquam hendrerit id orci vel convallis. Etiam hendrerit ante vitae orci bibendum laoreet. Suspendisse leo sem, interdum vitae lorem ac, hendrerit bibendum velit. Fusce malesuada mi at enim rhoncus tincidunt. Sed fermentum libero vitae justo feugiat, a iaculis justo interdum.</p></div>
          <div className='about-video'></div>
          <button type='button' onClick={this.scrollToTop}>VOLTAR</button>
        </div>
        )}
        {(this.state.showOption == 2) && (
        <div className='square-frame'>
          <h1>SOBRE A SQUARE PIX</h1>
          <div className='about-description'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet elit aliquam, lacinia dui eu, volutpat leo. Vestibulum sed viverra odio. Etiam ullamcorper leo porttitor, bibendum odio eu, laoreet lorem. Aliquam hendrerit id orci vel convallis. Etiam hendrerit ante vitae orci bibendum laoreet. Suspendisse leo sem, interdum vitae lorem ac, hendrerit bibendum velit. Fusce malesuada mi at enim rhoncus tincidunt. Sed fermentum libero vitae justo feugiat, a iaculis justo interdum.</p></div>
          <div className='about-video'></div>
          <button type='button' onClick={this.scrollToTop}>VOLTAR</button>
        </div>
        )}
        {(this.state.showOption == 3) && (
        <div className='square-frame'>
          <h1>SOBRE A SQUARE PIX</h1>
          <div className='about-description'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet elit aliquam, lacinia dui eu, volutpat leo. Vestibulum sed viverra odio. Etiam ullamcorper leo porttitor, bibendum odio eu, laoreet lorem. Aliquam hendrerit id orci vel convallis. Etiam hendrerit ante vitae orci bibendum laoreet. Suspendisse leo sem, interdum vitae lorem ac, hendrerit bibendum velit. Fusce malesuada mi at enim rhoncus tincidunt. Sed fermentum libero vitae justo feugiat, a iaculis justo interdum.</p></div>
          <div className='about-video'></div>
          <button type='button' onClick={this.scrollToTop}>VOLTAR</button>
        </div>
        )}
      </div>
    );
  }
}

export default App;
