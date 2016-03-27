import React from 'react';

function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>;
}

export default function ConfirmBattle(props) {
  return (
    props.isLoading === true
    ? <p> Loading! </p>
    : <div> Confirm Battle! {puke(props)} </div>
  );
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired,
};
