import React, { Component } from "react";
import { Container, Menu } from "semantic-ui-react";
import GetBook from "./GetBook";
import About from "./About";
import Downloads from "./Downloads";
import "./App.css";

const TAB_GET_BOOK = "getBook"; 
const TAB_ABOUT = "about"; 
const TAB_DOWNLOADS = "downloads"; 

class MainSite extends Component {
  state = {
    activeItem: TAB_GET_BOOK
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <>
        <Container
          fluid
          style={{
            backgroundColor: "#009ec2",
            padding: "8px",
            marginBottom: 16
          }}
        >
          <Container text>
            <Menu
              pointing
              secondary
              inverted
              style={{ borderColor: "#009ec2" }}
            >
              <Menu.Item
                name={TAB_GET_BOOK}
                active={activeItem === TAB_GET_BOOK}
                style={{ color: "white" }}
                onClick={this.handleItemClick}
              >
                Get the Book
              </Menu.Item>

              <Menu.Item
                name={TAB_DOWNLOADS}
                active={activeItem === TAB_DOWNLOADS}
                style={{ color: "white" }}
                onClick={this.handleItemClick}
              >
                Downloads
              </Menu.Item>

              <Menu.Item
                name={TAB_ABOUT}
                active={activeItem === TAB_ABOUT}
                onClick={this.handleItemClick}
              >
                About
              </Menu.Item>
            </Menu>
          </Container>
        </Container>

        {activeItem === TAB_GET_BOOK && <GetBook />}
        {activeItem === TAB_DOWNLOADS && <Downloads />}
        {activeItem === TAB_ABOUT && <About />}
      </>
    );
  }
}

export default MainSite;
