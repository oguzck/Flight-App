import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Header, Icon, Segment } from 'semantic-ui-react'

export default function NotFoundComponent() {
    return (
        <div>
            <Segment vertical textAlign='center' style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)', padding: '20px', borderRadius: '8px', width: '70%', marginLeft: 'auto', marginRight: 'auto' }}>
            <Header color='teal' as='h2'> <Icon name='calendar times'/> Sorry, there are no flights available for the selected date range </Header>
            <Button as={Link} to='/' content='Search' color='teal'/>
            </Segment>
        </div>
    )
}
