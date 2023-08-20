import React, { useEffect, useState } from 'react';
import { Header, Segment, Loader } from 'semantic-ui-react';
import agent from '../api/agent';
import NotFoundComponent from '../common/NotFoundComponent';
import ListComponent from './ListComponent';

export default function Flights({ params }) {
  const [flights, setFlights] = useState([]);
  const [returnFlights, setReturnFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!params) return;

    const { departureAirport, arrivalAirport, departureDate } = params; // Destructure the required properties
    const formattedDate = departureDate ? `${departureDate.getFullYear()}-${String(departureDate.getMonth() + 1).padStart(2, '0')}-${String(departureDate.getDate()).padStart(2, '0')}` : null;

    setLoading(true);
    agent.Flights.list({ departureAirport, arrivalAirport, departureDate: formattedDate })
      .then(data => {
        setFlights(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch flights:", err);
        setError(err);
        setLoading(false);
      });
  }, [params]);

  useEffect(() => {
    if (!params) return;

    const { departureAirport, arrivalAirport, returnDate, isOneWay } = params;

    if (!returnDate) return;

    const formattedDate2 = returnDate ? `${returnDate.getFullYear()}-${String(returnDate.getMonth() + 1).padStart(2, '0')}-${String(returnDate.getDate()).padStart(2, '0')}` : null;

    setLoading(true);
    agent.Flights.list({ departureAirport: arrivalAirport, arrivalAirport: departureAirport, departureDate: formattedDate2 })
      .then(data => {
        setReturnFlights(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch flights:", err);
        setError(err);
        setLoading(false);
      });
  }, [params]);


  if (params == null) return <div>Not found</div>;

  if (loading) return <Loader size='huge' style={{marginTop:'270px'}} active inline='centered' />

  if (error) return <div>Error fetching flights!</div>;
  return (
    <div style={{ marginTop: '120px' }}>
      <Segment.Group style={{ overflowY: 'auto' ,maxHeight: '600px', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '8px', width: '70%', marginLeft: 'auto', marginRight: 'auto' }}>
      <Header color='grey' textAlign='center' as='h1' content='Flights For You !' style={{ marginBottom: '50px' }} />
      {!flights.length ?
            (<NotFoundComponent />) :
            (
              <Segment textAlign='center' style={{ overflowY: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '8px', width: '70%', marginLeft: 'auto', marginRight: 'auto' }}>
                <ListComponent flights={flights}/>
              </Segment>
            )

          }

      {!params.isOneWay && flights.length>0 &&
        <>
          <Header color='grey' textAlign='center' as='h1' content='Return Flights' style={{ marginTop: '20px', marginBottom: '20px' }} />
          {!returnFlights.length ?
            (<NotFoundComponent />) :
            (
              <Segment  textAlign='center' style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '8px', width: '70%', marginLeft: 'auto', marginRight: 'auto' }}>
                <ListComponent flights={returnFlights}/>
              </Segment>
            )

          }
        </>
      }
      </Segment.Group>
    </div>
  );
}
