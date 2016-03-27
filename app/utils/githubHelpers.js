import axios from 'axios';

const id = 'YOUR_CLIENT_ID';
const sec = 'YOUR_SECRET_ID';
const param = '?client_id' + id + '&client_secret=' + sec;

function getUserInfo(username) {
  return (

    // fetch('https://api.github.com/users/' + username + param),
    axios.get('http://api.github.com/users/' + username + param)
  );
}

export default {
  getPlayersInfo: function (players) {
    return (

      // fetch(players.map(function (username) {
      //   return getUserInfo(username);
      // })).then(function (info) {
      //   console.log('INFO', info);
      // })

      axios.all(players.map(function (username) {
        return getUserInfo(username);
      })).then(function (info) {
        return info.map(function (user) {
          return user.data;
        });
      }).catch(function (err) {
        console.warn('Error');
      })
    );
  },
};
