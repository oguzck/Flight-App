import React, { useState } from 'react'
import { Select } from 'semantic-ui-react'

export default function FilterComponent({ onFilterSelect }) {
    const [selectedFilter, setSelectedFilter] = useState(null);

    const tagOptions = [
        {
            key: 'departureTime',
            text: 'Departure Time',
            value: 'departureTime',
            label: { color: 'red', empty: true, circular: true },
        },
        {
            key: 'arrivalTime',
            text: 'Arrival Time',
            value: 'arrivalTime',
            label: { color: 'red', empty: true, circular: true },
        },

        {
            key: 'flightDuration',
            text: 'Flight Duration',
            value: 'flightDuration',
            label: { color: 'red', empty: true, circular: true },
        },
        {
            key: 'price',
            text: 'Price',
            value: 'price',
            label: { color: 'red', empty: true, circular: true },
        },

    ]
    const handleFilterChange = (e, data) => {
        const { value } = data;
        setSelectedFilter(value);
        if (onFilterSelect) {
            onFilterSelect(value);
        }
    };


    return (
        <Select defaultSelectedLabel={null} onChange={handleFilterChange} placeholder='Filter By' options={tagOptions} />
    )
}
