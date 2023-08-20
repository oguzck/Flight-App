import React from 'react'
import { Dimmer, Loader,Image } from 'semantic-ui-react'

export default function LoadingComponent() {
  return (
    <div>
      <Dimmer.Dimmable >
        <Dimmer active={true} inverted>
          <Loader>Loading</Loader>
        </Dimmer>

        <p>
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </p>
        <p>
          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </p>
      </Dimmer.Dimmable>
    </div>

  )
}
