import React, { Component } from 'react';
import './Privacy.css';
import Footer from "../footer/Footer";

class Privacy extends Component {

    render() {
        return(
            <div className='mainContainer'>
                <div className='wrapperContent'>
                    <h2 className='pageHeadline'>Personvernerklæring</h2>

                    <div className='textWrapper'>
                        <p className='preamble'>
                        Personvernerklæringen handler om hvordan Icebreaker samler inn og bruker informasjon 
                        om besøkende på vårt nettsted. Erklæringen inneholder informasjon du har krav på når det 
                        samles inn opplysninger fra nettstedet vårt, og generell informasjon om hvordan vi behandler personopplysninger.
                        </p>

                        <br />
                        <br />
                        <br />

                        <p className='mainArticle'>
                        Icebreaker er behandlingsansvarlig for nettstedets behandling av personopplysninger. 
                        Behandlingsgrunnlaget er samtykke fra den enkelte.
                        </p>

                        <h4 className='miniHeadline'>Informasjonskapsler i nettleser</h4>

                        <p className='mainArticle'>
                            Vi har laget en fullstendig <a href='/Cookies'>liste over alle informasjonskapsler som 
                            finnes på icebreaker.no</a> På <a href="nettvett.no">nettvett.no</a> kan du lese om hvordan 
                            du <a href="https://nettvett.no/slik-administrer-du-informasjonskapsler/">stiller inn nettleseren for å godta/avvise
                            informasjonskapsler</a>, og få <a href="https://nettvett.no/veiledninger/sikrere-bruk/internett/">tips til sikrere
                            bruk av internett</a>
                        </p>

                        <h4 className='miniHeadline'>IP-adresse</h4>

                        <p className='mainArticle'>
                            Din IP-adresse logges av vår webserver. <a href="https://no.wikipedia.org/wiki/IP-adresse">Brukerens IP-adresse</a>,
                            tidspunkt, <a href="https://no.wikipedia.org/wiki/Uniform_Resource_Locator">nettadresse</a>, <a href="https://no.wikipedia.org/wiki/Liste_over_HTTP-statuskoder">HTTP-status</a>, antall bytes 
                            sendt, <a href="https://en.wikipedia.org/wiki/HTTP_referer">HTTP referer</a> og <a href="https://en.wikipedia.org/wiki/User_agent">
                            HTTP user agent</a> blir logget i 15 dager. Deretter blir loggen slettet automatisk.
                        </p>

                        <h4 className='miniHeadline'>Kommentarer</h4>
                        
                        <p className='mainArticle'>
                            Der det er mulig for brukere å legge igjen kommentarer på arrangementer, blir det publisert navn på kommentatoren.
                        </p>

                        <h4 className='miniHeadline'>Rettigheter</h4>

                        <p className='mainArticle'>
                            Alle som spør, har rett på grunnleggende informasjon om hvordan en virksomhet behandler personopplysninger. I denne
                            erklæringen omtaler vi hvilke opplysninger vi samler inn, og hvordan de brukes. Dersom du er registrert hos Icebreaker, 
                            har du rett på innsyn i dine egne personopplysninger. Du kan også be om retting eller sletting av mangelfulle eller uriktige
                            opplysninger. Kravet ditt vil bli behandlet kostnadsfritt og innen 30 dager. Alle henvendelser om innsynn i personopplysninger
                            kan sendes til oss på hjelp@icebreaker.no
                        </p>
                        
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Privacy;