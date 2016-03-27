import React from 'react';
import Card from 'material-ui/lib/card/card';

const PropTypes = React.PropTypes;

export default function UserDetails(props) {
  return (
    <Card>
      <h3>{props.header}</h3>
      {props.children}
    </Card>
  );
}
