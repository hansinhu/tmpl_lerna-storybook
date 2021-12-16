---
to: packages/<%= name%>/src/index.tsx
---

import React from 'react'

interface IProps {
  a: number
  b: number
}

const <%= name.split('-').map(s => s.slice(0, 1).toUpperCase() + s.slice(1)).join('')%> = ({
  a,
  b,
}: IProps) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('boop')
  }
  return a + b
}

export default <%= name.split('-').map(s => s.slice(0, 1).toUpperCase() + s.slice(1)).join('')%>