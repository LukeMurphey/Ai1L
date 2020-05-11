import React, { Component } from "react";
import { Container, Menu, Message } from "semantic-ui-react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import GetBook from "./GetBook";
import About from "./About";
import { Downloads, downloadFileFromQuery } from "./Downloads";
import "./App.css";

/**
 * This class offers a menu entry for a tab that works with the React router to show the tab when clicked.
 */
function TabMenuItem({ label, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
      <Menu.Item
      name={label}
      active={match}
      style={{ color: "white" }}
    >
      <Link to={to}>{label}</Link>
    </Menu.Item>
  );
}

/**
 * This component shows the main site tabs and uses a React router to show the content based on the URL.
 */
class MainSite extends Component {
  render() {
    // Try to download any files requestedd as a shortlink
    // This failed if it returns a string (which contains a message)
    const downloadMessage = downloadFileFromQuery();

    return (
      <Router>
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
              <TabMenuItem to="/" label="Get the Book" activeOnlyWhenExact={true}/>
              <TabMenuItem to="/resources" label="Downloads" />
              <TabMenuItem to="/about" label="About" />
            </Menu>
          </Container>
        </Container>

        {downloadMessage ? <Message style={{padding: 16}} negative>{downloadMessage}</Message> : <React.Fragment />}

        <Switch>
          <Route exact path="/">
            <GetBook />
          </Route>
          <Route path="/resources">
            <Downloads />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default MainSite;
