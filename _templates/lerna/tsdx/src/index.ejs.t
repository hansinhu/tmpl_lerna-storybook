---
to: packages/<%= name%>/src/index.tsx
---

import React from 'react'
import './index.scss'

export interface IProps {
  title: string;
  children: React.ReactNode;
}

const <%= name.split('-').map(s => s.slice(0, 1).toUpperCase() + s.slice(1)).join('')%> = ({
  a,
  b,
}: IProps) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('boop')
  }
  return (
    <div className="card">
      <div>{title}</div>
      {children}
    </div>
  )
}

export default <%= name.split('-').map(s => s.slice(0, 1).toUpperCase() + s.slice(1)).join('')%>