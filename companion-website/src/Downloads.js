import React, { Component } from "react";
import { Container, Header, Table, Popup, Message } from "semantic-ui-react";
import ButtonLink from "./ButtonLink";
import downloads from "./downloads.json";
import queryString from "query-string";
import { CopyToClipboard } from 'react-copy-to-clipboard';

export function downloadFileFromQuery() {
  // eslint-disable-next-line no-restricted-globals
  const params = queryString.parse(location.search);

  if (Object.keys(params).length > 0) {
    // Get the ID of the requested file
    const fileId = Object.keys(params)[0];

    // Try to download the file if it was found
    if (!downloadFileShort(fileId, false)) {
      return `Unable to find the file for download`;
    }
  }
};

export function downloadFileShort(shortName, openInNewTab = true) {
  // Find the file
  var requestedDownload = downloads.find(
    download => shortName.trim().toUpperCase() === download.short.toUpperCase()
  );

  // Download the file if we found it
  if (requestedDownload) {
    if (openInNewTab) {
      downloadFile(requestedDownload.file);
    } else {
      document.location = `files\\${requestedDownload.file}`;
    }
    return true;
  }

  return false;
};

export function downloadFile(file) {
  window.open(`files\\${file}`);
};

export class Downloads extends Component {
  constructor(props) {
    super(props);
    this.state = { message: null };
  }

  render() {
    // Hide the message we are about to show in a bit
    if (this.state.message) {
      setTimeout(() => this.setState({ message:'' }), 3000);
    }
    return (
      <Container text>
        <Header as="h1" dividing>
          Downloads
        </Header>
        {this.state.message ? <Message positive>{this.state.message}</Message> : <React.Fragment />}
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>Title</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {downloads.map((item, index) => (
              <Table.Row key={index}>
                <Table.Cell>
                  <Popup
                    content={item.description}
                    trigger={<div>{item.title}</div>}
                  />
                </Table.Cell>
                <Table.Cell>
                  <ButtonLink
                    style={{ padding: 0 }}
                    className="ui button"
                    onClick={() => this.downloadFile(item.file)}
                  >
                    Download
                  </ButtonLink>
                </Table.Cell>
                <Table.Cell>
                  <CopyToClipboard text={`${document.location.origin}?${item.short}`}>
                      <ButtonLink
                        style={{ padding: 0 }}
                        className="ui button"
                        onClick={() => this.setState({message:"Copied to the clipboard!"})}
                      >
                        Copy Link
                      </ButtonLink>
                    </CopyToClipboard>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Container>
    );
  }
}

export default Downloads;
