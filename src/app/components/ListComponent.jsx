import React, { useEffect, useState } from 'react'
import { List} from 'semantic-ui-react'
import ListItem from './ListItem'
import FilterComponent from './FilterComponent'
import LoadingComponent from '../common/LoadingComponent';

export default function ListComponent({ flights }) {
    const [filteredFlights, setFilteredFlights] = useState(flights); 
    const [loading , setLoading] = useState();
    function timeToMinutes(timeStr) {
        const [hours, minutes] = timeStr.split(":").map(Number);
        return (hours * 60) + minutes;
    }
    
    
    const handleFilter = (filterType) => {
        let filtered;
        switch (filterType) {
            case "departureTime":
                filtered = [...flights].sort((a, b) => timeToMinutes(a.departureTime) - timeToMinutes(b.departureTime));
                break;
            case "arrivalTime":
                filtered = [...flights].sort((a, b) => timeToMinutes(a.arrivalTime) - timeToMinutes(b.arrivalTime));
                break;
            case "flightDuration":
                filtered = [...flights].sort((a, b) => a.flightDuration - b.flightDuration);
                break;
            case "price":
                filtered = [...flights].sort((a, b) => a.price - b.price);
                break;
            default:
                filtered = flights;
                break;
        }
        setFilteredFlights(filtered);
    }
    
    
      useEffect(() => {
        setLoading(true);
        setFilteredFlights(filteredFlights);
        setTimeout(() => {
            setLoading(false);
        }, 1000); 
    }, [filteredFlights]);

      if(loading) return <LoadingComponent/>
    return (
        <><FilterComponent onFilterSelect={handleFilter} />
        <List divided relaxed>
            {filteredFlights.map((flight, index) => (
                <ListItem flight={flight} index={index} />
            ))}
        </List></>
    )
}
