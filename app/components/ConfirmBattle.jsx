import React from 'react';

export default function ConfirmBattle(props) {
  return (
    props.isLoading === true
    ? <p> Loading! </p>
    : <p> Confirm Battle! </p>
  );
}
