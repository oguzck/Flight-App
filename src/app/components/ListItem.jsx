import React from 'react'
import { List, Segment,Item,Icon, Label} from 'semantic-ui-react'
export default function ListItem({ flight, index }) {
    return (
        <List.Item key={index}>
            <Segment.Group>
                <Segment>
                    <Item.Group>
                        <Item>
                            <Item.Image size='tiny' circular src={`assets/${flight.airline}.png`} />
                            <Item.Content>
                                <Item.Header >{flight.airline}</Item.Header>
                                <Item.Description><Label color='green' basic>{flight.price} TL</Label> </Item.Description>
                                <Item.Description> <Icon name='clock' /> Departure Time : {flight.departureTime}  </Item.Description>
                                <Item.Description> <Icon name='clock' /> Arrival Time : {flight.arrivalTime}  </Item.Description>
                            </Item.Content>
                            <Item.Content>
                            <Item.Description> <Icon name='clock' /> <Label color='teal'>Flight Duration : {flight.flightDuration} H</Label> </Item.Description>
                            <Item.Description> <Icon name='plane' /> <Label color='yellow'>{flight.departureCity} to {flight.arrivalCity} </Label> </Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
                <Segment style={{textAlign:'left' , marginLeft : '200px'}}>
                    <span>
                        <Icon name='calendar' />{flight.departureDate}
                        <Icon name='marker' />{flight.departureAirport}<Icon name='arrow right' />{flight.arrivalAirport}
                    </span>
                </Segment>
            </Segment.Group>
        </List.Item>
    )
}
