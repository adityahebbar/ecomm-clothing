import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { auth } from './firebase/firebase.utils';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      signedInUser: null
    }
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      console.log('user', user)
      this.setState({ signedInUser: user })
    });

    console.log(this.state.signedInUser)
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { signedInUser } = this.state;

    return (
      <div className="App">
        <Header signedInUser={signedInUser} auth={auth} />
        <Switch>
          <Route exact path="/signIn" component={SignInAndSignUp} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
