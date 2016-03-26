import React from 'react';
import ConfirmBattle from '../components/ConfirmBattle';

export default class ConfirmBattleContainer extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  };

  constructor() {
    super();
    this.state = {
      isLoading: true,
      playerInfo: [],
    };
  }

  componentDidMount() {
    let query = this.props.location.query;
    console.log('Query', query);
  }

  render() {
    return (
      <ConfirmBattle isLoading={this.state.isLoading}
        playersInfor={this.state.playersInfo} />
    );
  }
}
