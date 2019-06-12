import React, {Component} from 'react';
import firebase from '../firebase/Firebase';
import './ProfilePage.css'
import PasswordMask from "react-password-mask";
import penguin from '../../images/penguin.png';

class ProfilePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            password: '',
            newMail: '',
            newPassword: '',
            errorMsg: null,
           renderPage :false
        };


        this.handleChange = this.handleChange.bind(this);
        this.changeMailView = this.changeMailView.bind(this);
    }

    handleChange(e) {
        const itemName = e.target.name;
        const itemValue = e.target.value;

        this.setState({[itemName]: itemValue});
    }


    reauthenticate =(currentPassword) => {
        let user = firebase.auth().currentUser;
        let cred = firebase.auth.EmailAuthProvider.credential(
            user.email, currentPassword);
        return user.reauthenticateWithCredential(cred);
    };

    changeEmail = (currentPassword, newEmail) => {
        this.reauthenticate(currentPassword).then(()=> {
            let user = firebase.auth().currentUser;
            user.updateEmail(newEmail).then(() => {
                console.log('Email updated');
            }).catch((error) => {console.log(error); });
        })
    };

    changeMailView = () => {


        return(
            <div>
                <div>
                    <h1> Endre mail </h1>

                    <PasswordMask
                        className="password"
                        placeholder="Passord"
                        type="text"
                        id="password"
                        name="password"
                        required
                        value={this.state.password}
                        onChange={this.handleChange}
                    />

                    <input
                        className="username"
                        type="text"
                        id="email"
                        name="email"
                        required
                        value={this.state.newMail}
                        onChange={this.handleChange}
                    />

                    <div>
                        <button  className="btn-login">
                            utfør
                        </button>
                    </div>
                </div>

                <div>
                    <h1>Endre passord</h1>

                    <PasswordMask
                        className="password"
                        placeholder="Passord"
                        type="text"
                        id="password"
                        name="password"
                        required
                        value={this.state.password}
                        onChange={this.handleChange}
                    />

                    <PasswordMask
                        className="username"
                        placeholder="nytt passord"
                        type="text"
                        id="password"
                        name="password"
                        required
                        value={this.state.newPassword}
                        onChange={this.handleChange}
                    />

                </div>
            </div>
        )
    };



    render() {




         return (
            <div className="mainContainer">

                   <header className='profileHeader'>
                   <img className='profilePenguin' src={penguin} alt=" penguin" />
                            <h2 className='profileNameHeader' >Linda Bennts</h2>
                    </header>

                <div className='wrapperContent'>

                 

                <div className='infoContainer'>
                    <div>
                        <h1> Endre mail </h1>

                        <PasswordMask
                            className="password"
                            placeholder="Passord"
                            type="text"
                            id="password"
                            name="password"
                            required
                            value={this.state.password}
                            onChange={this.handleChange}
                        />

                        <input
                            className="username"
                            type="text"
                            id="email"
                            name="email"
                            required
                            value={this.state.newMail}
                            onChange={this.handleChange}
                        />

                        <div>
                            <button  className="btn-login">
                                utfør
                            </button>
                        </div>
                    </div>

                    <div>
                        <h1>Endre passord</h1>

                        <PasswordMask
                            className="password"
                            placeholder="Passord"
                            type="text"
                            id="password"
                            name="password"
                            required
                            value={this.state.password}
                            onChange={this.handleChange}
                        />

                        <PasswordMask
                            className="username"
                            placeholder="nytt passord"
                            type="text"
                            id="password"
                            name="password"
                            required
                            value={this.state.newPassword}
                            onChange={this.handleChange}
                        />

                        <div>
                            <button  className="btn-login">
                                utfør
                            </button>
                        </div>

                    </div>
                </div>
                </div>
            </div>

        );
    }
}

export default ProfilePage;