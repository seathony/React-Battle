import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid/lib/index';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import Prompt from '../components/Prompt';

export default class PromptContainer extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);
    this.state = {username: ''};
    context.router;
  }

  handleUpdateUser(e) {
    this.setState({username: e.target.value});
    console.log('we in');
  }

  handleSubmitUser(e) {
    e.preventDefault();
    let username = this.state.username;
    this.setState({username: ''});

    if (this.props.routeParams.playerOne) {
      console.log('this.context');
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username,
        },
      });
    } else {
      console.log(this.context);
      this.context.router.push('/playerTwo/' + this.state.username);
    }
  }

  render() {
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser.bind(this)}
        onUpdateUser={this.handleUpdateUser.bind(this)}
        header={this.props.route.header}
        username={this.state.username}/>
    );
  }
}
