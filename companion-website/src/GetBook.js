import React from "react";
import { Button, Container, Grid, Header, Image } from "semantic-ui-react";

const GetBook = () => {
  const downloadFile = (file) => {
    window.open(`files\\${file}`);
  };

  const openLink = (url) => {
    window.open(url);
  };

  return (
    <Container text>
      <Header as="h1" dividing>
        Apologetics in (almost) One Lesson
      </Header>

      <Grid>
        <Grid.Column width={5}>
          <Image bordered rounded src="/Single Lesson Cover.png" />
          <div style={{ marginTop: 12 }}>
            <Button
              onClick={() =>
                openLink(
                  "https://www.lulu.com/en/us/shop/luke-murphey/apologetics-in-almost-one-lesson/paperback/product-149j4mvr.html"
                )
              }
              style={{ width: "100%" }}
            >
              Buy the book
            </Button>
          </div>
          <div style={{ marginTop: 12 }}>
            <Button
              onClick={() => downloadFile("study_guide.pdf")}
              style={{ width: "100%" }}
            >
              Download book
            </Button>
          </div>
        </Grid.Column>
        <Grid.Column width={11}>
          <p>
            This guide provides students with a defense of the New Testament.
            Specifically, it focuses on a defense of two of the New Testament's
            claims:
            <ol>
              <li>Jesus of Nazareth was resurrected</li>
              <li>
                The primary source accounts (the New Testament) came from
                eyewitnesses
              </li>
            </ol>
            This content was written in order to make evidences approachable and
            easier to defend while also exposing Christians to some of the
            latest relevant research in New Testament studies.
          </p>

          <p>
            This material is provided free of charge. The printed study guide is
            not free but the price is entirely for printing (the author does not
            make a profit).
          </p>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default GetBook;
