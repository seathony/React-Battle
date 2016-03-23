import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
let PropTypes = React.PropTypes;

export default class Prompt extends React.Component {
  static propTypes = {
    header: PropTypes.string.isRequired,
    onUpdateUser: PropTypes.func.isRequired,
    onSubmitUser: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,

  }

  render() {
    return (
      <Grid>
        <Row center='xs'>
          <Col xs={4} >
            <h1> {this.props.header} </h1>
          <Col xs={4}/>
          <form onSubmit={this.props.onSubmitUser.bind(this)}>
            <div>
              <TextField
                hintText='GitHub username'
                floatingLabelText='Enter name'
                onChange={this.props.onUpdateUser.bind(this)}
                value={this.props.username}
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
}
