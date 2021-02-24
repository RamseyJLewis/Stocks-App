import React, { Component } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage'
import { Auth } from 'aws-amplify'

class App extends Component {
  componentDidMount() {
    console.log(Auth.user.username)
  }
  render() {
    return (
      <div className="App">
        {/* <AmplifySignIn /> */}
        <div className='container'>
          <LandingPage />
        </div>
      </div>
    );
  }
}
export default withAuthenticator(App);
