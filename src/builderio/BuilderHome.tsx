import { builder, BuilderComponent } from '@builder.io/react'
import { useEffect, useState } from 'react'
import './builder-registry'

builder.init(process.env.REACT_APP_BUILDER_API_KEY!)
builder.apiVersion = 'v3'

export function BuilderHome() {
  const [builderContentJson, setBuilderContentJson] = useState(null)

  useEffect(() => {
    builder.get('page', { url: '/home' }).promise().then(setBuilderContentJson)
  }, [])


  return (
    <div className="mt-36"> {/* Hacky cause header from emporix is using position absolut */}
      {/* @ts-ignore */}
      <BuilderComponent model="page" content={builderContentJson} />
    </div>
  )
}
