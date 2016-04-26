import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';
import RaisedButton from 'material-ui/lib/raised-button';
import { Router, Route, Link, IndexRoute, hasHistory } from 'react-router';

export default function Home() {
  return (
    <Grid>
      <Row center="xs">
        <Col xs={4}>
          <h1>GitHub Battle</h1>
        <Col xs={4} />
          <p>Two will enter. One will win! Maybe....</p>
        <Col xs={4} />
          <Link to="/playerOne">
            <RaisedButton
              label="Get started"
              secondary
            />
          </Link>
        </Col>
      </Row>
    </Grid>
  );
}
