import React, {Component} from 'react';

class EventsList extends Component {
    render() {
        const {events} = this.props;
        const userEvents = events.map(item => {

          return(
              <div className="list-item" key={item.eventID}>

                    <section>
                        <ul>
                            <li> Navn: {item.eventName}</li>
                            <li> Type: {item.eventType}</li>
                            <li> Maks deltagere: {item.maxParticipants}</li>
                            <li> Beskrivelse: {item.description}</li>
                        </ul>
                    </section>


              </div>
          );
        });

        return <div>{userEvents}</div>
    }
}

export default EventsList