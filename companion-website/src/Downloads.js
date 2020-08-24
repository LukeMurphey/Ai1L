import React, { useState } from "react";
import {
  Container,
  Header,
  Table,
  Popup,
  Message,
  Button,
  Input,
  Icon,
} from "semantic-ui-react";
import ButtonLink from "./ButtonLink";
import downloads from "./downloads.json";
import queryString from "query-string";
import { CopyToClipboard } from "react-copy-to-clipboard";

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
}

export function downloadFileShort(shortName, openInNewTab = true) {
  // Find the file
  var requestedDownload = downloads.find(
    (download) =>
      shortName.trim().toUpperCase() === download.short.toUpperCase()
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
}

export function downloadFile(file) {
  window.open(`files\\${file}`);
}

const FILETYPE_ALL = null;
const FILETYPE_PPTX = "pptx";
const FILETYPE_DOWNLOADS = "downloads";

export function filterFiles(downloads, fileType) {
  return downloads.filter((download) => {
    if (!fileType) {
      return true;
    } else if (fileType === FILETYPE_PPTX) {
      return download.file.endsWith(".pptx");
    } else if (fileType === FILETYPE_DOWNLOADS) {
      return !download.file.endsWith(".pptx");
    }

    return true;
  });
}

export function searchFiles(downloads, search) {
  return downloads.filter((download) => {
    if (!search) {
      return true;
    } else {
      let match = false;
      let searchLower = search.toLowerCase();

      Object.entries(download).map(([, value]) => {
        if (value.indexOf) {
          match = match || value.toLowerCase().indexOf(searchLower) >= 0;
        }
      });
      return match;
    }
  });
}

const Downloads = () => {
  const [fileType, setFileType] = useState(FILETYPE_ALL);
  const [message, setMessage] = useState(null);
  const [search, setSearch] = useState(null);

  /**
   * Make a short link to the download.
   * @param {string} download The file entry.
   */
  const makeShortLink = (download) => {
    // Change the domain so that it is easier to make sense of the lowercase "l"
    const domain = document.location.origin.replace("ai1l", "Ai1L");

    return `${domain}?${download.short}`;
  };

  /**
   * The type of file to filter on.
   * @param {string} filter Instance of FILETYPE_ALL or FILETYPE_DOWNLOADS, FILETYPE_PPTX
   */
  const filterDownloads = (filter) => {
    setFileType(filter);
  };

  // Hide the message we are about to show in a bit
  if (message) {
    setTimeout(() => setMessage(null), 3000);
  }

  console.log(downloads.length);
  const filteredDownloads = downloads
    ? searchFiles(filterFiles(downloads, fileType), search)
    : null;

  return (
    <Container text>
      <Header as="h1" dividing>
        Downloads
      </Header>

      <Button.Group>
        <Button
          active={fileType === FILETYPE_ALL}
          onClick={() => filterDownloads(FILETYPE_ALL)}
        >
          All
        </Button>
        <Button
          active={fileType === FILETYPE_PPTX}
          onClick={() => filterDownloads(FILETYPE_PPTX)}
        >
          Slides (Powerpoints)
        </Button>
        <Button
          active={fileType === FILETYPE_DOWNLOADS}
          onClick={() => filterDownloads(FILETYPE_DOWNLOADS)}
        >
          Books
        </Button>
      </Button.Group>

      <Input
        style={{ float: "right" }}
        icon
        placeholder="Search..."
        onChange={(e, d) => setSearch(d.value)}
      >
        <input />
        <Icon name="search" />
      </Input>

      {filteredDownloads.length === 0 && (
          <Message warning>
            <Message.Header>No Files Match</Message.Header>
            <p>No files match the given search.</p>
          </Message>
        )}

      {filteredDownloads.length > 0 && (
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan="3">Title</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {filteredDownloads.map((item, index) => (
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
                      onClick={() => downloadFile(item.file)}
                    >
                      Download
                    </ButtonLink>
                  </Table.Cell>
                  <Table.Cell>
                    <CopyToClipboard text={makeShortLink(item)}>
                      <ButtonLink
                        style={{ padding: 0 }}
                        className="ui button"
                        onClick={() => setMessage("Copied to the clipboard!")}
                      >
                        Copy Link
                      </ButtonLink>
                    </CopyToClipboard>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        )}
    </Container>
  );
};

export default Downloads;
