import React, { Component } from 'react'
import {
  Container,
  Menu,
} from 'semantic-ui-react'
import GetBook from './GetBook'
import About from './About'
import Downloads from './Downloads'
import './App.css';

  class MainSite extends Component {
    state = {
      activeItem: 'getBook'
    }
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    renderTab() {
      if( this.state.activeItem === 'about' ){
        return (
        <About />
        );
      }

      if( this.state.activeItem === 'downloads' ){
        return (
        <Downloads />
        );
      }

      return (
        <GetBook />
      );
    }
  
    render() {
      const { activeItem } = this.state

      return (
        <>
          <Container fluid style={{ backgroundColor: '#009ec2', padding: '8px', marginBottom: 16 }}>
            <Container text>
            <Menu pointing secondary inverted style={{ borderColor: '#009ec2' }}>
              <Menu.Item
                name='getBook'
                active={activeItem === 'getBook'}
                style={{ color: 'white' }}
                onClick={this.handleItemClick}
              >
                Get the Book
              </Menu.Item>

              <Menu.Item
                name='downloads'
                active={activeItem === 'downloads'}
                style={{ color: 'white' }}
                onClick={this.handleItemClick}
              >
                Downloads
              </Menu.Item>

              <Menu.Item
                name='about'
                active={activeItem === 'about'}
                onClick={this.handleItemClick}
              >
                About
              </Menu.Item>
            </Menu>
            </Container>
          </Container>

          {this.renderTab()}
        </>
      )
    }
  };

export default MainSite;
