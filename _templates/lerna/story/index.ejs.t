---
to: stories/<%= name%>/index.stories.tsx
---

import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import <%= name%>, { IProps } from '../../packages/<%= name%>/src/index'

export default {
  title: 'Components/<%= name%>',
  component: <%= name%>,
  argTypes: {}
} as Meta

const Template: Story<IProps> = (args) => (
  <<%= name%> {...args}>
    <p>hello world</p>
  </<%= name%>>
)

export const Default = Template.bind({})
Default.args = {
  a: 1,
  b: 2,
}