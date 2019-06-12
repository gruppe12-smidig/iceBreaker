import React, {Component} from 'react';
import firebase from '../firebase/Firebase';
import './ProfilePage.css'
import PasswordMask from "react-password-mask";


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
            </div>
        )
    };



    render() {




         return (
            <div className="mainContainer">
                <div className='wrapperContent'>
                    <h2 className='subheader' >MIN PROFIL</h2>
                </div>
                <div>
                    <button className="profil-btn" id="newMailBtn" onClick={this.renderPage = true}> Endre email </button>
                </div>
                <div>
                    <button className="profil-btn" id="newMailBtn">Endre Passord</button>
                </div>


            </div>

        );
    }
}

export default ProfilePage;