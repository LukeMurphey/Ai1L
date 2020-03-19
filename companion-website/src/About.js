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
            Here are some things that makes this material a little different:

            <Header as='h3' dividing>1. Focus on a defense the New Testament</Header>
            Some of the evidences content casts a very wide net into a large number of topics that spread people's knowledge too thin (such as Entomology, Cosmology, etc.).
            This content focuses on the New Testament since this is the thing that Christian's most likely know well.
            Specifically, this content focuses on a defense of Jesus' resurrection and the Gospel accounts because:

            <ol>
                <li>Christianity rises or falls on the resurrection: Paul says so in 1 Corinthians 15</li>
                <li>This prevents Christians from being overloaded because it focuses the truth of Christianity on a smaller set of questions.</li>
                <li>This lets Christians focus on their strength (the New Testament) as opposed to asking you to take on a skill that they have little background in.</li>
                <li>It allows the class to become more knowledgeable in the Gospel accounts (nice side benefit to the main apologetic reason)</li>
            </ol>

            <Header as='h3' dividing>2. Material focused on supporting a class environment</Header>
            Many apologetics books do not translate well to a class environment.
            They were written for readers to read but not for teachers to teach.
            Some had a study guide but it was clear that they were made as an afterthought.

            As such, it provides:

            <ol>
                <li>Briefing statements to help the teacher guide the class achieve the goals of each session</li>
                <li>Discussion notes for the teacher to help them manage the discussion</li>
                <li>Slides including visualizations, quotes and pictures to make the content more understandable and impactful</li>
                <li>References to related books and videos to enable the teacher to be prepared</li>
            </ol>

            <Header as='h3' dividing>3. Didn't expose Christian's to some of the latest research</Header>
            Great gains have been made in recent years in New Testament studies in several areas.
            For example, recent research has provided more reasons to see the Gospels as the product of eyewitness testimony.
            Too often, Christian's are unaware of these recent developments.           
        </Container>
      )
    }
  }

  export default About;