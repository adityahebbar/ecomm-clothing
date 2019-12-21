import React from 'react';

import SignIn from '../../components/signIn/signIn.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUp = () => {
    return (
        <div className="signInAndSignUp">
            <SignIn />
            <SignUp />
        </div>
    );
}

export default SignInAndSignUp;