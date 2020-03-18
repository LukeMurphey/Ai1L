import React, { Component } from 'react'
import {
  Container,
  Header,
} from 'semantic-ui-react'

  class About extends Component {
    render() {
      return (
        <Container text>
            <Header as='h1' dividing>
            About
            </Header>

            <Header as='h2' dividing>
            Why another apologetics book?
            </Header>

            <ol>
                <li>
                    Many apologetics books do not translate well to a class environment.
                    They are written for readers to read but not for teachers to teach.
                </li>
                <li>
                    Some evidences books focus on areas that Christian's don't typically have a background in (for example, in scientific disciplines).
                    Doing so means that Christian's often are not well equipped to use the content or use it with too little background to use it well.
                    This curiculum focuses on expanding the Christian's strong point: the New Testament.
                    In general, Christian's know more about the New Testmant than the general populace and thus are better equipped to use the knowledge.
                </li>
                <li>
                    Great gains have been made in recent years in New Testament studies in several areas.
                    For example, recent research has provided more reasons to see the Gospels as the product of eyewitness testimony.
                    Too often, Christian's are unaware of these recent developments.
                </li>
            </ol>

        </Container>
      )
    }
  }

  export default About;