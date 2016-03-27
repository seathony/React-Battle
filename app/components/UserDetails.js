import React from 'react';
import ListItem from 'material-ui/lib/lists/list-item';
import Avatar from 'material-ui/lib/avatar';

const PropTypes = React.PropTypes;

export default function UserDetails(user) {
  return (
    <div>
      {!!user.score && <ListItem><h3>Score: {user.score}</h3></ListItem>}
      <ListItem><Avatar src={user.info.avatar_url} size={300} /></ListItem>
      {user.score && <ListItem>Name: {user.info.name}</ListItem>}
      <ListItem>Username: {user.info.login}</ListItem>
      {user.info.location && <ListItem>location: {user.info.location}</ListItem>}
      {user.info.company && <ListItem>company: {user.info.company}</ListItem>}
      <ListItem>Followers: {user.info.followers}</ListItem>
      <ListItem>Following: {user.info.following}</ListItem>
      <ListItem>Public Repos: {user.info.public_repos}</ListItem>
      {user.info.blog && <ListItem>Blog: <a href={user.info.blog}> {user.info.blog}</a></ListItem>}
    </div>
  );
}

UserDetails.propTypes = {
  score: PropTypes.number,
  info: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    blog: PropTypes.string,
    company: PropTypes.string,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    location: PropTypes.string,
    login: PropTypes.string.isRequired,
    name: PropTypes.string,
    public_repos: PropTypes.number.isRequired,
  }),
};
