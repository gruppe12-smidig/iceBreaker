import React, {Component} from 'react';
import firebase from '../firebase/Firebase';
import './ProfilePage.css'
import PasswordMask from "react-password-mask";
import penguin from '../../images/penguin.png';
import Footer from "../footer/Footer";

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
                    <h2> Endre mail </h2>

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
                            Utfør
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
                        placeholder="Nytt passord"
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

        const {userName, email} = this.props;



         return (
            <div className="mainContainer">

                   <header className='profileHeader'>
                   <img className='profilePenguin' src={penguin} alt=" penguin" />
                            <h2 className='profileNameHeader' >{userName}</h2>
                    </header>

                <div className='wrapperContent'>

                 

                <div className='infoContainer'>
                    <div className='upperBox'>

                            <p className='boldP'>E-post:</p>
                            <p >{email}</p>

                            <p className='boldP'>Skole:</p>
                                <p >Høgskolen Kristiania</p>

                     </div>
                        {/* <h4> Endre mail </h4> */}

{/* <PasswordMask
    className="password"
    placeholder="Passord"
    type="text"
    id="password"
    name="password"
    required
    value={this.state.password}
    onChange={this.handleChange}
/> */}

{/* <PasswordMask
    className="username"
    type="text"
    id="email"
    name="email"
    required
    value={this.state.newMail}
    onChange={this.handleChange}
/> */}

{/* <div>
    <button  className="btn-login">
        utfør
    </button>
</div> */}


                <div className='bottomBox'>
                    <h2>Endre passord</h2>

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
<p>  "</p>
                                <PasswordMask
                                    className="password"
                                    placeholder="Nytt passord"
                                    type="text"
                                    id="password"
                                    name="password"
                                    required
                                    value={this.state.newPassword}
                                    onChange={this.handleChange}
                                />

                            

                                <div>
                                    <button  className="btn-login">
                                        Utfør
                                    </button>
                                </div>

                    </div>
                </div>
                </div>
                <Footer/>
            </div>

        );
    }
}

export default ProfilePage;