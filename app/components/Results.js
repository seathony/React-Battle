import React from 'react';
import UserDetails from './UserDetails';
import UserDetailsWrapper from './UserDetailsWrapper';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';
import { Router, Route, Link, IndexRoute, hasHistory } from 'react-router';
import RaisedButton from 'material-ui/lib/raised-button';
import styles from '../styles/styles';

const PropTypes = React.PropTypes;

function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>;
}


export default function Results(props) {
  const winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  const losingIndex = winningIndex === 0 ? 1 : 0;
  return (
    <Grid>
        <Row center="xs">
          <Col xs={4} >
            <h1>Results</h1>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={5}>
            <UserDetailsWrapper header="Winner">
              <UserDetails scores={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
            </UserDetailsWrapper>
          </Col>
          <Col xs={5}>
            <UserDetailsWrapper header="Loser">
              <UserDetails scores={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
            </UserDetailsWrapper>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={4}>
            <Link to="/playerOne">
              <div style={styles.space}>
                <RaisedButton
                  label="Start Over"
                  secondary
                />
              </div>
            </Link>
          </Col>
        </Row>
      </Grid>
  );
}

Results.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired,
};
