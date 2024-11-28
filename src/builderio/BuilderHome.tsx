import { builder, BuilderComponent } from '@builder.io/react'
import { useEffect, useState } from 'react'
import './builder-registry'

builder.init(process.env.REACT_APP_BUILDER_API_KEY!)
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