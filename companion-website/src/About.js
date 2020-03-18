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

            I wrote this material because I couldn't find content that quite fit with what I wanted.
            Here are some things I found that I didn't think was ideal:

            <Header as='h3' dividing>1. Was too broad</Header>
            Some of the evidences content I found cast a very wide net into a large number of topics that I think spread people's knowledge too thin.

            <Header as='h3' dividing>2. Didn't translate to a class environment</Header>
            Many apologetics books do not translate well to a class environment.
            They were written for readers to read but not for teachers to teach.
            Some of the books had a study guide but I found them oftentimes confusing.
            It was clear that the study guide was made after the book as an afterthought.

            <Header as='h3' dividing>3. Didn't expose Christian's to some of the latest research</Header>
            Great gains have been made in recent years in New Testament studies in several areas.
            For example, recent research has provided more reasons to see the Gospels as the product of eyewitness testimony.
            Too often, Christian's are unaware of these recent developments.

            <Header as='h2' dividing>
            How is this material different?
            </Header>

            Here are some things that makes this material different:

            <Header as='h3' dividing>1. A focus on Jesus’ resurrection</Header>

            <ol>
                <li>Its Biblical: Paul says so in 1 Corinthians 15</li>
                <li>It prevents you from getting overloaded because it focuses on a small set of main questions.</li>
                <li>It lets you focus on your strength (the New Testament) as opposed to asking you to take on a skill you have little background in.</li>
                <li>It allows you to become more knowledgeable in the Gospel accounts (nice side benefit to the main apologetic reason)</li>
            </ol>

            <Header as='h3' dividing>2. Materials for assisting the teacher</Header>

            This material is based upon the assumption that the content will be taught in a class environment. As such, it provides:

            <ol>
                <li>Briefing statements to help the teacher know </li>
                <li>Discussion notes for the teacher to help them run the class</li>
                <li>Slides including visualizations, quotes and pictures to make the content more understandable</li>
                <li>References to related books and videos to enable the teacher to be prepared</li>
            </ol>            

        </Container>
      )
    }
  }

  export default About;