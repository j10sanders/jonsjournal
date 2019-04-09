import React from 'react'
import { Link } from 'gatsby'
import Github from '../img/github-icon'
import Twitter from '../img/twitter-circle'
import styled from 'styled-components'
import Switch from 'react-switch'

const Logo = styled.svg`
  bottom: -7px;
  position: relative; 
`

const AImage = styled.a`
  padding: 12px;
`
const themeColor = '#028975'

const Navbar = class extends React.Component {

  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });
    }
  }

  render() {
    // const color = this.props.lightMode ? '#212121' : '#ffffff';
    // const backgroundColor = this.props.lightMode ? '#ffffff' : '#212121';
    const backgroundColor = '#ffffff'
    const color = '#212121'
    return (
      <nav style={{
        width: '100%',
        backgroundColor,
      }} className="navbar is-transparent" role="navigation" aria-label="main-navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <Logo height="30" width="150">
                <text x="0" y="15" fill={themeColor}>JON'S JOURNAL</text>
              </Logo>
            </Link>
            <div style={{ paddingTop: '15px' }}>
              {/* <Switch
                id="lightMode"
                onColor="#D3D3D3"
                offColor="#303030"
                checkedIcon={false}
                uncheckedIcon={false}
                checked={!this.props.lightMode}
                onChange={this.props.toggleLightMode}
                activeBoxShadow={`0 0 2px 3px ${themeColor}`}
                boxShadow={`0 0 2px 1px ${themeColor}`}
              /> */}
            </div>
            {/* Hamburger menu */}
            <div className="navbar-burger burger" data-target="navMenu" style={{ color }}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div id="navMenu" className="navbar-menu" style={{ backgroundColor }}>
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <AImage
                href="https://github.com/j10sanders"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon" style={{ paddingTop: '8px' }}>
                  <Github color={color}/>
                </span>
              </AImage>
              <AImage
                href="https://twitter.com/jonsjournals"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon" style={{ paddingTop: '8px' }}>
                  <Twitter color={color} />
                </span>
              </AImage>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
