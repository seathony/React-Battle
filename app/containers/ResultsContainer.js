import React from 'react';
import Results from '../components/Results';
import githubHelpers from '../utils/githubHelpers';

export default class ResultsContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      playersInfo: [],
    };
  }

  componentDidMount() {
    githubHelpers.battle(this.props.location.state.playersInfo)
      .then(function(scores) {
        this.setState({
          scores: scores,
          isLoading: false,
        });
      }.bind(this));
  }
  render() {
    return (
      <Results
        isLoading={this.state.isLoading}
        playersInfo={this.props.location.state.playersInfo}
        score={this.state.scores}
      />
    );
  }
}
