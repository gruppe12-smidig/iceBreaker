
import React, { Component } from 'react';
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




    render() {
        return(
            <div className="mainContainer">

                <h2 className='subHeader' >Opprett bruker</h2>

                <div className='formContainer'>
                    <form className='inputForm'>
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
                            <label className="boldP"> Interessen</label>
                            <input className='input-box' type="school" placeholder="Interessen ... " />
                        </div>
                        
                        
                       
                    </form>
                  
                    <div className='wrapperButtons'>

                        <button className='signBtn'>Tøm</button>
                            <button className='signBtn'>Opprett</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default SignupPage;

