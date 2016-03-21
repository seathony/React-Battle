import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';


export default class PromptContainer extends React.Component {
  contextTypes: {
    router: React.PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {username: ''};
  }

  onUpdateUser(e) {
   this.setState({username: e.target.value});
   console.log("we in");
  } 

  onSubmitUser(e) {
    e.preventDefault();
    var username = this.state.username;
    this.setState({username: ''});

    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    } else {
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  }
  
  render () {
    return (
      <Grid>
        <Row center="xs">
          <Col xs={4} >
            <h1> {this.props.route.header} </h1>
          <Col xs={4}/>
          <form onsubmit={this.onSubmitUser}>
            <div>
              <TextField
                hintText="GitHub username"
                floatingLabelText="Enter name"
                onChange={this.onUpdateUser.bind(this)}
                value={this.state.username}
                type="text"
                />
            </div>
          <Col xs={4}/>
            <div> 
              <RaisedButton 
              label="Click me"
              secondary={true}
              type="submit"
              />
            </div>
            </form>
          </Col>
        </Row>
      </Grid>
    )
  }
}

