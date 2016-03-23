import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';
import RaisedButton from 'material-ui/lib/raised-button';
import { Router, Route, Link, IndexRoute, hasHistory } from 'react-router';

export default class Home extends React.Component {
  render() {
    return (
      <Grid>
        <Row center='xs'>
          <Col xs={4} >
            <h1>GitHub Battle</h1>
          <Col xs={4}/>
            <p>Some fancy shit</p>
          <Col xs={4}/>
            <Link to='/playerOne'>
              <RaisedButton
              label='Get started'
              secondary={true}
              />
            </Link>
          </Col>
        </Row>
      </Grid>
    );
  }
}
