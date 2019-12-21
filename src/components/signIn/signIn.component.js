import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './signIn.styles.scss';
import { auth } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        }
        catch (err) {
            console.log(err);
        }

    }

    render() {

        const { email, password } = this.state;

        return (
            <div className="signIn">
                <h2>I already have an account!</h2>
                <span>Sign In with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        label="E-Mail"
                        handleChange={this.handleChange}
                        value={email}
                    />
                    <FormInput
                        type="password"
                        name="password"
                        label="Password"
                        handleChange={this.handleChange}
                        value={password}
                    />
                    <div className="buttons">
                        <CustomButton type="submit">
                            Submit
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleAuth>
                            Login with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;