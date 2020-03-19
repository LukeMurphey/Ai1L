import React, { Component } from 'react'
import {
  Container,
  Header,
  Table,
  Popup,
} from 'semantic-ui-react'
import downloads from './downloads.json'

  class Downloads extends Component {

    downloadFile(file) {
      window.open(`files\\${file}`);
    }

    render() {
      return (
        <Container text>
        <Header as='h1' dividing>
          Downloads
        </Header>

        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Links</Table.HeaderCell>
            </Table.Row>
         </Table.Header>

         <Table.Body>
          {downloads.map((item, index) => (
            <Table.Row key={index}>
              <Table.Cell><Popup content={item.description} trigger={<div>{item.title}</div>} /></Table.Cell>
              <Table.Cell><a href="#" onClick={() => this.downloadFile(item.file)}>Download</a></Table.Cell>
            </Table.Row>
          ))}
         </Table.Body>
        </Table>
  
        </Container>
      )
    }
  }

  export default Downloads;