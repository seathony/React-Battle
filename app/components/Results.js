import React from 'react';

const PropTypes = React.PropTypes;

function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>;
}


export default function Results(props) {
  return (
    <div> Results: {puke(props)} </div>
  );
}

Results.PropTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired,
};
