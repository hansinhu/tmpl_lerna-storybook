---
to: stories/<%= name%>/index.stories.tsx
---

import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import BaseCard from '../packages/tuna-base-card/src/index'

export default {
  title: 'Tuna_Component/BaseCard',
  component: BaseCard,
  argTypes: {}
} as Meta

const Template: Story<IIconTitle> = (args) => (
  <BaseCard {...args}>
    <p>hello world</p>
  </BaseCard>
)

export const Default = Template.bind({})
Default.args = {
  loading: false,
  className: 'test',
  hoverable: true
}