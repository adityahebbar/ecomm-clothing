import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

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
    // subscription to changes in  auth
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // subscription to changes in data in the firestore
        userRef.onSnapshot(snapshot => {
          this.setState({
            signedInUser: { id: snapshot.id, ...snapshot.data() }
          });
        });
      } else {
        this.setState({ signedInUser: userAuth })
      }
    });
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
