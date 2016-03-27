import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

const PropTypes = React.PropTypes;

export default function Prompt(props) {
  return (
    <Grid>
      <Row center='xs'>
        <Col xs={4} >
          <h1> {props.header} </h1>
        <Col xs={4}/>
        <form onSubmit={props.onSubmitUser}>
          <div>
            <TextField
              hintText='GitHub username'
              floatingLabelText='Enter name'
              onChange={props.onUpdateUser}
              value={props.username}
              type='text'
              />
          </div>
        <Col xs={4}/>
          <div>
            <RaisedButton
            label='Click me'
            secondary={true}
            type='submit'
            />
          </div>
          </form>
        </Col>
      </Row>
    </Grid>
  );
}

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
};
