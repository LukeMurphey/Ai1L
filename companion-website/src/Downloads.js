import React, { useEffect, useState } from "react";
import {
  useRouteMatch,
  Link
} from "react-router-dom";
import {
  Container,
  Header,
  Table,
  Popup,
  Message,
  Button,
  Input,
  Icon,
  Dropdown,
} from "semantic-ui-react";
import downloads from "./downloads.json";
import queryString from "query-string";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { PREZOS, RESOURCES, DOWNLOADS } from "./URLs";

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

export function isSlide(download) {
  return download.title.startsWith("Slides: ");
}

export function filterFiles(downloads, fileType) {
  return downloads.filter((download) => {
    if (!fileType) {
      return true;
    } else if (fileType === FILETYPE_PPTX) {
      return isSlide(download);
    } else if (fileType === FILETYPE_DOWNLOADS) {
      return !isSlide(download);
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

  const match = useRouteMatch();

  // Determine the file type based on the React router
  useEffect(() => {
    if (match.path === PREZOS ) {
      filterDownloads(FILETYPE_PPTX);
    }
    else if (match.path === DOWNLOADS ) {
      filterDownloads(FILETYPE_DOWNLOADS);
    }
    else {
      filterDownloads(FILETYPE_ALL);
    }
  }, [match]);

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

  const filteredDownloads = downloads
    ? searchFiles(filterFiles(downloads, fileType), search)
    : null;

  return (
    <Container text>
      <Header as="h1" dividing>
        Downloads
      </Header>

      {message && message.length > 0 && (
        <Message success>
          The link has been copied to the clipboard
        </Message>
      )}

      <Button.Group>
        <Button
          as={Link}
          to={RESOURCES}
          active={fileType === FILETYPE_ALL}
        >
          All
        </Button>
        <Button
          as={Link}
          to={PREZOS}
          active={fileType === FILETYPE_PPTX}
        >
          Slides (Powerpoints)
        </Button>
        <Button
          as={Link}
          to={DOWNLOADS}
          active={fileType === FILETYPE_DOWNLOADS}
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
                    <Button.Group>
                      <Button onClick={() => downloadFile(item.file)}>Download</Button>
                      <Dropdown
                        className='button icon'
                        floating
                      >
                        <Dropdown.Menu>
                        {item.file_pptx ? <Dropdown.Item onClick={() => downloadFile(item.file)}>Download (PDF format)</Dropdown.Item> : <Dropdown.Item onClick={() => downloadFile(item.file)}>Download</Dropdown.Item>}
                          {item.file_pptx ? <Dropdown.Item onClick={() => downloadFile(item.file_pptx)}>Download (PowerPoint format)</Dropdown.Item> : <></> }
                          <CopyToClipboard text={makeShortLink(item)}>
                            <Dropdown.Item
                              onClick={() => setMessage("Copied to the clipboard!")}
                            >
                              Copy Link
                            </Dropdown.Item>
                          </CopyToClipboard>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Button.Group>
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
