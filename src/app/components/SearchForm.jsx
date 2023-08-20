import React, { useState, useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import 'react-datepicker/dist/react-datepicker.css';
import { airportOptions } from '../common/categoryOptions';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Formik,Form } from 'formik';
import SelectInput from '../common/formInputs/SelectInput';

export default function SearchForm({ setParams }) {
  const [error, setError] = useState(null);
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [isOneWay, setIsOneWay] = useState(true);
  const [departureAirport, setDepartureAirport] = useState(null);
  const [arrivalAirport, setArrivalAirport] = useState(null);
  const current = new Date();
  const filterAirports = (query) => {
    return airportOptions.filter(airport =>
      airport.text.toLowerCase().includes(query.toLowerCase()) ||
      airport.value.toLowerCase().includes(query.toLowerCase())
    );
  }

  const validationSchema = Yup.object({
    departureDate: Yup.date().required("Departure date required"),
    returnDate: Yup.date().nullable(),
    isOneWay: Yup.bool(),
    departureAirport: Yup.string().required('Airport Required'),
    arrivalAirport: Yup.string().required('Airport Required'),
  });
  

  useEffect(() => {
    if (arrivalAirport && departureAirport && arrivalAirport === departureAirport) {
      setError("Arrival and departure airports cannot be the same !")
    } else {
      setError(null);
    }
  }, [arrivalAirport, departureAirport]);
  const navigate = useNavigate();
  function handleFormSubmit(values) {
    console.log(values.arrivalAirport);
    setParams(values);
    navigate('flights');
  }
  return (
    <Formik initialValues={{
      departureDate,
      returnDate,
      isOneWay,
      departureAirport,
      arrivalAirport
    }} validationSchema={validationSchema} enableReinitialize onSubmit={values => handleFormSubmit(values)} >
      {({ handleSubmit, isValid, isSubmitting, dirty,errors,touched,setFieldTouched }) => (
        <Form onSubmit={handleSubmit}>
          <SelectInput setFieldTouched={setFieldTouched} touched={touched} errors={errors}  isOneWay={isOneWay} setIsOneWay={setIsOneWay} airportOptions={airportOptions} departureAirport={departureAirport} setArrivalAirport={setArrivalAirport} setDepartureAirport={setDepartureAirport} filterAirports={filterAirports} arrivalAirport={arrivalAirport} current={current} departureDate={departureDate} setDepartureDate={setDepartureDate} returnDate={returnDate} setReturnDate={setReturnDate} error={error}/>
          <Button  loading={isSubmitting} disabled={error} type='submit' color='blue'>Search</Button>
        </Form>
      )}

    </Formik>
  );
}
