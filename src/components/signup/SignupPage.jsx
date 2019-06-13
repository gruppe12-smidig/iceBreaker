
import React, { Component } from 'react';
import firebase from '../firebase/Firebase'
import FormError from '../formError/FormError';
import './SignupPage.css';
import '../formError/FormError.css'
import PasswordMask from 'react-password-mask';
import {FaArrowLeft} from 'react-icons/fa';


class SignupPage extends Component {
    constructor(props){
      super(props);
      this.state = {
          displayName: '',
          lastName: '',
          email: '',
          passOne: '',
          passTwo: '',
          school: '',
          errorMessage: null
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

  }

    handleChange(e) {
      const itemName = e.target.name;
      const itemValue = e.target.value;

      this.setState({[itemName]: itemValue},  () => {
          if (this.state.passOne !== this.state.passTwo){
              this.setState({errorMessage: 'Passord er ikke like'});
          } else {
              this.setState({errorMessage: null});
          }
        });
    }

    handleSubmit(e) {
        let signupInfo = {
            displayName: this.state.displayName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.passOne,
            school: this.state.school
        };
        e.preventDefault();

        firebase.auth().createUserWithEmailAndPassword(
            signupInfo.email,
            signupInfo.password

        ).then(()=> {
            console.log('før');
            this.props.registerUser(signupInfo.displayName);
            console.log('etter');
            this.props.addUser(signupInfo);
        })
            .catch(error => {
            if (error.message !== null){
                this.setState({errorMessage: error.message});
            } else{
                this.setState({errorMessage: null});
            }
        });
    }




    render() {

        return(
    

            <div className='formContainer'>


                <section>
                         <button className="back-btn" onClick={this.routeChange}>
                            <FaArrowLeft/>
                        </button>
                    </section>

                    <h2 className='subHeader'> Opprett bruker </h2>

             
                    <form className='inputForm' onSubmit={this.handleSubmit}>

                        <div className='inputSection'>
                            
                        <div className='errorMessages'>
                            { this.state.errorMessage !== null ? (
                               <FormError theMessage={this.state.errorMessage}/>
                            ): null}
                         </div>
                            <label
                                className="boldP"
                                htmlFor="displayName"
                            >Fornavn *</label>
                            <input
                                className='input-box'
                                type="text"
                                id="displayName"
                                placeholder="Fornavn"
                                name="displayName"
                                required
                                value={this.state.displayName}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className='inputSection'>
                            <label className="boldP"
                                   htmlFor="lastName"
                            > Etternavn *</label>
                            <input
                                className='input-box'
                                type="text"
                                id="lastName"
                                placeholder="Etternavn"
                                name="lastName"
                                required
                                value={this.state.lastName}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className='inputSection'>
                            <label className="boldP"
                                   htmlFor="email"
                            > E-mail *</label>
                            <input
                                className='input-box'
                                type="text"
                                id="email"
                                placeholder="E-mail"
                                name="email"
                                required
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className='inputSection'>
                            <label className="boldP"
                                   htmlFor="passOne"
                            > Passord *</label>
                            <PasswordMask
                                className='input-box'
                                type="passOne"
                                id="passOne"
                                placeholder="Passord ..."
                                name="passOne"
                                required
                                value={this.state.passOne}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className='inputSection'>
                            <label className="boldP"
                                   htmlFor="passTwo"
                            >Gjenta passord *</label>
                            <PasswordMask
                                className='input-box'
                                type="passTwo"
                                id="passTwo"
                                placeholder="Passord..."
                                name="passTwo"
                                required
                                value={this.state.passTwo}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className='inputSection'>
                            <label className="boldP"> Skole</label>
                            <input
                                className='input-box'
                                type="school"
                                placeholder="Skole ..."
                                name ="school"
                                value={this.state.school}
                                onChange={this.handleChange}
                            />
                        </div>


                        {/* // Add this function later on              */}
                        {/* <div className='inputSection'>
                            <label className="boldP"> Interesser</label>
                            <input className='input-box' type="school" placeholder="Interesser ... " />
                        </div> */}


                        <div className='wrapperButtons'>
                            <button className='signBtn' type="submit">Opprett</button>
                        </div>
                       
                    </form>

                </div>
      
        )
    }
}

export default SignupPage;

