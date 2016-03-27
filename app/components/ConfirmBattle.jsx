import React from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';
import Card from 'material-ui/lib/card/card';
import { Router, Route, Link, IndexRoute, hasHistory } from 'react-router';
import UserDetails from './UserDetails';
import UserDetailsWrapper from './UserDetailsWrapper';
import styles from '../styles/styles';

const PropTypes = React.PropTypes;

function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>;
}

export default function ConfirmBattle(props) {
  return (
    props.isLoading === true
    ? <p> Loading! </p>
    : <Grid>
        <Row center="xs">
          <Col xs={4} >
            <h1>Confirm Players</h1>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={5}>
            <UserDetailsWrapper header="Player 1">
              <UserDetails info={props.playersInfo[0]} />
            </UserDetailsWrapper>
          </Col>
          <Col xs={5}>
            <UserDetailsWrapper header="Player 2">
              <UserDetails info={props.playersInfo[1]} />
            </UserDetailsWrapper>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={4}>
            <div style={styles.space}>
              <RaisedButton
                label="Initiate Battle!"
                secondary
                onClick={props.onInitiateBattle}
              />
          </div>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={4}>
            <Link to="/playerOne">
              <div style={styles.space}>
                <RaisedButton
                  label="Reselect Players"
                  primary
                />
              </div>
            </Link>
          </Col>
        </Row>
      </Grid>
  );
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired,
};
