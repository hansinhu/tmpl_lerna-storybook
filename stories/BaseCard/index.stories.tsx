import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import BaseCard from "../../packages/tuna-base-card/src";
import { CardProps } from "antd/lib/card";

export default {
  title: "Tuna_Component/BaseCard",
  component: BaseCard,
  argTypes: {},
} as Meta;

// 基础配置
const Template: Story<CardProps> = (args) => (
  <BaseCard {...args} extra={<a href="#">More</a>}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </BaseCard>
);

// 基础配置
const Template2: Story<CardProps> = (args) => (
  <BaseCard {...args}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </BaseCard>
);

export const Default = Template.bind({});
Default.args = {
  title: "涂鸦",
  loading: false,
  className: "test",
  hoverable: true,
  supportFullScreen: true,
};

export const Default2 = Template2.bind({});
Default2.args = {
  loading: false,
  className: "test",
  hoverable: true,
  supportFullScreen: true,
};
