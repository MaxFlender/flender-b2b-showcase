import { BuilderComponent, builder, Builder } from '@builder.io/react'
import { useEffect, useState } from "react";

builder.init('0cab5f4ed22645f58131bb94c54066b8')
builder.apiVersion = 'v3'

export function BuilderHome() {
  const [builderContentJson, setBuilderContentJson] = useState(null)

  useEffect(() => {
    builder.get('page', {url: '/home'})
      .promise().then(setBuilderContentJson)
  }, [])

  // @ts-ignore
  return <BuilderComponent model="page" content={builderContentJson}/>
}

// Register your components for use in the visual editor!
// https://www.builder.io/blog/drag-drop-react
// @ts-ignore
const Heading = props => (
  <h1 className="my-heading">{props.title}</h1>
)

Builder.registerComponent(Heading, {
  name: 'Heading',
  inputs: [{ name: 'title', type: 'text' }]
})