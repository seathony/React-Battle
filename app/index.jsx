import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/App.jsx';
import routes from './config/routes.js';
import RaisedButton from 'material-ui/lib/raised-button';

var USER_DATA = {
  name: 'Sean Hendricks',
  username: 'seathony',
  image: 'https://avatars3.githubusercontent.com/u/12072926?v=3&amp;s=460',
};

class HelloUniverse extends React.Component {
  render() {
    return (
      <div>
        <RaisedButton label='Default' />
        Hello {this.props.name}
      </div>
    );
  }
}

class ProfilePic extends React.Component {
  render() {
    return <img src={this.props.imageUrl} style={{ height: 100, width:100 }} />;
  }
}

class Link extends React.Component {
  changeUrl() {
    window.location.replace(this.props.href);
  }

  render() {
    return (
      <span
        style={{ color: 'red', cursor: 'pointer' }}
        onClick={this.changeUrl}>
        {/*renders everything between tag*/}
        {this.props.children}
      </span>
    );
  }
}

class ProfileLink extends React.Component {
  render() {
    return (
      <div>
        {/* Link is a custom react component */}
        <Link href={'https://www.github.com/' + this.props.username}>
          {this.props.username}
        </Link>
      </div>
    );
  }
}

class ProfileName extends React.Component {
  render() {
    return <div>{this.props.name}</div>;
  }
}

class Avatar extends React.Component {
  render() {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    );
  }
}

ReactDOM.render(routes, document.getElementById('app'));
