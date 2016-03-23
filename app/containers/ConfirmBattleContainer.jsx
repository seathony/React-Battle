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

  render() {
    return (
      <ConfirmBattle />
    );
  }
}
