import React from 'react'
import { Header, Segment } from 'semantic-ui-react'
import SearchForm from './SearchForm'

export default function Container({setParams}) {
  return (
    <div style={{
      marginTop: '180px',
    }}>
      <Header
        color='grey'
        textAlign='center'
        as='h1'
        content='Search For A Flight !'
        style={{ marginBottom: '50px' }} 
      />
      <Segment
        textAlign='center'
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)', 
          padding: '20px',
          borderRadius: '8px', 
          width: '70%', 
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        <SearchForm setParams={setParams} />
      </Segment>
    </div>
  )
}
