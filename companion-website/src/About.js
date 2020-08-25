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
            Apologetics in One Lesson is a study guide for Bible classes and small groups.
            This material is a little different than other evidences/apologetics materials in that it focuses on defending the New Testament the way that the New Testemant defends itself: as the product of eyewitness testimony focused on a defense of the resurrection.
            
            <p>Here are some things that makes this material a little different than many of the other options:</p>

            <Header as='h3' dividing>1. Focus on a defense of the New Testament</Header>
            This material focuses on the New Testament since this is the thing that Christian's most likely know well.
            Specifically, this content focuses on a defense of Jesus' resurrection and the Gospel accounts because:

            <ol>
                <li>Christianity rises or falls on the resurrection: Paul says so in 1 Corinthians 15</li>
                <li>This lets Christians focus on their strength (the New Testament) as opposed to asking them to take on a skill that they have little background in (Cosmology, Entomology, etc.).</li>
                <li>It allows the class to become more knowledgeable in the Gospel accounts (a nice side benefit to the main apologetic reason)</li>
            </ol>

            <Header as='h3' dividing>2. Material focused on supporting a class environment</Header>
            Many apologetics books do not translate well to a class environment.
            They were written for readers to read but not for teachers to teach.
            Some apologetics books have study guides but the guides are often made as an afterthought and fail to make the class engaging for students.

            This material is different in that it provides complete material to make the teacher's job easier by including:

            <ol>
                <li>Briefing statements to help the teacher achieve the goals of each session</li>
                <li>Discussion notes for the teacher to help them manage the discussion</li>
                <li>Slides including visualizations, quotes and pictures to make the content more understandable and impactful</li>
                <li>References to related books and videos to enable the teacher to be prepared</li>
            </ol>

            <Header as='h3' dividing>3. Expose Christian's to some of the latest New Testament research</Header>
            Great gains have been made in recent years in New Testament studies in several areas.
            For example, recent research has provided more reasons to see the Gospels as the product of eyewitness testimony.
            Too often, Christian's are unaware of these recent developments.
            This material will expose the students to many of these gains and give them pointers in case they want to learn more.
        </Container>
      )
    }
  }

  export default About;