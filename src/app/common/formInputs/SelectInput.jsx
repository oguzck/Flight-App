import React from 'react'
import { Form, Label, Segment } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';

export default function SelectInput({ setFieldTouched, touched, errors, isOneWay, setIsOneWay, airportOptions, departureAirport, setArrivalAirport, setDepartureAirport, filterAirports, arrivalAirport, current, departureDate, setDepartureDate, returnDate, setReturnDate, error }) {
    return (
        <Form>
            <Form.Group inline>
                <Form.Radio
                name='isOneWay'
                    label='One Way'
                    checked={isOneWay}
                    onChange={() => setIsOneWay(!isOneWay)} />
                <Form.Radio
                name='isOneWay'
                    label='Return'
                    checked={!isOneWay}
                    onChange={() => setIsOneWay(!isOneWay)} />
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Field>
                    <Form.Select
                        onBlur={() => setFieldTouched('departureAirport')}
                        fluid
                        search
                        label='Departure Airport'
                        options={airportOptions}
                        placeholder='Select an airport'
                        value={departureAirport}
                        onChange={(e, { value }) => setDepartureAirport(value)}
                        onSearchChange={(e, { searchQuery }) => {
                            const results = filterAirports(searchQuery);
                            return results;
                        }} />
                    {touched.departureAirport && errors.departureAirport ? (
                        <Label basic color='red'>{errors.departureAirport}</Label>
                    ) : null}
                </Form.Field>
                <Form.Field>
                    <Form.Select
                        onBlur={() => setFieldTouched('arrivalAirport')}
                        fluid
                        search
                        label='Arrival Airport'
                        options={airportOptions}
                        placeholder='Select an airport'
                        value={arrivalAirport}
                        onChange={(e, { value }) => setArrivalAirport(value)}
                        onSearchChange={(e, { searchQuery }) => {
                            const results = filterAirports(searchQuery);
                            return results;
                        }}

                    />
                    {touched.departureAirport && errors.departureAirport ? (
                        <Label basic color='red'>{errors.arrivalAirport}</Label>
                    ) : null}
                </Form.Field>
                <Form.Field>
                    <label>Departure Date</label>
                    <DatePicker
                        onBlur={() => setFieldTouched('departureDate')}
                        name='departureDate'
                        minDate={current}
                        selected={departureDate}
                        onChange={date => setDepartureDate(date)}
                        placeholderText='Select a date'
                        isClearable
                        dateFormat='MMMM d, yyyy' />
                    {touched.departureDate && errors.departureDate ? (
                        <Label basic color='red'>{errors.departureDate}</Label>
                    ) : null}
                </Form.Field>


                {!isOneWay && (
                    <Form.Field>
                        <label>Return Date</label>
                        <DatePicker
                            onBlur={() => setFieldTouched('returnDate')}
                            disabled={!departureDate}
                            selected={returnDate}
                            onChange={date => setReturnDate(date)}
                            placeholderText='Select a return date'
                            isClearable
                            dateFormat='MMMM d, yyyy'
                            minDate={departureDate} />
                        {touched.returnDate && errors.returnDate ? (
                            <Label basic color='red'>{errors.returnDate}</Label>
                        ) : null}
                    </Form.Field>
                )}
            </Form.Group><Form.Group>
                {error && (
                    <Segment
                        vertical
                        color="red"
                        style={{
                            padding: '10px',
                            width: '30%',
                            marginLeft: 'auto',
                            marginRight: 'auto'
                        }}
                    >
                        {error}
                    </Segment>
                )}
            </Form.Group>
        </Form>
    )
}
