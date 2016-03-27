import React from 'react';
import ConfirmBattle from '../components/ConfirmBattle';
import githubHelpers from '../utils/githubHelpers';

export default class ConfirmBattleContainer extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      isLoading: true,
      playersInfo: [],
    };
    context.router;
  }

  componentDidMount() {
    let query = this.props.location.query;

    // var that = this; or you can do bind(this) it will pass this from outter context

    //console.log('Query', query);
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
    .then(function (players) {
      this.setState({
        isLoading: false,
        playersInfo: [players[0], players[1]],
      });
    }.bind(this));
  }

  handleInitiateBattle() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo,
      },
    });
  }

  render() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        onInitiateBattle={this.handleInitiateBattle.bind(this)}
        playersInfo={this.state.playersInfo} />
    );
  }
}
