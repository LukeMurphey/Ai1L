import React, { Component } from 'react'
import {
  Button,
  Container,
  Grid,
  Header,
  Image,
} from 'semantic-ui-react'

  class GetBook extends Component {

    downloadFile(file) {
      window.open(`files\\${file}`);
    }

    openLink(url) {
      window.open(url);
    }

    render() {
      return (
        <Container text>
        <Header as='h1' dividing>
          Apologetics in (almost) One Lesson
        </Header>
  
        <Grid>
          <Grid.Column width={5}>
            <Image bordered rounded src='/Single Lesson Cover.png' />
            <div style={{marginTop: 12}}>
              <Button onClick={() => this.openLink("https://www.lulu.com/en/us/shop/luke-murphey/apologetics-in-almost-one-lesson/paperback/product-149j4mvr.html")} style={{width:'100%'}}>Buy the book</Button>
            </div>
            <div style={{marginTop: 12}}>
              <Button onClick={() => this.downloadFile("study_guide.pdf")} style={{width:'100%'}}>Download book</Button>
            </div>
          </Grid.Column>
          <Grid.Column width={11}>
            <p>
            This study guide was written in order to make evidences more approachable and easier to defend while also exposing Christians to some of the latest relevant research in New Testament studies.
            
            <div style={{marginTop:12}}><strong>This material will:</strong></div>
  
            <ol>
              <li>Focus on a defense of the New Testament (the very thing that Christian's know and are interested in)</li>
              <li>Equip the students to have an easier time discussing their faith by employing tactics that make engaging others simpler</li>
              <li>Use content that makes people excited to defend the Gospel</li>
            </ol>
            </p>

            <p>
              This material is provided free of charge. The printed study guide is not free but the price is entirely for printing (the author does not make a profit).
            </p>
          </Grid.Column>
        </Grid>
        </Container>
      )
    }
  }

  export default GetBook;
