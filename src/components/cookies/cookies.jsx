import React, { Component } from 'react';
import './Cookies.css';
import Footer from "../footer/Footer";

class Cookies extends Component {

    render() {
        return(
            <div className="mainContainer" >
                {/* div wrapperContent adds a margin to the top giving space to hamburger-menu */}
                <div className="wrapperContent" >
                    <h2 className='pageHeadline'>Informasjonskapsler</h2>

                    <div className='textWrapper'>
                        <h4 className='miniHeadline'>Info om Informasjonskapsler</h4>
                        
                        <p className='mainArticle'>
                        Icebreaker benytter seg av såkalte informasjonskapsler eller cookies for å bedre din brukeropplevelse 
                        når du besøker vår nettside. En informasjonskapsel er en tekstfil som ved besøk på eller interaksjon med 
                        en nettside legges i din nettlesers internminne.
                        <br />
                        <br />
                        Behandlingsgrunnlaget for dette er personvernforordninger artikkel 6 nr 1 f, som tillater oss å behandle 
                        personopplysninger som er nødvendig for å ivareta en interesse som veier tyngre enn hensynet til den enkeltes personvern. 
                        Den interessen er å få nettsiden vår til å fungere godt slik at du får en god brukeropplevelse.
                        </p>

                        <h4 className='miniHeadline'>Tilpass selv</h4>
                        
                        <p className='mainArticle'>
                        De fleste moderne nettlesere (Chrome, Firefox, Opera, Safari, Internet Explorer, Edge, etc) 
                        er innstilt på å akseptere informasjonskapsler automatisk, men du kan selv velge å endre 
                        innstillingene slik at Informasjonskapsler ikke blir akseptert. Vi gjør oppmerksom på at dette 
                        kan føre til at Icebreakers nettjenester ikke vil fungere optimalt.<br /> <a href="https://nettvett.no/slik-administrer-du-informasjonskapsler/">
                        Nettsiden nettvett.no forklarer hvordan du selv kan administrere informasjonskapsler.</a>
                        </p>

                        <h4 className='miniHeadline'>Hvordan varsle brukere om cookies?</h4>
                        
                        <p className='mainArticle'>
                        I tillegg til personvernforordningen er det <a href="https://lovdata.no/dokument/NL/lov/2003-07-04-83/KAPITTEL_2#%C2%A72-7b">
                        ekomloven § 2-7 b</a>, den såkalte "cookie paragrafen", som regulerer vilkårene for lagring av opplysninger i kommunikasjonsutstyr.
                        Nasjonal kommunikasjonsmyndighet <a href="https://www.nkom.no/teknisk/internett/cookies/informasjonskapsler-cookies">
                        (Nkom) har tolket ekomloven</a> og sier at kravene til å varsle brukerne anses som oppfyllt når:
                        </p>

                        <ul className='bulletList'>
                            <li>Informasjonen er lett synlig når bruker kommer inn på nettstedet. For eksempel en lett synlig lenke i topptekst, 
                                bunntekst, en tekstboks på siden eller en "pop-up" der ordet cookies eller informasjonskapsler nevnes slik at
                                det er tydelig hva en informerer om.
                            </li>
                            <li>Informasjonen inneholder opplysninger om hvilke informasjonskapsler som brukes, hvilke opplysninger som behandles, 
                                formål og hvem som behandler opplysningene.
                            </li>
                        </ul>

                        <h4 className='miniHeadline'>Informasjonskapsler</h4>
                        
                        <p className='mainArticle'>
                            Informasjonskapslene nevnt nedenfor finnes på disse sidene:
                        </p>

                        <ul className='bulletList'>
                            <li>Icebreaker.no</li>
                            <li>Login.Icebreaker.no</li>
                            <li>etc</li>
                            <li>etc2</li>
                        </ul>

                        <h4 className='miniHeadline'>Diverse</h4>
                        
                        <p className='mainArticle'>
                        Icebreaker er behandlingsansvarlig. Databehandler er den som behandler dataene på vegne
                        av Icebreaker dersom vi ikke gjør det selv.
                        </p>

                        { /** TABELL OM COOKIES **/ }

                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Cookies;