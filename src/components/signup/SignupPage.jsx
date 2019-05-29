
import React, { Component } from 'react';
import * as firebase from "firebase";
import FormError from '../formError/FormError';
import './SignupPage.css';
import '../formError/FormError.css'


class SignupPage extends Component {
    constructor(props){
      super(props);
      this.state = {
          firstName: '',
          lastName: '',
          email: '',
          passOne: '',
          passTwo: '',
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
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.passOne
        };
        e.preventDefault();

        firebase.auth().createUserWithEmailAndPassword(
            signupInfo.email,
            signupInfo.password
        )
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
            <div className="mainContainer">

            <div className='formContainer'>

                <h2 className='subHeader'> Opprett bruker </h2>

             
                    <form className='inputForm' onSubmit={this.handleSubmit}>
                        <div className='inputSection'>
                            { this.state.errorMessage !== null ? (
                               <FormError theMessage={this.state.errorMessage}/>
                            ): null}
                            <label className="boldP">Fornavn *</label>
                            <input
                                className='input-box'
                                type="text"
                                placeholder="Fornavn"
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className='inputSection'>
                            <label className="boldP"> Etternavn *</label>
                            <input
                                className='input-box'
                                type="text"
                                placeholder="Etternavn"
                                name="lastName"
                                value={this.state.lastName}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className='inputSection'>
                            <label className="boldP"> E-mail *</label>
                            <input
                                className='input-box'
                                type="text"
                                placeholder="E-mail"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className='inputSection'>
                            <label className="boldP"> Passord *</label>
                            <input
                                className='input-box'
                                type="passOne"
                                placeholder="Passord ..."
                                name="passOne"
                                value={this.state.passOne}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className='inputSection'>
                            <label className="boldP">Gjenta passord *</label>
                            <input
                                className='input-box'
                                type="passTwo"
                                placeholder="Passord..."
                                name="passTwo"
                                value={this.state.passTwo}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className='inputSection'>
                            <label className="boldP"> Skole</label>
                            <input className='input-box' type="school" placeholder="Skole ..." />
                        </div>

                        <div className='inputSection'>
                            <label className="boldP"> Interesser</label>
                            <input className='input-box' type="school" placeholder="Interesser ... " />
                        </div>


                        <div className='wrapperButtons'>
                            <button className='signBtn' type="submit">Opprett</button>
                        </div>
                       
                    </form>

                </div>
            </div>
        )
    }
}

export default SignupPage;

